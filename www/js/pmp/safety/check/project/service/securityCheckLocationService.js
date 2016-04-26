angular.module('app.pmp.safety.check.project')
    .factory("CheckPositionInfoService", ['ApiPmpCheckProject', '$http', function(api, $http) {
        return {
            loadListData: function(pageIndex, rowCount) {
                var condition = { pageIndex: pageIndex, rowCount: rowCount };
                return $http.post(api.checkPositionInfo, condition);
            }
        }
    }])
    .factory('locals', ['$window', function($window) {
        return {
            //存储单个属性
            set: function(key, value) {
                $window.localStorage[key] = value;
            },
            //读取单个属性
            get: function(key, defaultValue) {
                return $window.localStorage[key] || defaultValue;
            },
            //存储对象，以JSON格式存储
            setObject: function(key, value) {
                $window.localStorage[key] = JSON.stringify(value);
            },
            //读取对象
            getObject: function(key) {
                return JSON.parse($window.localStorage[key] || '{}');
            }

        }
    }])
    .factory('localStorageService', [function() {
        return {
            get: function localStorageServiceGet(key, defaultValue) {
                var stored = localStorage.getItem(key);
                try {
                    stored = angular.fromJson(stored);
                } catch (error) {
                    stored = null;
                }
                if (defaultValue && stored === null) {
                    stored = defaultValue;
                }
                return stored;
            },
            update: function localStorageServiceUpdate(key, value) {
                if (value) {
                    localStorage.setItem(key, angular.toJson(value));
                }
            },
            clear: function localStorageServiceClear(key) {
                localStorage.removeItem(key);
            }
        };
    }]);
