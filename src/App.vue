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
import api from '@/api';
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
    methods: {

    },
    created() {
        // Fill cards
        api.getCards('/data/deck.json').getAll()
        .then(response => {
            this.cards = response.data;
        })
        .catch((err) => console.log(err));
    }
};
</script>

<style lang="scss">
    @import 'styles/style.scss';
</style>
