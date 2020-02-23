<template>
    <div class="bg-muted">

        <Heading title="REWARD"/>

        <b-tabs nav-class="tabs-border" fill>
            <b-tab title="내역" active>

                <div class="p-4 text-center h4">
                    <div class="mt-3">TOTAL</div>
                    <strong class="display-4 font-weight-bold">
                        <b-icon icon="alert-circle-fill"></b-icon>
                        2,000,000</strong>
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
                                <b-icon icon="alert-circle-fill" font-scale="1.2" class="mx-1"></b-icon>
                                1,000,000
                            </div>
                            <div>
                                <b-icon icon="dash" font-scale="1.2" variant="info"></b-icon>
                                <b-icon icon="alert-circle-fill" font-scale="1.2" class="mx-1"></b-icon>
                                100,000,000
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </b-tab>

            <b-tab title="출금신청">
                <div class="p-4 text-center h4">
                    <div class="mt-3">TOTAL</div>
                    <strong class="display-4 font-weight-bold">
                        <b-icon icon="alert-circle-fill"></b-icon>
                        2,000,000</strong>
                </div>

                <b-row class="m-3">
                    <div class="col-6">
                        <div class="h5">PAY</div>
                        <div class="h3">
                            <b-icon icon="alert-circle-fill" font-scale="1.2" class="mr-1"></b-icon>
                            <strong class="text-danger">3,000,000</strong></div>
                    </div>
                    <div class="col-6 border-left pl-4">
                        <div class="h5">MY MONEY</div>
                        <div class="h3">
                            <b-icon icon="alert-circle-fill" font-scale="1.2" class="mr-1"></b-icon>
                            <strong class="text-purple">3,000,000</strong></div>
                    </div>
                </b-row>

                <b-form class="mx-5 mt-4">
                    <b-row>
                        <div class="col-12 col-form-label font-weight-bold mt-3">출금할 금액</div>
                        <b-input class="col-12 bg-white rounded border-0 pl-3" placeholder="금액"></b-input>
                        <p class="small mt-2 text-primary">※ 제세공과금 제한 후 지급</p>
                        <div class="col-12 col-form-label font-weight-bold mt-3" placeholder="이름">예금주</div>
                        <b-input class="col-12 bg-white rounded border-0 pl-3" placeholder=""></b-input>
                        <div class="col-12 col-form-label font-weight-bold mt-3">은행명 및 계좌번호</div>
                        <div class="col-12 row no-gutters bg-white rounded">
                            <b-form-select value="0" :options="Object.assign({}, ['은행명'])" class="col-4 border-0"/>
                            <b-input class="border-0 col" placeholder="계좌번호"></b-input>
                        </div>
                    </b-row>

                    <b-button variant="danger" pill block class="bg-gradient w-60 mx-auto py-3 my-5">
                        <b-icon icon="heart-fill" class="mr-2"></b-icon>
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
                        <div class="pl-3 mb-5">
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
            return {
            }
        },
        methods: {}
    }
</script>
