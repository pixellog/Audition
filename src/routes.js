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

export default [
  { title: '메인', path: '/', component: Main },
  { title: '하트', path: '/heart', component: Heart },
  { title: '오디션', path: '/audition', component: AuditionList },
  { title: '오디션정보', path: '/audition/info', component: AuditionListInfo },
  { title: '오디션상세', path: '/audition/detail', component: AuditionListDetail },
  { title: '랭킹', path: '/ranking', component: Ranking },
  { title: '로그인', path: '/login', component: Login },
  { title: '회원가입', path: '/join', component: Join },
  { title: '회원가입성공', path: '/intro/join', component: IntroJoin },
  { title: '인트로', path: '/intro', component: Intro },
  { title: 'profile 메인', path: '/my/main', component: ProfileMain },
  { title: 'profile', path: '/my/profile', component: Profile },
  { title: 'profile 쓰기', path: '/my/profile/write', component: ProfileWrite },
  { title: 'My Info', path: '/my/myinfo', component: MyInfo },
  { title: '프로필사진', path: '/my/photo', component: ProfilePhoto },
  { title: 'Diary', path: '/my/diary', component: Diary },
  { title: 'Diary 상세', path: '/my/diary/view', component: DiaryView },
  { title: 'Diary 댓ㄱ르', path: '/my/diary/reply', component: DiaryReply },
  { title: 'Diary 쓰기', path: '/my/diary/write', component: DiaryWrite },
  { title: 'Open Talk', path: '/my/opentalk', component: OpenTalk },
  { title: '가이드', path: '/guide', component: Guide },
  { title: '404', path: '**', component: NotFound },
];
