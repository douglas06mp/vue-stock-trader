<template>
    <div class="container">
        <app-header></app-header>
        <div class="row">
            <transition name="slide" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header'
    export default {
        components: {
            appHeader: Header
        },
        created(){
            this.$store.dispatch('initStock')
        }
    }
</script>

<style>
    body {
        padding: 30px;
    }

    .slide-enter-active {
        animation: slide-in .2s ease forwards;
    }

    .slide-leave-active {
        animation: slide-out .2s ease forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }
</style>
