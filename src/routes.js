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
import Profile from "@/pages/Profile";
import MyInfo from "@/pages/MyInfo";
import ProfileWrite from "@/pages/ProfileWrite";
import ProfileView from "@/pages/ProfileView";
import OpenTalk from "@/pages/OpenTalk";
import Diary from "@/pages/Diary";
import DiaryView from "@/pages/DiaryView";
import DiaryWrite from "@/pages/DiaryWrite";
import DiaryReply from "@/pages/DiaryReply";
import Audition from "@/pages/Audition";
import Reward from "./pages/Reward";
import Setting from "./pages/Setting";
import Qna from "./pages/Qna";
import Photo from "@/pages/Photo";
import Privacy from "@/pages/Privacy";
import FindID from "@/pages/FindID";
import FindIDResult from "@/pages/FindIDResult";
import FindPW from "@/pages/FindPW";
import FindPWResult from "@/pages/FindPWResult";
import TermsService from "@/pages/TermsService";

export default [
  { title: '메인', path: '/', component: Main },

  { title: '오디션/전체목록', path: '/audition', component: Audition },
  { title: '오디션/전체목록/상세', path: '/audition/detail', component: AuditionListInfo },
  { title: '오디션/후보목록', path: '/audition/list', component: AuditionList },
  { title: '오디션/후보목록/상세', path: '/audition/list/detail', component: AuditionListDetail },
  { title: 'Ranking', path: '/ranking', component: Ranking },

  { title: '로그인', path: '/login', component: Login },
  { title: '회원가입', path: '/join', component: Join },
  { title: '서비스 이용약관', path: '/terms/service', component: TermsService },
  { title: '개인정보취급방침', path: '/terms/privacy', component: Privacy },
  { title: '회원가입/대표사진 등록', path: '/join/photo', component: ProfilePhoto },
  { title: '아이디 찾기', path: '/find-id', component: FindID },
  { title: '아이디 찾기 결과', path: '/find-id-result', component: FindIDResult },
  { title: '비밀번호 찾기', path: '/find-pw', component: FindPW },
  { title: '비밀번호 찾기 결과', path: '/find-pw-result', component: FindPWResult },
  { title: '인트로', path: '/intro', component: Intro },
  { title: '인트로/회원가입후', path: '/intro/join', component: IntroJoin },

  { title: '프로필/메인', path: '/profile', component: Profile },
  { title: '프로필/입력', path: '/profile/write', component: ProfileWrite },
  { title: '프로필/보기', path: '/profile/view', component: ProfileView },

  { title: '다이어리', path: '/diary', component: Diary },
  { title: '다이어리/입력', path: '/diary/write', component: DiaryWrite },
  { title: '다이어리/보기', path: '/diary/view', component: DiaryView },
  { title: '다이어리/댓글', path: '/diary/reply', component: DiaryReply },

  { title: 'Reward', path: '/reward', component: Reward },
  { title: 'Q&A', path: '/qna', component: Qna },
  { title: 'Setting', path: '/setting', component: Setting },

  { title: 'Heart', path: '/heart', component: Heart },
  { title: 'Photo-작업중', path: '/photo', component: Photo },

  { title: 'My Info', path: '/myinfo', component: MyInfo },
  { title: 'Open Talk', path: '/opentalk', component: OpenTalk },

  { title: '가이드', path: '/guide', component: Guide },
  { title: '404', path: '**', component: NotFound },
];
