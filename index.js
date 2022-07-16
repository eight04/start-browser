const {promisify} = require("util");
const os = require("os");
const access = promisify(require("fs").access);

const getDefaultBrowser = promisify(require("x-default-browser"));
const fileUrl = require("file-url");

function getCommand(verbose) {
  return getDefaultBrowser()
    .then(result => {
      if (verbose) {
        console.log(result);
      }
      // windows
      if (os.platform() === "win32") {
        const identity = result.identity.replace(/firefoxurl/i, "Firefox");
        const path = `HKLM\\Software\\Clients\\StartMenuInternet\\${identity}\\shell\\open\\command`;
        return Promise.resolve(require("regedit"))
          .then(regedit => promisify(regedit.list)(path))
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

async function init({
  "--verbose": verbose,
  "<target>": target,
  "--": args
}) {
  const execa = (await import("execa")).execa;
  let [command, url] = await Promise.all([getCommand(verbose), getURL(target)]);
  if (/^(["']).*\1$/.test(command)) {
    command = command.slice(1, -1);
  }
  if (verbose) {
    console.log("starting the browser");
    console.log(command);
    console.log(url, ...args);
  }
  const process = execa(command, [url, ...args], {detached: !verbose});
  if (!verbose) {
    process.unref();
  }
  await process;
}

module.exports = {init};
