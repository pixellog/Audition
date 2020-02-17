<template>
    <div>
        <Header/>
        <Audition/>
        <Lanking/>
        <Report/>
        <Footer/>
    </div>
</template>

<script>
    import Audition from "../components/Audition";
    import Lanking from "../components/Lanking";
    import Header from "../components/Header";
    import Footer from "../components/Footer";
    import Report from "../components/Report";

    export default {
        name: 'Main',
        components: {Report, Footer, Header, Lanking, Audition},
        props: {
            msg: String
        },
        data() {
            return {

            }
        }
    }
</script>
