<template>
    <div id="app">
        <div class="body-wrapper">
            <main class="main">
                <div class="container">
                    <div class="main-container">
                        <div class="content-container">
                            <div class="section">
                                <ul class="my-cards">
                                    <app-card :card="card" v-for="card in cards" :key="card.id"></app-card>
                                </ul><!-- /.my-cards -->
                            </div><!-- /.section -->
                        </div><!-- /.content-container -->
                    </div><!-- /.main-container -->
                </div><!-- /.container -->
            </main><!-- /.main -->
        </div><!-- /.body-wrapper -->
    </div><!-- /#app -->
</template>

<script>
import axios from 'axios';
import appCard from '@/components/game/Card.vue';

export default {
    name: "app",
    components: {
        appCard
    },
    data() {
        return {
            cards: null
        }
    },
    created() {
        axios.get('/data/deck.json')
        .then(response => {
            this.cards = response.data;
        })
        .catch(e => {
            this.errors.push(e)
        })
    }
};
</script>

<style lang="scss">
    @import 'styles/style.scss';
</style>
