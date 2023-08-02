<template>
    <div class="w-100 d-flex">
        <div class="search d-flex align-items-center flex-grow-1">
            <div class="input-group">
                <input
                    type="text"
                    class="form-control border border-secondary"
                    placeholder="any task ..."
                />
                <div class="button-search d-flex justify-content-center align-items-center bg-secondary">
                    <img class="icon" src="/icons/whiteSearch.png" alt="">
                </div>
            </div>
        </div>
        <div class="filter d-flex">
            <div class="priority">
                <dropdown :label="'priority'" @value="setPriority" :options="useTask.taskPriorities" />
            </div>
            <div class="status">
                <dropdown :label="'status'" @value="setStatus" :options="useTask.taskStatus" />
            </div>
            <div class="date px-2 d-flex align-items-center">
                <rangeOfDatePicker @from="setFrom" @to="setTo"/>
            </div>
        </div>
    </div>
</template>
<script setup>
import { watch,reactive,ref } from "vue";
import { storeToRefs } from 'pinia'
import { useTaskStore } from "../../stores/task";
import dropdown from "@/components/cellules/dropdown.vue";
import rangeOfDatePicker from "@/components/cellules/rangeOfDatePicker.vue";

let useTask = useTaskStore();

//les setteur des state du filtre
function setPriority(value){
    console.log(useTask.filter.priority)
    useTask.filter.priority=value
}
function setStatus(value){
    console.log(useTask.filter.status)
    useTask.filter.status=value
}
function setFrom(value){
    console.log(useTask.filter.from)
    useTask.filter.from=value
}
function setTo(value){
    console.log(useTask.filter.to)
    useTask.filter.to=value
}

</script>

<style scoped>
.has-search .form-control {
    padding-left: 2.375rem;
}

.has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: #aaa;
}
.search input{
    position:relative;
    height:30px;
}
.search .button-search{
    position:absolute;
    top:0;
    bottom:0;
    right:0;
    width:30px
}
.search .button-search img{
    width:80%;
    height: 80%;
}
</style>
