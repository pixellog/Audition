<template>
    <div class="pages bg-muted">


        <b-form class="w-75 my-5">

            <div class="logo mx-auto">
                <div class="sr-only">Open Audiiton</div>
            </div>

            <b-row class="bg-white rounded mt-5">
                <label for="" class="col-4 col-form-label">이메일</label>
                <b-input class="col-8 border-0"/>
            </b-row>

            <ul class="list-unstyled mt-2">
                <li class="text-info">* 이 이메일로 회원가입이 가능합니다.</li>
                <li>* 입력하신 이메일이 아이디로 사용됩니다.</li>
            </ul>

            <b-row class="mt-3">
                <b-button variant="dark" pill block>이메일 인증하기</b-button>
            </b-row>


            <b-row class="bg-white rounded mt-3">
                <label for="" class="col-auto col-form-label">인증번호</label>
                <b-input class="col border-0 text-right" placeholder="이메일로 온 인증번호를 적어주세요"/>
            </b-row>

            <b-row class="bg-white rounded mt-3">
                <label for="" class="col-auto col-form-label">비밀번호</label>
                <b-input type="password" class="col border-0"/>
            </b-row>

            <b-row class="bg-white rounded mt-3">
                <label for="" class="col-auto col-form-label">비밀번호 확인</label>
                <b-input type="password" class="col border-0"/>
            </b-row>

            <b-form-checkbox-group stacked v-model="terms" :options="termsOptions" class="mt-3 ml-3"/>

            <b-row class="mt-4">
                <label for="" class="col-auto col-form-label font-weight-bold">성별</label>
                <b-form-radio-group v-model="gender" :options="genderOptions" class="mt-2 col"/>
            </b-row>

            <b-row class="mt-2">
                <b-input class="col flex-grow-1 mr-2 bg-white rounded border-0" placeholder="성"/>
                <b-input class="col-6 bg-white rounded border-0" placeholder="이름"/>
            </b-row>

            <ul class="list-unstyled mt-3">
                <li>* 투표의 공정성을 위해 실명으로만 가입이 가능합니다.</li>
                <li>*오디션 참여자 외에는 닉네임만 노출됩니다.</li>
            </ul>

            <b-row class="mt-3">
                <div class="col bg-white rounded mr-2">
                    <b-row>
                        <label for="" class="col-auto col-form-label">닉네임</label>
                        <b-input class="col border-0 text-right" placeholder="닉네임을 입력해주세요"/>
                    </b-row>
                </div>
                <b-button variant="dark" class="col-auto rounded">중복확인</b-button>
            </b-row>

            <b-row class="bg-white rounded mt-3">
                <b-form-select v-model="county" :options="countyOptions" class="col-4 col-form-label border-0"/>
                <b-input placeholder="연락처를 적어주세요" class="col-8 border-0 text-right"></b-input>
            </b-row>

            <div class="text-center">
                <b-button variant="danger" size="lg" pill class="mt-5 w-90">회원가입하기</b-button>
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
                gender: 0,
                county: 0,
                termsOptions: Object.assign({}, ['서비스 이용약관 동의', '개인정보보호정책 동의']),
                genderOptions: Object.assign({}, ['남', '여']),
                countyOptions: Object.assign({}, ['국가번호']),
            }
        }
    }
</script>
