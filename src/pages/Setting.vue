<template>
    <div>
        <div class="bg-muted pb-3">
            <Heading title="SETTING"/>
        </div>

        <b-form>
            <b-row no-gutters class="list-primary">
                <label for="" class="col-4 pl-3 col-form-label">알림 설정</label>
                <b-form-radio-group class="col-8" :checked="0" :options="Object.assign({},['소리','소리+진동','진동','무음'])"/>

                <label for="" class="col-4 pl-3 col-form-label">로그인 설정</label>
                <b-form-radio-group class="col-8" :checked="0" :options="Object.assign({},['자동로그인','수동로그인'])"/>

                <label for="" class="col-4 pl-3 col-form-label">서비스이용약관</label>
                <div class="col-8">내용보기</div>

                <label for="" class="col-4 pl-3 col-form-label">개인정보취급방침</label>
                <div class="col-8">내용보기</div>

                <label for="" class="col-4 pl-3 col-form-label">버전 정보</label>
                <div class="col-8">Ver 1.0.00 Last Update 2019. 12. 10</div>

                <label for="" class="col-4 pl-3 col-form-label">언어설정</label>
                <div class="col-8">
                    <b-form-select class="border-0 pl-0" value="0" :options="Object.assign({},['언어선택'])"/>
                </div>

                <label for="" class="col-4 pl-3 col-form-label">로그아웃</label>
                <router-link to="" class="col-8 text-danger">로그아웃</router-link>

                <label for="" class="col-4 pl-3 col-form-label">회원탈퇴</label>
                <router-link to="" class="col-8 text-danger">회원 탈퇴하기</router-link>
            </b-row>
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
