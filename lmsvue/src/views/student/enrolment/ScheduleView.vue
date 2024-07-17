<template>
  <div id="app" class="content">
    <sidebar></sidebar>
    <div class="main-content">
      <DxScheduler id="scheduler"
                   :data-source="appointments"
                   text-expr="title"
                   all-day-expr="dayLong"
                   recurrence-rule-expr="recurrence"
                   :current-data.sync="currentData"
                   time-zone="ko/Seoul"
                   :adaptivity-enabled="true">
        <DxView type="day"
                :start-day-hour="10"
                :end-day-hour="22"/>
        <DxView
          type="week"
          :start-day-hour="10"
          :end-day-hour="22"
        />
        <DxView type="month"/>
        <DxEditing
          :allow-dragging="false"
          :allow-editing-time-zones="true"
        />
      </DxScheduler>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar.vue"
import {DxScheduler, DxView, DxEditing} from "devextreme-vue/scheduler"
import {appointments} from "@/assets/js/data.js";

export default {
  components: {
    Sidebar, DxScheduler, DxView, DxEditing
  },
  data() {
    return {
      appointments: appointments,
      currentDate: new Date(2024, 7, 17),
    };
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/admin";

#scheduler{
  height: 800px;
}
</style>
