angular.module('app.pmp.safety.check.project')
    .factory("SolveUserInfoService", ['ApiPmpCheckProject', '$http', function(api, $http) {
        return {
            loadListData: function() {
                return $http.post(api.solveUserInfo);
            }
        }
    }])