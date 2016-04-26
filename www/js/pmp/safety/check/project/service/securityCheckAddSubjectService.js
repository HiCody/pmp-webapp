angular.module('app.pmp.safety.check.project')

.factory('SafetyContentsService', ['ApiPmpCheckProject', '$http', '$ionicLoading', '$timeout', function(api, $http, $ionicLoading, $timeout) {
    
    var safetyContents = [];

    return {
        requestCheckIssue: function(successCallBack) {
            $ionicLoading.show({
                template: "正在载入数据..."
            });
            $http.post(api.checkIssue).success(function(response) {
                safetyContents = response.items.rows;

                $timeout(function() {
                    successCallBack();
                    $ionicLoading.hide();
                }, 1000);

            });
        },
        getAllContents: function() {

            return safetyContents;
           
        },
        get: function(checkContentId) {

            for (var i = 0; i < safetyContents.length; i++) {
                if (safetyContents[i].checkContentId == parseInt(checkContentId)) {
                    return safetyContents[i];
                }
            }
            return null;
        },
        getCheckItem: function(safetyContent, checkItemId) {
            var checkItems = safetyContent.checkItems;
            for (var i = 0; i < checkItems.length; i++) {
                if (checkItems[i].checkContentId == parseInt(checkItemId)) {
                    return checkItems[i];
                }
            }
            return null;
        }
    }

}])

.factory('SafetyContentService', function() {
    var safetyContent = {};
    safetyContent.checkContentId = "";
    safetyContent.checkContentName = "";
    safetyContent.checkItems = [];

    return {
        data: function() {
            return safetyContent;
        },

        reset: function() {

            safetyContent.checkContentId = "";
            safetyContent.checkContentName = "";
            safetyContent.checkItems = [];
            return safetyContent;
        }
    }
})

.filter('ConvertToChineseService', function() {
    var N = [
        "零", "一", "二", "三", "四", "五", "六", "七", "八", "九"
    ];

    var filter = function(num) {
        var str = num.toString();
        var len = num.toString().length;
        var C_Num = [];
        for (var i = 0; i < len; i++) {
            C_Num.push(N[str.charAt(i)]);
        }
        return C_Num.join('');
    }
    return filter;
});
