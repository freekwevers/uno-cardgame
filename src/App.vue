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
                                    <div class="playing-area">
                                        <app-deck :gameDeck="gameDeck"></app-deck>
                                        <app-stack :stack="stack"></app-stack>
                                    </div><!-- /.playing-area -->
                                    <div class="hands">
                                        <app-players :players="players" :stack="stack" :deck="deck"></app-players>
                                    </div><!-- /.hands -->
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
import appStack from '@/components/game/Stack.vue';
import appPlayers from '@/components/game/Players.vue';

export default {
    name: "app",
    components: {
        appCard,
        appDeck,
        appStack,
        appPlayers
    },
    data() {
        return {
            deck: null,
            gameDeck: null,
            stack: [],
            players: [
                {
                    id: 'player-1',
                    name: 'Player 1',
                    cards: [],
                    turn: true
                },
                {
                    id: 'player-2',
                    name: 'Player 2',
                    cards: [],
                    turn: false
                },
                {
                    id: 'player-3',
                    name: 'Player 3',
                    cards: [],
                    turn: false
                },
                {
                    id: 'player-4',
                    name: 'Player 4',
                    cards: [],
                    turn: false
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

            // Move top card to stack
            this.stack.push(this.gameDeck[0]);
            // And remove card from deck
            this.gameDeck.splice(0, 1);
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
        },
        changeDirection() {
            this.directionIsClockwise = !this.directionIsClockwise;
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
