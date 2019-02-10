<template>
    <div id="app">
        <div class="body-wrapper">
            <main class="main">
                <div class="container">
                    <div class="main-container">
                        <div class="content-container">
                            <div class="section">
                                <button class="btn btn--1" @click="dealCards" v-if="!gameDeck">Deal</button>
                                <div class="deck-container" v-else>
                                    <h3>Deck</h3>
                                    <ul class="deck">
                                        <app-card :card="card" v-for="card in gameDeck" :key="card.id" @click.native="takeOneCard"></app-card>
                                    </ul><!-- /.my-cards -->
                                </div><!-- /.deck-container -->
                                <ul class="players">
                                    <li class="player">
                                        <h3>My cards</h3>
                                        <ul class="my-cards">
                                            <app-card :card="card" v-for="card in players[0].cards" :key="card.id" @click.native="playCard"></app-card>
                                        </ul><!-- /.my-cards -->
                                    </li>
                                    <li class="player">
                                        <h3>Cards player 2</h3>
                                        <ul class="my-cards">
                                            <app-card :card="card" v-for="card in players[1].cards" :key="card.id" @click.native="playCard"></app-card>
                                        </ul><!-- /.my-cards -->
                                    </li><!-- /.player -->
                                    <li class="player">
                                        <h3>Cards player 3</h3>
                                        <ul class="my-cards">
                                            <app-card :card="card" v-for="card in players[2].cards" :key="card.id" @click.native="playCard"></app-card>
                                        </ul><!-- /.my-cards -->
                                    </li><!-- /.player -->
                                    <li class="player">
                                        <h3>Cards player 4</h3>
                                        <ul class="my-cards">
                                            <app-card :card="card" v-for="card in players[3].cards" :key="card.id" @click.native="playCard"></app-card>
                                        </ul><!-- /.my-cards -->
                                    </li><!-- /.player -->
                                </ul><!-- /.player -->

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
            gameDeck: null,
            players: [
                {
                    name: 'Player 1',
                    cards: []
                },
                {
                    name: 'Player 2',
                    cards: []
                },
                {
                    name: 'Player 3',
                    cards: []
                },
                {
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
        },
        takeOneCard() {
            console.log('take one card');
        },
        payCard() {
            console.log('play card');
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
