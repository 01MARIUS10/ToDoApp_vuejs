<template>
    <div class="d-flex">
        <div class="vuepicker">
            <VueDatePicker  v-model="fromValue" :placeholder="fromValue? '':'Select Date from'" :min-date="null" :max-date="toValue" :format="dateFormat"></VueDatePicker>
        </div>
        <div class="vuepicker">
            <VueDatePicker  v-model="toValue" :placeholder="toValue? '':'Select Date to'" :min-date="fromValue" :max-date="null" :format="dateFormat"></VueDatePicker>
        </div>
        <div class="d-flex align-items-center">
            <img @click="reset()" class="icon" src="/icons/icons8-poubelle-64.png" alt="">
        </div>
    </div>
</template>

<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import { ref,watch } from 'vue';

let fromValue = ref('')
let toValue = ref('')
let emit = defineEmits(['from','to','reset'])
let dateFormat = 'yyyy-MM-dd';
function reset(){
    fromValue.value=null
    toValue.value=null
    emit('reset')
}
watch(fromValue,()=>{
    emit('from',fromValue.value)
})
watch(toValue,()=>{
    emit('to',toValue.value)
})
</script>
<style scoped>
.vuepicker{
    width:140px;
}
.icon{
  width: 20px;
  height: auto;
}
</style>