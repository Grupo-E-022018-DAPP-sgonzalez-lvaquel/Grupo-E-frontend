var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  DEBUG_MODE: true,
  API_BASE: '"http://localhost:3001"'
})
