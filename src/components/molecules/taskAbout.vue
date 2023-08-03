<script setup>
import { ref,reactive , unref} from 'vue'
let props = defineProps(['task'])
let modalTask = props.task

//task list el
let newTaskListElement = reactive({
    "isDelete":0,
    "label": '',
    "status": 0
})

let errorInput = ref(false)

function validation(){
    if(newTaskListElement.label==''){
        return false;
    }
    return true;
}
function addTask(){
    errorInput.value=false
    if(validation()){
        modalTask.list.push(newTaskListElement)
        newTaskListElement.label=''
    }
    else{
        errorInput.value=true
    }
}
</script>

<template>
    <section class="vh-100">
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
                                      class="rounded-circle d-flex justify-content-center align-items-center"
                                      style="width: 35px; height: 35px;background: rgba(12,12,12,.4);"
                                      > +
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

                            <form
                                class="d-flex justify-content-center align-items-center mt-1 mb-4"
                            >
                                <div class="form-outline flex-fill">
                                    <input
                                        type="text"
                                        id="form3"
                                        class="form-control form-control-md"
                                        :class="errorInput? 'border border-danger':''"
                                        v-model="newTaskListElement.label"

                                    />
                                </div>
                                <button
                                    class="btn btn-primary btn-md ms-2"
                                    @click.prevent="addTask"
                                >
                                    Add
                                </button>
                            </form>

                            <ul class="list-group mb-4">
                                <li
                                    v-for="el in modalTask.list"
                                    class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2"
                                >
                                    <div class="d-flex align-items-center">
                                        <input
                                            class="form-check-input me-2"
                                            type="checkbox"
                                            value=""
                                            aria-label="..."
                                            :checked="el.status"
                                            :disabled="el.isDelete"
                                        />
                                        <s v-if="el.isDelete"> {{ el.label }}</s>
                                        <span v-else>{{ el.label }}</span> 
                                    </div>
                                    <a
                                        href="#!"
                                        data-mdb-toggle="tooltip"
                                        title="Remove item"
                                    >
                                        <i
                                            class="fas fa-times text-primary"
                                        ></i>
                                    </a>
                                </li>
                            </ul>
                            <div class="actionModal">
                                <p class="d-flex justify-content-end gap-2">
                                    <button
                                        class="btn btn-outline-secondary btn-lg"
                                        @click="$emit('init')"
                                    >
                                        return
                                    </button>

                                    <button class="btn btn-primary btn-lg">
                                        save
                                    </button>
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
</style>
