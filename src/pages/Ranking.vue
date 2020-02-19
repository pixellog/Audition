<template>
    <div>
        <Header/>
        <div>
            <div class="bg-gradient py-4 text-center text-light">
                <h3>Ranking</h3>
                <p class="m-0">조작불가능 라이브 소셜오디션 <br>
                    랭킹 순위</p>
            </div>

            <Search/>

            <RankingList/>

        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import RankingList from "@/components/RankingList";

    export default {
        name: 'Ranking',
        components: {RankingList, Header},
    }
</script>
