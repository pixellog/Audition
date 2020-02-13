<template>
    <div id="app">
        <div class="row no-gutters">
            <div class="col">
                <Intro/>
            </div>
            <div class="col">
                <Login/>
            </div>
            <div class="col">
                <Join/>
            </div>
            <div class="col">
                <IntroJoin/>
            </div>
            <div class="col">
                <Profile/>
            </div>
            <div class="col-12"></div>
            <div class="col">
                <Main/>
            </div>
            <div class="col">
                <List/>
            </div>
            <div class="col">
                <ListDetail/>
            </div>
        </div>
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
