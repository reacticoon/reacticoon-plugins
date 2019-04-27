#!/usr/bin/env node

"use strict";

const spawn = require("cross-spawn");

// ./node_modules/rollup/bin/rollup src/index.js -f cjs -o lib/index.js
const nodeArgs = ["../../reacticoon-hibp/src/index.js", "-f cjs", "-o ../../reacticoon-hibp/lib/index.js"];

const result = spawn.sync("node ./node_modules/rollup/bin/rollup", nodeArgs, {
  stdio: "inherit"
});

if (result.signal) {
  if (result.signal === "SIGKILL") {
    console.log(
      "The build failed because the process exited too early. " +
        "This probably means the system ran out of memory or someone called " +
        "`kill -9` on the process."
    );
  } else if (result.signal === "SIGTERM") {
    console.log(
      "The build failed because the process exited too early. " +
        "Someone might have called `kill` or `killall`, or the system could " +
        "be shutting down."
    );
  } else {
    console.log(
      "Build succeeded"
    );
  }
  process.exit(1);
}
process.exit(result.status);
