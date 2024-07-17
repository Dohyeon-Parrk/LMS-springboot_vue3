<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-box">
        <div class="logo-container">
          <img src="@/assets/images/admin/login/lms_logo.png" alt="Meta University Logo" class="logo" />
        </div>
        <form class="login-form">
            <legend align="center">로그인</legend>
            <div class="form-group">
              <label for="user_id">아이디</label>
              <input type="text" id="user_id" v-model="userId" placeholder="아이디를 입력하세요." />
            </div>
            <div class="form-group">
              <label for="user_pwd">비밀번호</label>
              <input type="password" id="user_pwd" v-model="password" placeholder="비밀번호를 입력하세요." />
            </div>
            <div class="form-options">
              <label>
                <input type="checkbox" v-model="saveId" /> ID저장
              </label>
            </div>
            <div class="form-links">
              <a href="#" @click.prevent="register">[회원가입]</a>
              <a href="#">[아이디/비밀번호 찾기]</a>
            </div>
            <button type="button" class="btn-login" @click="login">로그인 (임시 메인화면 버튼)</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: '',
      password: '',
      saveId: false,
    };
  },
  methods: {
    login() {
      this.$router.push('/dashboard');
    },
    register() {
      // Handle registration logic
    },
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('@/assets/images/admin/login/login_main.jpg') no-repeat center center;
  background-size: cover;
}

.login-container {
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 500px;
}

.login-form {
  width: 400px;
  padding: 10px;
}

.logo-container {
  max-width: 400px;
  margin-bottom: 5px;
}

.logo {
  width: 300px;
  height: 100px;
  margin-bottom: 50px;
}

.quote {
  font-size: 18px;
  margin: 10px 0;
}

.quote-details, .author {
  font-size: 14px;
  margin: 10px 0;
}

.login-form {
  text-align: left;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.form-options {
  margin-bottom: 15px;
}

.form-links {
  margin-bottom: 20px;
}

.form-links a {
  margin-right: 10px;
}

.btn-login {
  width: 100%;
  padding: 10px;
  background-color: #5e72e4;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-login:hover {
  background-color: #324cdd;
}
</style>
