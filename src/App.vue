<template>
    <TheHeader />
    <NavBar @nav-bar="setNav"/>
    <!-- dynamic component selection -->
    <component 
        :is="selectedNav" 
        :stored-resources="storedResources"
        @delete-resource="removeResource"
        @add-resource="AddNewResource"
        ></component>
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
                    link: 'https://google.ca'
                },
            ]
        }
    },
    methods: {
        removeResource(id) {
            this.storedResources = this.storedResources.filter(e=>e.id!==id)
        },
        setNav(nav) {
            this.selectedNav = nav
        },
        AddNewResource(obj){
            let newResource = {id:this.storedResources.length+1, ...obj}
            this.storedResources.unshift(newResource)
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