<script setup>
import { Modal } from 'usemodal-vue3';
let props = defineProps({
    visibility:{
        default:false
    },
    data:{
        default:null
    }
})
let emit = defineEmits(['delete','cancel'])
</script>


<template>
    <div>
        <Modal v-model:visible="props.visibility" :title="''" :okButton="{text:'Delete',onclick:$emit('delete',props.data)}" :cancelButton="{text:'cancel',onclick:$emit('cancel')}">
            <slot></slot>
        </Modal>
    </div>
</template>