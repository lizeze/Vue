var vm = new Vue({

    el: '#example',
    data: {
        activeKey: '',
        data: [
            {name: '张三', age: 12, id: 1},
            {name: '李四', age: 26, id: 1},
            {name: '王五', age: 17, id: 1},
            {name: '小六', age: 13, id: 1},
        ],
        content: [
            {name: '张三', age: 12, id: 1},
            {name: '李四', age: 26, id: 1},
            {name: '王五', age: 17, id: 1},
            {name: '小六', age: 13, id: 1},
        ],
        columns: [
            {text: '姓名', key: 'name'},
            {text: '年龄', key: 'age'}
        ],
        sortOrders: function () {
            var sortOrders = {}
            this.columns.forEach(function (item) {
                sortOrders[item.key] = 1
            })
            return sortOrders;
        }

    }, methods: {
        sortBy: function (data) {
            vm.activeKey = data.key
            this.ordeyBy();
        },
        ordeyBy: function () {
            var data = this.data;
            var sortKey = 'age';
            this.content = data.slice().sort(function (a, b) {
                a = a[sortKey]
                b = b[sortKey]
                return (a === b ? 0 : a > b ? 1 : -1) * -1
            })
        }
    }, computed: {}

})