<template>
    <li class="card" :class=[cardColorClass]>
        <span class="card__nr card__nr--top" v-if="card.nr && card.type !== 'special'">{{card.nr}}</span><!-- /.card__nr -->
        <span class="card__nr" v-if="card.nr  && card.type !== 'special'">{{card.nr}}</span><!-- /.card__nr -->
        <span class="card__nr card__nr--bottom" v-if="card.nr  && card.type !== 'special'">{{card.nr}}</span><!-- /.card__nr -->
        <img :src="cardIconSrc" width="30" height="30" :alt="card.icon" v-if="card.icon" class="card__icon card__icon--top" />
        <img :src="cardIconSrc" width="80" height="80" :alt="card.icon" v-if="card.icon" class="card__icon" />
        <img :src="cardIconSrc" width="30" height="30" :alt="card.icon" v-if="card.icon" class="card__icon card__icon--bottom" />
    </li><!-- /.card -->
</template>
<script>
    export default {
        props: ['card'],
        computed: {
            cardColorClass() {
                return 'card--' + this.card.color;
            },
            cardIconSrc() {
                if ( this.card.icon === 'reverse' ) {
                    return '/icons/icon-reverse-direction.svg'
                }

                if ( this.card.icon === 'choose-color' ) {
                    return '/icons/icon-choose-color.svg'
                }

                if ( this.card.icon === 'next-player-take-four' ) {
                    return '/icons/icon-take-four-cards.svg'
                }

                if ( this.card.icon === 'next-player-skip-turn' ) {
                    return '/icons/icon-next-player-skip-turn.svg'
                }

                if ( this.card.icon === 'next-player-take-two' ) {
                    return '/icons/icon-next-player-take-two.svg'
                }
            }
        }
    }
</script>
<style lang="scss">
    @import '../../styles/base/settings';
    @import '../../styles/components/card';
</style>
