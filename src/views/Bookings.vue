<template>
  <Header />
  <section id="appointment">
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-8">
          <h1 class="bk">My booked appointments</h1>
          <div>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Booking patient</th>
                  <th scope="col">department</th>
                  <th scope="col">Doctor</th>
                  <th scope="col">patient-info</th>
                  <th scope="col">date-booked</th>
                  <th scope="col">message</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="booking in bookings" :key="booking.id">
                  <th scope="row">{{ booking.name }}</th>
                  <td>{{ booking.department }}</td>
                  <td>{{ booking.selected_doctor }}</td>
                  <td>{{ booking.patient }}</td>
                  <td>{{ booking.date }}</td>
                  <td>{{ booking.message }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-lg-4">
          <h4>The Heart Of Clinic</h4>
          <hr />
          <div class="d-flex align-items-center">
            <div class="imge">
              <img src="../assets/dr.jpg" alt="" />
            </div>
            <div class="wr m-3">
              <h6 class="bk">Dr.Asuza Frankline</h6>
              <p class="text secondary">Chief Medical Officer,Founder</p>
            </div>
          </div>
          <p class="mt-3">
            An enim nullam tempor sapien at gravida donec pretium ipsum porta
            justo integer at odiovelna vitae auctor integer congue magna pur
          </p>
          <button class="btn btn-primary">Learn More</button>
          <div class="table-info">
            <!-- Title -->
            <h5 class="h5-md">Working Time</h5>

            <!-- Text -->
            <p class="p-sm">
              Porta semper lacus cursus, feugiat primis ultrice ligula risus
              auctor at tempus feugiat dolor lacinia cursus nulla vitae massa
            </p>

            <!-- Table -->
            <table class="table">
              <tbody>
                <tr>
                  <td>Mon – Wed</td>
                  <td>-</td>
                  <td class="text-right">9:00 AM - 7:00 PM</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>-</td>
                  <td class="text-right">9:00 AM - 6:30 PM</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>-</td>
                  <td class="text-right">9:00 AM - 6:00 PM</td>
                </tr>
                <tr class="last-tr">
                  <td>Sun - Sun</td>
                  <td>-</td>
                  <td class="text-right">CLOSED</td>
                </tr>
              </tbody>
            </table>

            <!-- Title -->
            <h5 class="h5-xs">Need a personal health plan?</h5>

            <!-- Text -->
            <p class="p-sm">
              Porta semper lacus cursus, and feugiat primis ultrice ligula at
              risus auctor
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>
<script>
import axios from "axios";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Bookings",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      bookings: [],
    };
  },
  methods: {
    getUserBookings() {
      const bookings = JSON.parse(localStorage.getItem("user.info"));
      if (bookings) {
        return bookings.id;
      }
      return;
    },
    async getBookings() {
      const userid = this.getUserBookings();
      let res = await axios.get(
        `http://localhost:3000/bookings?user_id=${userid}`
      );
      console.log(res);
      this.bookings = res.data;
    },
  },
  mounted() {
    this.getBookings();
  },
};
</script>
<style scoped>
.bk {
  color: steelblue;
}
</style>