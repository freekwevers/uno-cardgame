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
                    @click.native="playCard(card, players[index])"
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
    props: ['players', 'stack', 'gameDeck', 'directionIsClockwise', 'currentColor', 'currentNumber', 'customEvents'],
    components: {
        appCard,
        appChooseColor
    },
    methods: {

        playCard(card, player) {

            // Get index from the card in players hand
            const cardIndex = player.cards.findIndex((playerCard) => card === playerCard);
            // Use this index to remove this item from the players hand
            player.cards.splice(cardIndex, 1);
            // Put the clicked card on top op the stack
            this.$emit('addToStackEvent', card);

            // if ( player.cards.length === 0 ) {
            //     this.callWinner(player);
            //     return;
            // }

            // Update current card
            this.$emit('currentCardChangeEvent', {color: card.color, number: card.nr});
        },

        applyRules(card) {

            // Skip turn rule
            if ( card.rule === 'next-player-skip-turn' ) {
                this.nextPlayer(true);
            }

            // Reverse direction of play rule
            else if ( card.rule === 'reverse-direction' ) {
                this.$emit('changeDirectionEvent');
            }

            // Next player take 2 cards rule
            else if ( card.rule === 'next-player-take-two' ) {
                this.nextPlayer(false, true, false);
            }

            // Next player take 4 cards rule
            else if ( card.rule === 'next-player-take-four' ) {
                this.nextPlayer(false, false, true);
            }

            // Choose a color rule
            // else if ( card.rule === 'choose-color' ) {

            //     if ( this.currentPlayer().computerPlayer ) {
            //         let numberOfColors = {
            //             'red': this.currentPlayer().cards.filter(card => card.color === 'red').length,
            //             'yellow': this.currentPlayer().cards.filter(card => card.color === 'yellow').length,
            //             'green': this.currentPlayer().cards.filter(card => card.color === 'green').length,
            //             'blue': this.currentPlayer().cards.filter(card => card.color === 'blue').length
            //         }

            //         const colorToChoose = Object.keys(numberOfColors).reduce((a, b) => numberOfColors[a] > numberOfColors[b] ? a : b);

            //         this.chooseColor(colorToChoose);
            //         this.$emit('currentNumberChangeEvent', '');

            //     } else {
            //         this.modalVisible = true;
            //     }
            // }

            // If last card didn't trigger a specific rule,
            // then just change the turn
            if ( !card.rule ) {
                this.nextPlayer(false);
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
            // if ( !cards.find((card) => card.playable ) ) {
            //     this.takeCard(1);
            // }
        },

        nextPlayer(skip, takeTwo, takeFour) {

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


            if ( !takeTwo && !takeFour ) {
                this.markAllowedCards(this.currentPlayer());

                // Make computer player choose card
                if ( this.currentPlayer().computerPlayer ) {
                    this.computerPlayerPlayCard();
                } else {
                    // Check if there are playable cards, if not, take a card from the deck
                    const cardToPlay = this.currentPlayer().cards.find(card => card.playable);
                    if ( !cardToPlay ) {
                        this.takeCard(1);
                    }
                }
            } else if ( takeTwo ) {
                console.log('take 2 cards');
                this.takeCard(2);
            } else if ( takeFour ) {
                console.log('take 4 cards');
                this.takeCard(4);
            }
        },

        currentPlayer() {
            return this.players.find((player) => player.turn );
        },

        computerPlayerPlayCard() {
            const thinkingTime = Math.floor(Math.random() * 500) + 3000;
            const cardToPlay = this.currentPlayer().cards.find(card => card.playable);

            setTimeout(() => {
                if ( cardToPlay ) {
                    this.playCard(cardToPlay, this.currentPlayer());
                } else {
                    this.takeCard(1);
                }
            }, thinkingTime);
        },

        takeCard(nr) {
            for (let index = 0; index < nr; index++) {
                this.currentPlayer().cards.push(this.gameDeck[index]);
            }

            this.$emit('removeCardsFromGameDeckEvent', nr);
            this.nextPlayer(false);
        },

        chooseColor(color) {
            this.$emit('currentColorChangeEvent', { 'color': color, 'byRule': true});
            this.modalVisible = false;
        },

        callWinner(player) {
            // TODO create fancy modal with reset button
            alert(player.name + 'wins!!!');
        }
    },
    created() {
        this.markAllowedCards(this.currentPlayer());

        document.addEventListener('cardUpdated', () => {
            const currentCard = this.stack[this.stack.length - 1];
            setTimeout(() => {
                const currentCard = this.stack[this.stack.length - 1];
                this.applyRules(currentCard);
            }, 200);
        });

        document.addEventListener('directionChanged', () => {
            console.log('changed direction global event');
            setTimeout(() => {
                this.nextPlayer(false);
            }, 200);
        });
    }
}
</script>
<style lang="scss">
    @import '../../styles/base/settings';
    @import '../../styles/components/players';
</style>
