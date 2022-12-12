<template>
    <div class="overflow-hidden pt-36">
        <div class="max-w-[1224px] w-full relative mx-auto overflow-visible flex-col justify-center items-stretch gap-4 object-fill grid-cols-[1fr,1fr] auto-cols-fr ">
            <div clas="box_video">
                <h2 class="flex m-auto w-fit h-fit text-[56px] lg:text-5xl md:text-4xl xl:text-2xl  leading-[78px] text-center font-bold">Hear from the <img class="mx-3 w-16 lg:hidden" src="https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6056545ca5a_rose-check.png" alt=""> Writesonic Community</h2>
                <p class="mt-6 max-w-[1100px] mx-auto text-[#9ca3af] text-2xl text-center lg:text-xl md:text-lg xl:text-base">
                The future of writing is here! Let our users show you a glimpse of it.
                </p>
                <div class="block-slider overflow-hidden h-[850px] lg:h-auto mt-12 px-24 rounded-[48px] pt-16 bg-[#050a1b] lg:pt-4 lg:pb-24 lg:px-3 lg:rounded-none">
                    <div class="slider h-auto max-w-[1128px] mx-auto bg-transparent relative">
                        <div class="w-slider z-[1] relative block left-0 right-0 h-full overflow-visible whitespace-nowrap">
                            <opinion1 :style="{ 'margin-left': '-' + (100 * slideIndex) + '%'}"  />
                            <opinion2 />
                            <opinion3 />
                        </div>
                        <div class="slide-nav  absolute bottom-[-40px] mt-3 top-auto left-0 w-full right-0 m-auto">
                            <button @click="prevSlide" class="arrow-right rounded-[50px] bottom-0 bg-no-repeat bg-[auto,10px] bg-center ml-72 lg:ml-0 absolute -top-4 hover:bg-[#1f2937] right-24 bg-arrow-right w-8 h-8 left-0  bg-[#4b5563]"></button>
                              <div class="flex w-fit m-auto ">
                                  <div @click="(slideIndex = 0)" class="slide-dot mx-3  cursor-pointer w-20 h-[2px] xl:w-12" :class="{'bg-white' : slideIndex === 0, 'bg-[#4B5563]' : slideIndex !== 0 }"></div>
                                  <div @click="(slideIndex = 1)" class="slide-dot mx-3  cursor-pointer w-20 h-[2px] xl:w-12" :class="{'bg-white' : slideIndex === 1, 'bg-[#4B5563]' : slideIndex !== 1 }"></div>
                                  <div @click="(slideIndex = 2)" class="slide-dot mx-3  cursor-pointer w-20 h-[2px] xl:w-12" :class="{'bg-white' : slideIndex === 2, 'bg-[#4B5563]' : slideIndex !== 2 }"></div>
                               </div>
                               <button @click="nextSlide" class="arrow-right rounded-[50px] bottom-0 bg-no-repeat bg-[auto,10px] bg-center mr-72 lg:mr-0 -scale-x-100 absolute -top-4 hover:bg-[#1f2937] right-0 bg-arrow-right w-8 h-8   bg-[#4b5563]"></button>
                         </div>
                      </div>
                      <div class="flex justify-center w-full pt-24">
                        <Button title="Write articles that rank for free" />
                      </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import Button from '@/components/tools/Button.vue'
import opinion1 from './opinion1.vue';
import opinion2 from './opinion2.vue';
import opinion3 from './opinion3.vue';
let slideIndex = ref(0)


function nextSlide(){
    slideIndex.value++
    if(slideIndex.value >= 3){
        slideIndex.value = 0
    }
}
function prevSlide(){
    slideIndex.value--
    if(slideIndex.value === -1){
        slideIndex.value = 2
    }
}

</script>
