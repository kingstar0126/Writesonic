<template>
    <div class="w-container relative z-20 overflow-visible max-w-7xl mx-auto w-full flex justify-center flex-col lg:px-4  md:mx-0">
        <div class="head-block2 relative z-50 flex my-16 sm:my-7  flex-col justify-center items-center">
            <h1 class="h1-typed-words text-white text-[80px] text-center sm:mb-0 leading-[84px] tracking-[-2.4px] sm:text-3xl font-bold mt-5 mb-3 lg:text-7xl md:text-5xl">Best Al Write for Creating</h1>
            <div class="wrapper-typed min-h-[140px] sm:min-h-min sm:my-1 -mt-6 flex items-center justify-start">
                <h1 class="typed-words leading-[110px] bg-clip-text text-transparent 
                text-[80px] text-center font-bold lg:text-[72px] lg:h-20 sm:h-10 lg:leading-none md:text-5xl sm:text-3xl
                 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
                 >
                 {{ typeValue }}
                </h1>
                <img class="my-2 sm:w-5" src="@/Images/Icons/cursor-typed.svg" alt="">
            </div>
            <p class="text mt-0 mb-14 sm:mb-6 text-2xl text-center text-[#ffffffb3] lg:max-w-xl md:text-lg sm:text-xs">
                Create SEO-optimized and plagiarism-free content
                <br>
                for your blogs, ads, emails, and website 10X faster.
            </p>
            <a href="/" class=" mb-6 static flex h-14 sm:h-10 sm:min-h-0 min-w-[146px] py-2 sm:text-base px-8 flex-col justify-center items-center content-center rounded-[100px] text-white bg-[#705cf6] text-xl text-center font-bold">Start Writing For Free</a>
            <div class="text-[#ffffff80] sm:text-xs">No credit card required.</div>
        </div>
        <div class="sec-1-fotos-div relative z-40 -mt-[500px] w-[1330px] -ml-14 pt-[500px] lg:hidden">
            <div 
            :style="
               `will-change: transform;
                transform: translate3d(0px, ${windowTop / 4}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                transform-style: preserve-3d;
                `
                   " 
            class=" transition duration-100 ease-in-out foto-1 absolute left-0 top-[10%] right-auto bottom-auto z-50 flex w-20 items-center flex-col ">
                <img src="https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/6299f21ac330f721ddf3b90b_first.png" alt="">
                <div class="text-center mt-3 flex h-7 px-2 justify-center bg-[#bfc3d126] text-[#d1d5db] rounded-2xl ">Marketer</div>
            </div>
            <div
            :style="
               `will-change: transform;
                transform: translate3d(0px, ${windowTop / 1.5}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                transform-style: preserve-3d;
                `
                   " 
            class="foto-2 transition duration-100 ease-in-out absolute left-40 top-72  right-auto bottom-auto z-50 flex w-20 items-center flex-col">
                <img src="	https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/6299f21b32dceabd6aacd778_second.png" alt="">
                <div class="text-center mt-3 flex h-7 px-2 justify-center bg-[#bfc3d126] text-[#d1d5db] rounded-2xl ">Marketer</div>
            </div>
            <div 
            :style="
               `will-change: transform;
                transform: translate3d(0px, ${windowTop / 6}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                transform-style: preserve-3d;
                `
                   " 
            class="foto-3 transition duration-100 ease-in-out absolute left-auto top-48 right-24 bottom-auto z-50 flex w-20 items-center flex-col">
                <img src="https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/6299f21bfd6234297851aedc_third.png" alt="">
                <div class="text-center mt-3 flex h-7 px-2 justify-center bg-[#bfc3d126] text-[#d1d5db] rounded-2xl ">Marketer</div>
            </div>
            <div
            :style="
               `will-change: transform;
                transform: translate3d(0px, ${windowTop / 3}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                transform-style: preserve-3d;
                `
                   " 
            class="foto-4 transition duration-100 ease-in-out absolute left-auto top-0 right-0 bottom-auto z-50 flex w-20 items-center flex-col">
                <img src="	https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/6299f21c04da8e3114d2ea0e_fourth.png" alt="">
                <div class="text-center mt-3 flex h-7 px-2 justify-center bg-[#bfc3d126] text-[#d1d5db] rounded-2xl ">Marketer</div>
            </div>          
        </div>
        <AnimationBlock />
        <div class="cta-button-flex flex pt-8 justify-center">
            <a class="static flex min-w-[146px] sm:min-h-0  sm:text-base sm:h-10 py-3 px-8 flex-col justify-center items-center content-center rounded-[100px] bg-[#705cf6] text-white font-bold text-center" href="/">
                Sign up for free
            </a>
        </div>
        <div class="text-block-3 mt-10 mb-2 text-white text-center sm:text-xs">
            Trusted by 1,000,000+ marketing teams, agencies and freelancers. 10,000+ 5-star ratings.
        </div>
        <Herofreetool />
    </div>
</template>
<script>
import AnimationBlock from "../Animation-block.vue";
import Herofreetool from "../tools/Herofreetool.vue"
  export default {
    components:{Herofreetool,AnimationBlock},
    data: () => {
      return {
        typeValue: '',
        typeArray:['Blog Articles.','SEO Content.','Product Description.','Facebook Ads.','Google Ads.','Twitter Twits.','Instagram Captions.'],
        typingSpeed: 100,
        erasingSpeed: 50,
        newTextDelay: 1000,
        typeArrayIndex: 0,
        charIndex: 0,
        // 
        windowTop:0,
        position:0,
      }
    },
    methods: {
      typeText() {
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
          this.charIndex += 1;
          setTimeout(this.typeText, this.typingSpeed);
        }
        else {
          setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
        if(this.charIndex > 0) {
          
          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        }
        else {
          this.typeArrayIndex += 1;
          if(this.typeArrayIndex >= this.typeArray.length)
            this.typeArrayIndex = 0;
          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      },
       updateScroll(){
        this.position = window.scrollY
        if(this.position >= 380){
          this.windowTop = 380
        }
        else{
          this.windowTop = this.position;
        }
       }
    },
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    },

    mounted() {
        window.addEventListener("scroll", this.updateScroll);
    },

  }
</script>
