<template>
    <div>

        <Heading title="SETTING"/>

        <b-form class="bg-white mt-3">
            <b-list-group>

                <b-list-group-item class="d-flex py-3">
                    <label for="" class="w-25 mb-0">알림 설정</label>
                    <b-form-radio-group class="w-75" :checked="0" :options="Object.assign({},['소리','소리+진동','진동','무음'])"/>
                </b-list-group-item>

                <b-list-group-item class="d-flex py-3">
                    <label for="" class="w-25 mb-0">로그인 설정</label>
                    <b-form-radio-group class="w-75" :checked="0" :options="Object.assign({},['자동로그인','수동로그인'])"/>
                </b-list-group-item>

                <b-list-group-item class="d-flex py-3">
                    <label for="" class="w-25 mb-0">서비스이용약관</label>
                    <div class="w-75">내용보기</div>
                </b-list-group-item>

                <b-list-group-item class="d-flex py-3">
                    <label for="" class="w-25 mb-0">개인정보취급방침</label>
                    <div class="w-75">내용보기</div>
                </b-list-group-item>

                <b-list-group-item class="d-flex py-3">
                    <label for="" class="w-25 mb-0">버전 정보</label>
                    <div class="w-75">Ver 1.0.00 Last Update 2019. 12. 10</div>
                </b-list-group-item>

                <b-list-group-item class="d-flex py-3 align-items-center">
                    <label for="" class="w-25 mb-0">언어설정</label>
                    <b-form-select class="w-25 border-0 pl-0" style="min-height: auto" value="0" :options="Object.assign({},['언어선택'])"/>
                </b-list-group-item>

                <b-list-group-item class="d-flex py-3">
                    <label for="" class="w-25 mb-0">로그아웃</label>
                    <div class="w-75 text-danger">로그아웃</div>
                </b-list-group-item>

                <b-list-group-item class="d-flex py-3">
                    <label for="" class="w-25 mb-0">회원탈퇴</label>
                    <div class="w-75 text-danger">회원 탈퇴하기</div>
                </b-list-group-item>
            </b-list-group>
        </b-form>

    </div>
</template>

<script>

    import Heading from "../components/Heading";

    export default {
        name: 'Setting',
        components: {Heading},
        data() {
            return {}
        },
        methods: {}
    }
</script>
