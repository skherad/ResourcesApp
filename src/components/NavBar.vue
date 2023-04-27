<template>
    <nav>
        <ul class="nav__list">
            <li class="nav__item nav__item--active">Stored Resources</li>
            <li class="nav__item">Add Resource</li>
        </ul>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
    .nav__list {
        list-style-type: none;
        display: flex;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        padding: 1rem;
        margin: 2rem 2rem 0 2rem;
        border-radius: 10px;
    }
    .nav__item {
        padding: 1rem;
        margin-right: 1rem;
        color: purple;
        border-radius: 5px;
    }
    .nav__item--active {
        background-color: purple;
        color: white;
    }
</style>