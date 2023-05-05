<template>
  <div class="container">
    <div class="row">
      <div class="imagery col-md-6 col-lg-4">
        <div class="logo">
          <h1 class="abb">M.R</h1>
          <p>MedAssets Recovery</p>
        </div>

        <div class="si">
          <h5>The Future Of Subrogation claims Recovery</h5>
        </div>
        <div class="info">
          <h6>E-Sign Act Disclosure And Consent</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vero,
            sint vel architecto illum doloremque soluta aperiam nam aliquid
            sapiente culpa animi optio corrupti veniam accusamus. Reiciendis
            assumenda est tempore!
          </p>
          <a class="act" href="">E-sign disclosure act</a>
        </div>
      </div>
      <div class="info-data col-md-6 col-lg-8">
        <div class="reg-info">
          <h3>Register</h3>
          <span class="login-redirect"
            >Already Have An Account?<a href="">Login</a>
          </span>
        </div>
        <hr />
        <span>Your Basic Information</span>
        <div class="inputs-name">
          <div class="mb-3 d-flex justify-content-between">
            <div class="w-50 me-2">
              <label for="exampleFormControlInput1" class="form-label"
                >First Name</label
              >
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                v-model="fname"
                required
              />
            </div>
            <div class="w-50 ms-2">
              <label for="exampleFormControlInput2" class="form-label"
                >Last Name</label
              >
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput2"
                v-model="lname"
                required
              />
            </div>
          </div>
        </div>
        <div class="inputs-name">
          <div class="mb-3 d-flex justify-content-between">
            <div class="w-50 me-2">
              <label for="exampleFormControlInput1" class="form-label"
                >Email</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="example@gmail.com"
                v-model="email"
                required
              />
            </div>
            <div class="w-50 ms-2">
              <label for="exampleFormControlInput2" class="form-label"
                >Phone-Number</label
              >
              <input
                type="number"
                min="0"
                class="form-control"
                id="exampleFormControlInput2"
                v-model="phone"
                required
              />
            </div>
          </div>
        </div>
        <div class="inputs-name">
          <div class="mb-3 d-flex justify-content-between">
            <div class="w-50 me-2">
              <label for="exampleFormControlInput1" class="form-label"
                >Location</label
              >
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                v-model="location"
                required
              />
            </div>
            <div class="w-50 ms-2">
              <label for="exampleFormControlInput2" class="form-label"
                >Registration Number</label
              >
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput2"
                v-model="regNo"
                required
              />
            </div>
          </div>
        </div>
        <span>Law Firm Info</span>
        <div class="firm-info">
          <div class="my-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Firm Name</label
            >
            <input
              type="email"
              style="width: 100%"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="firm"
              required
            />
          </div>
        </div>
        <div class="inputs-name">
          <div class="mb-3 d-flex justify-content-between">
            <div class="w-50 me-2">
              <label for="exampleFormControlInput1" class="form-label"
                >Password</label
              >
              <input
                type="password"
                class="form-control"
                id="exampleFormControlInput1"
                v-model="password"
                required
              />
            </div>
            <div class="w-50 ms-2">
              <label for="exampleFormControlInput2" class="form-label"
                >Confirm Password</label
              >
              <input
                type="password"
                class="form-control"
                id="exampleFormControlInput2"
                v-model="confirmPassword"
                required
              />
            </div>
          </div>
        </div>
        <div class="confirm">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              required
            />
            <label class="form-check-label" for="flexCheckDefault">
              i have confirm that i have read and agreed to the
              <a href="">terms and condition</a> as per the rules and regulation
            </label>
          </div>
          <button @click="signup" type="button" class="btn btn-primary">
            Register
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "RegistrationPage",
  components: {},
  data() {
    return {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      location: "",
      regNo: "",
      firm: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async signup() {
      if (
        !this.fname ||
        !this.lname ||
        !this.email ||
        !this.password ||
        !this.confirmPassword ||
        !this.location ||
        !this.phone ||
        !this.firm ||
        !this.regNo
      ) {
        alert("Please fill in all required fields.");
        return;
      }
      if (this.password !== this.confirmPassword) {
        alert("passwords do not match");
      } else {
        let result = await axios.post("http://localhost:3000/users", {
          first_name: this.fname,
          last_name: this.lname,
          email: this.email,
          phone_number: this.phone,
          location: this.location,
          registration_number: this.regNo,
          law_firm: this.firm,
          password: this.password,
          confirm_password: this.confirmPassword,
        });
        if (result.status == 201) {
          localStorage.setItem("user.info", JSON.stringify(result));
          this.$router.push({ name: "login" });
        }
      }
    },
  },
};
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Dancing+Script);
h1,
h6,
h5,
p {
  color: #fff;
}
.container {
  height: 100%;
}
.abb {
  color: antiquewhite;
  font-size: 100px;
  font-family: "Dancing Script", cursive;
}
.imagery {
  background: url("../assets/nurse.jpg") no-repeat;
  box-shadow: inset 0 0 0 300px rgba(30, 144, 255, 0.6);
  height: 100vh; /* Set height to 100 viewport height units */
  /* Set position to fixed */
  background-position: center;
  background-size: contain;
}
.reg-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
a > .act {
  color: white;
}
hr {
  border: 2px solid gray;
}
input > .form-control {
  width: 300px;
}

.inputs-name {
  margin: 0 auto;
}
.confirm {
  display: flex;
}
.btn {
  padding: 10px;
  width: 300px;
  margin-left: 30px;
}
</style>
