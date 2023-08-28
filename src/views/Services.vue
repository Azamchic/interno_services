<template>
  <services_vueVue/>
  <services_box_vue/>
  <Services_work/>
  <Services_contact/>
  <Services_footer/>
</template>

<script>
import services_vueVue from '../components/services_vue.vue';
import Services_box_vue from '../components/Services_box_vue.vue';
import Services_work from '../components/Services_work.vue';
import Services_contact from '../components/Services_contact_vue.vue';
import Services_footer from '../components/Services_footer_vue.vue'

export default {
  components:{
    services_vueVue,
    Services_box_vue,
    Services_work,
    Services_contact,
    Services_footer
  }
}
</script>

<style>

</style>