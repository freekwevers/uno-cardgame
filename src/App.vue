<template>
    <div id="app">
        <div class="body-wrapper">
            <app-header></app-header>
            <main class="main">
                <div class="container">
                    <div class="main-container">
                        <div class="content-container">
                            <div class="section">
                                <h1>My cool new vue application</h1>
                                <app-card :card="card" v-for="card in cards" :key="card.card_id"></app-card>
                            </div><!-- /.section -->
                        </div><!-- /.content-container -->
                    </div><!-- /.main-container -->
                </div><!-- /.container -->
            </main><!-- /.main -->

        </div><!-- /.body-wrapper -->
    </div><!-- /#app -->
</template>

<script>
import appHeader from '@/components/Header.vue';
import appCard from '@/components/game/Card.vue';

export default {
    name: "app",
    components: {
        appHeader,
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
                }
            ]
        }
    }
};
</script>

<style lang="scss">
    @import 'styles/style.scss';
</style>
