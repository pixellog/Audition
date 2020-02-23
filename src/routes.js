import Main from "@/pages/Main.vue";
import Login from "@/pages/Login.vue";
import Join from "@/pages/Join";
import IntroJoin from "@/pages/IntroJoin";
import Intro from "@/pages/Intro";
import Guide from "@/pages/Guide";
import ProfilePhoto from "@/pages/ProfilePhoto";
import Ranking from "@/pages/Ranking";
import AuditionList from "@/pages/AuditionList";
import AuditionListInfo from "@/pages/AuditionListInfo";
import AuditionListDetail from "@/pages/AuditionListDetail";
import NotFound from "@/pages/404.vue";
import Heart from "@/pages/Heart";
import ProfileMain from "@/pages/ProfileMain";
import MyInfo from "@/pages/MyInfo";
import ProfileWrite from "@/pages/ProfileWrite";
import Profile from "@/pages/Profile";
import OpenTalk from "@/pages/OpenTalk";
import Diary from "@/pages/Diary";
import DiaryView from "@/pages/DiaryView";
import DiaryWrite from "@/pages/DiaryWrite";
import DiaryReply from "@/pages/DiaryReply";
import Audition from "@/pages/Audition";
import Reward from "./pages/Reward";
import Setting from "./pages/Setting";
import Qna from "./pages/Qna";

export default [
  { title: '메인', path: '/', component: Main },

  { title: '회원가입', path: '/join', component: Join },
  { title: '회원가입 / 대표사진 등록', path: '/join/photo', component: ProfilePhoto },
  { title: '회원가입성공', path: '/intro/join', component: IntroJoin },
  { title: '로그인', path: '/login', component: Login },
  { title: '인트로', path: '/intro', component: Intro },

  { title: '오디션 전체목록', path: '/audition', component: Audition },
  { title: '오디션 상세정보', path: '/audition/info', component: AuditionListInfo },

  { title: '오디션 전체목록', path: '/audition/entry', component: AuditionList },
  { title: '오디션 후보목록', path: '/audition/entry/detail', component: AuditionListDetail },

  { title: '하트', path: '/heart', component: Heart },
  { title: '리워드', path: '/reward', component: Reward },
  { title: '세팅', path: '/setting', component: Setting },
  { title: 'Q&A', path: '/qna', component: Qna },

  { title: '랭킹', path: '/ranking', component: Ranking },


  { title: 'profile 메인', path: '/profile', component: ProfileMain },
  { title: 'profile 등록', path: '/profile/regist', component: ProfileWrite },
  { title: 'profile 정보', path: '/profile/view', component: Profile },

  { title: 'My Info', path: '/myinfo', component: MyInfo },

  { title: 'Diary', path: '/diary', component: Diary },
  { title: 'Diary 상세', path: '/diary/view', component: DiaryView },
  { title: 'Diary 댓글', path: '/diary/reply', component: DiaryReply },
  { title: 'Diary 쓰기', path: '/diary/write', component: DiaryWrite },

  { title: 'Open Talk', path: '/opentalk', component: OpenTalk },
  { title: '가이드', path: '/guide', component: Guide },
  { title: '404', path: '**', component: NotFound },
];
