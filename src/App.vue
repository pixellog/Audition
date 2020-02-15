<template>
    <div id="app">
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
    // import HelloWorld from './components/HelloWorld.vue'
    import Main from "@/pages/Main.vue";
    import Profile from "@/pages/profile";
    import Login from "@/pages/Login";
    import Join from "@/pages/Join";
    import List from "@/pages/List";
    import ListDetail from "@/pages/ListDetail";
    import Intro from "@/pages/Intro";
    import IntroJoin from "@/pages/IntroJoin";

    export default {
        name: 'App',
        components: {
            IntroJoin,
            Intro,
            ListDetail,
            List,
            Join,
            Login,
            Profile,
            Main,
            // HelloWorld
        }
    }
</script>
