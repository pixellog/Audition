<template>

    <b-tabs class="mt-5" nav-class="border-0 btn-purple" pills fill active-nav-item-class="btn-light bg-white text-purple">
        <b-tab v-for="(i,index) in category" v-bind:key="i" :title="i" :active="!index"
               title-link-class="mx-1 mt-1 py-3 rounded-0 text-white"
        >
            <div class="p-4">

                <Reply/>

                <TalkItem/>

            </div>
        </b-tab>
    </b-tabs>

</template>

<script>
    import TalkItem from "@/components/TalkItem";
    import Reply from "@/components/Reply";

    export default {
        name: 'Talk',
        components: {Reply, TalkItem},
        data() {
            return {
                category: ['베스트 TALK', '전체 TALK']
            }
        },
    }
</script>
