<template>
    <div class=" pb-10  max-w-[1224px] mx-auto lg:mx-10 xl:mx-4">
        <h1 class="text-6xl font-bold text-center mb-6">Writesonic is for Everyone</h1>
        <p class=" max-w-5xl mb-0 text-2xl text-center mx-auto text-[#9ca3af]">Write SEO optimized marketing copy for blogs, essays, Facebook ads, Google Ads, Quora answers, and sales emails to increase clicks, conversions, and sales.</p>
        <main class="flex mt-16 relative">
            <aside class="flex flex-col sticky h-fit top-48 w-80">
                <a class="flex gap-4 mb-4" v-for="(header,index) in headers" :key="header" :href="`#${index}`">
                 <img :src="header.icon" alt="">
                 <h1 :class="{ 'text-black font-bold': index == currentSection }" class=" text-[#9ca3af] text-2xl">{{ header.name }}</h1>
                </a>
            </aside>
            <article class="ml-10 w-full">
                <div class="relative" v-for="(header,index) in headers" :key="header">
                <h2 class="top-1/3 absolute" :id="index"></h2>
                <component :is="header.component" :index="index">
                </component>
                </div>
            </article>
        </main>
    </div>
</template>

<script setup>
import {ref,onMounted} from 'vue'
import preview1 from './Toolspreview/preview1.vue'
import preview2 from './Toolspreview/preview2.vue'
import preview3 from './Toolspreview/preview3.vue'
import preview4 from './Toolspreview/preview4.vue'

const headers =[
{ icon: 'https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6456c45c9c7_icon-4.svg' , name:'Writers',component: preview1 },
{ icon: 'https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6619e45c9c8_icon-5.svg' , name:'Ecommerce stores',component: preview2},
{ icon: 'https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6285845c9c9_icon-6.svg' , name:'Marketing teams',component: preview3},
{ icon: 'https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6d0c045c9ca_icon-7.svg' , name:'Entrepreneurs',component: preview4}
]

const currentSection = ref('')

onMounted(()=>{
    const observer = new IntersectionObserver((sections)=>{
        sections.forEach((entry)=>{
            if(entry.intersectionRatio >0){
                currentSection.value = entry.target.getAttribute('id')
            }
        })
    })
    document.querySelectorAll('article h2').forEach((section)=>{
            observer.observe(section)
     })
})
</script>
