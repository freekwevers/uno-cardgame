<template>
    <div class="players-container">
        <ul class="players">
            <li class="player" v-for="(player, index) in players" :key="player.id" :class="{'turn': player.turn}">
                <h3 v-if="index === 0">My cards</h3>
                <h3 v-else>Cards {{ player.name}}</h3>
                <ul :class="{ 'my-cards': index === 0, 'opponent-cards': index > 0 }">
                    <app-card
                    :card="card"
                    v-for="card in players[index].cards"
                    :key="card.id"
                    @click.native="playCard(card, players[index], $event)"
                    :class="{'is-playable': card.playable}"></app-card>
                </ul><!-- /.my-cards -->
            </li>
        </ul><!-- /.player -->
        <transition name="fade">
            <app-choose-color v-if="modalVisible" @chooseColorEvent="chooseColor"></app-choose-color>
        </transition>
    </div>
</template>
<script>
import appCard from '@/components/game/Card.vue';
import appChooseColor from '@/components/game/ChooseColor.vue';

export default {
    data() {
        return {
            modalVisible: false
        }
    },
    props: ['players', 'stack', 'gameDeck', 'directionIsClockwise', 'currentColor', 'currentNumber'],
    components: {
        appCard,
        appChooseColor
    },
    methods: {

        playCard(card, player, event) {

            // Get index from the card in players hand
            const cardIndex = player.cards.findIndex((playerCard) => card === playerCard);
            // Use this index to remove this item from the players hand
            player.cards.splice(cardIndex, 1);
            // Put the clicked card on top op the stack
            this.$emit('addToStackEvent', card);

            if ( player.cards.length === 0 ) {
                this.callWinner(player);
                return;
            }

            // Update current card color
            this.$emit('currentColorChangeEvent', card.color);
            this.$emit('currentNumberChangeEvent', card.nr);

            // Apply the rules provided by the card
            this.applyRules(card);
        },

        applyRules(card) {

            // Skip turn rule
            if ( card.rule === 'next-player-skip-turn' ) {
                this.changeTurn(true);
            }

            // Reverse direction of play rule
            else if ( card.rule === 'reverse-direction' ) {
                this.$emit('changeDirectionEvent');
                setTimeout(() => {
                    this.changeTurn(false);
                }, 500);
            }

            // Next player take 2 / 4 cards rule
            else if ( card.rule === 'next-player-take-two' || card.rule === 'next-player-take-four' ) {

                // First go to next player
                this.nextPlayer(false);

                // Take 2 cards
                if ( card.rule === 'next-player-take-two' ) {
                    // The takeCard makes the player take the cards and skip his turn
                    this.takeCard(2);
                }

                // Take 4 cards
                if ( card.rule === 'next-player-take-four' ) {
                    // The takeCard makes the player take the cards and skip his turn
                    this.takeCard(4);
                }
            }

            // Choose a color rule
            else if ( card.rule === 'choose-color' ) {
                this.modalVisible = true;
            }

            // If last card didn't trigger a specific rule,
            // then just change the turn
            else if ( !card.rule ) {
                // Next player
                setTimeout(() => {
                    this.changeTurn(false);
                }, 500);
            }
        },

        markAllowedCards(player) {

            // Select the current players cards
            const cards = player.cards;

            cards.forEach(card => {

                // Mark each card as (un)playable
                if ( card.color === this.currentColor || card.color === 'black' || this.currentColor === 'black' || (card.nr === this.currentNumber && this.currentNumber !== '') ) {
                    card.playable = true;
                } else {
                    card.playable = false;
                }
            });

            // When there are no playable cards, then take a card from the stack
            // and change turns
            if ( !cards.find((card) => card.playable ) ) {
                this.takeCard(1);
            }
        },

        nextPlayer(skip) {

            // This function selects the next player
            const currentPlayerIndex = this.players.findIndex((player) => player.turn);
            this.players[currentPlayerIndex].turn = false;

            if ( this.directionIsClockwise ) {
                if ( skip  ) {
                    if ( currentPlayerIndex < this.players.length - 2 ) {
                        this.players[currentPlayerIndex + 2].turn = true;
                    } else if ( currentPlayerIndex < this.players.length - 1 ) {
                        this.players[1].turn = true;
                    } else {
                        this.players[0].turn = true;
                    }
                } else {
                    if ( currentPlayerIndex < this.players.length - 1 ) {
                        this.players[currentPlayerIndex + 1].turn = true;
                    } else {
                        this.players[0].turn = true;
                    }
                }
            } else {
                if ( skip ) {
                    if ( currentPlayerIndex === 0 ) {
                        this.players[this.players.length - 2].turn = true;
                    } else if ( currentPlayerIndex === 1) {
                        this.players[this.players.length - 1].turn = true;
                    } else {
                        this.players[currentPlayerIndex - 2].turn = true;
                    }
                } else {
                    if ( currentPlayerIndex === 0 ) {
                        this.players[this.players.length - 1].turn = true;
                    } else {
                        this.players[currentPlayerIndex - 1].turn = true;
                    }
                }
            }
        },

        currentPlayer() {
            return this.players.find((player) => player.turn );
        },

        changeTurn(skip) {
            this.nextPlayer(skip);
            this.markAllowedCards(this.currentPlayer());
        },

        takeCard(nr) {
            for (let index = 0; index < nr; index++) {
                const card = this.gameDeck[0];
                this.gameDeck.splice(0, 1);
                this.currentPlayer().cards.push(card);
            }

            setTimeout(() => {
                this.changeTurn(false);
            }, 500);

        },

        chooseColor(color) {
            this.$emit('currentColorChangeEvent', color);
            this.modalVisible = false;

            // Next player
            setTimeout(() => {
                this.changeTurn(false);
            }, 500);

        },

        callWinner(player) {
            alert(player.name + 'wins!!!');
        }
    },
    created() {
        this.markAllowedCards(this.currentPlayer());

        document.addEventListener('color-cosen', () => {
            console.log('color chosen');
        });
    }
}
</script>
<style lang="scss">
    @import '../../styles/base/settings';
    @import '../../styles/components/players';
</style>
