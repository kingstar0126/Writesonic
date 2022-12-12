<template>
    <div class="slide inline-block  h-auto mx-2 relative align-top w-full">
        <div class="grid h-[600px] lg:h-auto auto-cols-fr grid-cols-[auto,1fr] lg:grid-cols-1 rounded-[32px] bg-white">
            <div class="video relative flex overflow-hidden w-80 h-[590px] ml-1 justify-center items-center rounded-[28px] cursor-pointer lg:m-7 xl:w-[30vw] xl:h-[30vw] xl:rounded-full">
                <div class="video-element mt-3 z-[1] w-full mxl:h-full rounded-[28px] relative overflow-hidden text-white">
                    <video ref="video"  class=" bg-cover m-auto w-full h-full right-[-100%] bottom-[-100%] object-cover z-[-100] left-[-100%] top-[-100%]"> </video>
                </div>
                <div class="video-control absolute z-[20]">
                    <div  @click="playing = !playing" class="play-video-btn">
                        <img v-if="!playing" src="https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/629f277c1598bc7a9e5f3f36_play.svg" loading="lazy" hide-if="playing" alt=""  class="play-button">
                        <img v-else src="https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/629f277c3b2aee56da38333e_pause.svg" loading="lazy" player="pause" alt="" show-if="playing" class="pause-button">
                    </div>
                </div>
                <div @click="muted =!muted" class="volume-mute absolute right-4 bottom-4 z-[2]  bg-[#11182740] rounded-full p-2 xl:hidden">
                    <img v-if="!muted" src="https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/629f277c313dcf76de97c54d_muted-false.svg">
                    <img v-else src="https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/629f277d8962db39c2fae665_muted-true.svg">
                </div>
            </div>
            <div class="flex flex-col justify-between pt-12 pr-12 pb-8 pl-8 xl:pt-8 xl:pl-4 xl:pr-7 whitespace-normal text-left">
                <div>
                    <h1 class=" mb-6 text-4xl font-bold mt-5 lg:text-2xl lg:mb-4 xl:text-xl">
                        I struggle with putting words together, and Writesonic is my savior!
                    </h1>
                    <p class="text-[#6b7280] text-lg pt-0 mb-2 lg:text-base xl:text-sm">
                        I found Writesonic when I was struggling with thinking of creative ideas. It writes my emails and generates ideas—an awesome tool for sure.
                    </p>
                </div>
                <div class="flex flex-col">
                    <div class="mb-4 w-10 h-10 rounded-full overflow-hidden">
                        <img src="https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/62aecf7a6d5779aff0ae6b71_561333_f7e99e8a-658d-4b5d-97e3-03c5658c138c_thumbnail_250x250.jpeg" >
                    </div>
                    <div>
                        <h1 class="font-bold text-sm">Melissa Sandoval</h1>
                        <p class="text-[#9ca3af] text-sm">Digital Strategist | Content Creator</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {  ref } from 'vue'
import { useMediaControls } from '@vueuse/core'
const video = ref()
const { playing, muted } = useMediaControls(video, { 
  src: 'https://writesonic.s3.amazonaws.com/video_3+(540p).mp4',
})
</script>

<style>
.slide{
    transition: all 0.7s;
}
</style>