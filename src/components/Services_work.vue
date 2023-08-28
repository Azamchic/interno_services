<template>
  <section class="work">
    <div class="container">
      <h1 class="text">How We Work</h1>
      <p class="title">It is a long established fact  will be distracted.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <div class="wrapper">
        <div class="box">
          <div class="left">
            <img src="../assets/services_img_1.png" alt="services">
          </div>
          <div class="right">
            <h1 class="box_text">Concept & Details</h1>
            <p class="box_title">It is a long established fact  will be distracted.
Lorem Ipsum is simply dummy from text of the
and typesetting indufstry. </p>
          </div>
        </div>

        <div class="box">
          <div class="left">
            <img src="../assets/services_img_2.png" alt="services">
          </div>
          <div class="right">
            <h1 class="box_text">Idea for Work</h1>
            <p class="box_title">It is a long established fact  will be distracted.
Lorem Ipsum is simply dummy from text of the
and typesetting indufstry. </p>
          </div>
        </div>

        <div class="box">
          <div class="left">
            <img src="../assets/services_img_3.png" alt="services">
          </div>
          <div class="right">
            <h1 class="box_text">Design</h1>
            <p class="box_title">It is a long established fact  will be distracted.
Lorem Ipsum is simply dummy from text of the
and typesetting indufstry. </p>
          </div>
        </div>

        <div class="box">
          <div class="left">
            <img src="../assets/services_img_4.png" alt="services">
          </div>
          <div class="right">
            <h1 class="box_text">Perfection</h1>
            <p class="box_title">It is a long established fact  will be distracted.
Lorem Ipsum is simply dummy from text of the
and typesetting indufstry. </p>
          </div>
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
.work{
  width: 100%;
  margin: 0 auto;
  margin-top: 200px;
  background: #F4F0EC;
  border-radius: 70px;
  
}

.work .container{
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
}

.work .container .text{
  font-size: 50px;
  font-weight: 400;
  color: #363B41;
  padding-top: 160px;
  font-family: serif;
}

.work .container .title{
  font-size: 18px;
  font-weight: 400;
  color: #4D5053;
  max-width: 700px;
  width: 100%;
  text-align: center;
  font-family: serif;
}

.work .container .wrapper{
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 50px;
}

.work .container .wrapper .box{
  max-width: 967px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.work .container .wrapper .box:nth-child(2) .right{
  order: -1;
  text-align: right;
}

.work .container .wrapper .box:nth-child(4) .right{
  order: -1;
  text-align: right;
}

.work .container .wrapper .box .left{
  max-width: 453px;
  width: 100%;
  margin: 0 auto;
}

.work .container .wrapper .box .left img{
  max-width: 453px;
  width: 100%;
  margin: 0 auto;
}

.work .container .wrapper .box .right{
  max-width: 456px;
  width: 100%;
  margin: 0 auto;
}

.work .container .wrapper .box .right .box_text{
  font-size: 35px;
  font-weight: 400;
  color: #292F36;
  font-family: serif;
}

.work .container .wrapper .box .right .box_title{
  font-size: 18px;
  font-weight: 400;
  color: #4D5053;
}


@media screen and (max-width: 930px) {
  .work .container .wrapper .box:nth-child(2) .right{
  order: -1;
  text-align: start;
}

.work .container .wrapper .box:nth-child(4) .right{
  order: -1;
  text-align: start;
}



.work .container .wrapper .box .left{
  max-width: 300px;
  width: 100%;
}

.work .container .wrapper .box .left img{
  max-width: 300px;
  width: 100%;
}

.work .container .wrapper .box .right{
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
}
};


@media screen and (max-width: 770px){
  .work .container .wrapper .box .left{
  max-width: 250px;
  width: 100%;
}

.work .container .wrapper .box .left img{
  max-width: 300px;
  width: 100%;
}

.work .container .wrapper .box .right{
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
}

.work .container .wrapper .box .right .box_text{
  font-size: 30px;
}

.work .container .wrapper .box .right .box_title{
  font-size: 16px;
}
};

@media screen and (max-width: 600px){
  .work .container .wrapper .box:nth-child(2) .right{
  order: 1;
  text-align: center;
}

.work .container .wrapper .box:nth-child(4) .right{
  order: 1;
  text-align: center;
}

.work .container .wrapper{
  display: flex;
  gap: 60px;
}

.work .container .wrapper .box{
  display: flex;
  flex-direction: column;
  text-align: center;
}
}

</style>