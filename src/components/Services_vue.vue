<template>
  <section class="services_banner">
    <div class="container">
      <h1 class="text">Services</h1>
      <h2 class="text_bottom">Home / Services</h2>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.services_banner{
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: end;
  height: 356px;
  text-align: center;
  background: url(../assets/services_banner.png);
}

.services_banner .container{
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  height: 150px;
  background: #fff;
  border-radius: 37px 37px 0 0;
}

.services_banner .container .text{
  font-size: 50px;
  font-weight: 400;
  color: #292F36;
}

.services_banner .container .text_bottom{
  font-size: 22px;
  font-weight: 400;
  color: #4D5053;
}


@media screen and (max-width: 630px) {
  .services_banner{
    margin: 0 auto;
    margin-top: -420px;
    height: 400px;
  }
}
</style>