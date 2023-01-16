<template>
    <div class="relative  flex mb-16">
      <div class="flex flex-col w-fit">
        <div class="ml-0 m-3 relative rounded-3xl border border-[#ecedf0] p-5 flex">
            <div class=" rounded-3xl bg-[#f9fafb] py-5 pl-6 pr-14 flex-col flex">
                <div class=" mb-3">
                    <h1 class="mb-2 text-xs font-medium text-gray-500">Article Title</h1>
                    <div class=" w-20 rounded-3xl bg-[#e5e7eb] h-2"></div>
                </div>
                <div class=" mb-3">
                    <h1 class="mb-2 text-xs font-medium text-gray-500">Article Intro</h1>
                    <div class=" w-40  rounded-3xl bg-[#e5e7eb] h-2"></div>
                    <div class=" w-24 rounded-3xl mt-2 bg-[#e5e7eb] h-2"></div>
                </div>
                <div class=" mb-3">
                    <h1 class="mb-2 text-xs font-medium text-gray-500">Article Outline</h1>
                    <div class=" w-36  rounded-3xl bg-[#e5e7eb] h-2"></div>
                    <div class=" w-32 rounded-3xl my-2 bg-[#e5e7eb] h-2"></div>
                    <div class=" w-40 rounded-3xl mb-2 bg-[#e5e7eb] h-2"></div>
                    <div class=" w-20 rounded-3xl bg-[#e5e7eb] h-2"></div>                    
                </div>
                <button class=" mt-16 mb-2 rounded-xl text-center border bg-white font-medium border-gray-400 py-2 px-3 text-violet-800 text-xs">Generate Article</button>
            </div>
            <div class="flex flex-col absolute right-6 bottom-5">
                <div class="flex items-center mb-1">
                    <div class=" bg-[#d3d7dc] w-3 h-3 rounded-full mr-1 "></div>
                    <p class=" text-xs text-gray-500">Titles</p>
                </div>
                <div class="flex items-center mb-1">
                    <div class=" bg-[#d3d7dc] w-3 h-3 rounded-full mr-1 "></div>
                    <p class=" text-xs text-gray-500">Intros</p>
                </div>
                <div class="flex items-center mb-1">
                    <div class=" bg-[#d3d7dc] w-3 h-3 rounded-full mr-1 "></div>
                    <p class=" text-xs text-gray-500">Outlines</p>
                </div>
                <div class="flex items-center mb-1 ">
                    <div class=" bg-violet-300 w-3 h-3 rounded-full mr-1 "></div>
                    <p class=" text-xs font-normal text-gray-700">D'raft article</p>
                </div>
                <div class="mt-2 mr-1 flex items-center">
                    <img class="mr-1 w-4" src="@/Images/Icons/regenerate.png" alt="">
                    <p class="text-xs text-gray-400">Regenerate</p>
                </div>
            </div>
        </div>
       <div class=" mt-20">
        <h1 class=" mb-3 text-3xl font-bold">Writesonic for Entrepreneurs</h1>
        <p class=" text-base text-justify text-gray-600">Use the AI Writer to create long-form blogs and articles; the Sonic Editor (an enhanced version of Google Docs) to write sales emails, essays, reports, and even ebooks. Moreover, you can polish your content to perfection using our AI-driven editing tools: Paraphraser, Expander, and Shortener.</p>
        <div class="flex gap-1  mt-6">
            <div class="border border-[#ecedf0] text-gray-500 py-1 px-3 text-xs rounded-full">Paraphrasing Tool</div>
            <div class="border border-[#ecedf0] text-gray-500 py-1 px-3 text-xs rounded-full">Sentence Expander</div>
            <div class="border border-[#ecedf0] text-gray-500 py-1 px-3 text-xs rounded-full">Content Shortner</div>
            <div class="border border-[#ecedf0] text-gray-500 py-1 px-3 text-xs rounded-full">+9</div>
        </div>
        <button class="mt-6 flex items-center font-bold text-[#705cf6] rounded-full py-3 px-5 hover:bg-[#f6f6fd]">See all features <img class="ml-2 mt-1" src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/62920a8874c406cb01ec9dce_strelka-btn.svg" alt=""></button>
       </div>
     </div> 
     <div class="w-52 mt-64 ml-6 min-h-fit flex flex-col">
        <div class="mb-2 flex w-fit items-end -rotate-2">
            <img class=" w-10" src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e626e945caa2_foto-8.png">
            <div class=" -ml-3  h-5 text-center rounded-2xl text-[10px] px-2 pt-[2px] text-white bg-[#1f2937]">Writer</div>
        </div>
        <div class="flex flex-col">
            <h1 class="mb-1 font-bold text-base">Writesonic is a hero!</h1>
            <p class="text-gray-500 mb-3 text-xs">I'm able to write articles in the blink of an eye and focus on scaling my business.</p>
            <span class="text-gray-600 font-bold text-sm">Filipa A.</span>
        </div>
     </div>
    </div>
</template>

<script setup>

</script>