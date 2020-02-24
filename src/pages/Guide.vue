<template>
    <div>
        <div class="p-5 d-none">
            <h1>Publishing Guide</h1>
            <h2>사용 라이브러리</h2>
            <ol>
                <li>
                    <router-link to="https://bootstrap-vue.js.org">BootstrapVue</router-link>
                </li>
                <li>
                    <router-link to="https://gs-shop.github.io/vue-slick-carousel/#/example/simple">vue-slick-carousel</router-link>
                </li>
            </ol>
            <h2>페이지</h2>
            <!--<ol>
                <li>
                    <router-link to="/">main</router-link>
                </li>
                <li>
                    <router-link to="/login">login</router-link>
                </li>
                <li>
                    <router-link to="/intro">intro</router-link>
                </li>
                <li>
                    <router-link to="/intro/join">intro join</router-link>
                </li>
                <li>
                    <router-link to="/join">join</router-link>
                </li>
                <li>
                    <router-link to="/profile">profile</router-link>
                </li>
            </ol>-->
        </div>
        <div hidden>
            <Intro/>
            <IntroJoin/>
            <Login/>
            <Join/>
            <ProfilePhoto/>
        </div>

        <Reward/>
        <Qna/>
        <Setting/>
        <div >
            <Heart/>
            <Main/>
            <AuditionList/>
            <AuditionListDetail/>
            <AuditionListInfo/>
        </div>
    </div>
</template>

<script>
    import Main from "@/pages/Main";
    import Login from "@/pages/Login";
    import Join from "@/pages/Join";
    import Intro from "@/pages/Intro";
    import IntroJoin from "@/pages/IntroJoin";
    import AuditionList from "@/pages/AuditionList";
    import AuditionListInfo from "@/pages/AuditionListInfo";
    import AuditionListDetail from "@/pages/AuditionListDetail";
    import ProfilePhoto from "./ProfilePhoto";
    import Heart from "./Heart";
    import Reward from "./Reward";
    import Qna from "./Qna";
    import Setting from "./Setting";

    export default {
        name: 'Guide',
        components: {
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
        }
    }
</script>
