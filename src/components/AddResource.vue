<template>
    <form class="form">
        <label class="form__label">Title</label>
        <input class="form__input"/>
        <label class="form__label">Description</label>
        <textarea class="form__text"></textarea>
        <label class="form__label">Link</label>
        <input class="form__input"/>
        <button class="form__button">Add Resource</button>
    </form>
</template>

<style>
.form {
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin: 0 2rem;
    display: flex;
    flex-direction: column;
    padding: 1rem;
}
.form__label {
    margin: 1rem 0;
    font-weight: bold;
}
.form__input {
    border: 1px solid grey;
    border-radius: 5px;
    padding: 0.5rem 1rem;
}
.form__text {
    border: 1px solid grey;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    height: 10rem;
}
.form__button {
    background-color: purple;
    color: white;
    padding: 1rem;
    justify-self: left;
    width: 10rem;
    border: none;
    border-radius: 5px;
    margin-top: 1rem;
}
</style>