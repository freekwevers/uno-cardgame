<template>
    <div class="stack-container">
        <h3>Stack</h3>
        <ul class="stack">
            <app-card :card="card" v-for="card in stack" :key="card.id"></app-card>
        </ul><!-- /.stack -->
    </div><!-- /.stack-container -->
</template>
<script>
import appCard from '@/components/game/Card.vue';
export default {
    props: ['stack'],
    components: {
        appCard
    }
}
</script>
<style lang="scss">
    @import '../../styles/base/settings';

</style>
