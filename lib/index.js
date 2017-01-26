#!/usr/bin/env node
'use strict';

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

var _interpret = require('interpret');

var _interpret2 = _interopRequireDefault(_interpret);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _rechoir = require('rechoir');

var _rechoir2 = _interopRequireDefault(_rechoir);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { argv } = _yargs2.default.usage(`Usage:\n  $0 <file path>`).example('$0 ~/path/to/test.babel.js').example('$0 ~/path/to/test.coffee').help().alias('h', 'help').version(() => JSON.parse(_fs2.default.readFileSync('../package.json')).version).alias('v', 'version');

const cwd = process.cwd();
argv._.map(filePath => _path2.default.resolve(cwd, filePath)).forEach(file => (_rechoir2.default.prepare(_interpret2.default.extensions, file), require(file)));
