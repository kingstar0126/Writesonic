<template>
    <div ref="el" class="relative bg-[#111827] h-[500vh] z-[999999] rounded px-12  mx-auto">
    <div class=" mt-16 h-fit bg-white rounded-[32px] sticky z-[999] top-[5vh] border-[#232d3f] border-[13px]  ">
        <div  class="w-[60rem] rounded-[32px] py-2 px-3   bg-white relative z-[888]">
            <animateHeaderVue :contentAnimateBlockPosition="contentAnimateBlockPosition" class="relative z-[9999] transition-all"  id="header" />
            <div class="flex relative  overflow-hidden"> 
                <sidebar id="sidebar" />
                <contentBlock id="contentBlock" />
            </div>
            <generate id='generateBlock'/>
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
                let headerBlockPosition = 32
                let headerBlockScale = 1.19
                let windowY = y.value.toFixed(1)
                let contentAnimateBlockPosition = 0
                let contentBlockFinalyPosition = 2441
                let generateBlockPosition = 1.19
                let sidebarBlockPosition = 0
                let startAnimatePosition = 1920
                let modalBlockPosition = 0
                if(windowY >= 230){
                    headerBlockPosition -= windowY / 10  - 23.3
                    headerBlockScale -= windowY / 3000
                   if(headerBlockPosition < 0 && headerBlockScale < 1 ){
                    headerBlockPosition = 0
                    headerBlockScale = 1
                    contentAnimateBlockPosition = windowY -= 568
                    if(contentAnimateBlockPosition >= contentBlockFinalyPosition){
                        contentAnimateBlockPosition = contentBlockFinalyPosition
                     }
                    generateBlockPosition -= contentAnimateBlockPosition / 3000
                    if(contentAnimateBlockPosition >= 2342){
                        modalBlockPosition = windowY -= (contentBlockFinalyPosition - 98.6)
                        console.log(modalBlockPosition)
                    }
                   }
                   if(contentAnimateBlockPosition >= startAnimatePosition ){
                        sidebarBlockPosition = contentAnimateBlockPosition - startAnimatePosition
                        let sidbarBlockFinalyPosition = 492
                        if(sidebarBlockPosition >= sidbarBlockFinalyPosition){
                            sidebarBlockPosition = sidbarBlockFinalyPosition
                            sidebarBlockPosition / 10
                        }
                    } 
                   if(generateBlockPosition <= 0.94){
                    generateBlockPosition = 0.94
                   }
                }   
                this.document.getElementById('header').style.transform = ` scale(${headerBlockScale}) translateY(-${headerBlockPosition}px)`
                this.document.getElementById('contentBlock').style.transform = `translateY(-${contentAnimateBlockPosition.toFixed(0)}px)`
                this.document.getElementById('generateBlock').style.transform = `scale(${generateBlockPosition})`
                this.document.getElementById('sidebar').style.transform = `translateY(-${sidebarBlockPosition}px)`
                console.log(contentAnimateBlockPosition.toFixed(0));
          });
      })

</script>

<style>
</style>
 