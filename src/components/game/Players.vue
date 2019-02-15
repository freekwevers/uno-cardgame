<template>
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
</template>
<script>
import appCard from '@/components/game/Card.vue';
export default {
    props: ['players', 'stack', 'deck'],
    data() {
        return {
            currentColor: null,
            currentNumber: null,
            directionIsClockwise: false
        }
    },
    components: {
        appCard
    },
    methods: {
        playCard(card, player, event) {

            // Get index from the card in players hand
            const cardIndex = player.cards.findIndex((playerCard) => card === playerCard);
            // Use this index to remove this item from the players hand
            player.cards.splice(cardIndex, 1);
            // Put the clicked card on top op the stack
            this.stack.push(card);

            if ( player.cards.length === 0 ) {
                this.callWinner(player);
                return;
            }

            // Update current card color
            this.currentColor = card.color;
            this.currentNumber = card.nr;

            // Apply the rules provided by the card
            this.applyRules(card);

            this.changeTurn(false);
        },
        applyRules(card) {
            if ( card.rule === 'next-player-skip-turn' ) {
                // console.log('beurt overslaan');
                this.changeTurn(true);
            } else if ( card.rule === 'reverse-direction' ) {
                this.directionIsClockwise = !this.directionIsClockwise;
            } else if ( card.rule === 'next-player-take-two' ) {
                console.log('volgende speler pakt 2 kaarten en slaat zijn beurt over');
            } else if ( card.rule === 'next-player-take-four' ) {
                console.log('volgende speler pakt 4 kaarten en slaat zijn beurt over');
            } else if ( card.rule === 'choose-color' ) {
                console.log('kies een kleur');
            }
        },
        markAllowedCards(player) {
            const cards = player.cards;
            cards.forEach(card => {
                if ( card.color === this.currentColor || card.color === 'black' || this.currentColor === 'black' || card.nr === this.currentNumber ) {
                    card.playable = true;
                } else {
                    card.playable = false;
                }
            });

            if ( !cards.find((card) => card.playable ) ) {
                this.takeCard(1);
            }
        },
        currentPlayer() {
            return this.players.find((player) => player.turn );
        },
        changeTurn(skip) {
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

            this.markAllowedCards(this.currentPlayer());
        },
        takeCard(nr) {
            console.log('take ' + nr);
            const card = this.deck[0];
            this.deck.splice(0, 1);
            this.currentPlayer().cards.push(card);
            this.changeTurn(false);
        },
        callWinner(player) {
            alert(player.name + 'wins!!!');
        }
    },
    created() {
        this.currentColor = this.stack[0].color;
        this.currentNumber = this.stack[0].nr;
        this.markAllowedCards(this.currentPlayer());
    }
}
</script>
<style lang="scss">
    @import '../../styles/base/settings';
    @import '../../styles/components/players';
</style>
