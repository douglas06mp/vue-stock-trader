<template>
    <div class="col-lg-4 col-md-6">
        <div class="card border-success mb-3">
            <div class="card-header bg-success text-white">{{ stock.name }} <span style="font-size: .2rem;">(Price: {{ stock.price }})</span></div>
            <div class="card-body text-success" style="display: flex; justify-content: space-between;">
                <input type="number" v-model.number="quantity">
                <button class="btn btn-success" @click="buy" :disabled="quantity <= 0 || quantity * stock.price > this.$store.getters.funds">Buy</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        methods: {
            buy(){
                const order = {
                    id: this.stock.id,
                    price: this.stock.price,
                    quantity: this.quantity
                }
                this.$store.dispatch('buyStock', order)
                this.quantity = 0
            }
        }
    }
</script>