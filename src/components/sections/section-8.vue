<template>
    <div class="w-container relative  max-w-7xl mx-auto w-full pt-12 pb-9 flex justify-center flex-col lg:px-4  md:mx-0">
        <h2 class=" text-6xl text-center font-bold mb-6">Frequently Asked Questions</h2>
        <div class="wrapper-question flex flex-col max-w-[808px] mt-9 mx-auto">
            <div  v-for="question in questions" :key="question" @click="(question.isActive = !question.isActive)"  class="block-question w-[800px] max-w-[800px] py-5 px-6 mb-4 border rounded-2xl cursor-pointer border-[#e5e7eb]">
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
            <img class="absolute left-auto top-auto right-[70px] bottom-[300px] w-3" src="https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6736b45c9fd_rose-star.png" alt="">
            <img class="absolute left-auto top-auto right-[140px] bottom-[220px] w-4" src="https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/627a1045a798e61b0345c9fc_blue-star.png" alt="">
            <img class="absolute left-auto right-24 bottom-24 h-14" src="https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6fe4745c9fb_purple-star.png" alt="">
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const questions = ref([
    { title: 'What is Writesonic?', text: 'Writesonic is the worlds best AI writing platform for creating SEO-optimized content that increases organic traffic to your website on Google. By strategically placing keywords, internal links, and external links in your generated content, you can increase traffic, sales, and revenue 10x.', isActive: false },
    { title: 'Which languages does Writesonic support?', text: `Thats right. Writesonic offers a free trial of 2500 Premium words which is sufficient to give this AI platform a try. As with other platforms like Jasper (Jarvis), no credit card is required for this free trial. It is possible to get up to 10x free words by switching the quality. Our customer support can provide you with more free words if you are a large business, agency or enterprise. <br> <br>  If you dont like our AI writing platform after enjoying a free trial, you will receive a full refund within one week of subscribing. <br> <br> Try Writesonics free trial and experience our AI writing capabilities for yourself.`, isActive: false },
    { title: `How does Writesonic's pricing compare with Jasper (Jarvis), Simplified, Copy AI and others?`, isActive: false , text: `<p class="answer">When compared to Jasper (Jarvis), <a href="/pricing">Writesonic</a> is 2 times to 20 times cheaper because users can generate 10x more content by switching quality. Because of this, Writesonic is also much cheaper than Simplified, Copy AI, and Rytr.</p>`},
    { title: 'Do I have to sign a long-term contract?', text: `<p class="answer">Overall, Writesonic has over 10,000 five-star reviews on reputable review sites.<br>‍<br><a href="https://uk.trustpilot.com/review/writesonic.com" target="_blank"><strong>Trustpilot</strong></a><strong> - 4.9/5</strong> (3000 reviews)<br><a href="https://www.g2.com/products/writesonic/features" target="_blank"><strong>G2</strong></a><strong> - 4.8/5</strong> (1600 reviews)<br><a href="https://www.capterra.com/p/219972/Writesonic/" target="_blank"><strong>Capterra</strong></a><strong> - 4.8/5</strong> (1700 reviews)<br><a  href="https://appsumo.com/products/marketplace-writesonic/" target="_blank"><strong>Appsumo</strong></a><strong> - 4.8/5</strong> (500 reviews)<br><a href="https://www.softwareadvice.com/artificial-intelligence/writesonic-profile/" target="_blank"><strong>Software advice</strong></a><strong> - 4.8/5</strong> (1700 reviews)<br><a href="#"><strong>SaaSworthy</strong></a><strong> - 4.8/5</strong> (900 reviews)<br><strong>Getapp - 4.9/5</strong> (1700 reviews)</p>`,  isActive: false, },
    { title: 'What is Writesonic?', text: 'Writesonic is the worlds best AI writing platform for creating SEO-optimized content that increases organic traffic to your website on Google. By strategically placing keywords, internal links, and external links in your generated content, you can increase traffic, sales, and revenue 10x.', isActive: false },
    { title: 'Which languages does Writesonic support?', text: `Thats right. Writesonic offers a free trial of 2500 Premium words which is sufficient to give this AI platform a try. As with other platforms like Jasper (Jarvis), no credit card is required for this free trial. It is possible to get up to 10x free words by switching the quality. Our customer support can provide you with more free words if you are a large business, agency or enterprise. <br> <br>  If you dont like our AI writing platform after enjoying a free trial, you will receive a full refund within one week of subscribing. <br> <br> Try Writesonics free trial and experience our AI writing capabilities for yourself.`, isActive: false },
    { title: `How does Writesonic's pricing compare with Jasper (Jarvis), Simplified, Copy AI and others?`, isActive: false , text: `<p class="answer">When compared to Jasper (Jarvis), <a href="/pricing">Writesonic</a> is 2 times to 20 times cheaper because users can generate 10x more content by switching quality. Because of this, Writesonic is also much cheaper than Simplified, Copy AI, and Rytr.</p>`},
    { title: 'Do I have to sign a long-term contract?', text: `<p class="answer">Overall, Writesonic has over 10,000 five-star reviews on reputable review sites.<br>‍<br><a href="https://uk.trustpilot.com/review/writesonic.com" target="_blank"><strong>Trustpilot</strong></a><strong> - 4.9/5</strong> (3000 reviews)<br><a href="https://www.g2.com/products/writesonic/features" target="_blank"><strong>G2</strong></a><strong> - 4.8/5</strong> (1600 reviews)<br><a href="https://www.capterra.com/p/219972/Writesonic/" target="_blank"><strong>Capterra</strong></a><strong> - 4.8/5</strong> (1700 reviews)<br><a  href="https://appsumo.com/products/marketplace-writesonic/" target="_blank"><strong>Appsumo</strong></a><strong> - 4.8/5</strong> (500 reviews)<br><a href="https://www.softwareadvice.com/artificial-intelligence/writesonic-profile/" target="_blank"><strong>Software advice</strong></a><strong> - 4.8/5</strong> (1700 reviews)<br><a href="#"><strong>SaaSworthy</strong></a><strong> - 4.8/5</strong> (900 reviews)<br><strong>Getapp - 4.9/5</strong> (1700 reviews)</p>`,  isActive: false, }
])

</script>

<style>
.answer a{
 color: blue;
 text-decoration-line: underline;
}
</style>