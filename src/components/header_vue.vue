<template>
  <section class="header">
    <div class="container" :class="{ active: isActive }">
      
      <div class="wrapper" :class="{ active: isActive }">
        <div class="left">
          <img src="../assets/interno_logo.png" alt="logo">
        </div>
        <div class="right">
          <router-link to="#" class="right_link">Home</router-link>
          <router-link to="#" class="right_link">Page</router-link>
          <router-link to="/services" class="right_link">Services</router-link>
          <router-link to="#" class="right_link">Project</router-link>
          <router-link to="#" class="right_link">Blog</router-link>
          <router-link to="#" class="right_link">Contact</router-link>
        </div>
      </div>
      <i class="icon fa-solid fa-bars" @click="toggleActive"></i>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    }
  }
  }
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  font-family: Arial, Helvetica, sans-serif;
}

.header{
  width: 100%;
  margin: 20px auto;
}

.header .container{
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.header .container .icon{
  display: none;
}

.header .container .wrapper{
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.header .container .wrapper .left{
  max-width: 180px;
  width: 100%;
  margin: 0 auto;
}

.header .container .wrapper .left img{
  max-width: 180px;
  width: 100%;
  margin: 0 auto;
}

.header .container .wrapper .right{
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 400;
  color: #292F36;
  flex-wrap: wrap;
}


@media screen and (max-width: 630px) {
  .header .container .wrapper{
    display: flex;
    flex-direction: column;
    transform: translateX(-100%);
    transition: 0.5s;
  }

  .header .container .wrapper.active{
    transform: translateX(0);
  }

  .header .container .wrapper .left{
    max-width: 150px;
    width: 100%;
    margin: 0 auto;
  }

  .header .container .wrapper .left img{
    max-width: 150px;
    width: 100%;
    margin: 0 auto;
  }

  .header .container .wrapper .right{
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-left: 30px;
    color: #292F36;
    font-size: 20px;
  }

  .header .container .wrapper .right .right_link{
    max-width: 100px;
    width: 100%;
  }

  .header .container {
    display: flex;
    justify-content: start;
    align-items: start;
    margin-top: -20px;
    height: 400px;
    z-index: 3;
    isolation: isolate;
    
  }

  .header .container.active{
    background: rgba(192, 192, 192, 0.737);
    transition: 0.5s;
  }
  
  .header .container .icon{
    display: block;
    font-size: 30px;
    margin-right: 20px;
    display: flex;
    justify-content: start;
    margin-top: 10px;
  }
}


</style>