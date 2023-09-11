<script setup>
import { useTaskStore } from "@/stores/task.js"
import taskModal from '@/components/molecules/taskModal.vue'
import { useRouter } from 'vue-router'
import { noReactive } from "@/composables/helper.js"
let modalTask = ''
let useTask = useTaskStore()
let route = useRouter()
let id = route.currentRoute.value.params.id
modalTask = noReactive(useTask.getTaskById(id));

</script>

<template>
    <taskModal :modalTask="modalTask"/>
</template>

