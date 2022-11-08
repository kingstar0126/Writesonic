<template>
    <div class="py-3 max-w-7xl mx-auto">
        <div class="flex justify-center items-center relative z-30">
            <a class="mr-14" href="/">
                <img src="../Images/Logo/logo.svg" alt="Writesonic">
            </a>
            <nav class="mr-auto">
                <div class="grid mt-1 auto-cols-fr gap-3 grid-cols-5">
                  <div>
                    <div @click="openDropdownOne" :class="{ 'bg-[#705cf61a] text-[#948bfa]' : openFeatures }" class="parent relative rounded-lg text-center cursor-pointer mx-auto py-1 pr-8 pl-2 text-white text-sm select-none hover:bg-[#705cf61a] hover:text-[#948bfa] ">
                        <div class="absolute right-1 top-0 bottom-0  my-auto ml-auto mr-5 ">
                            <svg :class="{ 'rotate-180 top-[7px]' : openFeatures }" class=" top-[5px] absolute" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 9.5L11.5 17L19 9.5" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div>Features</div>
                    </div>
                    <nav v-if="openFeatures">
                        <div class="block-features absolute z-50 overflow-hidden w-[688px] h-[460px] pt-5">
                            <div class="wrapper-features overflow-hidden block w-full border border-[#918eff33] rounded-3xl bg-white">
                                <div class="features grid p-4 auto-cols-fr gap-4 grid-cols-2 row-auto">
                                    <div class="column-features">
                                        <a v-for="link in linkFeatures" :key="link" @mouseenter="link.featureLinkActive = true" @mouseleave="link.featureLinkActive = false" class="link-features flex w-80 p-3 justify-between items-start auto-cols-fr gap-3 grid-cols-3  rounded-2xl  hover:bg-[#f6f6fd] transition-all"  href="/">
                                            <div class="div-features  items-center flex flex-[0,0,auto] auto-cols-fr gap-3 row-auto grid-cols-2">
                                                <div class="div-img-features flex w-10 h-10 flex-col justify-center items-center border border-gray-300 bg-white rounded-xl shadow-md">
                                                    <img class="max-h-6" :src="link.img">
                                                </div>
                                                <div class="div-name-features flex flex-col justify-around">
                                                    <div :class="{ 'text-[#4120b6]' : link.featureLinkActive, 'text-[#111827]' : !link.featureLinkActive }" class="name-features">
                                                        {{link.title}}
                                                    </div>
                                                    <div :class="{ 'text-[#4120b6]' : link.featureLinkActive, 'text-[#6b7280]' : !link.featureLinkActive }" class="txt-features  text-xs">
                                                        {{link.text}}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="div-icon-features flex flex-col justify-center items-center">
                                                <img v-if="link.icon" :class="{ 'hidden' : link.featureLinkActive, 'block' : !link.featureLinkActive }"  src="../Images/Icons/blog-grov.svg" alt="">
                                                <img :class="{ 'block' : link.featureLinkActive, 'hidden' : !link.featureLinkActive }" src="../Images/Icons/arrow-right.svg" alt="">
                                            </div>
                                        </a>
                                    </div>
                                    <div class="column-features">
                                        <a v-for="link in linkFeaturesTwo" :key="link" @mouseenter="link.featureLinkActive = true" @mouseleave="link.featureLinkActive = false" class="link-features flex w-80 p-3 justify-between items-start auto-cols-fr gap-3 grid-cols-3  rounded-2xl  hover:bg-[#f6f6fd] transition-all"  href="/">
                                            <div class="div-features  items-center flex flex-[0,0,auto] auto-cols-fr gap-3 row-auto grid-cols-2">
                                                <div class="div-img-features flex w-10 h-10 flex-col justify-center items-center border border-gray-300 bg-white rounded-xl shadow-md">
                                                    <img class="max-h-6" :src="link.img">
                                                </div>
                                                <div class="div-name-features flex flex-col justify-around">
                                                    <div :class="{ 'text-[#4120b6]' : link.featureLinkActive, 'text-[#111827]' : !link.featureLinkActive }" class="name-features">
                                                        {{link.title}}
                                                    </div>
                                                    <div :class="{ 'text-[#4120b6]' : link.featureLinkActive, 'text-[#6b7280]' : !link.featureLinkActive }" class="txt-features  text-xs">
                                                        {{link.text}}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="div-icon-features flex flex-col justify-center items-center">
                                                <img v-if="link.icon" :class="{ 'hidden' : link.featureLinkActive, 'block' : !link.featureLinkActive }"  src="../Images/Icons/blog-grov.svg" alt="">
                                                <img :class="{ 'block' : link.featureLinkActive, 'hidden' : !link.featureLinkActive }" src="../Images/Icons/arrow-right.svg" alt="">
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <a href="/" class="all-features-link flex py-2 flex-row justify-center items-center bg-[#f9fafb]">
                                    <div class="flex w-40 h-12 justify-center items-center gap-2 rounded-[100px] text-[#705cf6]">
                                        <div class="font-bold text-sm">See all</div>
                                        <img src="../Images/Icons/arrow-right.svg" alt="">
                                    </div>
                                </a>
                            </div>
                        </div>
                    </nav>
                  </div>
                  <div>
                    <div @click="openDropdownTwo" :class="{ 'bg-[#705cf61a] text-[#948bfa]' : openResources }" class="parent relative rounded-lg text-center cursor-pointer mx-auto py-1 pr-8 pl-2 text-white text-sm select-none hover:bg-[#705cf61a] hover:text-[#948bfa] ">
                        <div class="absolute right-1 top-0 bottom-0  my-auto ml-auto mr-5 ">
                            <svg :class="{ 'rotate-180 top-[7px]' : openResources }" class=" top-[5px] absolute" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 9.5L11.5 17L19 9.5" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div>Resources</div>
                    </div>
                    <nav v-if="openResources">
                        <div class="block-comparison absolute z-50 min-h-fit min-w-fit mt-5 flex flex-col gap-2">
                            <div class="wrapper-link-comparison min-w-[210px] p-3 flex flex-col gap-2 rounded-2xl bg-white border border-[#918eff33]">
                                <a v-for="link in linkResources" :key="link" class="group link-comparison flex h-10 px-3 justify-between items-center rounded-xl text-sm text-[#111827]  max-w-full hover:bg-[#f6f6fd] hover:text-[#4121b6]" href="/">
                                    <div>{{link.title}}</div>
                                    <img class="hidden group-hover:block" src="../Images/Icons/arrow-right.svg" alt="">
                                </a>
                            </div>
                        </div>
                    </nav>
                  </div>
                    <a class="py-1 px-2 rounded-lg text-white text-sm hover:text-[#948bfa] text-center" href="/">Free Tools</a>
                    <a class="py-1 px-2 rounded-lg text-white text-sm hover:text-[#948bfa] text-center" href="/">Pricing</a>
                    <a class="py-1 px-2 rounded-lg text-white text-sm hover:text-[#948bfa] text-center" href="/">Academy</a>
                </div>
            </nav>
            <div class="grid items-center justify-center justify-items-center gap-5 auto-cols-fr grid-cols-2 ">
                <a class="inline-block py-3 px-5 text-white rounded-[50px] text-sm font-bold hover:bg-[#705cf61a] hover:text-[#948bfa]" href="/">Sign in</a>
                <a class="py-2 px-4 text-white rounded-[50px] h-10 flex justify-center items-center font-bold text-sm border border-[#ffffff33] hover:bg-[#948bfa] hover:border-[#948bfa]" href="/">Get started</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            openFeatures: false,
            openResources:false,
            linkFeatures:[
                { img: require('../Images/Icons/robot-icon.svg'),title: 'AI Article & Blog Writer',text: 'Write 1500+ word articles and blogs', icon: true,featureLinkActive:false},
                { img: require('../Images/Icons/tool.svg'),title: 'Paraphrasing Tool',text: 'Instantly paraphrase your text', icon: true,featureLinkActive:false},
                { img: require('../Images/Icons/text-expander.svg'),title: 'Text Expander',text: 'Expand and lengthen your content', icon: true,featureLinkActive:false},
                { img: require('../Images/Icons/a-summarizer.svg'),title: 'Article Summarizer',text: 'Summarize any piece of content in click', icon: false,featureLinkActive:false},
                { img: require('../Images/Icons/p-description.svg'),title: 'Product Descriptions',text: 'Craft epic descriptions for your products', icon: false,featureLinkActive:false},
            ],
            linkFeaturesTwo:[
                { img: require('../Images/Icons/fb.svg'),title: 'Facebook Ads',text: 'Create high-performing FB Ads', icon: true,featureLinkActive:false},
                { img: require('../Images/Icons/qa.svg'),title: 'Quora Answers',text: 'Detailed answers to Quora Questions', icon: false,featureLinkActive:false},
                { img: require('../Images/Icons/ga.svg'),title: 'Google Ads',text: 'Get high-converting Google ad copy', icon: false,featureLinkActive:false},
                { img: require('../Images/Icons/lp.svg'),title: 'Landing Pages',text: 'Develop high-converting landing pages', icon: true,featureLinkActive:false},
                { img: require('../Images/Icons/ai.svg'),title: 'AI Article Ideas',text: 'Catchy blog titles at your fingertips', icon: false,featureLinkActive:false},
            ],
            linkResources:[
                {title:'Blog'},
                {title:'Guides and Tutorials'},
                {title:'API Docs'},
                {title:'Community'},
                {title:'Free Templates'},
            ]
        }
    },
    methods: {
        openDropdownOne(){
           this.openFeatures = !this.openFeatures
           this.openResources = false
        },
        openDropdownTwo(){
           this.openResources = !this.openResources
           this.openFeatures = false
        }
    },
}
</script>
