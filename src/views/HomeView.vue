<script setup>
import HeaderItem from "@/components/HeaderItem.vue";
import BannerTop from "@/components/BannerTop.vue";
import BannerBottom from "@/components/BannerBottom.vue";
import FooterItem from "@/components/FooterItem.vue";
import RulingItem from "@/components/RulingItem.vue";
</script>

<template>
  <main>
    <HeaderItem />
    <div class="max-centered">
      <BannerTop />
      <RulingItem />
      <BannerBottom />
      <hr role="separator">
      <FooterItem />
    </div>
  </main>
</template>
