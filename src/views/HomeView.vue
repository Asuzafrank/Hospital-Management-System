<template>
  <Header />

  <section id="hero-1" class="top">
    <div class="container">
      <div class="row d-flex align-items-center">
        <!-- HERO TEXT -->
        <div class="col-md-8 col-lg-7 col-xl-6">
          <div class="hero-txt mb-40">
            <!-- Title -->
            <h5 class="wr">Welcome To Our Clinic</h5>
            <h2 class="wr">Take Care of Your Health</h2>

            <!-- Text -->
            <p class="p-md">
              Feugiat primis ligula risus auctor egestas augue mauri viverra
              tortor in iaculis placerat eugiat mauris ipsum in viverra tortor
              and gravida purus pretium lorem primis in orci integer mollis
            </p>

            <!-- Button -->
            <a href="" class="btn btn-primary blue-hover">More About Clinic</a>
          </div>
        </div>
        <!-- END HERO TEXT -->

        <!-- HERO IMAGE -->
        <div class="col-md-4 col-lg-5 col-xl-6">
          <div class="hero-1-img text-center">
            <img
              class="img-fluid"
              src="../assets/nursesHome.png"
              alt="hero-image"
            />
          </div>
        </div>
      </div>
      <!-- End row -->
    </div>
    <!-- End container -->
  </section>
  <section id="about-1" class="about-section division">
    <div class="container abouts">
      <div class="row d-flex justify-content-center">
        <!-- ABOUT BOX #1 -->

        <!-- ABOUT BOX #2 -->
        <div class="card col-md-6 col-lg-4">
          <div class="card-body">
            <h5 class="card-title text-light">Doctors Timetable</h5>

            <p class="card-text">
              An magnis nulla dolor at sapien augue erat iaculis purus tempor
              magna ipsum and vitae a purus primis ipsum magna ipsum
            </p>
            <button class="btn btn-primary">View Timetable</button>
          </div>
        </div>

        <!-- ABOUT BOX #3 -->
        <div class="card col-md-6 col-lg-4">
          <div class="card-body">
            <h5 class="card-title text-light">Appointments</h5>

            <p class="card-text text-">
              An magnis nulla dolor at sapien augue erat iaculis purus tempor
              magna ipsum and vitae a purus primis ipsum magna ipsum
            </p>
            <router-link to="/appointment" class="btn btn-primary"
              >Make an appointment</router-link
            >
          </div>
        </div>

        <!-- ABOUT BOX #4 -->
        <div class="card col-md-6 col-lg-4">
          <div class="card-body">
            <h5 class="card-title text-light">Emergency Cases</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">
              Card subtitle
            </h6>
            <p class="card-text">
              An magnis nulla dolor sapien augue erat iaculis purus tempor magna
              ipsum and vitae a purus primis ipsum magna ipsum
            </p>
          </div>
        </div>
      </div>
      <!-- End row -->
    </div>
    <!-- End container -->
  </section>
  <section id="3-r " class="mt-5">
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col-md-6">
          <img src="../assets/nurse-03.png" class="img-fluid" alt="" />
        </div>
        <div class="col-md-6">
          <h3 class="wc">Welcome To MedAssets Recovery</h3>
          <h1 class="cm">Complete Medical Solutions in One Place</h1>
          <P
            >Porta semper lacus cursus, feugiat primis ultrice in ligula risus
            auctor tempus feugiat dolor lacinia cubilia curae integer congue leo
            metus, eu mollislorem primis in orci integer metus mollis faucibus.
            An enim nullam tempor sapien gravida donec pretium and ipsum porta
            justo integer at velna vitae auctor integer congue</P
          >
          <h6 class="text-secondary">Selin Nyawina, Head of Clinic</h6>
          <img src="../assets/signature.png" style="height: 20px" alt="" />
        </div>
      </div>
    </div>
  </section>
  <hr />
  <Footer />
</template>
<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    Footer,
  },
};
</script>
<style scoped>
.top {
  background-color: lightblue;
}
.wr {
  color: steelblue;
}
h2 {
  font-size: 4em;
}
h5 {
  font-size: 2em;
}
.about-section {
  position: relative;
}
.abox-1 {
  background-color: rgb(71, 143, 167);
}
.card {
  background-color: rgb(71, 143, 167);
}
#about-1 {
  position: relative;
  margin-top: -90px;
  z-index: 99;
}
.wc {
  color: lightblue;
}
.cm {
  color: steelblue;
  font-size: 34px;
}
hr {
  border: 1px solid gray;
}
</style>