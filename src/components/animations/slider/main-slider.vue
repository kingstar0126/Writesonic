<template>
    <div class="overflow-hidden pt-36">
        <div class="max-w-[1224px] w-full relative mx-auto overflow-visible flex-col justify-center items-stretch gap-4 object-fill grid-cols-[1fr,1fr] auto-cols-fr ">
            <div clas="box_video">
                <h2 class="flex m-auto w-fit h-fit text-[56px] leading-[78px] text-center font-bold">Hear from the <img class="mx-3 w-12" src="	https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6056545ca5a_rose-check.png" alt=""> Writesonic Community</h2>
                <p class="mt-6 max-w-[1100px] mx-auto text-[#9ca3af] text-2xl text-center">
                The future of writing is here! Let our users show you a glimpse of it.
                </p>
                <div class="block-slider overflow-hidden h-[850px] mt-12 px-24 rounded-[48px] pt-16 bg-[#050a1b]">
                    <div class="slider h-auto max-w-[1128px] mx-auto bg-transparent relative">
                        <div class="w-slider z-[1] relative block left-0 right-0 h-full whitespace-nowrap">
                            <slide1 />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import slide1 from './slide-1.vue';
</script>
