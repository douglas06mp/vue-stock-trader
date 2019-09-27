<template>
    <div>
        <h2>Your Funds:</h2>
        <h4>{{ funds | currency}}</h4>
    </div>
</template>

<script>
    export default {
        computed: {
            funds(){
                return this.$store.getters.funds
            }
        }
    }
</script>