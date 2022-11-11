<template>
  <div>
    <Navbar />
    <section class="section-1 relative -mt-20 pt-28 sm:pt-20 pb-14 flex flex-[1] z-20">
      <Section_1 />
    </section>
  </div>
</template>
<script>
import Navbar  from '@/components/Navbar.vue';
import Section_1  from '@/components/sections/section-1.vue';
export default {
  components: { Navbar,Section_1}
}
</script>
