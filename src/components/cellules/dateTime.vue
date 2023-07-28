<script setup>
import { ref,reactive } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker';
let props = defineProps({
    dateTime:"12/08/23 a 8h",
    isEdit:false
})
let date = ref()
let dateTime = reactive({
    date:'12/08/23',
    time:'08h23'
})
</script>
<template>

    <VueDatePicker  v-if="isEdit" :date="date" range/>
    <div v-else class="d-flex gap-3">
        <p class="m-0">
            <img class='icon' src="/icons/icons8-calendar-48.png" alt="">
            <span>{{ dateTime.date }}</span>
        </p>
        <p class="m-0">
            <img class='icon' src="/icons/icons8-time-64.png" alt="">
            <span>{{ dateTime.time }}</span>
        </p>
    </div>
</template>

<style scoped>
.icon{
    width:30px;
    height: 30px;
}
</style>