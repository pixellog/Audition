<template>
    <div>
        <Header/>

        <HeadingDark title="OpenTalk"/>

        <b-row class="px-4 pt-2 pb-1 bg-muted">
            <b-button variant="link" class="text-dark font-weight-normal">선택 삭제</b-button>
            <b-button variant="link" class="ml-auto text-dark">전체 삭제</b-button>
        </b-row>

        <div class="bg-white px-4 pt-3 pb-5">
            <TalkItem/>
        </div>

        <FooterMenu/>

    </div>
</template>

<script>
    import Header from "@/components/Header";
    import FooterMenu from "@/components/FooterMenu";
    import TalkItem from "@/components/TalkItem";
    import HeadingDark from "@/components/HeadingDark";

    export default {
        name: 'OpenTalk',
        components: {HeadingDark, TalkItem, FooterMenu, Header},
        data() {
            return {}
        }
    }
</script>
