<template>
    <button v-on:click="count++">Você clicou em mim {{count}}</button>
</template>
<script>
import Vue from 'vue'
export default({
    data(){
        return {
            count : 0
        }
    },
    name:'ButtonCounter'
})
</script>

