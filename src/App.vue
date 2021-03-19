<template>
    <div id="app">
        <p>hello world</p>
        <!-- <GetRandomNumber /> -->
    </div>
</template>

<script>
import { GetRandomNumber } from './components/GetRandomNumber'

export default {
    name: 'App',
    components: {
        GetRandomNumber
    }
}
</script>

<style>
#app {
    text-align: center;
    margin-top: 100px;
}
</style>
