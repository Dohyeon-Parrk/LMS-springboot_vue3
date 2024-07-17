<template>
  <div id="app" class="content">
    <sidebar></sidebar>
    <div class="main-content">
      <header>
        <h1>수강신청 내역</h1>
        <div class="user-info">
          <span>###</span>
        </div>
      </header>
      <section>
        <h5 class="h-content">신청과목</h5>
        <table>
          <thead>
          <tr style="background-color: #9d9d9d">
            <th>강의번호</th>
            <th>학년</th>
            <th>구분</th>
            <th>강의이름</th>
            <th>강의실</th>
            <th>강의시간</th>
            <th>학점</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="post in posts" :key="post.id">
            <td>{{ post.id }}</td>
            <td>{{ post.category }}</td>
            <td>{{ post.title }}</td>
            <td>{{ post.author }}</td>
            <td>{{ post.date }}</td>
            <td>{{ post.views }}</td>
            <td>{{ post.views }}</td>
            <td>
              <button @click="enroll(course)" class="btn secondary">취소</button>
            </td>
          </tr>
          </tbody>
        </table>
        <div class="overflow-auto">
          <div>
            <b-pagination v-model="currentPage" pills :total-rows="rows" class="pagination-area"></b-pagination>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: {Sidebar},
  data() {
    return {
      posts: [
        {id: 136, category: '1학년', title: '전공 필수', author: '행정팀', date: '2021-09-30', views: 0},
        {id: 135, category: '2학년', title: '교양', author: '재무과', date: '2021-09-30', views: 6},
        // 추가 게시글 데이터
      ],
      rows: 100,
      currentPage: 1
    };
  },
  methods: {
    goToPage(page) {
      // 페이지 이동 로직
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/admin";
</style>

