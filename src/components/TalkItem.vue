<template>
    <div>
        <b-row v-for="(i, index) in 3" v-bind:key="i" class="mt-3">
            <div class="col-auto" style="width: 70px;height: 70px;">
                <img src="../assets/images/thum-profile-sm.png" alt="" class="w-100 rounded-circle">
            </div>
            <div class="col pl-0">
                <div class="d-flex align-items-center">
                    <strong>동백꽃필무렵</strong>
                    <small class="ml-auto">2019-11-20 18:11:10</small>
                </div>

                <div class="bg-muted p-3 rounded my-2">

                    <div class="border-bottom pb-3 mb-1">
                        <b-badge variant="danger" class="rounded-0">베스트</b-badge>
                        러블리한 인상에, 시원한 기럭지까지. 완벽한것 같아요. 1등 갑시다~~!
                    </div>

                    <SnsButton/>
                </div>

                <div v-if="index==1">
                    <b-row v-for="i in 2" v-bind:key="i" class="mt-3">
                        <div class="col-auto" style="width: 60px;height: 60px;">
                            <img src="../assets/images/thum-profile-sm.png" alt="" class="w-100 rounded-circle">
                        </div>
                        <div class="col pl-0">
                            <div class="d-flex align-items-center">
                                <strong>동백꽃필무렵</strong>
                                <small class="ml-auto">2019-11-20 18:11:10</small>
                            </div>

                            <div class="bg-muted p-3 rounded my-2">

                                <div class="border-bottom pb-3 mb-1">
                                    <strong class="mr-2">닉네임입력중</strong>
                                    답변댓글은 이런식으로, 닉네임이 붙고, 뒤에 글 입력.
                                </div>

                                <SnsButton/>
                            </div>
                        </div>
                    </b-row>
                </div>
            </div>
        </b-row>

        <Reply style="margin-top: 50px;" />
    </div>
</template>

<script>
    import SnsButton from "@/components/SnsButton";
    import Reply from "@/components/Reply";

    export default {
        name: 'TalkItem',
        components: {Reply, SnsButton},
        data() {
            return {}
        },
    }
</script>
