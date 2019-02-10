<template>
    <div id="app">
        <div class="body-wrapper">
            <main class="main">
                <div class="container">
                    <div class="main-container">
                        <div class="content-container">
                            <div class="section">

                                <ul class="my-cards">
                                    <app-card :card="card" v-for="card in gameDeck" :key="card.id"></app-card>
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
            deck: null,
            gameDeck: null
        }
    },
    methods: {
        partCards() {
            console.log('part cards');
        },
        shuffleDeck(array) {
            let currentIndex = array.length,
            temporaryValue,
            randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        }
    },
    created() {
        // Fill cards
        api.getCards('/data/deck.json').getAll()
        .then(response => {
            this.deck = response.data;
            this.gameDeck = [...this.deck];
            this.gameDeck = this.shuffleDeck(this.gameDeck)
        })
        .catch((err) => console.log(err));
    }
};
</script>

<style lang="scss">
    @import 'styles/style.scss';
</style>
