<template>
    <div>

        <router-link :to="i.path" v-for="i in routes" v-bind:key="i" class="d-block">{{i.title}}</router-link>

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
        </div>
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
        <div>
            <Photo/>
            <Heart/>
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
