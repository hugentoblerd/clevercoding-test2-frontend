Vue.component('number-button', {
    props: ['number'],
    template: `
    <div class="content">
        <a href="#" @click="$emit('update-number', number)">{{ number }}</a>
    </div>
    `
})

new Vue({
    el: '#app',
    data() {
        return {
            selectedNumber: false,
            allNumbers: []
        }
    },
    template: `
        <div id="app">
            <h1 v-if="selectedNumber">The Selected Number is {{ selectedNumber }}</h1>
            <h1 v-else>No Number Selected</h1>

            <button @click="getRandomNumber">Get Random #</button>

            <div class="container">
                <number-button
                    :class="{active: number === selectedNumber}"
                    v-for="number in allNumbers"
                    @update-number="updateSelected"
                    :key="number" :number="number"
                />
            </div>
        </div>
    `,
    methods: {
        getRandomNumber: function () {
            fetch('http://localhost:8080/number')
                .then(response => response.json())
                .then(data => {
                    this.selectedNumber = data.results;
                    
                    !this.allNumbers.includes(this.selectedNumber) ? this.allNumbers.push(this.selectedNumber) : '';
                });
        },
        updateSelected: function (newNumber) {
            this.selectedNumber === newNumber ? this.selectedNumber = false : this.selectedNumber = newNumber;
        }
    }
})
