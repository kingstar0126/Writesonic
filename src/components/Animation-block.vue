<template>
    <div ref="el"  class="max-w-8xl  mx-auto lg:w-full mt-16 relative z-[999] relat">
        <div  class=" w-[60rem] rounded-[32px] py-2 px-3 border-[13px] border-[#232d3f] bg-white relative">
            <animateHeaderVue class=" transition-all"  id="header" />
            <div class="flex">
                <sidebar />
                <contentBlock />
            </div>
            <generate />
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
                if(windowY >= 230){
                   headerPosition -= windowY / 10  - 23.3
                   headerScale -= windowY / 3000
                   if(headerPosition < 0 && headerScale < 1 ){
                    headerPosition = 0
                    headerScale = 1
                   }
                }   
                this.document.getElementById('header').style.transform = ` scale(${headerScale}) translateY(-${headerPosition}px)`

          });
      })

</script>

<style>
</style>
 