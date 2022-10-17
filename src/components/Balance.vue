<script setup>
  import {computed} from "vue";
  import {useStore} from "vuex"
  const store = useStore()

  const balance = computed( () => store.state.balance)

  const statusCheck = () => balance.value < 0 ? "negative" : balance.value > 0 ? "positive" : ""

</script>

<template>
  <div class="balance" :class="statusCheck()" >
    <h2>Your Balance</h2>
    <h2>$ {{balance}}</h2>
  </div>
</template>


<style lang="scss" scoped>
    .balance{
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center ;  
        background-color: #121212;
        border: 2px solid #212121;
        border-radius: 15px;
        padding: 15px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        margin: 15px;
        h2{
        color: #fff;
        font-size: 1.5rem;
        margin: 10px 0;
        }
        &:hover{
        background-color: #212121;
        border:  2px solid #121212;
        }
        &.negative{
          border : 1px solid #FF285C;
        }
        &.positive{
          border : 1px solid #799062;
        }
    }
    @media screen and (max-width: 768px){
        .balance{
            width: 40%;
        }
    }
    @media screen and (max-width: 500px){
        .balance{
            width: 60%;
        }
    }
</style>