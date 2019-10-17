import Vue from 'vue/dist/vue'
import template from './search.html'
import observer from '../../tools/observer'
const search = new Vue({
    el: '#search',
    data: {
        isFocus: 0,
        cancel: '取消',
        searchText: ''
    },
    template,
    methods: {
        toggleFocus() {
            this.isFocus = !this.isFocus;
        },
        clear() {
            this.searchText = ''
        }
    },
    watch: {
        searchText() {
            // console.log(this.searchText);
            
            observer.emit('setSeatchText', this.searchText)
        }
    }
})
export default search;