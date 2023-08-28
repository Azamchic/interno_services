<template>
  <section class="new">
    <div class="container">
      <h1 class="text">Articles & News</h1>
      <p class="title">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
    </div>
    <div class="wrapper">
      <div class="box">
        <div class="mini_box">
          <img src="../assets/mini_img.png" alt="mini">
          <h1 class="text">Let’s Get Solution For Building Construction Work</h1>
          <p class="title">26 December,2022 </p>
        </div>
      </div>

      <div class="box">
        <div class="mini_box">
          <img src="../assets/img_new_2.png" alt="mini">
          <h1 class="text">Let’s Get Solution For Building Construction Work</h1>
          <p class="title">26 December,2022 </p>
        </div>
      </div>

      <div class="box">
        <div class="mini_box">
          <img src="../assets/img_nwe_3.png" alt="mini">
          <h1 class="text">Let’s Get Solution For Building Construction Work</h1>
          <p class="title">26 December,2022 </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.new{
  width: 100%;
  margin: 0 auto;
  margin-top: 150px;
}

.new .container{
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}

.new .container .text{
  font-size: 50px;
  font-weight: 400;
  text-align: center;
}

.new .container .title{
  font-size: 22px;
  font-weight: 400;
  padding-top: 15px;
  max-width: 900px;
  width: 100%;
  text-align: center;
}

.new .wrapper{
  max-width: 1200px;
  width: 100%;
  margin: 120px auto;
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.new .wrapper .box{
  max-width: 380px;
  width: 100%;
  height: 520px;
  background: #e7e7e775;
  border-radius: 50px;
  display: flex;
}

.new .wrapper .box .mini_box{
  display: flex;
  align-items: center;
  flex-direction: column;
}

.new .wrapper .box .mini_box img{
  max-width: 340px;
  width: 100%;
  height: 290px;
  margin-top: 20px;
}

.new .wrapper .box .mini_box .text{
  font-size: 25px;
  font-weight: 400;
  text-align: center;
  padding-top: 20px;
  color: #292F36
}

.new .wrapper .box .mini_box .title{
  font-size: 16px;
  font-weight: 400;
  color: #4D5053;
  padding-top: 40px;
}

@media screen and (max-width: 400px) {
  .new .container .text{
    font-size: 40px;
  }

  .new .container .title{
    font-size: 18px;
    max-width: 300px;
    width: 100%;
  }
}

</style>