<template>
    <div class="bg-muted pb-5 min-vh-100">

        <Heading title="REWARD"/>

        <b-tabs nav-class="tabs-border" fill>
            <b-tab title="내역" active>

                <div class="p-4 text-center">
                    <strong class="mt-3">TOTAL</strong>
                    <div class="h1">
                        <i class="icon icon-won p-3 mr-2"></i>
                        2,000,000
                    </div>
                    <div>이제까지 받은 리워드총액입니다.</div>
                </div>

                <table class="table bg-white">
                    <thead class="thead-dark text-center">
                    <tr>
                        <th>날짜</th>
                        <th>내역</th>
                        <th>리워드</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="i in 3" v-bind:key="i">
                        <td class="text-center">01.11</td>
                        <td>하트 충전(광고) 적립</td>
                        <td class="text-right">
                            <div>
                                <b-icon icon="plus" font-scale="1.2" variant="danger"></b-icon>
                                <i class="icon icon-won"></i>
                                1,000,000
                            </div>
                            <div>
                                <b-icon icon="dash" font-scale="1.2" variant="info"></b-icon>
                                <i class="icon icon-won"></i>
                                100,000,000
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </b-tab>

            <b-tab title="출금신청">
                <div class="p-4 text-center">
                    <strong class="mt-3">TOTAL</strong>
                    <div class="h1">
                        <i class="icon icon-won p-3 mr-2"></i>
                        2,000,000
                    </div>
                </div>

                <b-row class="mx-3" style="letter-spacing: -1px">
                    <div class="col-6">
                        <strong class="h5">PAY</strong>
                        <div class="h3">
                            <i class="icon icon-won p-2 mr-2" style="padding: .75rem !important;"></i>
                            <span class="text-danger">3,000,000</span></div>
                    </div>
                    <div class="col-6 border-left pl-3">
                        <strong class="h5">MY MONEY</strong>
                        <div class="h3">
                            <i class="icon icon-won p-2 mr-2" style="padding: .75rem !important;"></i>
                            <span class="text-purple">3,000,000</span></div>
                    </div>
                </b-row>

                <b-form class="mx-5 mt-4">
                    <b-row>
                        <div class="col-12 col-form-label mt-3">출금할 금액</div>
                        <b-input class="col-12 bg-white rounded border-0 pl-3" placeholder="금액"></b-input>
                        <p class="small mt-2 text-primary">※ 제세공과금 제한 후 지급</p>
                        <div class="col-12 col-form-label" placeholder="이름">예금주</div>
                        <b-input class="col-12 bg-white rounded border-0 pl-3" placeholder="이름"></b-input>
                        <div class="col-12 col-form-label mt-3">은행명 및 계좌번호</div>
                        <div class="col-12 row no-gutters bg-white rounded">
                            <b-form-select value="0" :options="Object.assign({}, ['은행명'])" class="col-4 border-0"/>
                            <b-input class="border-0 col" placeholder="계좌번호"></b-input>
                        </div>
                    </b-row>

                    <b-button variant="danger" size="lg" pill block class="bg-gradient w-80 mx-auto my-5">
                        <i class="icon icon-won-circle p-2 mr-2"></i>
                        출금신청
                    </b-button>

                    <div class="text-primary">
                        <h6 class="mb-0">※ 지급 방법 : 제세공과금 제한 후, 지급</h6>
                        <h6 class="mb-0 mt-2">※ 출금신청 : </h6>
                        <div class="pl-3">
                            매월 05~10일(15일 지급)<br>
                            매월 20~25일(01일 지급)
                        </div>
                        <h6 class="mb-0 mt-2">※ 지급: 매월 01일 / 15일</h6>
                        <div class="pl-3">
                            단, 잔액이 50,000원 이상일 때 출금신청 가능 <br>
                            PAY : 출금한 금액 <br>
                            MY MONEY : 출금 가능한 금액
                        </div>
                    </div>
                </b-form>
            </b-tab>
        </b-tabs>

    </div>
</template>

<script>

    import Heading from "../components/Heading";

    export default {
        name: 'Reward',
        components: {Heading},
        data() {
            return {}
        },
        methods: {}
    }
</script>
