<script setup>
import {ref} from "vue"
import Balance from "./components/Balance.vue"
import RadioBox from "./components/RadioBox.vue";
import AddModal from "./components/AddModal.vue";
import ValueList from "./components/ValueList.vue";

const radioName = ref(  // radio button name
        [
            { id: 1, text: 'Income' },
            { id: 2, text: 'Expense' }
        ]
    )   

</script>

<template>
  <div class="title">
    <h2>Income & Expense Tracker</h2>
  </div>
  <div class="container" >
    <Balance /> 
    <div class="dashboard">
        <div class="dashboard--header">
            <RadioBox v-for="name in radioName" :type="name" ></RadioBox>
        </div> 
        <div class="dashboard--content" >
          <ValueList></ValueList>  <!-- Component where the entered values are displayed -->
        </div>
    </div>
  </div>
    <Teleport to="#modal">
        <AddModal></AddModal> <!-- Component where the values are added --> 
    </Teleport>
</template>


<style lang="scss" scoped>

.title{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0px 0px 0px;
    h2{
        color: #ddd;
        font-size: 1.5rem;
    }
}
  .container{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #18191A;
    border: 2px solid #212121;
    border-radius: 20px;
    padding: 20px;
    margin-top: 50px;
  }
    .dashboard{
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
      &--header{
        display: flex;
      }
      &--content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 5px;
      }
    }
    @media screen and (max-width: 1350px){
      .container{
        width: 60%;
      }
    }
    @media screen and (max-width: 1200px){
      .container{
        width: 70%;
      }
    }
    @media screen and (max-width: 1000px){
      .container{
        width: 80%;
      }
    }
    @media screen and (max-width: 800px){
      .container{
        width: 90%;
      }
    }
    @media screen and (max-width: 600px){
      .container{
        width: 100%;
      }
    }
</style>