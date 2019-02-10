<template>
    <div id="app">
        <div class="body-wrapper">
            <main class="main">
                <div class="container">
                    <div class="main-container">
                        <div class="content-container">
                            <div class="section">
                                <button class="btn btn--1" @click="dealCards" v-if="!gameDeck">Deal</button>
                                <div v-else>
                                    <app-deck :gameDeck="gameDeck"></app-deck>
                                    <app-players :players="players"></app-players>
                                </div>
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
import appDeck from '@/components/game/Deck.vue';
import appPlayers from '@/components/game/Players.vue';

export default {
    name: "app",
    components: {
        appCard,
        appDeck,
        appPlayers
    },
    data() {
        return {
            deck: null,
            gameDeck: null,
            players: [
                {
                    id: 'player-1',
                    name: 'Player 1',
                    cards: []
                },
                {
                    id: 'player-2',
                    name: 'Player 2',
                    cards: []
                },
                {
                    id: 'player-3',
                    name: 'Player 3',
                    cards: []
                },
                {
                    id: 'player-4',
                    name: 'Player 4',
                    cards: []
                }
            ]
        }
    },
    methods: {
        dealCards() {
            // Create random order copy of deck
            this.gameDeck = [...this.deck];
            this.gameDeck = this.shuffleDeck(this.gameDeck);

            this.players.forEach(player => {
                for (let index = 0; index < 7; index++) {
                    const card = this.gameDeck[index];
                    player.cards.push(card);
                    this.gameDeck.splice(index, 1);
                };
            });
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
        // Fill cards array
        api.getCards('/data/deck.json').getAll()
        .then(response => {
            this.deck = response.data;
        })
        .catch((err) => console.log(err));
    }
};
</script>

<style lang="scss">
    @import 'styles/style.scss';
</style>
