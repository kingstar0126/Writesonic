<template>
    <div class="w-container relative overflow-visible max-w-7xl mx-auto">
        <div class="head-block2 relative z-10 flex my-16 mx-auto flex-col justify-center items-center">
            <h1 class="h1-typed-words text-white text-[80px] text-center leading-[84px] tracking-[-2.4px] font-bold mt-5 mb-3">Best Al Write for Creating</h1>
            <div class="wrapper-typed min-h-[140px] -mt-6 flex items-center justify-start">
                <h1 class="typed-words leading-[110px] bg-clip-text text-transparent 
                text-[80px] text-center font-bold
                 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
                 >
                 {{ typeValue }}
                </h1>
                <img class="my-2" src="@/Images/Icons/cursor-typed.svg" alt="">
            </div>
            <p class="text mt-0 mb-14 text-2xl text-center text-[#ffffffb3]">
                Create SEO-optimized and plagiarism-free content
                <br>
                for your blogs, ads, emails, and website 10X faster.
            </p>
            <a href="/" class=" mb-6 static flex h-14 min-w-[146px] py-2 px-8 flex-col justify-center items-center content-center rounded-[100px] text-white bg-[#705cf6] text-xl text-center font-bold">Start Writing For Free</a>
            <div class="text-[#ffffff80]">No credit card required.</div>
        </div>
    </div>
</template>
<script>
  export default {
    data: () => {
      return {
        typeValue: '',
        typeArray:['Blog Articles.','SEO Content.','Product Description.','Facebook Ads.','Google Ads.','Twitter Twits.','Instagram Captions.'],
        typingSpeed: 100,
        erasingSpeed: 50,
        newTextDelay: 1000,
        typeArrayIndex: 0,
        charIndex: 0
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
      }
    },
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    }
  }
</script>
