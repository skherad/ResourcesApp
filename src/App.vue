<template>
    <TheHeader />
</template>

<script>
import TheHeader from './components/TheHeader.vue'
export default {
    components: {
        TheHeader
    }
}
</script>

<style>
*, *::before, *::after{
	box-sizing: border-box;
}
body {
    font-family: 'Open Sans';
    font-weight: 400;
    margin: 0;
}
</style>