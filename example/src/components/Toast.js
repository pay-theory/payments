import React from 'react'
import PropTypes from 'prop-types'

const showToast = (id) => {
    const toast = document.getElementById(`toast-${id}`)
    toast.classList.remove('hidden')
    setTimeout(function () {
        toast.classList.add('hidden')
    }, 2500)
}

const Toast = (props) => {
    return (
        <div id={`toast-${props.id}`} className='notification-container hidden'>
            <i className={`fas fa-${props.icon} fa-lg`} />
            <p>{props.message}</p>
            <style jsx='true'>{`
                .notification-container {
                    background: #0bd8aa;
                    padding: 0px 30px;
                    position: fixed;
                    top: 75px;
                    left: 50%;
                    border-radius: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transform: translate(-50%, 0);
                }

                .notification-container p {
                    color: #ffffff !important;
                    padding: 10px !important;
                }

                .notification-container i {
                    color: #ffffff !important;
                }

                .notification-container .hidden {
                }
            `}</style>
        </div>
    )
}

Toast.propTypes = {
    message: PropTypes.string.isRequired,
    icon: PropTypes.string,
    id: PropTypes.string.isRequired
}

export default Toast
export { showToast }
