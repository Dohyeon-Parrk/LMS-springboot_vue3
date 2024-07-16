<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <img src="@/assets/logo.png" alt="메타대학교 로고" class="logo"/>
      <h3 @click="goToMenu('/')">vue3 대학교</h3>
    </div>
    <nav class="sidebar-nav">
      <ul>
        <li v-for="(section, index) in sidebarConfig" :key="index">
          <div class="section-title" @click="toggleDropdown(index)">
            {{ section.text }}
            <span :class="{'arrow': true, 'arrow-down': activeIndex === index, 'arrow-right': activeIndex !== index}"></span>
          </div>
          <ul v-if="activeIndex === index" class="submenu">
            <li v-for="item in section.items" :key="item.link">
              <router-link :to="item.link">{{ item.text }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarConfig: [
        {
          text: '공지사항',
          items: [
            { text: '공지 게시판', link: '/dashboard' }
          ]
        },
        {
          text: '수강신청',
          items: [
            { text: '수강신청', link: '/enrolment' },
            { text: '수강신청내역', link: '/enrolmentlist' },
            { text: '시간표조회', link: '/schedule' }
          ]
        },
        {
          text: '학적 관리',
          items: [
            { text: '내 학적 정보', link: '' },
            { text: '비밀번호 변경', link: '' },
            { text: '등록금 고지서 조회', link: '' }
          ]
        },
        {
          text: '마이페이지',
          items: [
            { text: '내 정보', link: '' },
            { text: '비밀번호 변경', link: '' }
          ]
        }
      ],
      activeIndex: null
    };
  },
  methods: {
    goToMenu(path) {
      this.$router.push(path);
    },
    toggleDropdown(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    }
  }
};
</script>

<style>
.sidebar {
  width: 300px;
  background-color: #2c3e50;
  color: #ecf0f1;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}

.sidebar-header {
  display: flex;
  align-items: center;
  margin-bottom: 70px;
  cursor: pointer;
}

.logo {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.sidebar-nav ul {
  list-style: none;
  padding: 0;
}

.sidebar-nav ul li {
  margin: 10px 0;
  padding: 15px;
}

.section-title {
  font-weight: bold;
  margin-bottom: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.submenu {
  padding-left: 30px;
  background-color: #3a3a3a;
  list-style: none;
  margin: 0;
}

.submenu li {
  margin: 5px 0;
  padding-left: 30px;
}

.submenu li a {
  color: #ecf0f1;
  text-decoration: none;
}

.submenu li a:hover {
  text-decoration: underline;
}

.arrow {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 10px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  transition: transform 0.3s ease;
}

.arrow-right {
  border-top: 5px solid #ecf0f1;
}

.arrow-down {
  border-top: 5px solid #ecf0f1;
  transform: rotate(90deg);
}
</style>
