<template>
    <li class="resource__card">
        <h2 class="resource__title"> {{ title }} </h2>
        <p class="resource__desc"> {{ description }} </p>
        <a :href=link class="resource__link">View Resource</a>
        <button @click="deleteResource(id)">Delete</button>
    </li>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        }
    },
    emits: {
        'delete-resource': function(id) {
            if(id) {
                return true
            } else {
                console.log('resource id is missing')
                return false
            }
        }
    },
    methods: {
        deleteResource(){
            this.$emit('delete-resource', this.id)
        }
    }
}
</script>