import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const NavigationItem = props => {
  const location = useLocation();
  const [className, setClassName] = useState("inactive");

  useEffect(() => {
    if (location.pathname.indexOf(props.item.tag) >= 0) {
      setClassName("active");
    } else {
      setClassName("inactive");
    }
  }, [location.pathname, props.item.tag]);

  console.log("nav item", props);
  return (
    <li key={props.item.tag} data-testid={props.item.tag}>
      <Link
        to={{
          pathname: props.item.tag,
          state: { hash: props.item.tag }
        }}
        className={className}
        id={`${props.item.tag}-link`}
      >
        <i className={`fal fa-${props.item.icon} fa-lg`} />
        {props.item.label}
      </Link>
    </li>
  );
};

NavigationItem.propTypes = {
  item: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired
};

export default NavigationItem;
