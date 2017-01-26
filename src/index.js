#!/usr/bin/env node

import yargs from 'yargs'
import interpret from 'interpret'
import fs from 'fs'
import path from 'path'
import rechoir from 'rechoir'

const { argv } = yargs.usage(`Usage:\n  $0 <file path>`)
                      .example('$0 ~/path/to/test.babel.js')
                      .example('$0 ~/path/to/test.coffee')
                      .help()
                      .alias('h', 'help')
                      .version(() => JSON.parse(fs.readFileSync('../package.json')).version)
                      .alias('v', 'version')

const cwd = process.cwd()
argv._.map(filePath =>
  path.resolve(cwd, filePath)
).forEach(file => do {
  rechoir.prepare(interpret.extensions, file)
  require(file)
})
