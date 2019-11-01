<template>
  <div class="card-body mx-auto" style="max-width: 400px;">
    <h4 class="card-title mt-3 text-center">Create Account</h4>
    <div class="form-group input-group">
      <el-input placeholder="Email" v-model="email" clearable>
        <i slot="prefix" class="el-input__icon el-icon-location"></i>
      </el-input>
    </div>
    <div class="form-group input-group">
      <el-input placeholder="Address" v-model="address" clearable>
        <i slot="prefix" class="el-input__icon el-icon-location"></i>
      </el-input>
    </div>
    <div class="form-group input-group">
      <el-input placeholder="Password" v-model="password" show-password></el-input>
    </div>
    <div class="form-group">
      <el-button type="primary" style="width: 100%;" @click="register">Register</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      address: "",
      password: ""
    };
  },
  methods: {
    async register() {
      try {
        let user = await this.$axios.post("/user/register", {
          email: this.email,
          address: this.address,
          password: this.password
        });

        await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password
          }
        });

        this.$router.push("/");
      } catch (e) {
        this.error = e.response.data.message;
      }
    }
  }
};
</script>
<style scoped>
.register {
  width: 412px;
  margin: 10vh auto;
  background-color: #f3f3f3;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
</style>
