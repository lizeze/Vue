var vm = new Vue({

    el: '#example',
    data: {
        activeKey: '',
        data: [],
        columns: [
            {text: '名称', key: 'appName'},
            {text: '描述', key: 'appDescribe'}
        ],
        sortOrders: {appName: 1, appDescribe: 1},
        sortKey: null,
        searchQuery: null
    }, methods: {
        sortBy: function (data) {
            vm.activeKey = data.key
            this.sortOrders[data.key] = this.sortOrders[data.key] * -1
        },

    },
    computed: {
        filetyData: function () {
            var data = this.data
            var order = this.sortOrders[this.activeKey] || 1
            var sortKey = this.activeKey
            var filterKey = this.searchQuery;
            if (filterKey) {

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

    },
    created: function () {
        var vthis = this;
        getAjax('http://localhost:8081/app/', function (data) {
            vthis.data = data;

        })
    }

})


new Vue({
    el: '#blog-post-demo',
    data: {
        postFontSize: 1,
        posts: [
            {title: 1, content: 'My journey with Vue'},

        ]
    }
})

new Vue({
    el: '#custom-input-demo',
    data: {
        input: 'custom-input',
        name: ''
    }
})

new Vue({
    el: '#custom-tab-demo',
    data: {
        buttons: [{text: 'JavaScript', key: 1}, {text: 'Jquery', key: 2}, {text: 'Vue', key: 3}],
        currentTab: 'JavaScript'
    },
    methods: {


        changeTab: function (key) {
            this.currentTab = key;
        }
    }, computed: {

        activeTab: function () {

            return 'custom-' + this.currentTab;
        }

    }
})

new Vue({

    el: '#custom-grid-demo',
    data: {
        columns: [{key: 'appName', text: '名称'}, {key: 'appDescribe', text: '描述'}],
        data:[],
        searchQuery:''
    },created:function () {
        var vthis = this;
        getAjax('http://localhost:8081/app/', function (data) {
            vthis.data = data;

        })
    }

})

