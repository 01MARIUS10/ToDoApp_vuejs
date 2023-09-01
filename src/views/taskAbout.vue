<script setup>
import { ref,provide,computed} from 'vue'
import { useTaskStore } from "@/stores/task.js"
import userSelectList from '@/views/taskAbout/userSelectList.vue'
import taskLists from '@/views/taskAbout/taskLists.vue'
import inputTaskElement from '@/views/taskAbout/inputTaskElement.vue'
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router'

let useTask = useTaskStore()
let route = useRouter()
let id = route.currentRoute.value.params.id
let modalTask = {...useTask.getTaskById(id)}
provide('modalTask',modalTask)



//addContributor
let isAddContributor = ref(false)
const toogleAddContributor= ()=>{
    isAddContributor.value = !isAddContributor.value
}

let addUserIcon = computed(()=>{
    return isAddContributor.value? '...':'+'
})

//click event
function save(){
    useTask.setTask(modalTask)
    emit('init')
}
</script>

<template>
    <section class="vh-100 myModal position-absolute">
        <div class="container py-5 h-100">
            <div
                class="row d-flex justify-content-center align-items-center h-100"
            >
                <div class="card-modal col col-xl-10">
                    <div class="card" style="border-radius: 15px">
                        <div class="card-body p-5 pb-2">
                            <div class="d-flex justify-content-between mb-2">
                                <div class="w-50 pl-2">
                                  <figure >
                                    <blockquote class="blockquote">
                                      <p>{{ modalTask.titre }}</p>
                                    </blockquote>
                                    <figcaption class="blockquote-footer">
                                        {{ modalTask.subtitle }}
                                    </figcaption>
                                  </figure>
                                </div>
                                <div class="contributors d-flex">
                                    <img
                                        v-for="contributor in modalTask.contributors"
                                        :src="contributor.image"
                                        class="shadow-1-strong rounded-circle"
                                        alt="avatar 1"
                                        style="width: 35px; height: 35px"
                                    />
                                    
                                    <p 
                                      v-if="modalTask.contributors.length"
                                      class="addContributor d-flex justify-content-center align-items-center"
                                      style="width: 35px; height: 35px;cursor:pointer;background: rgba(12,12,12,0);"
                                      > 
                                      <span
                                      class="d-flex justify-content-center align-items-center rounded-circle w-100 h-100"
                                      style="display:block;cursor:pointer;background: rgba(12,12,12,.4);"
                                      @click="toogleAddContributor"
                                        >{{ addUserIcon }}</span>
                                      <div 
                                      class="contributorToAdd px-3 py-2"
                                      v-if="isAddContributor">
                                      <userSelectList  />
                                      </div>
                                    </p>

                                </div>
                            </div>
                            <div class="description p-1">
                              <p>
                                <span>description :</span>
                                <span class="text-secondary">
                                    {{ modalTask.description }}
                                </span>
                              </p>
                            </div>

                            <inputTaskElement />
                            <taskLists />
                            <div class="actionModal">
                                <p class="d-flex justify-content-end gap-2">
                                    <router-link to="/">
                                        <button
                                            class="btn btn-outline-secondary btn-lg"
                                            @click="$emit('init')"
                                        >
                                            return
                                        </button>
                                    </router-link>
                                    <router-link to="/">
                                        <button 
                                        class="btn btn-primary btn-lg"
                                        @click="save"
                                        >
                                            save
                                        </button>
                                    </router-link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.myModal{
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
}
.description{
  font-size: 17px;
}
section {
    background: rgba(90, 90, 90, 0.35);
}
ul{
    max-height: 60vh;
    overflow: scroll;
}
.addContributor{
    position: relative;
}
.contributorToAdd{
    position: absolute;
    right: -20px;
    top:55px;
    width: 250px;
    border: solid 2px black;
    background: #bababa;
    border-radius: 10px;
    z-index: 99991;
}
.contributorToAdd::after{
    position: absolute;
    content:" ";
    width: 20px;
    height: 20px;
    top:-10px;
    right: 25px;
    transform: rotate(45deg);
    border-top: solid 2px black;
    border-left: solid 2px black ;
    background: #bababa;
    z-index: 99992;
}
</style>
