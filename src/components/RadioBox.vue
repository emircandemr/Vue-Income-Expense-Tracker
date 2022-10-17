<script setup>
    import {useStore} from "vuex"
    const store = useStore()

    const props = defineProps(["type"])

    const clickHandler = (e) => {
       store.commit("changeType",e.target.value) 
       store.commit("changeModalState")
    }

</script>

<template>
  <div>
    <label class="rad-label" >
        <input type="radio" class="rad-input" name="rad" :value="props.type.text" @click="clickHandler" >
        <div class="rad-design" :class=props.type.text ></div>
        <div class="rad-text">{{type.text}}</div>
  </label>
  </div>
</template>


<style lang="scss" scoped>
.rad-label {
  display: flex;
  align-items: center;
  border-radius: 100px;
  padding: 14px 16px;
  margin: 20px 5px 10px 5px;
  cursor: pointer;
  transition: .3s;
}

.rad-label:hover,
.rad-label:focus-within {
  background: hsla(0, 0%, 80%, .14);
}

.rad-input {
  position: absolute;
  left: 0;
  top: 0;
  width: 1px;
  height: 1px;
  opacity: 0;
  z-index: -1;
}

.rad-design {
  width: 22px;
  height: 22px;
  border-radius: 100px;
  position: relative;

  &.Income {
    background: linear-gradient(to right bottom, #799062 , #889e73);
  }

  &.Expense {
    background: linear-gradient(to right bottom, #FF285C , #FF285C);
  }

}

.rad-design::before {
  content: '';

  display: inline-block;
  width: inherit;
  height: inherit;
  border-radius: inherit;

  background: hsl(0, 0%, 90%);
  transform: scale(1.1);
  transition: .3s;
}

.rad-input:checked+.rad-design::before {
  transform: scale(0);
}

.rad-text {
  color: hsl(0, 0%, 60%);
  margin-left: 14px;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 900;

  transition: .3s;
}

.rad-input:checked~.rad-text {
  color: hsl(0, 0%, 40%);
}


</style>