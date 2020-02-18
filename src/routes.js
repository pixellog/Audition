import Main from "@/pages/Main.vue";
import Login from "@/pages/Login.vue";
import NotFound from "@/pages/404.vue";
import Join from "@/pages/Join";
import IntroJoin from "@/pages/IntroJoin";
import Intro from "@/pages/Intro";
import Guide from "@/pages/Guide";
import Profile from "@/pages/Profile";
import Audition from "@/pages/Audition";

export default [
  { title: '메인', path: '/', component: Main },
  { title: '오디션', path: '/audition', component: Audition },
  { title: '로그인', path: '/login', component: Login },
  { title: '회원가입', path: '/join', component: Join },
  { title: '인트로', path: '/intro', component: Intro },
  { title: '프로필', path: '/profile', component: Profile },
  { title: '회원가입성공', path: '/intro/join', component: IntroJoin },
  { title: '가이드', path: '/guide', component: Guide },
  { title: '404', path: '**', component: NotFound },
];
