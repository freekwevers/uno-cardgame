<template>
    <div class="deck-container">
        <h3>Deck</h3>
        <ul class="deck">
            <app-card :card="card" v-for="card in gameDeck" :key="card.id"></app-card>
        </ul><!-- /.my-cards -->
    </div><!-- /.deck-container -->
</template>
<script>
import appCard from '@/components/game/Card.vue';
export default {
    props: ['gameDeck'],
    methods: {

    },
    components: {
        appCard
    }
}
</script>
<style lang="scss">
    @import '../../styles/base/settings';
</style>
