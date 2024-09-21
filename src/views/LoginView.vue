<script>
export default {
  data() {
    return {
      showLogin: true,
      state : {
        fullname:"",
        email:"",
        password:"",
      }
    };
  },
  methods: {
    handleToggle() {
      this.showLogin = !this.showLogin;
    },
    handleRegister(e){
      e.preventDefault();
      console.log(this.state)
    },
    handleLogin(e){
      e.preventDefault();
      console.log(this.state)
    }
  },
};
</script>

<template>
  <main>
    <div class="login">
      <div class="center-wr">
        <div class="login-form-container">
          <div class="right-section w-50">
            <h3 v-if="showLogin">Login here</h3>
            <h3 v-else>Register here</h3>
            <p v-if="showLogin">If You have not Account Please Register first</p>
            <p v-if="!showLogin">If you have already Account please Login.</p>
            <button class="signup-btn" @click="handleToggle">
              {{ showLogin ? 'SignUp' : 'SignIn' }}
            </button>
          </div>

          <div class="left-section w-50">
            <form v-if="showLogin">
              <div class="form-field">
                <input type="text" v-model="state.email" placeholder="Email" />
              </div>
              <div class="form-field">
                <input type="text" v-model="state.password" placeholder="Password" />
              </div>
              <button class="login-btn" @click="handleLogin">Login</button>
            </form>
            <form v-else>
              <div class="form-field">
                <input type="text" v-model="state.fullname" placeholder="Full Name" />
              </div>
              <div class="form-field">
                <input type="text" v-model="state.email" placeholder="Email" />
              </div>
              <div class="form-field">
                <input type="text" v-model="state.password" placeholder="Password" />
              </div>
              <button class="login-btn" @click="handleRegister">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.login {
  padding: 50px 0px;
}

.login-form-container {
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 600px;
  margin: 20px auto;
  justify-content: space-between;
  background-color: blueviolet;
}

.right-section {
  color: #fff;
  border-radius: 10px;
  padding: 40px 20px;
}

.right-section p {
  padding: 18px 0px;
}

.left-section {
  background-color: #fff;
  padding: 42px 23px;
  margin: 10px;
  border-radius: 10px;
}

.login-btn {
  background: blueviolet;
  color: #fff;
  border: none;
  padding: 8px 20px;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2.2px;
}

.form-field {
  margin-bottom: 20px;
}

input[type="text"] {
  padding: 8px 20px;
  width: 100%;
}

.signup-btn {
  background: #fff;
  padding: 8px 20px;
  border: none;
  border-radius: 5px;
}

.w-50 {
  width: 48%;
}
</style>
