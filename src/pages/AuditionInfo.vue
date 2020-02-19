<template>
    <div>
        <Header/>
        <VoteMain/>

        <div>
            <img src="../assets/images/audition-info.jpg" alt="" class="w-100">
        </div>

        <FooterButton/>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import VoteMain from "@/components/Vote";
    import FooterButton from "@/components/FooterButton";

    export default {
        name: 'AuditionInfo',
        components: {FooterButton, VoteMain, Header},
    }
</script>
