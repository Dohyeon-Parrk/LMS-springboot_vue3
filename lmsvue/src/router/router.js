import {createRouter, createWebHistory} from "vue-router";
import LoginView from "@/views/LoginView.vue";
import DashBoardView from "@/views/DashBoardView.vue";
import EnrolmentView from "@/views/student/enrolment/EnrolmentView.vue";
import EnrolmentListView from "@/views/student/enrolment/EnrolmentListView.vue";
import ScheduleView from "@/views/student/enrolment/ScheduleView.vue";
import QWER from "@/layout/QWER.vue";

const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/dashboard',
    name: 'DashBoardView',
    component: DashBoardView
  },
  {
    path: '/enrolment',
    name: 'EnrolmentView',
    component: EnrolmentView
  },
  {
    path: '/enrolmentlist',
    name: 'EnrolmentListView',
    component: EnrolmentListView
  },
  {
    path: '/schedule',
    name: 'ScheduleView',
    component: ScheduleView
  },
  {
    path: '/qwer',
    name: 'QWER',
    component: QWER
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
