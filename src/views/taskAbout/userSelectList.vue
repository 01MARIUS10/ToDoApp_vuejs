<script setup>
import {useContributorStore} from "@/stores/user.js"
import {getDifference} from "@/composables/helper.js"
import {inject,computed,toRaw} from 'vue'

let useUser = useContributorStore()
let modalTask = inject('modalTask')

let notContributor = computed(()=>{
    return getDifference(useUser.contributors,modalTask.contributors)
})
const addContributor = (e)=>{
    modalTask.contributors.push(e)
}
let emit = defineEmits(['close'])

</script>

<template>
    <div class="">
        <div class="" v-if="notContributor.length==0">
            <p class="text text-danger">empty</p>
        </div>
        <div class="" v-else>
            <h1 class="h5 text-center" >Ajouter aussi :</h1>
            <div 
            class="contrib d-flex align-items-center gap-2 mb-1 px-2 py-1"
            v-for="user in notContributor"
            @click="addContributor(user)"
            >
                <img 
                :src="user.image"
              class="shadow-1-strong rounded-circle"
              alt="avatar 1"
              style="width: 35px; height: 35px">
                <p class="mb-0">{{ user.name }}</p>
            </div>
        </div>
        <div class="action d-flex justify-content-end"
        >
        
      </div>
    </div>
</template>

<style scoped>
.contrib:hover{
        background: white;
}
</style>