<template>
    <div id="app" class="overflow-hidden">
        <router-view/>
        <Intro hidden/>
        <Login hidden/>
        <Join hidden/>
        <IntroJoin hidden/>
        <Profile hidden/>
        <Main hidden/>
        <List hidden/>
        <ListDetail hidden/>
    </div>
</template>

<script>
    import Main from "@/pages/Main.vue";
    import Profile from "@/pages/ProfilePhoto";
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
