const {createApp} = Vue;

createApp({
    data(){
        return{
            message: 'Ciao da oggi cominciamo VueJs',
            image: './img/vueJs.png'
        }
    }
}).mount('#app')