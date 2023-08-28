<template>
  <section class="copyright">
    <div class="container">
      <h1 class="text">Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow</h1>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.copyright{
  width: 100%;
  margin: 0 auto;
  margin-top: 200px;
}

.copyright .container{
  max-width: 752px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.copyright .container .text{
  font-size: 16px;
  font-weight: 400;
  color: #4D5053;

}


@media screen and (max-width: 350px) {
  .copyright .container{
    max-width: 300px;
    width: 100%;
    margin: 0 auto;
  }
}

</style>