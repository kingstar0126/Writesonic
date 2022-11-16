<template>
    <div class=" bg-white w-5/12 absolute bottom-4  rounded-2xl border-2 shadow-lg py-4 px-6 flex items-center  justify-between">
        <div class="cursor-pointer rounded-full border-2 p-2"> <img src="@/Images/Icons/arrow-right.svg" class=" rotate-180 w-5" alt=""></div>
        <div :class="{' flex-row-reverse ' : num > 1}" class="flex items-center bg-[#f1f2fe] rounded-3xl  transition delay-500 ease-linear">
            <button @click="num++" class="text-white font-medium text-sm text-center rounded-3xl p-3 bg-[#705bf6]">Generate</button>
            <div class="flex ml-3 mr-3 items-center"><img class="w-4 bg-blue-700 p-1 rounded-full  h-4" src="@/Images/Icons/crystal.png" alt=""><span class="ml-2 text-[11px] text-[#705bf6] font-semibold">x {{ num }}</span></div>
        </div>
        <div class="cursor-pointer rounded-full border-2 p-2"> <img src="@/Images/Icons/arrow-right.svg" class="w-5" alt=""></div>
    </div>
</template>
<script setup>
import {ref} from 'vue'
const num = ref(1)
</script>
