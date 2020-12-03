new Vue({
    
    el: "#scene",
    data: {
        value: 1,
        doubleValue: 1,
    },

    methods:{
        increment( value ){
            this.doubleValue = this.value * 2
        }
    },

})