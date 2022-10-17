<script setup>
    import { ref ,computed} from 'vue'
    import {useStore} from "vuex"
    import InputComp from './Input.vue';
    import {setValueList} from "../service/local"
    import {toast} from "./Notification/Toastify.js"

    const store = useStore()
    
    const isModalState = computed(() => store.state.isModalActive)
    const type = computed(() => store.state.type)

    const notification = ref([])
    const text = ref("")
    const amount = ref("")

    const addList = () => {
        const list = {
            id: new Date().getTime(),
            text: text.value,
            amount: +amount.value,
            type : type.value
        };
        if(text.value === "" || amount.value === "") return
        setValueList(list) // added to local storage
        store.commit("addValueList",{list})
        store.commit("changeModalState")    
        amount.value = ""
        text.value = ""
        notification.value.push(toast().success("Added Successfully")) // added to notification
        }

    const closeHandler = () => {
        store.commit("changeModalState") // close modal 
    }

</script>

<template>
    <div v-if="isModalState" class="modal">
        <div class="modal--layer"></div>
        <div class="modal--content">
            <h2>{{type}}</h2>
            <InputComp v-model:value="text" ></InputComp>
            <InputComp v-model:value="amount" ></InputComp>
            <button @click="addList" class="modal--content__btn">Add</button>
            <div class="modal--content__icon" @click="closeHandler">
                <span class="material-symbols-outlined">
                    close
                </span>
            </div>
        </div>
    </div>
    <notification-list :notifications="notification" />
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
                margin: 10px 0;
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

            &__icon{
                position: absolute;
                top: 10px;
                right: 10px;
                padding: 10px;
                cursor: pointer;
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