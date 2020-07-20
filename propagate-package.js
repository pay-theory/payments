const fs = require('fs')

let raw = fs.readFileSync('package.json')
let packaged = JSON.parse(raw)

packaged.dependencies['@paytheory/payment-components'] = 'alpha'
fs.writeFileSync('package.dev.json', JSON.stringify(packaged))

packaged.dependencies['@paytheory/payment-components'] = 'beta'
fs.writeFileSync('package.stage.json', JSON.stringify(packaged))

packaged.dependencies['@paytheory/payment-components'] = 'release'
fs.writeFileSync('package.prod.json', JSON.stringify(packaged))