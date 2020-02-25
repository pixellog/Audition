<template>
    <div>
        <div class="p-3">
            <h3>Publishing Guide</h3>
            <h4>사용 라이브러리</h4>
            <ol>
                <li>
                    <a target="_blank" href="//bootstrap-vue.js.org">BootstrapVue</a>
                </li>
                <li>
                    <a target="_blank" href="//gs-shop.github.io/vue-slick-carousel/#/example/simple">vue-slick-carousel</a>
                </li>
            </ol>

            <h4>페이지</h4>
            <ol>
                <li v-for="i in routes" v-bind:key="i">
                    <router-link :to="i.path">{{i.title}}</router-link>
                </li>
            </ol>
        </div>

        <div>
            <Main/>
            <Audition/>
            <AuditionListInfo/>
            <AuditionList/>
            <AuditionListDetail/>
        </div>

        <div>
            <Intro/>
            <IntroJoin/>
            <Login/>
            <Join/>
            <ProfilePhoto/>
        </div>

        <div>
            <Profile/>
            <ProfileWrite/>
            <ProfileView/>
        </div>

        <div>
            <Diary/>
            <DiaryWrite/>
            <DiaryView/>
            <DiaryReply/>
        </div>

        <div>
            <Reward/>
            <Qna/>
            <Setting/>
            <Heart/>
            <Photo/>
            <MyInfo/>
            <OpenTalk/>
        </div>

    </div>
</template>

<script>
    import routes from "@/routes";

    import Main from "@/pages/Main";
    import Login from "@/pages/Login";
    import Join from "@/pages/Join";
    import Intro from "@/pages/Intro";
    import IntroJoin from "@/pages/IntroJoin";
    import Audition from "@/pages/Audition";
    import AuditionList from "@/pages/AuditionList";
    import AuditionListInfo from "@/pages/AuditionListInfo";
    import AuditionListDetail from "@/pages/AuditionListDetail";
    import ProfilePhoto from "@/pages/ProfilePhoto";
    import Heart from "@/pages/Heart";
    import Reward from "@/pages/Reward";
    import Qna from "@/pages/Qna";
    import Setting from "@/pages/Setting";
    import Photo from "@/pages/Photo";
    import Profile from "@/pages/Profile";
    import ProfileWrite from "@/pages/ProfileWrite";
    import ProfileView from "@/pages/ProfileView";
    import Diary from "@/pages/Diary";
    import DiaryWrite from "@/pages/DiaryWrite";
    import DiaryView from "@/pages/DiaryView";
    import DiaryReply from "@/pages/DiaryReply";
    import MyInfo from "@/pages/MyInfo";
    import OpenTalk from "@/pages/OpenTalk";

    export default {
        name: 'Guide',
        components: {
            OpenTalk,
            MyInfo,
            DiaryReply,
            DiaryView,
            DiaryWrite,
            Diary,
            ProfileView,
            ProfileWrite,
            Profile,
            Audition,
            Photo,
            Setting,
            Qna,
            Reward,
            Heart,
            ProfilePhoto,
            AuditionList,
            AuditionListInfo,
            AuditionListDetail,
            Intro,
            IntroJoin,
            Join,
            Login,
            Main,
        },
        data() {
            return {
                routes: routes
            }
        }
    }
</script>
