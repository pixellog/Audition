<template>
    <div>
        <Header/>
        <Audition/>
        <Ranking/>
        <Report/>
        <Footer/>
    </div>
</template>

<script>
    import Audition from "../components/Audition";
    import Ranking from "../components/Ranking";
    import Header from "../components/Header";
    import Footer from "../components/Footer";
    import Report from "../components/Report";

    export default {
        name: 'Main',
        components: {Report, Footer, Header, Ranking, Audition},
        props: {
            msg: String
        },
        data() {
            return {

            }
        }
    }
</script>
