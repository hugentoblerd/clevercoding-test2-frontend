new Vue({
    el: '#app',
    components: { },
    data() {
        return {
            number: false
        }
    },
    template: `
        <div id="app">
            <h1 v-if="number">Random Number {{ number }}</h1>
            <h1 v-else>No Random Number</h1>

            <button @click="getRandomNumber">Get Random #</button>
        </div>
    `,
    methods: {
        getRandomNumber: function () {
            fetch('http://localhost:8080/number')
                .then(response => response.json())
                .then(data => this.number = data.results);
        }
    }
})
