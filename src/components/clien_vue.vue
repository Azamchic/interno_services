<template>
  <section class="client">
    <div class="container">
      <img class="img_1" src="../assets/img_1.png" alt="">
      <img class="img_2" src="../assets/img_2.png" alt="">
      <img class="img_3" src="../assets/img_3.png" alt="">
      <img class="img_4" src="../assets/img_4.png" alt="">
      <img class="img_5" src="../assets/img_5.png" alt="">
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.client{
  width: 100%;
  margin-top: 150px;
  background: rgba(0, 0, 255, 0.157);
  height: 100%;
  border-radius: 20px;
}

.client .container{
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
}

.client .container .img_1{
  max-width: 130px;
  width: 100%;
}

.client .container .img_2{
  max-width: 102px;
  width: 100%;
}

.client .container .img_3{
  max-width: 163px;
  width: 100%;
}

.client .container .img_4{
  max-width: 144px;
  width: 100%;
}

.client .container .img_5{
  max-width: 116px;
  width: 100%;
}






</style>