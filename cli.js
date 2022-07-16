#!/usr/bin/env node

const {run} = require("neodoc");
const docString = `start-browser

Usage:
  start-browser [--verbose] <target> [-- <args>...]
  
Options:
  --verbose, -V  Show verbose information.
  <target>  A file or a URL. If the file doesn't exist, the target is treated
            as a URL.
  <args>    Other arguments for the browser.
`;
require(".").init(run(docString));
