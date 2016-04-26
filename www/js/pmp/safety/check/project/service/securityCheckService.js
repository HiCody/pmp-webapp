angular.module('app.pmp.safety.check.project')
    .factory("CheckInfoService", ['ApiPmpCheckProject', '$http', function(api, $http) {
        return {
            condition: {
                userId: -1,
                checkTypeId: -1,
                hasProblem: -1,
                state: -1,
                checkUserName: "",
                beginDate: "",
                endDate: "",
                solveUserName: ""
            },
            loadListData: function(pageIndex, rowCount) {
                var condition = { pageIndex: pageIndex, rowCount: rowCount };
                var searchFilter = this.getSearchFilter();
                if (searchFilter) {
                    angular.extend(condition, searchFilter);
                }
                return $http.post(api.checkInfo, condition);
            },
            getCondition: function() {
                return this.condition;
            },
            resetCondition: function() {

                this.condition.checkTypeId = -1;
                this.condition.hasProblem = -1;
                // this.state = -1;
                this.checkUserName = "";
                this.beginDate = "";
                this.endDate = "";
                this.solveUserName = "";
                return this.condition;
            },
            getSearchFilter: function() {

                var checkTypeId = this.condition.checkTypeId;
                var hasProblem = this.condition.hasProblem;
                var state = this.state;
                var checkUserName = this.checkUserName;
                var beginDate = this.beginDate;
                var endDate = this.endDate;
                var solveUserName = this.solveUserName;

                return {
                    checkTypeId: checkTypeId, //检查类型
                    hasProblem: hasProblem, //是否存在问题查询项
                    state: state, //检查状态查询项
                    checkUserName: checkUserName, //检查人姓名查询项
                    beginDate: beginDate, //开始日期范围查询项:
                    endDate: endDate, //结束日期范围查询项
                    solveUserName: solveUserName //处理人姓名 
                };
            }
        }
    }])
    .filter('CheckStateService', function() {
        var state = ['无问题', '待处理', '待复查', '未通过', '已通过'];


        var filter = function(num) {
            return state[num - 1];
        }
        return filter;
    })
    .filter('ContidionStateService', function() {
        var state = ['全部', '未发现问题 ', '待处理', '待复查', '复查未通过','复查通过'];


        var filter = function(num) {
            if (num==-1) {
                return state[0];
            }else{
                return state[num]; 
            }
           
        }
        return filter;
    })
