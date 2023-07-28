<script setup>
import {toRefs, ref,computed,watch, customRef} from 'vue'
    let props = defineProps(['label','options'])
    let emit = defineEmits(['value'])
    const {label,options} = toRefs(props)
    let drop_value = ref(false)
    let labelValue = computed(()=>{
      let a = options.value.filter(e=>e.value===drop_value.value)
      console.log("a is",a)
      return a[0]?  a[0].label:label.value
    })
    function getValue(option){
      drop_value.value=option.value
      emit('value',drop_value)
    }

</script>
<template>
<div class="d-flex m-2">
  <b-dropdown
    split
    split-variant="outline-primary"
    variant="primary"
    :text="labelValue"
    class="m-1"
  >
    <b-dropdown-item  v-for="option in options" >
      <span @click="getValue(option)" class="dropdown-item">{{ option.label }}</span>
    </b-dropdown-item>
  </b-dropdown>
  <div class="d-flex align-items-center">
    <img @click="drop_value=false" class="icon" src="/icons/icons8-poubelle-64.png" alt="">
  </div>
</div>
</template>
<style scoped>
.icon{
  width: 20px;
  height: auto;
}
</style>