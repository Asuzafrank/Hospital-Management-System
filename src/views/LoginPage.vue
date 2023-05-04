<template>
  <div class="container">
    <div class="row">
      <div class="imagery col-sm-4">
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
      <div class="info-data col-sm-8">
        <div class="reg-info">
          <h3>Login</h3>
          <span class="login-redirect"
            >Don't Have An Account?<a href="">Sign-up</a>
          </span>
        </div>
        <hr />
        <div class="pic">
          <img src="../assets/hlogo.png" alt="" />
        </div>

        <div class="inputs-name">
          <div class="form mb-3">
            <div class="me-2 mx-auto">
              <label for="exampleFormControlInput1" class="form-label"
                >Email</label
              >
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="example@gmail.com"
                v-model="email"
              />
            </div>
            <div class="">
              <label for="exampleFormControlInput2" class="form-label"
                >Password</label
              >
              <input
                type="password"
                class="form-control"
                id="exampleFormControlInput2"
                v-model="password"
              />
            </div>
          </div>
        </div>

        <div class="confirm">
          <button @click="login" type="button" class="btn btn-primary">
            login
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
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      if (result.status === 200 && result.data.length > 0) {
        localStorage.setItem("user.info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "home" });
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
.pic img {
  width: 200px;
  height: 200px;
  text-align: center;
  margin: 0 auto;
  display: block;
}
a > .act {
  color: white;
}
hr {
  border: 2px solid gray;
}
input {
  width: 300px;
  margin: 0 auto;
}

.inputs-name {
  margin: 0 auto;
  text-align: center;
  margin-top: 30px;
}
.confirm {
  display: flex;
}
.btn {
  padding: 10px;
  width: 300px;
  margin: 0 auto;
}
</style>
