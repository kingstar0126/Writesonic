<template>
    <div ref="el" class="relative bg-[#111827] h-[500vh] z-[999999] rounded px-12  mx-auto">
    <div class=" mt-16 h-fit bg-white rounded-[32px] sticky z-[999] top-[5vh] border-[#232d3f] border-[13px]  ">
        <div  v-if="y <= 3510" id="animatemainBlock"   class="w-[60rem] rounded-[32px] py-2 px-3   bg-white relative z-[888]">
            <animateHeaderVue  :y="y" class="animation_header relative z-[9999] transition-all"  id="header" />
            <div class="flex relative  overflow-hidden"> 
                <sidebar id="sidebar" />
                <contentBlock id="contentBlock" />
            </div>
            <generate id='generateBlock'/>
            <article1 v-if="y >= 2992" class="z-[999999999]"  id="article1" />
        </div>
        <div v-else  id="animationBlockPage2" class="w-[60rem] overflow-hidden h-[542px] rounded-[32px] py-2 px-3 bg-white relative">
            <animateHeader2Vue />
            <contentBlock2 />
        </div>
    </div> 
    </div>
</template>
<script setup>
import animateHeaderVue from "./animations/animate-header.vue";
import animateHeader2Vue from "./animations/animate-header2.vue";
import sidebar from "./animations/sidebar.vue";
import contentBlock from "./animations/content-block.vue"
import generate from "./animations/generate.vue";
import article1 from "./animations/article-1.vue";
import contentBlock2 from './animations/content_blocks/content-6.vue'
import { useScroll,useWindowScroll} from '@vueuse/core'
import { onMounted,ref } from "vue";

const el = ref()
const scroll = useScroll(el)
const { y } = useWindowScroll()
console.log(scroll.y.value);
onMounted(() => {
          window.addEventListener("scroll", function () {
                var headerBlockPosition = 32
                var headerBlockScale = 1.19
                var windowY = y.value.toFixed(1)
                var contentAnimateBlockPosition = 0
                var contentBlockFinalyPosition = 2441
                var generateBlockPosition = 1.19
                var sidebarBlockPosition = 0
                var startAnimatePosition = 1920
                var modalBlockPosition = 0
                var modalYPosition = 0
                var modalOpacity = 0
                var mainBlockOpacity = 1
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
                        modalBlockPosition = parseInt(windowY -= (contentBlockFinalyPosition - 98.6))
                        modalBlockPosition /= 10
                        modalYPosition = modalBlockPosition
                        modalOpacity += modalYPosition / 30
                        if(modalYPosition >= 28.8){
                            modalYPosition = 28.8
                           }
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
                if(windowY >= 385){
                    mainBlockOpacity -= (windowY / 600)
                }
                else{
                    mainBlockOpacity  =1
                }
                this.document.getElementById('header').style.transform = ` scale(${headerBlockScale}) translateY(-${headerBlockPosition}px)`
                this.document.getElementById('contentBlock').style.transform = `translateY(-${contentAnimateBlockPosition.toFixed(0)}px)`
                this.document.getElementById('generateBlock').style.transform = `scale(${generateBlockPosition})`
                this.document.getElementById('sidebar').style.transform = `translateY(-${sidebarBlockPosition}px)`
                this.document.getElementById('article1').style.transform = `translateY(-${modalYPosition}px)`
                this.document.getElementById('article1').style.opacity = `${modalOpacity}`
                this.document.getElementById('animatemainBlock').style.opacity = `${mainBlockOpacity}`
                // console.log(windowY);
                console.log(y)
          });
      })

</script>

<style>
.animation_header{
    transform: scale(1.19) translateY(-30px);
}
</style>
 
