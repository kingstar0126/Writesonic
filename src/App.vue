<template>
  <div>
    <Navbar />
    <section class="section-1 relative -mt-20 pt-28 sm:pt-20 pb-14 flex flex-[1] z-20">
      <Section_1 />
    </section>
    <section class="bg-white rounded-t-[48px] py-11">
      <Feature />
      <Section_4 />
      <Slider />
      <Section_6 />
    </section>
    <section class="bg-white">
      <Section_8 />
      <Section_9 />
    </section>
    <Footer />
  </div>
</template>
<script setup>
import Navbar  from "./components/Navbar.vue";
import Footer  from "./components/footer.vue";
import Section_1  from "./components/sections/section-1.vue";
import Feature from './components/sections/section-feature.vue'
import Slider from "./components/animations/slider/main-slider.vue";
import Section_6  from "./components/sections/section-6.vue";
import Section_4  from "./components/sections/section-4.vue";
import Section_8 from "./components/sections/section-8.vue";
import Section_9 from "./components/sections/section-9.vue";

</script>
