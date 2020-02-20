<template>
    <div>
        <Header/>
        <Banner/>

        <Profile/>

        <Diary/>

        <Talk/>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import Banner from "@/components/Banner";
    import Talk from "@/components/Talk";
    import Diary from "@/components/Diary";
    import Profile from "@/components/Profile";

    export default {
        name: 'AuditionListDetail',
        components: {Profile, Diary, Talk, Banner, Header},
        data() {
            return {
            }
        },
    }
</script>
