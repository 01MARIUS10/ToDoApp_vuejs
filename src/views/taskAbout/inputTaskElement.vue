<script setup>
import {inject,ref,reactive} from 'vue'
let modalTask = inject('modalTask')

// input new task list element
let input = ref('')
let errorInput = ref(false)

//new task list element
let newTaskListElement = reactive({
    "isDelete":0,
    "label": '',
    "status": 0
})


//click event
function validation(){
    if(newTaskListElement.label==''){
        return false;
    }
    return true;
}
function addTask(){
    errorInput.value=false
    if(validation()){
        modalTask.list.push({ ...newTaskListElement})
        newTaskListElement.label=''
    }
    else{
        input.value.focus()
        errorInput.value=true
    }

}
</script>

<template>
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
                                        ref="input"
                                        @focusout="errorInput=false"
                                    />
                                </div>
                                <button
                                    class="btn btn-primary btn-md ms-2"
                                    @click.prevent="addTask"
                                >
                                    Add
                                </button>
                            </form>

</template>