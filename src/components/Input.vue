<script setup>

    const props = defineProps(["value"])
    const emits = defineEmits(["update:value"])

    const valueHandler = (e) => {
        emits("update:value", e.target.value)  
    }

</script>

<template>
    <div class="input">
        <input :value="props.value" @input="valueHandler" class="input--content" type="text" placeholder="Add Description" />
    </div>
</template>

<style lang="scss" scoped>
    .input{
        width: 100%;
        display: flex;
        justify-content: center;
        align-self: center;
        &--content{
            width: 60%;
            border: none;
            background-color: #121212;
            border: 2px solid #212121;
            border-radius: 15px;
            padding: 5px 15px;
            font-size: 1.2rem;
            color: #dcdcdc;
            outline: none;
            margin: 10px 0px;
        }
    }

    @media screen and (max-width: 768px){
        .input{
            &--content{
                width: 80%;
            }
        }
    }

</style>