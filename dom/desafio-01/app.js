new Vue({
  el: '#desafio',
  data: {
    name: 'Michel John',
    age: '28',
    srcImg: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
  },
  methods: {
    getRandomNumber: function() {
      return Math.random().toFixed(2)
    }
  }
})