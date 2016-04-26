angular.module('app.pmp.safety.check.project', [])
    .constant("ApiPmpCheckProject", {
        checkInfo: "data/safety/check/project/security-check-querycheckInfo.json",
        solveUserInfo: "data/safety/check/project/security-check-querySolveUserList.json",
        checkPositionInfo: "data/safety/check/project/security-check-queryCheckPosition.json",
        checkIssue:"data/safety/check/project/security-check-checkIssue.json"
    });
