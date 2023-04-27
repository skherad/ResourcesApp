<template>
    <li class="resource__card">
        <div class="resource__div">
            <h2 class="resource__title"> {{ title }} </h2>
            <button @click="deleteResource(id)" class="resource__button">Delete</button>
        </div>
        <p class="resource__desc"> {{ description }} </p>
        <a :href=link class="resource__link" target="_blank">View Resource</a>
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

<style scoped>
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