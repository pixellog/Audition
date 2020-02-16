<template>
    <div>
        <Header/>
        <IngAudition/>
        <Lanking/>
        <Report/>
        <Footer/>
    </div>
</template>

<script>
    import IngAudition from "../components/IngAudition";
    import Lanking from "../components/Lanking";
    import Header from "../components/Header";
    import Footer from "../components/Footer";
    import Report from "../components/Report";

    export default {
        name: 'Main',
        components: {Report, Footer, Header, Lanking, IngAudition},
        props: {
            msg: String
        },
        data() {
            return {

            }
        }
    }
</script>
