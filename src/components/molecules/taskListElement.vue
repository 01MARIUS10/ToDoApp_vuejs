<script setup>
import { computed,ref } from 'vue';
import { useTaskStore } from '../../stores/task';
import priority from '@/components/cellules/priority.vue'
import dateTime from '../cellules/dateTime.vue'
import textSearchColor from '@/components/cellules/textSearchColor.vue'

import { getDateAndTime } from '@/services/task.js'

const useTask = useTaskStore()


let emit = defineEmits(['goToModal','edit'])
let props = defineProps(['tasks'])
let isEdit = ref(false)
let new_tasks = computed(()=>{
    return useTask.filterTask.map((task) => ({
        ...task,
        contributors: task.contributors.map(e=>e.image)
    }))
})

</script>

<template>
    <div class="overflow-scroll">
        <div
            class="card-body"
            data-mdb-perfect-scrollbar="true"
            style="position: relative; height: 400px"
        >
            <table class="table mb-0">
                <thead>
                    <tr>
                        <th scope="col">Team Member</th>
                        <th scope="col">Task</th>
                        <th scope="col">Priority</th>
                        <th scope="col">Deadline</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="task in new_tasks" :key="task.id" :id="`task${task.id}`">
                        {{  }}
                        <transition  name="task" >
                        <tr class="fw-normal" >
    
                                <th>
                                    <img v-for="image in task.contributors"
                                        :src="image"
                                        class="shadow-1-strong rounded-circle"
                                        alt="avatar 1"
                                        style="width: 55px; height: 55px"
                                    />
                                </th>
                                <td class="align-middle">
                                    <!-- <span>{{ task.titre }}</span> -->
                                    <textSearchColor  :text="task.titre" :searchText="useTask.filter.label"/>
                                </td>
                                <td class="align-middle">
                                    <priority  :priority="task.priority" />
                                </td>
                                <td class="align-middle">
                                    <dateTime  :datetime_="getDateAndTime(task)" :isEdit="isEdit"/>
                                </td>
                                <td class="align-middle">
                                    <span v-if="task.status" @click="task.status=!task.status"><img class='icon opacity-50' src="/icons/check.png" alt=""></span>
                                    <span v-else  @click="task.status=!task.status"><img class='icon opacity-50' src="/icons/uncheck.png" alt=""></span>
                                </td>
            
                                <td class="align-middle">
                                    <p class="m-0 d-flex gap-1">
                                        <span @click="emit('edit',task.id)"> <img class="icon" src="/icons/pen.png" alt=""> </span>
                                        <span @click="useTask.removeTask(task.id)"> <img class="icon" src="/icons/remove.png" alt=""> </span>
                                    </p>
                                </td>
                                
                            </tr>
                        </transition>
                    </template>
                </tbody>
            </table>
        </div>
          </div>
          
          <div class="card-footer text-end p-3">
            <button class="btn btn-primary">Add Task</button>
          </div>
</template>

<style scoped>
.icon{
    width:30px;
    height: 30px;
}
/* animation */
.task-leave-from{opacity:1};
.task-leave-to{opacity:0};
.task-from-active{transition: all 2s ease;}
</style>
