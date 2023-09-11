<script setup>
import { computed,ref } from 'vue';
import { useTaskStore } from '@/stores/task';
import priority from '@/components/cellules/priority.vue'
import dateTime from '@/components/cellules/dateTime.vue'
import textSearchColor from '@/components/cellules/textSearchColor.vue'
import { getDateAndTime } from '@/services/task.js'
import { RouterLink } from 'vue-router';
import { toast } from "@/services/toastService/toast.js";


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

function toogleArrangeByLabel(){
    useTask.arrange.label=!useTask.arrange.label
}
function toogleArrangeByPriority(){
    useTask.arrange.priority=!useTask.arrange.priority
}
function toogleArrangeByStatus(){
    useTask.arrange.deadline=!useTask.arrange.deadline
}
function toogleArrangeByDeadline(){
    useTask.arrange.status=!useTask.arrange.status
}

function removeEl(id){
    useTask.removeTask(id)
}


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
                        <th class="arrange" scope="col">Team Member</th>
                        <th class="arrange" scope="col" @click="toogleArrangeByLabel">Task</th>
                        <th class="arrange" scope="col" @click="toogleArrangeByPriority">Priority</th>
                        <th class="arrange" scope="col" @click="toogleArrangeByDeadline">Deadline</th>
                        <th class="arrange" scope="col" @click="toogleArrangeByStatus">Status</th>
                        <th class="arrange" scope="col" >Actions</th>
                    </tr>
                </thead>
                    <transition-group tag="tbody"  name="task" >
                        <tr class="fw-normal" v-for="task in new_tasks" :key="task.id" >
                                <th class="d-flex">
                                    <img v-for="image in task.contributors.filter((e,i)=>i<3)"
                                        :src="image"
                                        class="shadow-1-strong rounded-circle"
                                        alt="avatar 1"
                                        style="width: 55px; height: 55px"
                                    />
                                    <p 
                                        v-if="task.contributors.length>3"
                                        class="mb-0 rounded-circle d-flex justify-content-center align-items-center"
                                        style="width: 55px; height: 55px;background:#bababa"
                                        >+{{ task.contributors.length - 3 }}
                                    </p>
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
                                        <router-link :to='`/task/${task.id}`'>
                                            <span> <img class="icon" src="/icons/pen.png" alt=""> </span>
                                        </router-link>
                                        
                                        <span @click="removeEl(task.id)"> <img class="icon" src="/icons/remove.png" alt=""> </span>
                                    </p>
                                </td>
                                
                            </tr>
                    </transition-group>
            </table>
            <transition>
                <div v-if="new_tasks.length==0" class="no_content" name="noContent">
                    <p class="border border-danger text-center">
                        No content
                    </p>
                </div>
            </transition>
        </div>
    </div>
          
</template>

<style scoped >
.icon{
    width:30px;
    height: 30px;
}
.arrange{
    cursor: pointer;
}
.arrange:hover{
    background: gray;
    color:whitesmoke
}

/* animation */
.task-leave-from{opacity:1;}
.task-leave-to{opacity:0;}
.task-leave-active{transition: all 1s ease;}

/* animation */
.noContent-enter-from{opacity:0;}
.noContent-enter-to{opacity:1;}
.noContent-enter-active{transition: all 1s ease;}
</style>
