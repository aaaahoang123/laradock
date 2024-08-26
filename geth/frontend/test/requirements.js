const assert = require("assert/strict");

const semverSatisfies = require("semver/functions/satisfies");
const semverCoerce = require("semver/functions/coerce");

const { exec } = require("child_process");

describe("Checking requirements", function () {
  describe("geth-cli", function () {
    it("should be installed", function (done) {
      exec("which geth", function (error, stdout, stderr) {
        assert(!error, "geth is not installed");
        done();
      });
    });

    it("version should be ^1.10.0", function (done) {
      exec("geth version", function (error, stdout, stderr) {
        const version = /Version: (\d+\.\d+\.\d+(-stable)*)/gm.exec(stdout)[1];
        assert(
          semverSatisfies(semverCoerce(version), "1.10.x"),
          "Version mismatch"
        );
        done();
      });
    });
  });
});
