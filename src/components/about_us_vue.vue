<template>
  <section class="about">
    <div class="container">
      <h1 class="text">What the People Thinks About Us</h1>
      <div class="wrapper">
        <div class="box">
          <div class="box_img">
            <img src="../assets/grill_img.png" alt="grill">
            <div class="box_img_text">
            <h1 class="box_text">Nattasha Mith</h1>
            <p class="box_title">Sydney, USA</p>
          </div>
          </div>
          
          <p class="title">Lorem Ipsum is simply dummy 
text of the typesetting industry. 
Ipsum has been.</p>
        </div>

        <div class="box">
          <div class="box_img">
            <img src="../assets/img_grill_2.png" alt="grill">
            <div class="box_img_text">
            <h1 class="box_text">Raymond Galario</h1>
            <p class="box_title">Sydney, Australia</p>
          </div>
          </div>
          
          <p class="title">Lorem Ipsum is simply dummy 
text of the typesetting industry. 
Ipsum has been scrambled it 
to make a type book.</p>
        </div>

        <div class="box">
          <div class="box_img">
            <img src="../assets/img_boy.png" alt="grill">
            <div class="box_img_text">
            <h1 class="box_text">Benny Roll</h1>
            <p class="box_title">Sydney, New York</p>
          </div>
          </div>
          
          <p class="title">Lorem Ipsum is simply dummy 
text of the typesetting industry. 
Ipsum has been scrambled.</p>
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
.about{
  width: 100%;
  margin: 0 auto;
  margin-top: 200px;
}

.about .container{
  max-width: 1150px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #F4F0EC;
  height: 100%;
  border-radius: 40px;
}

.about .container .text{
  font-size: 50px;
  font-weight: 400;
  color: #292F36;
  text-align: center;
  max-width: 547px;
  width: 100%;

}

.about .container .wrapper{
  max-width: 1150px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  flex-wrap: wrap;
  gap: 30px;
}

.about .container .wrapper .box{
  max-width: 370px;
  width: 100%;
  margin: 0 auto;
  background: #fff;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 340px;
}

.about .container .wrapper .box .box_img{
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
}

.about .container .wrapper .box .box_img img{
  max-width: 77px;
  width: 100%;
  height: 77px;
}

.about .container .wrapper .box .box_img .box_img_text .box_text{
  font-size: 22px;
  font-weight: 400;
  color: #292F36;
}

.about .container .wrapper .box .box_img .box_img_text .box_title{
  font-size: 16px;
  font-weight: 400;
  color: #4D5053;
}

.about .container .wrapper .box .title{
  font-size: 18px;
  font-weight: 400;
  color: #4D5053;
  max-width: 296px;
  width: 100%;
  padding-top: 25px;
}

@media screen and (max-width: 400px) {
  .about .container .text{
    font-size: 35px;
  }
}

</style>