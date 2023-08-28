<template>
  <banner_vue/>
  <cards_vue/>
  <about_us_vue/>
  <clien_vue/>
  <counter_vueVue/>
  <new_vueVue/>
  <contact_vueVue/>
  <footer_vueVue/>
  <web_endVue/>
</template>

<script>
import banner_vue from '../components/banner_vue.vue';
import cards_vue from '../components/cards_vue.vue';
import about_us_vue from '../components/about_us_vue.vue';
import clien_vue from '../components/clien_vue.vue';
import counter_vueVue from '../components/counter_vue.vue';
import new_vueVue from '../components/new_vue.vue';
import contact_vueVue from '../components/contact_vue.vue';
import footer_vueVue from '../components/footer_vue.vue';
import web_endVue from '../components/web_end.vue';


export default {
  components:{
    banner_vue,
    cards_vue,
    about_us_vue,
    clien_vue,
    counter_vueVue,
    new_vueVue,
    contact_vueVue,
    footer_vueVue,
    web_endVue
  }
}
</script>

<style>

</style>