<script setup>
import { provide,reactive,computed,ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useTaskStore } from '../stores/task.js';

import taskListElement  from '@/components/molecules/taskListElement.vue'
import taskAbout from '@/components/molecules/taskAbout.vue'
import taskFilter from '../components/molecules/taskFilter.vue';

const useTask = useTaskStore()


//data to send in a modal component
let modal = reactive({
  show:0,
  task:{},
  getTask(task){
    modal.show=1
    modal.task=task
  },
  init:function(){
    modal.show=0
    modal.task={}
  }
})

function goToTask(id){
  modal.getTask(useTask.filterTask.filter(e=>e.id==id)[0])
}
let openModal = computed(()=>{
  return modal.show
})



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
            <taskListElement  @edit="goToTask"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="myModal position-absolute" v-if="openModal">
    <taskAbout :task="modal.task" @init="modal.init"/>
  </div>
</section>
</template>

<style>
.myModal{
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
}

</style>
