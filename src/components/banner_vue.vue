<template>
  <section class="banner">
    <div class="container">
      <h1 class="text">Let Your Home Be Unique</h1>
      <p class="title">There are many variations of the passages of
lorem Ipsum fromavailable, majority. There are many variations of the passages of
lorem Ipsum fromavailable, majority.</p>
<button class="btn">Get Started</button>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.banner{
  width: 100%;
  background: url(../assets/banner_images.png) no-repeat center / cover;
  margin: 40px auto;
  height: 758px;
  display: flex;
  align-items: center;
}

.banner .container{
  max-width: 434px;
  width: 100%;
  margin-left: 50px;
}

.banner .container .text{
  font-size: 65px;
  font-weight: 400;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #292F36;
}

.banner .container .title{
  font-size: 18px;
  font-weight: 400;
  max-width: 433px;
  width: 100%;
  color: #4D5053;
  padding-top: 20px;
  padding-bottom: 20px;
}


.banner .container .btn{
  max-width: 220px;
  width: 100%;
  height: 75px;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  background: #292F36;
  border-radius: 18px;
  border: none;
}


@media screen and (max-width: 630px) {
  .banner{
    margin: -440px auto;
  }

  .banner .container .text{
    font-size: 40px;
  }

  .banner .container .title{
    max-width: 300px;
    width: 100%;
    font-size: 15px;
  }

  .banner .container .btn{
    max-width: 150px;
    width: 100%;
  }
};

@media screen and (max-width: 401px){
  .banner .container{
    margin-left: 15px;
  }

  .banner .container .text{
    font-size: 30px;
  }

  .banner .container .btn{
    max-width: 130px;
    height: 60px;
    width: 100%;

  }
}
</style>