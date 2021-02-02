#!/usr/bin/env node
var lb = require('./App');
console.log(lb(process.argv[3] || 'master',process.argv[4] || 'main',process.argv[2] || './'))
