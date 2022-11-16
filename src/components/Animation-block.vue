<template>
    <div ref="el" class="relative bg-[#111827] h-[500vh] z-[999999] rounded px-12  mx-auto">
    <div class=" mt-16 h-fit bg-white rounded-[32px] sticky z-[999] top-[5vh] border-[#232d3f] border-[13px]  ">
        <div  class="w-[60rem] rounded-[32px] py-2 px-3   bg-white relative z-[888]">
            <animateHeaderVue class="relative z-[9999] transition-all"  id="header" />
            <div class="flex relative  overflow-hidden"> 
                <sidebar />
                <contentBlock id="contentBlock" />
            </div>
            <generate/>
        </div>
    </div> 
    </div>
</template>
<script setup>
import animateHeaderVue from "./animations/animate-header.vue";
import sidebar from "./animations/sidebar.vue";
import contentBlock from "./animations/content-block.vue"
import generate from "./animations/generate.vue";
import { useScroll,useWindowScroll} from '@vueuse/core'
import { onMounted,ref } from "vue";

const el = ref()
const scroll = useScroll(el)
const { y } = useWindowScroll()
console.log(scroll.y.value);
onMounted(() => {
          window.addEventListener("scroll", function () {
                var headerPosition = 32
                var headerScale = 1.19
                var windowY = y.value.toFixed(1)
                var animatePosition = 0
                if(windowY >= 230){
                   headerPosition -= windowY / 10  - 23.3
                   headerScale -= windowY / 3000
                   if(headerPosition < 0 && headerScale < 1 ){
                    headerPosition = 0
                    headerScale = 1
                    animatePosition = windowY -= 568
                    
                   }
                }   
                this.document.getElementById('header').style.transform = ` scale(${headerScale}) translateY(-${headerPosition}px)`
                this.document.getElementById('contentBlock').style.transform = `translateY(-${animatePosition.toFixed(0)}px)`
                console.log(animatePosition.toFixed(0));
          });
      })

</script>

<style>
</style>
 