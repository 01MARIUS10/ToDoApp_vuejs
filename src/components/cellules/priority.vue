<script setup>
import { reactive } from "vue";
import { useTaskStore } from '../../stores/task';
let props = defineProps({
    priority: Number,
});
let {taskPriorities } = useTaskStore()
let badge = reactive({
    text : taskPriorities.filter((e)=>e.value==props.priority)[0].label,
    classe : {
        "bg-danger":  props.priority == 2,
        "bg-warning": props.priority == 1,
        "bg-success": props.priority == 0,
    }
});
</script>

<template>
    <h6 class="mb-0">
        <span class="badge" :class="badge.classe">{{ badge.text }}</span>
    </h6>
</template>
