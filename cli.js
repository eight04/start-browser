const {run} = require("neodoc");
const docString = `start-browser

Usage:
  start-browser <target> [-- <args>...]
  
Options:
  <target>  A file or a URL. If the file doesn't exists, the tool assumes the
            target is a URL.
  <args>    Other arguments for the browser.
`;
require(".").init(run(docString));
