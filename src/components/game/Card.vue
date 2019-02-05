<template>
    <li class="card" :class=[cardColorClass]>
        <span class="card__nr card__nr--top">{{card.card_nr}}</span><!-- /.card__nr -->
        <span class="card__nr">{{card.card_nr}}</span><!-- /.card__nr -->
        <span class="card__nr card__nr--bottom">{{card.card_nr}}</span><!-- /.card__nr -->
    </li><!-- /.card -->
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
<style lang="scss">
    @import '../../styles/base/settings';
    @import '../../styles/components/card';
</style>
