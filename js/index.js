var vm = new Vue({

    el: '#example',
    data: {
        activeKey: '',
        data: [
            {name: '张三', age: 12, },
            {name: '李四', age: 26, },
            {name: '王五', age: 17 },
            {name: '小六', age: 13, }
        ],
        columns: [
            {text: '姓名', key: 'name'},
            {text: '年龄', key: 'age'}
        ],
        sortOrders: {name: 1, age: 1},
        sortKey: null,
        searchQuery: null
    }, methods: {


        sortBy: function (data) {
            vm.activeKey = data.key
            this.sortOrders[data.key] = this.sortOrders[data.key] * -1

        },

    }, computed: {

        filetyData: function () {
            var data = this.data
            var order = this.sortOrders[this.activeKey] || 1
            var sortKey = this.activeKey
             var filterKey=this.searchQuery;
             if (filterKey){

                 data = data.filter(function (row) {
                     return Object.keys(row).some(function (key) {
                         return String(row[key]).toLowerCase().indexOf(filterKey) > -1
                     })
                 })
             }
            data = data.slice().sort(function (a, b) {
                a = a[sortKey]
                b = b[sortKey]
                return (a === b ? 0 : a > b ? 1 : -1) * order

            })
            return data;


        }

    }

})