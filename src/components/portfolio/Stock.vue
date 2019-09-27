<template>
    <div class="col-lg-4 col-md-6">
        <div class="card border-info mb-3">
            <div class="card-header bg-info text-white">{{ stock.name }} <span style="font-size: .2rem;">(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</span></div>
            <div class="card-body text-info" style="display: flex; justify-content: space-between;">
                <input type="number" v-model.number="quantity">
                <button class="btn btn-info" @click="sell" :disabled="quantity < 0 || quantity > stock.quantity">Sell</button>
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
            sell(){
                const order = {
                    id: this.stock.id,
                    price: this.stock.quantity,
                    quantity: this.quantity
                }
                this.$store.dispatch('sellStock', order)
                this.quantity = 0
            }
        }
    }
</script>