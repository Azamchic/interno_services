<template>
  <section class="contacts">
    <div class="container">
      <h1 class="text">Wanna join the interno?</h1>
      <p class="title">It is a long established fact  will be distracted.</p>
      <button class="btn">Contact With Us</button>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.contacts{
  width: 100%;
  margin: 0 auto;
  background: #292F36;
  border-radius: 70px;
  height: 375px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 200px;
}


.contacts .container{
  max-width: 570px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  color: #fff;
}

.contacts .container .text{
  font-size: 50px;
  font-weight: 400;
}

.contacts .container .title{
  font-size: 22px;
  font-weight: 400;
  padding-top: 10px;
  padding-bottom: 30px;
}

.contacts .container .btn{
  max-width: 237px;
  width: 100%;
  height: 75px;
  background: #CDA274;
  border-radius: 18px;
  cursor: pointer;
  border: none;
  font-size: 18px;
  color: #fff;
}


@media screen and (max-width: 500px) {
  .contacts .container .text{
    font-size: 30px;
  }

  .contacts .container .title{
    font-size: 22px;
  }

  .contacts .container .btn{
    max-width: 150px;
    width: 100%;
  }
}


</style>