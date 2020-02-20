<template>

    <b-tabs class="mt-5" nav-class="border-0 btn-purple" pills fill active-nav-item-class="btn-light bg-white text-purple">
        <b-tab v-for="(i,index) in category" v-bind:key="i" :title="i" :active="!index"
               title-link-class="mx-1 mt-1 py-3 rounded-0 text-white"
        >
            <div class="p-4">

                <h5>댓글달기</h5>
                <div class="rounded bg-muted p-3 mb-4">
                    <div style="min-height: 100px">주제와 무관한 악플은 무통보 삭제될 수 있습니다.</div>
                    <b-row no-gutters>
                        <b-button size="sm" variant="link" pill class="small">
                            <b-icon icon="camera" scale="2"></b-icon>
                        </b-button>
                        <b-button size="sm" variant="danger" pill class="ml-auto px-3">댓글등록</b-button>
                    </b-row>
                </div>

                <b-row v-for="i in 2" v-bind:key="i" class="mt-3">
                    <div class="col-auto" style="width: 4rem;height: 4rem;">
                        <img src="../assets/images/thum-profile-sm.png" alt="" class="w-100 rounded-circle">
                    </div>
                    <div class="col pl-0">
                        <div class="d-flex align-items-center">
                            <strong>동백꽃필무렵</strong>
                            <small class="ml-auto">2019-11-20 18:11:10</small>
                        </div>

                        <div class="bg-muted p-3 rounded my-2">

                            <div>
                                <b-badge variant="danger" class="rounded-0">베스트</b-badge>
                                러블리한 인상에, 시원한 기럭지까지. 완벽한것 같아요. 1등 갑시다~~!
                            </div>

                            <hr>

                            <SnsButton/>
                        </div>
                    </div>
                    <div class="w-100"></div>
                </b-row>

            </div>
        </b-tab>
    </b-tabs>

</template>

<script>
    import SnsButton from "@/components/SnsButton";

    export default {
        name: 'Talk',
        components: {SnsButton},
        data() {
            return {
                category: ['베스트 TALK', '전체 TALK']
            }
        },
    }
</script>
