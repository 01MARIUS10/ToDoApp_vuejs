<script setup>
import { useTaskStore } from "@/stores/task.js"
import taskModal from '@/components/molecules/taskModal.vue'
import { useRouter } from 'vue-router'

let useTask = useTaskStore()
let route = useRouter()
let id = route.currentRoute.value.params.id
let modalTask = {...useTask.getTaskById(id)}



</script>

<template>
    <taskModal :modalTask="modalTask"/>
</template>

