<template>
    <div>
        <button class='btn btn--uno' @click="callUno" :class="{ danger: timer < 4 }">Call UNO!</button>
        {{ timer }}
    </div>
</template>
<script>
    export default {
        data() {
            return {
                timerStartVlaue: 8,
                timer: 8,
                interval: null
            }
        },
        props: ['currentPlayer'],
        methods: {
            callUno() {
                clearInterval(this.interval);
                this.timer = this.timerStartValue;
                this.$emit('unoCalledEvent');
            },
            startCountDown() {
                this.interval = setInterval(() => {
                    this.timer--;

                    if ( this.timer === 0 ) {
                        clearInterval(this.interval);
                        this.timer = this.timerStartValue;
                        this.$emit('unoNotCalledEvent');
                    }
                }, 1000);
            },
        },
        created() {
            this.startCountDown();
            if ( this.currentPlayer.computerPlayer ) {
                const chance = Math.random() * 100;
                if ( chance < 90 ) {
                    // computer player calls uno
                    this.callUno();
                }
            };
        }
    }
</script>
<style lang="scss">

</style>
