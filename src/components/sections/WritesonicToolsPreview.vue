<template>
    <div class=" pb-10">
        <h1 class="text-6xl font-bold text-center mb-6">Writesonic is for Everyone</h1>
        <p class=" max-w-5xl mb-0 text-2xl text-center mx-auto text-[#9ca3af]">Write SEO optimized marketing copy for blogs, essays, Facebook ads, Google Ads, Quora answers, and sales emails to increase clicks, conversions, and sales.</p>
        <main class="flex mt-16 relative">
            <aside class="flex flex-col sticky h-fit top-48 w-64">
                <a class="flex gap-4 mb-4" v-for="(header,index) in headers" :key="header" :href="`#${index}`">
                 <img src="" alt="">
                 <h1 class=" text-[#9ca3af] text-2xl">{{ header }}</h1>
                </a>
            </aside>
            <div class="ml-10">
                <div v-for="(header,index) in headers" :key="header">
                <h2 class=" text-3xl font-semibold mb-3" :id="index">{{ header }}</h2>
                <p class=" w-[700px]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
const headers =['Writers','Ecommerce stores','Marketing teams','Entrepreneurs']
</script>
