<template>
  <section class="cards">
    <div class="container">
      <div class="box">
        <h1 class="text">Project Plan</h1>
        <p class="title">There are many variations of the passages of lorem Ipsum from 
available, majority.</p>
<button class="btn">Read More</button>
      </div>

      <div class="box">
        <h1 class="text">Interior Work</h1>
        <p class="title">There are many variations of the passages of lorem Ipsum from 
available, majority.</p>
<button class="btn">Read More</button>
      </div>

      <div class="box">
        <h1 class="text">Retail Design</h1>
        <p class="title">There are many variations of the passages of lorem Ipsum from 
available, majority.</p>
<button class="btn">Read More</button>
      </div>

      <div class="box">
        <h1 class="text">2d/3d Art Work</h1>
        <p class="title">There are many variations of the passages of lorem Ipsum from 
available, majority.</p>
<button class="btn">Read More</button>
      </div>

      <div class="box">
        <h1 class="text">Interior Work</h1>
        <p class="title">There are many variations of the passages of lorem Ipsum from 
available, majority.</p>
<button class="btn">Read More</button>
      </div>

      <div class="box">
        <h1 class="text">Decoration Work</h1>
        <p class="title">There are many variations of the passages of lorem Ipsum from 
available, majority.</p>
<button class="btn">Read More</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.cards{
  width: 100%;
  margin: 0 auto;
  margin-top: 50px;
}

.cards .container{
  max-width: 1158px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
}

.cards .container .box{
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  margin-top: 90px;
  height: 390px;
}

.cards .container .box:hover{
  background: #F4F0EC;
  transition: 0.5s;
  border-radius: 30px;
}

.cards .container .box .text{
  font-size: 20px;
  font-weight: 400;
  color: #292F36;
}

.cards .container .box .title{
  max-width: 250px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  color: #4D5053;
  padding-top: 20px;
  padding-bottom: 40px;
}

.cards .container .box .btn{
  border: none;
  font-size: 18px;
}


@media screen and (max-width: 730px) {
  .cards .container .box{
    max-width: 250px;
    width: 100%; 
    height: 250px;
  }
}

</style>