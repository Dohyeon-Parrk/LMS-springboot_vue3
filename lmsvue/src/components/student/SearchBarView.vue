<template>
  <div>
  <div class="filters">
    <div class="board-search">
      <label>구분</label>
      <select class="category" id="category">
        <option>전공</option>
        <option>교양</option>
      </select>
    </div>
    <div class="board-search">
      <label>종류</label>
      <select class="category" id="type">
        <option>교과목</option>
      </select>
    </div>
    <div class="board-search">
      <label>입력</label>
      <input class="category" id="search" type="text" placeholder="검색어를 입력하세요."/>
    </div>
    <button @click="filter" class="btn primary">확인</button>
  </div>
  <div class="filters">
    <div class="board-search">
      <label for="category">학부</label>
      <select class="category" id="category">
        <option>전공</option>
        <option>교양</option>
      </select>
    </div>
    <div class="board-search">
      <label for="type">구분</label>
      <select class="category" id="type">
        <option>교과목</option>
      </select>
    </div>
    <div class="board-search">
      <label for="department">학년</label>
      <select class="category" id="department">
        <option>선택</option>
      </select>
    </div>
    <button @click="filter" class="btn primary">확인</button>
  </div>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
@import "@/assets/css/admin.scss";
</style>
