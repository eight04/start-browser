start-browser
=============

A CLI to open local file in the default browser.

Installation
------------

```
npm install -g start-browser
```

Usage
-----

<!--$inline.start("cli.js|docstring|markdown:codeblock")-->
```
start-browser

Usage:
  start-browser <target> [-- <args>...]
  
Options:
  <target>  A file or a URL. If the file doesn't exist, the target is treated
            as a URL.
  <args>    Other arguments for the browser.

```
<!--$inline.end-->

To open `myfile.txt` in the browser:

```
start-browser myfile.txt
```

Compatibility
-------------

I only tested it on Windows 7. If it doesn't work on your platform, please file a PR.

Changelog
---------

* 0.1.0 (May 6, 2018)

  - First release.
