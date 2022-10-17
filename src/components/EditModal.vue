<script setup>
import { computed , ref} from "vue";
import {useStore} from "vuex"
import InputComp from './Input.vue';
import {editValue} from "../service/local"

const store = useStore()
const props = defineProps(["selected"])

const isEditModalActive = computed(() => store.state.isEditModalActive)
const list = computed(() => store.state.valueList.find(item => item.id === props.selected))

const editText = ref("")
const editAmount = ref("")


const editModalHandler = () => {
    const editList = {
        id: props.selected,
        text: editText.value,
        amount: +editAmount.value,
        type : list.value.type
    };
    if(editText.value === "" || editAmount.value === "") return
    store.commit("editValueList", editList)
    store.commit("changeEditModalState")
    editValue(editList)
    editText.value = ""
    editAmount.value = ""
}

const closeHandler = () => {
    store.commit("changeEditModalState")
}

</script>

<template>
    <div v-if="isEditModalActive" class="modal">
        <div class="modal--layer"></div>
        <div class="modal--content">
            <h2>Edit</h2>
            <InputComp v-model:value="editText" ></InputComp>
            <InputComp v-model:value="editAmount" ></InputComp>
            <button @click="editModalHandler" class="modal--content__btn">Save</button>
            <div class="modal--content__icon" @click="closeHandler">
                <span class="material-symbols-outlined">
                    close
                </span>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.modal{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        transition: all 0.3s ease-in-out;
        &--layer{
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.582);
            transition: all 0.3s ease-in-out;
        }
        &--content{
            width: 50%;
            height: 45%;
            background-color: #121212;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: all 0.3s ease-in-out;
            h2{
                color: #fff;
                font-size: 2rem;
                margin-bottom: 1rem;
            }
            &__icon{
                position: absolute;
                top: 10px;
                right: 10px;
                padding: 10px;
                cursor: pointer;
            }
            &__btn{
                width: 60%;
                margin: 1rem 0px;
                border: 1px solid #212121;
                background-color: #212121;
                border-radius: 15px;
                padding: 5px 15px;
                font-size: 1.2rem;
                color: #dcdcdc;
                outline: none;
                cursor: pointer;
                &:hover{
                    background-color: #121212;
                    border: 1px solid #212121;
                }
            }
        }
    }
    @media screen and (max-width: 1350px){
      .modal{
        &--content{
            width: 60%;
            height: 40%;
        }
      }
    }
    @media screen and (max-width: 1200px){
      .modal{
        &--content{
            width: 70%;
            height: 40%;
        }
      }
    }
    @media screen and (max-width: 1000px){
        .modal{
            &--content{
                width: 80%;
                height: 40%;
            }
        }
    }
    @media screen and (max-width: 800px){
        .modal{
            &--content{
                width: 90%;
                height: 40%;
            }
        }
    }
    @media screen and (max-width: 600px){
        .modal{
            &--content{
                width: 100%;
                height: 40%;
                border-radius: 0px;
            }
        }
    }
</style>