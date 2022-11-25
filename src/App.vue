<template>
  <div>
    <Navbar />
    <section class="section-1 relative -mt-20 pt-28 sm:pt-20 pb-14 flex flex-[1] z-20">
      <Section_1 />
    </section>
    <section class="bg-white rounded-t-[48px] py-11">
      <Feature />
    </section>
  </div>
</template>
<script setup>
import Navbar  from "./components/Navbar.vue";
import Section_1  from "./components/sections/section-1.vue";
import Feature from './components/sections/section-feature.vue'
</script>
