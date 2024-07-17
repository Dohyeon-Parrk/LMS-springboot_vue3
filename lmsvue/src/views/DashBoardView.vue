<template>
  <div id="app" class="content">
    <sidebar></sidebar>
    <div class="main-content">
      <header>
        <h1>학사공지</h1>
        <div class="user-info">
          <span>###</span>
        </div>
      </header>
      <section>
        <h5 class="h-content">학사공지</h5>
        <div class="board-search m-lg-5">
          <select>
            <option>분류</option>
          </select>
          <input type="text" placeholder="검색어를 입력하세요."/>
          <button class="btn primary">검색</button>
        </div>
        <table>
          <thead>
          <tr style="background-color: #9d9d9d">
            <th>번호</th>
            <th>분류</th>
            <th>제목</th>
            <th>작성자</th>
            <th>등록일</th>
            <th>조회수</th>
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
        {id: 136, category: '학사', title: '공지 테스트', author: '행정팀', date: '2021-09-30', views: 0},
        {id: 135, category: '학사', title: '2021학년도 2학기 등록금 4차 추가 납부기간 안내', author: '재무과', date: '2021-09-30', views: 6},
        // 추가 게시글 데이터
      ],
      rows: 100,
      currentPage: 1
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/admin.scss";
</style>

