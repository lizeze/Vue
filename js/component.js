Vue.component('blog-post', {
    props: ['post'],
    template: '<div class="blog-post"><h3>{{post.title}}</h3>' +
    '<button  @click="$emit(\'enlarge-text\',0.2)"  >Enlarge text</button>' +
    '<div v-html="post.content"></div>' +
    '' +
    '</div>'
})


Vue.component('custom-input', {

    props: ['value'],
    template: '<div><input v-bind:value="value" v-on:input="$emit(\'input\',$event.target.value)"> <br> <slot></slot></div>'

})

Vue.component('custom-JavaScript', {


    template: '<div  class="tabContent">JavaScript</div>'


})

Vue.component('custom-Jquery', {


    template: '<div  class="tabContent">Jquery</div>'


})
Vue.component('custom-Vue', {


    template: '<div  class="tabContent">Vue</div>'


})


Vue.component('custom-grid', {

    template: '#grid-template',

    props: {
        data: Array,
        columns: Array,
        filterKey: String
    },
    data: function () {
        var sortOrders = {};
        this.columns.forEach(function (item) {
            sortOrders[item.key] = 1;
        })
        return {
            sortOrders: sortOrders,
            activeKey: ''
        }
    }
    ,
    methods: {

        sortBy: function (data) {

            this.activeKey = data.key;
            this.sortOrders[data.key] = this.sortOrders[data.key] * -1
        }
    },
    computed: {
        filetyData: function () {
            var data = this.data
            var order = this.sortOrders[this.activeKey] || 1
            var sortKey = this.activeKey
            var filterKey = this.filterKey;
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

    }


})