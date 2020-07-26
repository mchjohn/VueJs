new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        showAlert() {
            alert("I was clicked!!!")
        },
        valueKeydown(event) {
            this.valor = event.target.value
        }
    }
})