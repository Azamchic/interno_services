<template>
  <section class="counter">
    <div class="container">
      <div class="box">
        <h1 class="text">12</h1>
        <p class="title">Years Of Experiance</p>
      </div>

      <div class="box">
        <h1 class="text">85</h1>
        <p class="title">Success Project</p>
      </div>

      <div class="box">
        <h1 class="text">15</h1>
        <p class="title">Active Project</p>
      </div>

      <div class="box">
        <h1 class="text">95</h1>
        <p class="title">Happy CUstomers</p>
      </div>


    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.counter{
  width: 100%;
  margin: 0 auto;
  margin-top: 150px;
}

.counter .container{
  max-width: 1082px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.counter .container .box{
  max-width: 246px;
  width: 100%;
  margin: 0 auto;
  border-right: 2px solid #CDA274;
  height: 155px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.counter .container .box .text{
  font-size: 85px;
  font-weight: 400;
  color: #CDA274;
}

.counter .container .box .title{
  font-size: 18px;
  font-weight: 400;
  color: #4D5053;
}


</style>