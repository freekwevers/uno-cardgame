<template>
    <div id="app">
        <div class="body-wrapper">
            <main class="main">
                <div class="container">
                    <div class="main-container">
                        <div class="content-container">
                            <div class="section">
                                <button class="btn btn--1" @click="dealCards" v-if="!gameDeck">Deal</button>
                                <div class="table" v-else>
                                    <div class="playing-area">
                                        <app-deck :gameDeck="gameDeck"></app-deck>
                                        <app-stack :stack="stack"></app-stack>
                                        <div :class="{ 'is-active': stack[stack.length - 1].rule === 'choose-color'}" class="current-color">
                                            <div class="current-color__inner" :class="['current-color--' + currentColor]"></div>
                                        </div>
                                    </div><!-- /.playing-area -->
                                    <h2 class="message">{{ currentPlayer.name }}, it's your turn</h2>
                                    <button class="btn" @click="repopulateDeck">Populate deck</button>
                                    <app-uno-button
                                    :currentPlayer="currentPlayer"
                                    @unoNotCalledEvent="unoNotCalled"
                                    @unoCalledEvent="unoCalled"
                                    v-if="showUnoButton"></app-uno-button>
                                    <div class="hands">
                                        <app-players
                                        :players="players"
                                        :stack="stack"
                                        :gameDeck="gameDeck"
                                        :currentColor="currentColor"
                                        :currentNumber="currentNumber"
                                        :directionIsClockwise="directionIsClockwise"
                                        :customEvents="customEvents"
                                        @addToStackEvent="addCardToStack"
                                        @changeDirectionEvent="changeDirection"
                                        @currentCardChangeEvent="changeCurrentCard"
                                        @removeCardsFromGameDeckEvent="removeCardsFromGameDeck" @chooseColorEvent="chooseColor"
                                        @showUnoButtonEvent="showUnoButton = true"></app-players>
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
import appUnoButton from '@/components/game/UnoButton.vue';

export default {
    name: "app",
    components: {
        appCard,
        appDeck,
        appStack,
        appPlayers,
        appUnoButton
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
                    turn: true,
                    computerPlayer: false
                },
                {
                    id: 'player-2',
                    name: 'Player 2',
                    cards: [],
                    turn: false,
                    computerPlayer: true
                },
                {
                    id: 'player-3',
                    name: 'Player 3',
                    cards: [],
                    turn: false,
                    computerPlayer: true
                },
                {
                    id: 'player-4',
                    name: 'Player 4',
                    cards: [],
                    turn: false,
                    computerPlayer: true
                }
            ],
            directionIsClockwise: true,
            currentColor: null,
            currentNumber: null,
            customEvents: {
                cardUpdatedEvent: new CustomEvent('cardUpdated'),
                directionChangedEvent: new CustomEvent('directionChanged'),
                colorChosenEvent: new CustomEvent('colorChosen'),
                twoCardPenaltyEvent: new CustomEvent('twoCardPenalty'),
                unoCalledEvent: new CustomEvent('unoCalled')
            },
            showUnoButton: false
        }
    },
    computed: {
        currentPlayer() {
            return this.players.find(player => player.turn);
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

            // Set current number and color
            this.currentColor = this.stack[0].color;
            this.currentNumber = this.stack[0].nr;
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
        repopulateDeck() {
            const cards = [];
            this.stack.forEach((card, index) => {
                if ( index < this.stack.length - 1 )
                cards.push(card);
            });

            // remove all but the last card from stack
            this.stack.splice(0, cards.length);

            // Add removed cards to game deck
            cards.forEach(card => {
                this.gameDeck.push(card);
            });

            // Shuffle gamedeck
            this.gameDeck = this.shuffleDeck(this.gameDeck);
        },
        addCardToStack(card) {
            this.stack.push(card);
        },
        changeDirection() {
            this.directionIsClockwise = !this.directionIsClockwise;
            document.dispatchEvent(this.customEvents.directionChangedEvent);
        },
        changeCurrentCard(args) {
            this.currentColor = args.color;
            this.currentNumber = args.number;

            document.dispatchEvent(this.customEvents.cardUpdatedEvent);
        },
        chooseColor(args) {
            this.currentColor = args.color;
            this.currentNumber = args.number;
            document.dispatchEvent(this.customEvents.colorChosenEvent);
        },
        removeCardsFromGameDeck(nr) {
            this.gameDeck.splice(0, nr);
        },
        unoNotCalled() {
            document.dispatchEvent(this.customEvents.twoCardPenaltyEvent);
            this.showUnoButton = false;
        },
        unoCalled() {
            document.dispatchEvent(this.customEvents.unoCalledEvent);
            this.showUnoButton = false;
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
    @import 'styles/components/current-color';
    @import 'styles/components/message';
</style>
