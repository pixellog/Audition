<template>
    <div>
        <Header/>
        <VoteMain/>

        <Search/>

        <b-row no-gutters class="px-3 pt-3 bg-white">
            <b-button variant="danger" pill class="flex-grow-1 mx-1 bg-gradient">#종합</b-button>
            <b-button variant="outline-secondary" pill class="flex-grow-1 mx-1">#남자</b-button>
            <b-button variant="outline-secondary" pill class="flex-grow-1 mx-1">#여자</b-button>
        </b-row>

        <RankingList/>
        <FooterButton/>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import VoteMain from "@/components/Vote";
    import RankingList from "@/components/RankingList";
    import FooterButton from "@/components/FooterButton";
    import Search from "@/components/Search";

    export default {
        name: 'AuditionList',
        components: {Search, FooterButton, RankingList, Header, VoteMain},
    }
</script>
