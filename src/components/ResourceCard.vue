<template>
    <ul class="resource">
        <li v-for="resource in storedResources" :key="resource.id">
            <base-card>
                <div class="resource__div">
                    <h2 class="resource__title"> {{ resource.title }} </h2>
                    <button @click="deleteResource(resource.id)" class="resource__button">Delete</button>
                </div>
                <p class="resource__desc"> {{ resource.description }} </p>
                <a :href=resource.link class="resource__link" target="_blank">View Resource</a>
            </base-card>
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
        "delete-resource": function (id) {
            if (id) {
                return true;
            }
            else {
                console.log("resource id is missing");
                return false;
            }
        }
    },
    methods: {
        deleteResource(id) {
            this.$emit("delete-resource", id);
        }
    },
}
</script>

<style scoped>
.resource {
    padding: 2rem;
    margin: 0;
    list-style-type: none;
}

.resource__div {
    display: flex;
    justify-content: space-between;
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
}</style>