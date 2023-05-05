<template>
  <Header />
  <section id="appointment">
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-8">
          <h1 class="bk">Book Appointments</h1>
          <p>
            Porta semper lacus cursus, feugiat primis ultrice in ligula risus
            auctor tempus feugiat dolor lacinia cubilia curae integer congue leo
            metus, primis in orci integer metus mollis faucibus enim. Nemo ipsam
            egestas volute turpis dolores ut aliquam quaerat sodales sapien undo
            pretium purus feugiat dolor impedit magna purus pretium gravida
            donec ligula massa gravida donec pretium
          </p>
          <form
            name="appointmentform"
            class="row appointment-form"
            novalidate="novalidate"
          >
            <!-- Form Select -->
            <div id="input-department">
              <select
                id="inlineFormCustomSelect"
                name="department"
                class="custom-select mt-3"
                v-model="dept"
              >
                <option value="">Select Department</option>
                <option>Pediatrics Department</option>
                <option>Neurology Department</option>
                <option>Haematology Department</option>
                <option>X-Ray Diagnostic Department</option>
                <option>Cardiology Department</option>
                <option>MRI Department</option>
                <option>Laboratory Services</option>
                <option>Other</option>
              </select>
            </div>

            <!-- Form Select -->
            <div id="input-doctor">
              <select
                id="inlineFormCustomSelect"
                name="doctor"
                class="custom-select mt-3"
                v-model="doctor"
              >
                <option value="">Select Doctor</option>
                <option>Jonathan Barnes D.M.</option>
                <option>Hannah Harper D.M.</option>
                <option>Matthew Anderson D.M.</option>
                <option>Megan Coleman D.M.</option>
                <option>Joshua Elledge D.M.</option>
                <option>Other</option>
              </select>
            </div>

            <!-- Form Select -->
            <div id="input-patient">
              <select
                id="inlineFormCustomSelect"
                name="patient"
                class="custom-select mt-3"
                v-model="patient"
              >
                <option value="">Have You Visited Us Before?*</option>
                <option>New Patient</option>
                <option>Returning Patient</option>
                <option>Other</option>
              </select>
            </div>

            <!-- Contact Form Input -->
            <div id="input-date">
              <input
                id="datetimepicker"
                type="date"
                name="date"
                class="form-control date"
                placeholder="Appointment Date"
                v-model="date"
              />
            </div>

            <!-- Contact Form Input -->
            <div id="input-name">
              <input
                type="text"
                name="name"
                class="form-control name"
                placeholder="Enter Your Name*"
                v-model="name"
              />
            </div>

            <div id="input-email">
              <input
                type="text"
                name="email"
                class="form-control email"
                placeholder="Enter Your Email*"
                v-model="email"
              />
            </div>

            <div id="input-phone">
              <input
                type="tel"
                name="phone"
                class="form-control phone"
                placeholder="Enter Your Phone Number*"
                v-model="phone"
              />
            </div>

            <div id="input-message">
              <textarea
                class="form-control mt-3"
                name="message"
                rows="6"
                placeholder="Your Message ..."
                v-model="message"
              ></textarea>
            </div>

            <!-- Contact Form Button -->

            <!-- Contact Form Message -->
          </form>
          <div>
            <button
              @click="requestAppointment"
              style="width: 100%"
              class="btn btn-primary mt-3"
            >
              Request an Appointment
            </button>
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
  name: "Appointments",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      dept: "",
      doctor: "",
      patient: "",
      date: "",
      name: "",
      email: "",
      phone: "",
      message: "",
      user_id: null,
    };
  },
  methods: {
    getUserID() {
      const userInfo = JSON.parse(localStorage.getItem("user.info"));
      if (userInfo) {
        return userInfo.id;
      }
      return null;
    },

    async requestAppointment() {
      if (
        !this.dept ||
        !this.doctor ||
        !this.patient ||
        !this.date ||
        !this.name ||
        !this.email ||
        !this.phone ||
        !this.message
      ) {
        alert("Please fill in all required fields.");
        return;
      }
      const userId = this.getUserID();
      if (!userId) {
        alert("Please log in to make a booking.");
        this.$router.push({ name: "login" });
        return;
      }
      const data = {
        department: this.dept,
        selected_doctor: this.doctor,
        patient: this.patient,
        date: this.date,
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message,
        user_id: userId,
      };
      const result = await axios.post("http://localhost:3000/bookings", data);
      if (result.status === 201) {
        this.$router.push({ name: "bookings" });
      }
    },
  },
};
</script>
<style scoped>
.bk {
  color: steelblue;
}
#inlineFormCustomSelect {
  width: 100%;
  padding: 10px;
}
input {
  padding: 10px;
  margin-top: 10px;
}
#inlineFormCustomSelect {
  border: 1px solid gray;
  border-radius: 5px;
}
hr {
  border: 2px solid gray;
}
.table-info {
  margin-top: 20px;
  background-color: #29aecd;
}
</style>