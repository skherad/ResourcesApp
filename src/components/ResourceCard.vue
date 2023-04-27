<template>
    <ul class="resource">
        <li class="resource__card" v-for="resource in storedResources" :key="resource.id">
            <div class="resource__div">
                <h2 class="resource__title"> {{ resource.title }} </h2>
                <button @click="deleteResource(resource.id)" class="resource__button">Delete</button>
            </div>
            <p class="resource__desc"> {{ resource.description }} </p>
            <a :href=resource.link class="resource__link" target="_blank">View Resource</a>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        storedResources: {
            type: Array,
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

<style scoped>
.resource {
    padding: 2rem;
    margin: 0;
}
.resource__div {
    display: flex;
    justify-content: space-between;
}
.resource__card {
        border-radius: 10px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        padding: 2rem 1rem;
        list-style-type: none;
        width: 100%;
        margin-bottom: 2rem;
}
.resource__title {
    margin: 0;
}
.resource__button {
    border: none;
    padding: 0;
    margin-right: 2rem;
    background: none;
    cursor: pointer;
    color: purple;
}
.resource__link {
    text-decoration: none;
    color: orangered;
}
</style>