<template>
    <div>
        <Header/>
        <VoteMain/>

        <div>
            <img src="../assets/images/audition-info.jpg" alt="" class="w-100">
        </div>

        <FooterButton>
            <b-button variant="link" pill class="btn-icon">
                <img src="../assets/images/btn-heart-break@3x.png" alt="싫어요" style="width: 66px;">
            </b-button>
            <b-button variant="link" pill class="ml-auto btn-icon">
                <img src="../assets/images/btn-plus@3x.png" alt="추가하기" style="width: 66px;">
            </b-button>
        </FooterButton>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import VoteMain from "@/components/Vote";
    import FooterButton from "@/components/FooterButton";

    export default {
        name: 'AuditionListInfo',
        components: {FooterButton, VoteMain, Header},
    }
</script>
