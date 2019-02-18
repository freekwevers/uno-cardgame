<template>
    <div class="modal">
        <div class="modal__inner">
            <ul class="colors">
                <li v-for="color in colors" class="color">
                    <button class="card" :class="['card--' + color]" @click="chooseColor(color)"></button>
                </li>
            </ul>
        </div><!-- /.modal__inner -->
    </div><!-- /.modal -->
</template>
<script>
    export default {
        data() {
            return {
                colors: ['red', 'yellow', 'green', 'blue']
            }
        },
        methods: {
            chooseColor(color) {
                this.$emit('chooseColorEvent', color);
            }
        }
    }
</script>
<style lang="scss">
    @import '../../styles/base/settings';
    @import '../../styles/components/card';
    @import '../../styles/components/modal';
</style>
