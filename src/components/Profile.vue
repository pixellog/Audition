<template>
    <div>
        <div class="p-3 text-center">
            <h5 class="mb-0">Profile</h5>
        </div>

        <div class="bg-gradient-secondary position-relative pb-5">
            <div class="position-relative">
                <div class="w-30 mx-auto text-center">
                    <div class="flag small position-relative d-inline-block">1위</div>
                    <img src="../assets/images/ranking-1@3x.png" alt="" class="w-100 my-3 border border-light border-lg rounded">
                    <h4 style="letter-spacing: .8rem; padding-left: .8rem;">오동백</h4>
                </div>

                <b-row class="mx-5 my-2 position-relative">
                    <div class="flag d-inline-block h5 mb-0 p-3">1위</div>
                    <div class="col-10 offset-2 pl-4">
                        <h5>오동백</h5>
                        <p>다짐 한마디 다짐 한마디 다짐 한마디 다짐한 마디 다짐한마디 다짐한마디 다짐 한마디 다짐 한마디 다짐한마디 최대글자수</p>
                    </div>
                </b-row>
            </div>
            <b-button variant="danger" pill class="p-0 position-absolute" style="top: 7rem; left: 4rem; width: 50px; height: 50px;">
                <div>
                    <b-icon icon="star-fill" stacked scale=".5"/>
                    팔로우
                </div>
            </b-button>
            <b-button variant="purple" size="lg" pill class="p-0 position-absolute" style="top: 7rem; right: 4rem; width: 50px; height: 50px;">
                <!--                <b-icon icon="star-fill" stacked scale=".5"/>-->
                <b-icon icon="plus" scale="2"></b-icon>
                공유
            </b-button>
        </div>

        <b-row no-gutters align-h="center" class="px-3" style="position:relative; top: -2.5rem;">
            <div class="col-auto flex-grow-1 bg-white p-4 text-center shadow rounded mx-1"><strong class="h4">26</strong> <span class="text-danger">age</span></div>
            <div class="col-auto flex-grow-1 bg-white p-4 text-center shadow rounded mx-1"><strong class="h4">172</strong> <span class="text-danger">cm</span></div>
            <div class="col-auto flex-grow-1 bg-white p-4 text-center shadow rounded mx-1"><strong class="h4">52</strong> <span class="text-danger">kg</span></div>
        </b-row>


        <div class="px-4">
            <div class="d-flex align-items-center"><strong>HEART</strong><span class="h3 mb-0 text-danger"><b-icon icon="heart-fill" class="ml-3 mr-1"/>5,354,555</span></div>
            <div class="d-flex align-items-center"><strong>REWARD</strong><strong class="text-warning"><img src="../assets/images/ic-won@3x.png" alt="" class="x2 mx-3">5,354,555</strong></div>
        </div>

        <div class="px-4">
            <div class="d-flex align-items-center justify-content-center"><span class="h3 mb-0 text-danger"><b-icon icon="heart-fill" class="mr-1"/>5,354,555</span></div>
            <div class="d-flex align-items-center justify-content-center"><strong class="text-warning"><img src="../assets/images/ic-won@3x.png" alt="" class="x2 mx-3">5,354,555</strong></div>
        </div>

        <b-row align-h="center" class="m-4">
            <b-button class="mx-1 py-2 col bg-muted border-0" variant="primary" pill>투표내역</b-button>
            <b-button class="mx-1 py-2 col bg-gradient" variant="danger" pill>투표하기</b-button>
        </b-row>

        <div class="shadow rounded py-4 px-3 mx-3">
            <!-- tooltip : https://bootstrap-vue.js.org/docs/components/tooltip/#tooltips -->
            <h5 class="d-flex">Auto Vote <span class="font-weight-normal ml-3">3,000,000 표</span>
                <b-icon icon="question-fill" variant="primary" class="ml-auto" id="tooltip-button-1" custom-class="border p-5"></b-icon>
                <b-tooltip target="tooltip-button-1" custom-class="w-20">I start open I start open I start open</b-tooltip>
            </h5>
            <div class="progress mt-3 mb-4 rounded" style="height: 1.5rem;">
                <div class="progress-bar bg-danger rounded" role="progressbar" style="width: 67%;" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100">67%</div>
            </div>

            <img src="../assets/images/banner-sm.png" alt="" class="w-100">

            <b-button class="bg-muted py-2 border-0 col-6 offset-3" variant="primary" pill>참여하기</b-button>
        </div>

        <b-row class="m-4">
            <div class="col-3 p-1" v-for="(i,index) in 16" v-bind:key="i">
                <div class="bg-muted h-100"><img v-if="index<10" src="../assets/images/thum-profile-sm.png" alt="" class="w-100"></div>
            </div>
        </b-row>

        <b-row class="mx-3 bg-muted rounded p-3">
            <strong class="col-auto">경력</strong>
            <div class="col">2012~2018 피겨대회 대수수상 <br>2019 글로벌 탑모델 선발대회 선 수상 <br>2019 대한민국 한복모델본선진출 <br>2019 KABS model contest 특별상 장학금 수상</div>
            <div class="w-100 my-2"></div>
            <strong class="col-auto">취미</strong>
            <div class="col">각종 스포츠</div>
            <div class="w-100 my-2"></div>
            <strong class="col-auto">특기</strong>
            <div class="col">피겨스케이트</div>
        </b-row>

    </div>
</template>

<script>
    export default {
        name: 'Profile',
        data() {
            return {
            }
        },
    }
</script>
