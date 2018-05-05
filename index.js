const {promisify} = require("util");
const os = require("os");
const access = promisify(require("fs").access);
const {spawn} = require("child_process");

const getDefaultBrowser = promisify(require("x-default-browser"));
const regeditList = promisify(require("regedit").list);
const fileUrl = require("file-url");

function getCommand() {
  return getDefaultBrowser()
    .then(result => {
      // windows
      if (os.platform() === "win32") {
        const path = `HKLM\\Software\\Clients\\StartMenuInternet\\${result.identity}\\shell\\open\\command`;
        return regeditList(path)
          .then(result => {
            const command = result[path].values[""].value;
            return command;
          });
      }
      return result.commonName;
    });
}

function getURL(file) {
  return access(file)
    .then(
      () => fileUrl(file),
      () => file
    );
}

function init({
  "<target>": target,
  "--": args
}) {
  return Promise.all([getCommand(), getURL(target)])
    .then(([command, url]) => {
      if (/^(["']).*\1$/.test(command)) {
        command = command.slice(1, -1);
      }
      const sp = spawn(command, [url].concat(args), {
        stdio: "ignore",
        detached: true,
        shell: true,
        windowsHide: true
      });
      sp.unref();
    });
}

module.exports = {init};
