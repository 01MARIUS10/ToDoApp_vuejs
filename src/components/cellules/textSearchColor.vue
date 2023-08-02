<script setup>
import { ref,watch,onMounted } from 'vue';
let props = defineProps(['text','searchText'])
let Mytext = ref(props.text)
let srh = ref('')
let concat = ref('')
console.log(Mytext.value ,props.text)

onMounted(()=>{
    freshColorSearch()
})
function freshColorSearch(){
    Mytext.value.innerHTML =props.text
    srh.value.innerHTML = ''
    concat.value.innerHTML=''
    if(props.searchText != ''){
        let ar = props.text.split(props.searchText)
        Mytext.value.innerHTML =ar[0]
        srh.value.innerHTML = props.searchText
        concat.value.innerHTML=ar[1]
    }
}
watch((props),()=>{
    freshColorSearch()
    console.log('textSearch',Mytext.value.innerHTML,srh.value.innerHTML,concat.value.innerHTML)

})
</script>
<template>
    <div class="text" >
        <span ref="Mytext"></span>
        <span class="e" ref="srh"></span>
        <span ref="concat"></span>
    </div>
</template>
<style>
.e{
    color:red
}
</style>