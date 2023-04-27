<template>
    <TheHeader />
    <NavBar />
    <ul class="resource">
        <ResourceCard v-for="resource in storedResources" :key="resource.id" :id="resource.id" :title="resource.title"
            :description="resource.description" :link="resource.link" @delete-resource="removeResource" />
    </ul>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import ResourceCard from './components/ResourceCard.vue'
import NavBar from './components/NavBar.vue'

export default {
    components: {
        TheHeader,
        ResourceCard,
        NavBar
    },
    data() {
        return {
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

.resource {
    padding: 2rem;
    margin: 0;
}</style>