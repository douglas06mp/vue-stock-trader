<template>
  <div class="col col-xs-12" style="display: flex; flex-wrap: wrap;">
    <app-stock v-for="stock in stocks" :stock="stock" :key="stock.id"></app-stock>
  </div>
</template>

<script>
import Stock from "./Stock";
export default {
  computed: {
    stocks() {
      return this.$store.getters.portfolioStocks;
    }
  },
  components: {
    appStock: Stock
  }
};
</script>
