<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="justify-content: space-between; margin-bottom: 30px;">
        <ul class="navbar-nav">
            <router-link to="/" tag="li" active-class="nav-item"><a class="navbar-brand" href="#">Stock Trader</a></router-link>
            <router-link to="/portfolio" tag="li" active-class="nav-item"><a class="nav-link" href="#">Portfolio</a></router-link>
            <router-link to="/stocks" tag="li" active-class="nav-item"><a class="nav-link" href="#">Stocks</a></router-link>
        </ul>

        <ul class="navbar-nav">
            <li class="nav-item">
                <span class="navbar-brand">{{ funds | currency}}</span>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" @click="random">End Day</a>
            </li>
            <li class="nav-item dropdown" :class="{show: isDropdownShow}" @click="isDropdownShow = !isDropdownShow">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Save /Load
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" :class="{show: isDropdownShow}">
                    <a class="dropdown-item" href="#" @click="save">Save Data</a>
                    <a class="dropdown-item" href="#" @click="load">Load Data</a>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                isDropdownShow: false
            }
        },
        computed: {
            funds(){
                return this.$store.getters.funds
            }
        },
        methods: {
            random(){
                this.$store.dispatch('randomizeStock')
            },
            save(){
                const data = {
                    stocks: this.$store.getters.stocks,
                    portfolio: this.$store.getters.portfolioStocks,
                    funds: this.$store.getters.funds
                }
                this.$http.put('data.json', data)
            },
            load(){
                this.$store.dispatch('loadData')
            }
        }
    }
</script>