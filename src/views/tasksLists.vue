<script setup>
import { provide,reactive,computed,ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useTaskStore } from '../stores/task.js';
import { RouterLink } from 'vue-router';

import taskListElement  from '@/views/tasksLists/taskListElement.vue'
import taskFilter from '@/views/tasksLists/taskFilter.vue';

const useTask = useTaskStore()

</script>

<template>
  <section class="vh-100  position-relative" style="background-color: #eee;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-12 col-xl-10">
        <div class="card">
          <div class="card-header p-3 ">
            <h5 class="mb-0"><i class="fas fa-tasks me-2"></i>Task List</h5>
            <div class="listOption d-flex align-items-center ">
             <taskFilter  />
            </div>
          </div>
          <div class="">
            <taskListElement  />
          </div>
          <div class="card-footer text-end p-3">
            <router-link to="/task/new">
              <button class="btn btn-primary">Add Task</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>
</template>

<style>


</style>
