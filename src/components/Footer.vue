<template>
  <footer class="fr mt-5">
    <div class="container">
      <div class="row d-flex justify-content-between">
        <div class="col-md-4 col-lg-4">
          <div class="box-1">
            <img src="../assets/logo-grey.png" style="height: 50px" alt="" />
            <p class="text-secondary p-1">
              Aliquam orci nullam tempor sapien gravida donec an enim ipsum
              porta justo at velna auctor congue
            </p>
            <div class="social links p-1">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-github"></i>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-lg-4">
          <div class="box-2">
            <h3>Our Location</h3>
            <p class="text-secondary">
              121 King Street, Melbourne,<br />

              Victoria 3000 Australia
            </p>
          </div>
        </div>

        <div class="col--md-4 col-lg-4">
          <div class="box-3">
            <h3>Emergency Cases</h3>
            <i id="no" class="fa-solid fa-phone"> 1-800-123-4560</i>

            <p class="text-secondary">
              Aliquam orci nullam undo tempor sapien gravida donec enim ipsum
              porta justo velna aucto magna
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
i {
  font-size: 2em;
  margin-left: 10px;
}
#no {
  color: steelblue;
}
.fr {
  background-color: lightblue;
}
</style>