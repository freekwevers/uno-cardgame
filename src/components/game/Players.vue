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
    props: ['players', 'stack'],
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

        }

    }
}
</script>
<style lang="scss">
    @import '../../styles/base/settings';
    @import '../../styles/components/players';
</style>
