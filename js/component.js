Vue.component('blog-post', {
    props: ['post'],
    template: '<div class="blog-post"><h3>{{post.title}}</h3>' +
    '<button  @click="$emit(\'enlarge-text\',0.2)"  >Enlarge text</button>' +
    '<div v-html="post.content"></div>' +
    '' +
    '</div>'
})


 Vue.component('custom-input',{

       props:['value'],
     template:'<div><input v-bind:value="value" v-on:input="$emit(\'input\',$event.target.value)"> <br> <slot></slot></div>'


 })