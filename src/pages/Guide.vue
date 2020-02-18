<template>
    <div>
        <div class="p-5">
            <h1>Publishing Guide</h1>
            <h2>사용 라이브러리</h2>
            <ol>
                <li><router-link to="https://bootstrap-vue.js.org">BootstrapVue</router-link></li>
                <li><router-link to="https://gs-shop.github.io/vue-slick-carousel/#/example/simple">vue-slick-carousel</router-link></li>
            </ol>
            <h2>페이지</h2>
            <ol>
                <li><router-link to="/">main</router-link></li>
                <li><router-link to="/login">login</router-link></li>
                <li><router-link to="/intro">intro</router-link></li>
                <li><router-link to="/intro/join">intro join</router-link></li>
                <li><router-link to="/join">join</router-link></li>
                <li><router-link to="/profile">profile</router-link></li>
            </ol>
        </div>
        <Intro/>
        <Login/>
        <Join/>
        <IntroJoin/>
        <Profile/>
        <Main/>
        <List/>
        <ListDetail/>
    </div>
</template>

<script>
    import Main from "@/pages/Main";
    import Login from "@/pages/Login";
    import Join from "@/pages/Join";
    import List from "@/pages/List";
    import ListDetail from "@/pages/ListDetail";
    import Intro from "@/pages/Intro";
    import IntroJoin from "@/pages/IntroJoin";
    import Profile from "@/pages/Profile";

    export default {
        name: 'Guide',
        components: {
            Intro,
            IntroJoin,
            ListDetail,
            List,
            Join,
            Login,
            Profile,
            Main,
        }
    }
</script>
