<template>
    <div id="app">
        <div class="body-wrapper">
            <main class="main">
                <div class="container">
                    <div class="main-container">
                        <div class="content-container">
                            <div class="section">
                                <ul class="my-cards">
                                    <app-card :card="card" v-for="card in cards" :key="card.card_id"></app-card>
                                </ul><!-- /.my-cards -->
                            </div><!-- /.section -->
                        </div><!-- /.content-container -->
                    </div><!-- /.main-container -->
                </div><!-- /.container -->
            </main><!-- /.main -->
        </div><!-- /.body-wrapper -->
    </div><!-- /#app -->
</template>

<script>
import appCard from '@/components/game/Card.vue';

export default {
    name: "app",
    components: {
        appCard
    },
    data() {
        return {
            cards: [
                {
                    card_id: 'red-1',
                    card_nr: '1',
                    card_color: 'red'
                },
                {
                    card_id: 'red-2',
                    card_nr: '2',
                    card_color: 'red'
                },
                {
                    card_id: 'yellow-1',
                    card_nr: '1',
                    card_color: 'yellow'
                },
                {
                    card_id: 'yellow-2',
                    card_nr: '2',
                    card_color: 'yellow'
                },
                {
                    card_id: 'green-1',
                    card_nr: '1',
                    card_color: 'green'
                },
                {
                    card_id: 'green-2',
                    card_nr: '2',
                    card_color: 'green'
                },
                {
                    card_id: 'blue-1',
                    card_nr: '1',
                    card_color: 'blue'
                },
                {
                    card_id: 'blue-2',
                    card_nr: '2',
                    card_color: 'blue'
                }
            ]
        }
    }
};
</script>

<style lang="scss">
    @import 'styles/style.scss';
</style>
