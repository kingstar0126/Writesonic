<template>
  <div>
    <Navbar />
    <section class="section-1 relative -mt-20 pt-28 sm:pt-20 pb-14 flex flex-[1] z-20">
      <Header />
    </section>
    <section class="bg-white rounded-t-[48px] py-11">
      <Feature />
      <ContentGeneratorPreview />
      <OpinionsSlider />
      <Opinions />
    </section>
    <section class="bg-white">
      <Faq />
      <LastPreview />
    </section>
    <Footer />
  </div>
</template>
<script setup>
import Navbar  from "./components/Navbar.vue";
import Footer  from "./components/Footer.vue";
import Header  from "./components/sections/Header.vue";
import Feature from './components/sections/Feature.vue'
import OpinionsSlider from "./components/slider/OpinionsSlider.vue";
import Opinions  from "./components/sections/Opinions.vue";
import ContentGeneratorPreview  from "./components/sections/ContentGeneratorPreview.vue";
import Faq from "./components/sections/Faq.vue";
import LastPreview from "./components/sections/LastPreview.vue";

</script>
