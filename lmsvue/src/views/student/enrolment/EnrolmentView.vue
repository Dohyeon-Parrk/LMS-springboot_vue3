<template>
  <div id="app" class="content">
    <sidebar></sidebar>
    <div class="main-content">
      <header>
        <h1>수강신청</h1>
        <div class="user-info">
          <span>###</span>
        </div>
      </header>
      <section>
        <search-bar-view></search-bar-view>
        <div class="results">
          <h5 class="h-content">개설과목</h5>
          <table>
            <thead>
            <tr style="background-color: #9d9d9d">
              <th>강의번호</th>
              <th>학과</th>
              <th>학년</th>
              <th>구분</th>
              <th>강의이름</th>
              <th>강의실</th>
              <th>강의시간</th>
              <th>분반</th>
              <th>학점</th>
              <th>신청</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="course in courses" :key="course.id">
              <td>{{ course.id }}</td>
              <td>{{ course.department }}</td>
              <td>{{ course.year }}</td>
              <td>{{ course.type }}</td>
              <td>{{ course.name }}</td>
              <td>{{ course.room }}</td>
              <td>{{ course.time }}</td>
              <td>{{ course.section }}</td>
              <td>{{ course.credits }}</td>
              <td>
                <button @click="enroll(course)" class="btn secondary">담기</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import SearchBarView from "@/components/student/SearchBarView.vue";

export default {
  components: {Sidebar, SearchBarView},
  data() {
    return {
      courses: [
        {
          id: '000001',
          department: '컴퓨터공학과',
          year: '2학년',
          type: '전공',
          name: '자바 개론',
          room: '301건 201호',
          time: '수 1,2,3',
          section: '2분반',
          credits: 3,
        },
        {
          id: '000002',
          department: '컴퓨터공학과',
          year: '2학년',
          type: '전공',
          name: '자바 개론',
          room: '301건 201호',
          time: '목 1,2,3',
          section: '1분반',
          credits: 3,
        },
      ],
    };
  },
  methods: {
    filter() {
      // 필터 적용 로직
    },
    enroll(course) {
      // 수강 신청 로직
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/css/admin.scss";
</style>
