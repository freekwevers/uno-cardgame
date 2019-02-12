<template>
    <ul class="players">
        <li class="player" v-for="(player, index) in players" :key="player.id">
            <h3 v-if="index === 0">My cards</h3>
            <h3 v-else>Cards {{ player.name}}</h3>
            <ul :class="{ 'my-cards': index === 0, 'opponent-cards': index > 0}">
                <app-card :card="card" v-for="card in players[index].cards" :key="card.id" @click.native="playCard(card, players[index], $event)"></app-card>
            </ul><!-- /.my-cards -->
        </li>
    </ul><!-- /.player -->
</template>
<script>
import appCard from '@/components/game/Card.vue';
export default {
    props: ['players', 'stack', 'directionIsClockwise'],
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

            // Apply the rules provided by the card
            // this.applyRules(card);

            this.changeTurn();
        },
        applyRules(card) {
            console.log(card);
        },
        changeTurn() {
            const currentPlayerIndex = this.players.findIndex((player) => player.turn);
            this.players[currentPlayerIndex].turn = false;

            if ( this.directionIsClockwise ) {
                if ( currentPlayerIndex < this.players.length - 1 ) {
                    this.players[currentPlayerIndex + 1].turn = true;
                } else {
                    this.players[0].turn = true;
                }
            } else {
                if ( currentPlayerIndex === 0 ) {
                    this.players[this.players.length - 1].turn = true;
                } else {
                    this.players[currentPlayerIndex - 1].turn = true;
                }
            }
        }
    }
}
</script>
<style lang="scss">
    @import '../../styles/base/settings';
    @import '../../styles/components/players';
</style>
