<template>
    <div>
        <button class='btn btn--uno' @click="callUno" :class="{ danger: timer < 4 }">UNO!</button>
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
        props: [],
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
        }
    }
</script>
<style lang="scss">

</style>
