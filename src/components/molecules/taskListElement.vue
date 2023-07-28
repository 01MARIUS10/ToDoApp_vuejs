<script setup>
import { computed } from 'vue';
import priority from '@/components/cellules/priority.vue'
import dateTime from '../cellules/dateTime.vue'

let props = defineProps(['tasks'])
let emit = defineEmits(['removeTask','edit'])
let new_tasks = computed(()=>{
    return props.tasks.map((task) => ({
        ...task,
        contributors: task.contributors.map(e=>e.image)
    }))
})
function removeTask(id){
    let idDOM = `#task${id}`
    let item = document.querySelector(idDOM)
    item.classList.add('removed-item')
    let items = item.parentNode.childNodes
    items = Array.from([...items])
    items.pop()
    let k = items.indexOf(item)
    setTimeout(()=>{
        for(let i=k+1;i<items.length;i++){
            items[k+1].classList.add('listAnimation')
        }       
    },1500)
    setTimeout(()=>{
        for(let i=k+1;i<items.length;i++){
            items[k+1].classList.remove('listAnimation')
        }
        emit('removeTask',id)
    },2900)
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
                        <th scope="col">Team Member</th>
                        <th scope="col">Task</th>
                        <th scope="col">Priority</th>
                        <th scope="col">Deadline</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="task in new_tasks" :key="task.id"  class="fw-normal" :id="`task${task.id}`">
                        <th>
                            <img v-for="image in task.contributors"
                                :src="image"
                                class="shadow-1-strong rounded-circle"
                                alt="avatar 1"
                                style="width: 55px; height: 55px"
                            />
                        </th>
                        <td class="align-middle">
                            <span>{{ task.titre }}</span>
                        </td>
                        <td class="align-middle">
                            <priority  :priority="task.priority" />
                        </td>
                        <td class="align-middle">
                            <dateTime  :dateTime="task.deadline" :isEdit="false"/>
                        </td>
                        <td class="align-middle">
                            <span v-if="task.status" @click="task.status=!task.status"><img class='icon opacity-50' src="/icons/check.png" alt=""></span>
                            <span v-else  @click="task.status=!task.status"><img class='icon opacity-50' src="/icons/uncheck.png" alt=""></span>
                        </td>
    
                        <td class="align-middle">
                            <p class="m-0 d-flex gap-1">
                                <span @click="$emit('edit',task.id)"> <img class="icon" src="/icons/pen.png" alt=""> </span>
                                <span @click="removeTask(task.id,$event)"> <img class="icon" src="/icons/remove.png" alt=""> </span>
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
          </div>
          
          <div class="card-footer text-end p-3">
            <button class="btn btn-primary">Add Task</button>
          </div>
</template>

<style scoped>
.removed-item {
    animation: removed-item-animation 1.8s  ease forwards;
    transform-origin: 0% 100%;
}
.listAnimation{
    animation: listAnimation .3s  cubic-bezier(.19,.59,.79,.74) forwards;
}


@keyframes removed-item-animation {
    0% {
        opacity: 1; 
        transform: translate(0,0);
}

    100% {
        opacity: 0;
        transform: translate(8%,0);
        
    } 
}
@keyframes listAnimation {
    0%{
        transform: translateY(0);
    }
    100%{
        transform: translateY(-74px);
    }
}
.icon{
    width:30px;
    height: 30px;
}
</style>
