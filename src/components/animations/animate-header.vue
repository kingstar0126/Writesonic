<template>
    <div ref="header" class="rounded-xl shadow-sm border  flex justify-between items-center w-full py-3 px-3 bg-white">
        <div class="flex items-center">
            <img src="@/Images/Icons/robot-icon.svg">
            <h2 class="ml-2 font-semibold text-xs">Al Article Writer 3.0</h2>
        </div>
        <div class="flex item-center">
            <div class="flex items-center"><button :class="{'text-[#705cf6] border-t-[pink] border-x-[#705cf6] border-b-cyan-300 font-bold' : y >= 500  }" class="rounded-full w-5 text-xs  border-2 mr-1  transition duration-500 ease-out">1</button><h2 :class="{'text-[#705cf6]' : y >= 500 }" class="ml-1 font-semibold text-xs">GET IDEAS</h2>  <div class="bg-[#e5e8eb] mx-4 h-[2.3px] w-9 "> </div></div>
            <div class="flex items-center"><button :class="{'text-[#705cf6] border-t-[pink] border-x-[#705cf6] border-b-cyan-300 font-bold' : y >= 1066 }" class="rounded-full w-5 text-xs   transition duration-500 ease-out  border-2  mr-1 bg-[#e5e8eb]">2</button><h2 :class="{'text-[#705cf6]' : y >= 1066 }" class="ml-1 text-xs font-semibold ">GET AN OUTLINE</h2> <div class="bg-[#e5e8eb] mx-4 h-[2.3px] w-9 "></div></div>
            <div class="flex items-center"><button :class="{'text-[#705cf6] border-t-[pink] border-x-[#705cf6] border-b-cyan-300 font-bold' : y >= 2030 }" class="rounded-full w-5 text-xs  transition duration-500 ease-out  border-2  mr-1 bg-[#e5e8eb]">3</button><h2 :class="{'text-[#705cf6]' : y >= 2030 }" class="ml-1 text-xs font-semibold">GET AN INTRO</h2>  <div class="bg-[#e5e8eb] mx-4 h-[2.3px] w-9 "></div></div>
            <div class="flex items-center"><button :class="{'text-[#705cf6] border-t-[pink] border-x-[#705cf6] border-b-cyan-300 font-bold' : y >= 3055 }" class="rounded-full w-5 text-xs   transition duration-500 ease-out  border-2  mr-1 bg-[#e5e8eb]">4</button><h2 :class="{'text-[#705cf6]' : y >= 3055 }" class="ml-1 text-xs font-semibold">GET AN ARTICLE</h2></div>
        </div>
        <div class="cursor-pointer">
            <img class=" w-4" src="@/Images/Icons/icons8-close.svg">
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
    y: Number
})


</script>