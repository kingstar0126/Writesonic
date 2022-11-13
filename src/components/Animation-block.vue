<template>
    <div class="max-w-8xl mx-auto lg:w-full mt-16 relative z-[999] relat">
        <div class=" w-[60rem] rounded-[32px] py-2 px-3 border-[13px] border-[#232d3f] bg-white relative">
            <animateHeaderVue />
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

</script>
 