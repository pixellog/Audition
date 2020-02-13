<template>
    <div class="bg-muted p-5 vh-100">

        <div class="text-center">
            <img src="../assets/images/logo@2x.png" alt="" class="w-75">
        </div>

        <b-form class="mt-5">

            <b-row class="bg-white rounded">
                <label for="" class="col-4 col-form-label">이메일</label>
                <b-input class="col-8 border-0"/>
            </b-row>

            <ul class="list-unstyled mt-2">
                <li class="text-info">* 이 이메일로 회원가입이 가능합니다.</li>
                <li>* 입력하신 이메일이 아이디로 사용됩니다.</li>
            </ul>

            <b-button variant="dark" pill block class="mt-3">이메일 인증하기</b-button>


            <b-row class="bg-white rounded mt-3">
                <label for="" class="col-5 col-form-label">인증번호</label>
                <b-input class="col-7 border-0" placeholder="이메일로 온 인증번호를 적어주세요"/>
            </b-row>

            <b-row class="bg-white rounded mt-3">
                <label for="" class="col-5 col-form-label">비밀번호</label>
                <b-input class="col-7 border-0"/>
            </b-row>

            <b-row class="bg-white rounded mt-3">
                <label for="" class="col-5 col-form-label">비밀번호 확인</label>
                <b-input class="col-7 border-0"/>
            </b-row>

            <b-form-checkbox-group v-model="terms" :options="termsOptions" class="mt-2"/>

            <div class="text-center">
                <b-button variant="danger" size="lg" pill class="mt-5 w-75">회원가입하기</b-button>
            </div>

        </b-form>
    </div>
</template>

<script>
    export default {
        name: 'Join',
        props: {
            msg: String
        },
        data() {
            return {
                terms: 0,
                termsOptions: Object.assign({}, ['서비스 이용약관 동의', '개인정보보호정책 동의']),
            }
        }
    }
</script>
