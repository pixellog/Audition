import Main from "@/pages/Main.vue";
import Login from "@/pages/Login.vue";
import NotFound from "@/pages/404.vue";
import Join from "@/pages/Join";
import IntroJoin from "@/pages/IntroJoin";
import Intro from "@/pages/Intro";
import Pub from "@/Pub";

export default [
  { name: 'main', title: '메인', path: '/', component: Main },
  { name: 'login', title: '로그인', path: '/login', component: Login },
  { name: 'join', title: '회원가입', path: '/join', component: Join },
  { name: 'intro', title: '인트로', path: '/intro', component: Intro },
  { name: 'intro-join', title: '회원가입성공', path: '/introJoin', component: IntroJoin },
  { name: 'not-found', title: '404', path: '**', component: NotFound },
  { name: 'pub', title: 'publishing', path: '/pub', component: Pub },
];
