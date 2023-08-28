<template>
  <section class="footer">
    <div class="container">
      <div class="interno_info">
        <img src="../assets/interno_logo.png" alt="logo">
        <p class="title">It is a long established fact that a reader will be distracted lookings.</p>
        <div class="icons">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
      </div>
      </div>
      <!-- pages -->
      <div class="pages">
        <h1 class="text">Pages</h1>
        <router-link class="page_routers" to="#">About Us</router-link>
        <router-link class="page_routers" to="#">Our Projects</router-link>
        <router-link class="page_routers" to="#">Our Team</router-link>
        <router-link class="page_routers" to="#">Contact Us</router-link>
        <router-link class="page_routers" to="#">Services</router-link>
      </div>

      <!-- services -->
      <div class="services">
        <h1 class="text">Services</h1>
        <router-link class="services_routers" to="#">Kitchan</router-link>
        <router-link class="services_routers" to="#">Living Area</router-link>
        <router-link class="services_routers" to="#">Bathroom</router-link>
        <router-link class="services_routers" to="#">Dinning Hall</router-link>
        <router-link class="services_routers" to="#">Bedroom</router-link>
      </div>

      <!-- contacts -->
      <div class="footer_contacts">
        <h1 class="text">Contact</h1>
        <h2 class="addres">55 East Birchwood Ave. Brooklyn, New York 11201</h2>
        <h3 class="email">contact@interno.com</h3>
        <h2 class="phone_num">(123) 456 - 7890</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.footer{
  width: 100%;
  margin: 0 auto;
  margin-top: 200px;
}

.footer .container{
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer .container .interno_info{
  max-width: 394px;
  width: 100%;
  margin: 0 auto;
}

.footer .container .interno_info img{
  max-width: 177px;
  width: 100%;
  margin: 0 auto;
  height: 50px;
}

.footer .container .interno_info .title{
  font-size: 18px;
  font-weight: 400;
  color: #4D5053;
  max-width: 393px;
  width: 100%;
  padding-top: 18px;
  padding-bottom: 30px;
}

.footer .container .interno_info .icons{
  max-width: 130px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  color: #292F36;
  cursor: pointer;
}

.footer .container .pages{
  max-width: 125px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-direction: column;
}

.footer .container .pages .text{
  font-size: 25px;
  font-weight: 400;
  color: #292F36;
}

.footer .container .pages .page_routers{
  font-size: 18px;
  font-weight: 400;
  color: #4D5053;
}

.footer .container .services{
  max-width: 125px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-direction: column;
}

.footer .container .services .text{
  font-size: 25px;
  font-weight: 400;
  color: #292F36;
}

.footer .container .services .services_routers{
  font-size: 18px;
  font-weight: 400;
  color: #4D5053;
}

.footer .container .footer_contacts{
  max-width: 258px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}

.footer .container .footer_contacts .text{
  font-size: 25px;
  font-weight: 400;
  color: #292F36;
}

.footer .container .footer_contacts .addres{
  font-size: 18px;
  font-weight: 400;
  color: #4D5053;
}

.footer .container .footer_contacts .email{
  font-size: 18px;
  font-weight: 400;
  color: #4D5053;
}

.footer .container .footer_contacts .phone_num{
  font-size: 18px;
  font-weight: 400;
  color: #4D5053;
}


@media screen and (max-width: 520px) {
  .footer .container{
    display: flex;
    gap: 50px;
  }
  .footer .container .interno_info{
    text-align: center;
    max-width: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .footer .container .interno_info .icons{
    display: flex;
    justify-content: space-between;
  }
};

@media screen and (max-width: 431px){
  .footer .container .footer_contacts{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}

</style>