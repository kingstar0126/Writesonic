<template>
    <div class=" text-white px-6 min-w-[146px] text-center py-3 font-bold bg-[#705cf6] rounded-[100px] transition-all  hover:bg-[#948bfa]">
       <a  href="/">{{ title }}</a>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
    title:String
})

</script>