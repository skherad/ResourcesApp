<template>
    <TheHeader />
    <NavBar @nav-bar="setNav"/>
    <!-- <ResourceCard :stored-resources="storedResources" /> -->
    <!-- <AddResource /> -->
    <component :is="selectedNav" :stored-resources="storedResources"></component>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import ResourceCard from './components/ResourceCard.vue'
import NavBar from './components/NavBar.vue'
import AddResource from './components/AddResource.vue'

export default {
    components: {
        TheHeader,
        ResourceCard,
        NavBar,
        AddResource
    },
    data() {
        return {
            selectedNav: 'ResourceCard',
            storedResources: [
                {
                    id: '1',
                    title: 'Official Guide',
                    description: 'The Official Vue.js documentation',
                    link: 'https://vuejs.org/guide/introduction.html'
                },
                {
                    id: '2',
                    title: 'Google',
                    description: 'Learn to google...',
                    link: 'https://vuejs.org/guide/introduction.html'
                },
            ]
        }
    },
    methods: {
        removeResource(id) {
            let selectedResource = this.storedResources.filter(e => e.id === id)
            console.log('remove ', selectedResource)
        },
        setNav(nav) {
            this.selectedNav = nav
            console.log(nav)
        }
    }
}
</script>

<style>
*,
*::before,
*::after {
    box-sizing: border-box;
}

body {
    font-family: 'Open Sans';
    font-weight: 400;
    margin: 0;
}
</style>