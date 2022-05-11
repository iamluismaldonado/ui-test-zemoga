<script setup>
import Header from "@/components/Header.vue";
import BannerTop from "@/components/BannerTop.vue";
import BannerBottom from "@/components/BannerBottom.vue";
import Footer from "@/components/Footer.vue";
import Ruling from "../components/Ruling.vue";
</script>

<template>
  <main>
    <Header />
    <div class="max-centered">
      <BannerTop />
      <Ruling />
      <BannerBottom />
      <hr role="separator">
      <Footer />
    </div>
  </main>
</template>
