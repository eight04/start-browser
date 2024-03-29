start-browser
=============

A CLI to open local file in the default browser.

Installation
------------

```
npm install -g @eight04/start-browser
```

Usage
-----

<!--$inline.start("cli.js|docstring|markdown:codeblock")-->
```
start-browser

Usage:
  start-browser [--verbose] <target> [-- <args>...]
  
Options:
  --verbose, -V  Show verbose information.
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

* 0.2.1 (Jul 16, 2022)

  - Fix: remove useless files in the package.

* 0.2.0 (Jul 16, 2022)

  - Fix: failed starting Firefox. Replace x-default-browser with eight04/x-default-browser#dev

* 0.1.3 (May 19, 2018)

  - Fix: move `regedit` to optional dependencies.

* 0.1.2 (May 6, 2018)

  - Fix: missing binary.

* 0.1.1 (May 6, 2018)

  - Rename to `@eight04/start-browser`.

* 0.1.0 (May 6, 2018)

  - First release.
