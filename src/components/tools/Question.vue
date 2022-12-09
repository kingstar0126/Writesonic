<template>
    <div class="block-question w-[800px] max-w-[800px] py-5 px-6 mb-4 border rounded-2xl cursor-pointer border-[#e5e7eb]">
        <div class="flex justify-between items-center">
        <h3 class="question text-lg font-bold">{{ question.title }}</h3>
         <div class="div-open-question w-6 h-6 flex ">
            <img v-if="!question.isActive" src="https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/627a1045a798e62bea45c9cf_down-faq.svg" loading="lazy">
            <img v-else src="https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/627a1045a798e615b245c9d0_up-faq.svg" loading="lazy">
          </div>
        </div>
        <div v-if="question.isActive" class="relative -mt-10 pt-11">
          <p class="max-w-[700px]  text-[#6b7280] text-base" v-html="question.text"></p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from  'vue'
defineProps({
    question:Object
})
</script>