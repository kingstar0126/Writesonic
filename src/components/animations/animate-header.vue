<template>
    <div ref="header" class="rounded-xl shadow-sm border  flex justify-between items-center w-full py-3 px-3 bg-white">
        <div class="flex items-center">
            <img src="@/Images/Icons/robot-icon.svg">
            <h2 class="ml-2 font-semibold text-xs">Al Article Writer 3.0</h2>
        </div>
        <div class="flex item-center">
            <div class="flex items-center"><button class="rounded-full w-5 text-xs text-[#705cf6] font-bold  border-2 border-t-[pink]  mr-1 border-x-[#705cf6] border-b-cyan-300 ">1</button><h2 class="ml-1 font-semibold text-xs text-[#705cf6]">GET IDEAS</h2>  <div class="bg-[#e5e8eb] mx-4 h-[2.3px] w-9 "> </div></div>
            <div class="flex items-center"><button class="rounded-full w-5 text-xs text-black font-normal  border-2  mr-1 bg-[#e5e8eb]">2</button><h2 class="ml-1 text-xs font-semibold text-black">GET AN OUTLINE</h2> <div class="bg-[#e5e8eb] mx-4 h-[2.3px] w-9 "></div></div>
            <div class="flex items-center"><button class="rounded-full w-5 text-xs text-black font-normal  border-2  mr-1 bg-[#e5e8eb]">3</button><h2 class="ml-1 text-xs font-semibold text-black">GET AN INTRO</h2>  <div class="bg-[#e5e8eb] mx-4 h-[2.3px] w-9 "></div></div>
            <div class="flex items-center"><button class="rounded-full w-5 text-xs text-black font-normal  border-2  mr-1 bg-[#e5e8eb]">4</button><h2 class="ml-1 text-xs font-semibold text-black">GET AN ARTICLE</h2></div>
        </div>
        <div class="cursor-pointer">
            <img class=" w-4" src="@/Images/Icons/icons8-close.svg">
        </div>
    </div>
</template>

<!-- 'transform: scale(117%) translateY(-36px)' -->