<script setup>
import { useTaskStore } from "@/stores/task.js"
import taskModal from '@/components/molecules/taskModal.vue'
import { useRouter } from 'vue-router'
import { isRef,isReactive,isProxy } from "vue";

let useTask = useTaskStore()
let route = useRouter()
let id = route.currentRoute.value.params.id

let modalTask = {...useTask.getTaskById(id)}
console.log('io',modalTask)
let bug =isRef(modalTask) || isReactive(modalTask) ||isProxy(modalTask)
</script>

<template>
    <taskModal :modalTask="modalTask"/>
</template>

