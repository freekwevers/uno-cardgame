<template>
    <div class="modal">
        <div class="modal__inner">
            <ul class="colors">
                <li class="color">
                    <button class="card card--red" @click="chooseColor"></button><!-- /.card -->
                </li>
                <li class="color">
                    <button class="card card--yellow"></button><!-- /.card -->
                </li>
                <li class="color">
                    <button class="card card--green"></button><!-- /.card -->
                </li>
                <li class="color">
                    <button class="card card--blue"></button><!-- /.card -->
                </li>
            </ul>
        </div><!-- /.modal__inner -->
    </div><!-- /.modal -->
</template>
<script>
    export default {
        methods: {
            chooseColor() {
                console.log('choose color');
            }
        }
    }
</script>
<style lang="scss">
    @import '../../styles/base/settings';
    @import '../../styles/components/card';
    @import '../../styles/components/modal';
</style>
