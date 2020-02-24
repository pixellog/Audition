<template>
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
            <li v-for="i in routes" v-bind:key="i"><router-link :to="i.path">{{i.title}}</router-link></li>
        </ol>
        <div hidden>
            <Intro/>
            <IntroJoin/>
            <Login/>
            <Join/>
            <ProfilePhoto/>
        </div>
        <div hidden>
            <Reward/>
            <Qna/>
            <Setting/>
        </div>
        <div hidden>
            <Heart/>
            <Photo/>
        </div>
        <div hidden>
            <Main/>
            <AuditionList/>
            <AuditionListDetail/>
            <AuditionListInfo/>
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
    import AuditionList from "@/pages/AuditionList";
    import AuditionListInfo from "@/pages/AuditionListInfo";
    import AuditionListDetail from "@/pages/AuditionListDetail";
    import ProfilePhoto from "./ProfilePhoto";
    import Heart from "./Heart";
    import Reward from "./Reward";
    import Qna from "./Qna";
    import Setting from "./Setting";
    import Photo from "@/pages/Photo";

    export default {
        name: 'Guide',
        components: {
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
