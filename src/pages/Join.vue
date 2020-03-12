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
                <b-button variant="dark" class="rounded" block @click="isAlert(case1)">이메일 인증하기</b-button>
            </b-row>


            <b-row class="bg-white rounded mt-3">
                <label for="" class="col-auto col-form-label pr-5">인증번호</label>
                <b-input class="col border-0 text-right" placeholder="이메일로 온 인증번호를 적어주세요"/>
            </b-row>

            <b-row class="bg-white rounded mt-3">
                <label for="" class="col-auto col-form-label pr-5">비밀번호</label>
                <b-input type="password" class="col border-0 text-right"/>
            </b-row>

            <b-row class="bg-white rounded mt-3">
                <label for="" class="col-auto col-form-label">비밀번호 확인</label>
                <b-input type="password" class="col border-0 text-right"/>
            </b-row>

<!--            <b-form-checkbox-group stacked id="" v-model="terms" name="" class="mt-3" :options="termsOptions">-->
            <b-form-checkbox-group stacked id="" v-model="terms" name="" class="mt-3">
                <b-form-checkbox :value="index" v-for="(item,index) in termsOptions" v-bind:key="item">
                    {{item}}
                    <b-button variant="link" class="text-danger p-0 ml-auto" :to="index==0 ? '/terms/service' : '/terms/privacy'">보기</b-button>
                </b-form-checkbox>
            </b-form-checkbox-group>

            <b-row class="mt-4">
                <label for="" class="col-auto col-form-label">성별</label>
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
                <b-button variant="dark" class="col-auto py-0 rounded">중복확인</b-button>
            </b-row>

            <b-row class="bg-white rounded mt-3">
                <b-form-select v-model="county" :options="countyOptions" class="col-4 col-form-label border-0"/>
                <b-input placeholder="연락처를 적어주세요" class="col-8 border-0 text-right"></b-input>
            </b-row>

            <div class="text-center">
                <b-button variant="danger" size="lg" pill class="mt-5 w-80 bg-gradient">회원가입하기</b-button>
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
                terms: [],
                gender: 0,
                county: 0,
                termsOptions: Object.assign({}, ['서비스 이용약관 동의', '개인정보보호정책 동의']),
                genderOptions: Object.assign({}, ['남', '여']),
                countyOptions: Object.assign({}, ['국가번호']),
                case1 : '이메일로 인증번호가 전송되었습니다.\n 전송된 번호를 적어주세요',
                case2 : '입력하신 번호로 인증번호가 전송되었습니다.\n 전송된 번호를 적어주세요',
                case3 : '인증번호가 틀렸습니다.\n 다시 한번 입력해주세요.',
                case4 : '회원가입이 완료되었습니다.',
            }
        },
        beforeMount() {
            // this.isAlert(this.case1);
        },
        methods: {
            isAlert(x) {
                // https://bootstrap-vue.js.org/docs/components/modal
                this.$bvModal
                    .msgBoxConfirm(x, {
                        centered: true,
                        footerClass: 'd-none',
                        headerClass:'border-0 py-0 pr-3',
                        headerBgVariant:'light',
                        headerTextVariant:'secondary',
                        hideHeaderClose: false,
                        title: ' ',
                    })
            }
        }
    }
</script>
