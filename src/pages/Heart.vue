<template>
    <div>
        <Header/>

        <div class="bg-muted">

            <div class="bg-gradient text-center py-4 text-white">
                <h5 class="mb-0">하트 충전소</h5>
                <div class="h2 mb-0 font-weight-normal">
                    <b-icon icon="heart-fill"></b-icon>
                    <span>96,271</span></div>
            </div>

            <b-tabs nav-class="border-0" fill active-nav-item-class="btn-light text-danger bg-white border-light font-weight-bold">
                <b-tab v-for="(i,index) in category" v-bind:key="i" :title="i" :active="2"
                       title-link-class="btn-light py-3 rounded-0"
                >

                    <div v-if="index==0" class="px-5 py-3">
                        <b-form>
                            <b-row>
                                <div class="col-12 col-form-label font-weight-bold mt-3">선물할 닉네임 입력</div>
                                <b-input class="col-12 bg-white rounded border-0 pl-3" placeholder="선물하실 분의 닉네임을 적어주세요"></b-input>
                                <div class="col-12 col-form-label font-weight-bold mt-3">선물할 하트 수</div>
                                <b-input class="col-12 bg-white rounded border-0 pl-3" placeholder=""></b-input>
                                <div class="col-12 col-form-label font-weight-bold mt-3">비밀번호 입력</div>
                                <b-input class="col-12 bg-white rounded border-0 pl-3" placeholder="본인 비밀번호 입력" type="password"></b-input>
                                <p class="small mt-2 text-primary">※ 오픈오디션 로그인 시 사용하시는 비밀번호를 입력해주세요.</p>
                            </b-row>

                            <b-button variant="danger" pill block class="bg-gradient w-60 mx-auto py-3 my-5">
                                <b-icon icon="heart-fill" class="mr-2"></b-icon>
                                하트 선물하기
                            </b-button>
                        </b-form>
                    </div>

                    <div v-if="index==1">
                        <table class="table bg-white my-3">
                            <thead class="thead-dark text-center">
                            <tr>
                                <th>날짜</th>
                                <th>내역</th>
                                <th>변화</th>
                                <th>총</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="i in 3" v-bind:key="i">
                                <td>01.11</td>
                                <td>하트 충전(광고) 적립</td>
                                <td class="text-center">
                                    <span class="text-danger">+1,245</span>
                                    <span class="text-info">-10</span>
                                </td>
                                <td class="text-right">2,000</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div v-if="index==2" class="py-3">
                        <div v-for="i in 2" v-bind:key="i" class="mb-3">
                            <img src="../assets/images/banner-md.png" alt="" class="w-100" @click="isAD">
                            <b-row no-gutters class="p-3 bg-white align-items-center">
                                <div class="col">
                                    <div class="text-truncate w-90 font-weight-bold">[상품찜]삼성노트북 xxxxxxxx 시리즈</div>
                                    <div class="text-primary small">참여 : 클릭하여 광고에 참여</div>
                                </div>
                                <b-button variant="danger" style="border-radius: 10px;">
                                    <b-icon icon="heart-fill" scale=".8"></b-icon>
                                    5개
                                </b-button>
                            </b-row>
                        </div>
                    </div>

                </b-tab>
            </b-tabs>

        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header";

    export default {
        name: 'Heart',
        components: {Header},
        data() {
            return {
                category: ['선물하기', '이용내역', '이용안내']
            }
        },
        beforeMount() {
            this.isAD();
        },
        methods: {
            isAD() {
                // https://bootstrap-vue.js.org/docs/components/modal

                const h = this.$createElement;

                const el = {
                    template: `ggg`
                };

                const messageVNode = h(el);

                this.$bvModal
                    .msgBoxConfirm([messageVNode], {
                        title: '[상품찜] 삼성노트북 xxxxxxx 시리즈',
                        centered: true,
                        okTitle: '시작하기',
                        cancelTitle: '닫기',
                    })
                    .then(value => {
                        value ? this.$bvToast.toast('메일 유형이 삭제되었습니다.') : null;
                    })
            }
        }
    }
</script>
