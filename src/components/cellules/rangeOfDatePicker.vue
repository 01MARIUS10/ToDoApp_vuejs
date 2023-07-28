<template>
    <div class="d-flex">
        <div class="vuepicker">
            <VueDatePicker  v-model="fromValue" :placeholder="fromValue? '':'Select Date from'" :min-date="null" :max-date="toValue"></VueDatePicker>
        </div>
        <div class="vuepicker">
            <VueDatePicker  v-model="toValue" :placeholder="toValue? '':'Select Date to'" :min-date="fromValue" :max-date="null"></VueDatePicker>
        </div>
        <div class="d-flex align-items-center">
            <img @click="drop_value=false" class="icon" src="/icons/icons8-poubelle-64.png" alt="">
        </div>
    </div>
</template>

<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import { ref } from 'vue';
let fromValue = ref('')
let toValue = ref('')
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