<template>
    <div class="card" :class=[cardColorClass]>
        <span class="card__nr">{{card.card_nr}}</span><!-- /.card__nr -->
    </div><!-- /.card -->
</template>
<script>
    export default {
        props: ['card'],
        computed: {
            cardColorClass() {
                return 'card--' + this.card.card_color;
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../styles/components/card.scss';
</style>
