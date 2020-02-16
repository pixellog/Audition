<template>
    <div id="app" class="overflow-hidden">
        <Intro class="d-none"/>
        <Login class="d-none"/>
        <Join class="d-none"/>
        <IntroJoin class="d-none"/>
        <Profile class="d-none"/>
        <Main/>
        <List/>
        <ListDetail/>
    </div>
</template>

<script>
    import Main from "@/pages/Main.vue";
    import Profile from "@/pages/Profile";
    import Login from "@/pages/Login";
    import Join from "@/pages/Join";
    import List from "@/pages/List";
    import ListDetail from "@/pages/ListDetail";
    import Intro from "@/pages/Intro";
    import IntroJoin from "@/pages/IntroJoin";

    export default {
        name: 'App',
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
