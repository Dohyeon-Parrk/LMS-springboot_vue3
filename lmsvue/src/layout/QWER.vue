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
        <div class="board-search">
          <select>
            <option>분류</option>
          </select>
          <input type="text" placeholder="검색어를 입력하세요."/>
          <button>검색</button>
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
  methods: {
    goToPage(page) {
      // 페이지 이동 로직
    }
  }
};
</script>
<style scoped>
#app {
  display: flex;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  margin: 10px 0;
}

nav ul ul {
  margin-left: 20px;
}

nav ul li a {
  color: #ecf0f1;
  text-decoration: none;
}

.main-content {
  flex: 1;
  padding: 20px;
  background-color: #ecf0f1;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  border-bottom: 3px solid #0f0f0f;
}

.h-content {
  margin-bottom: 30px;
}

.user-info {
  font-size: 14px;
}

.board-search {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.board-search select,
.board-search input {
  margin-right: 10px;
  padding: 5px;
}

.board-search button {
  padding: 5px 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table th,
table td {
  border: 1px solid #bdc3c7;
  padding: 10px;
  text-align: center;
}

.pagination button {
  padding: 5px 10px;
  margin: 0 5px;
}

.overflow-auto {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  padding: 5px 10px;
}

</style>

