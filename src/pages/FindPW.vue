<template>
    <div>
        <Heading title="비밀번호 찾기"/>

        <div class="bg-white px-4 pt-5">
            <h6 class="font-weight-bold">비밀번호를 찾기 위해 <br>
                아래 정보를 입력해주세요.</h6>

            <b-form>
                <b-row no-gutters class="list-primary">
                    <label class="col-3 col-form-label">이름</label>
                    <div class="col-9"><b-input placeholder="홍길동" class="border-0 pl-0"></b-input></div>

                    <label class="col-3 col-form-label">국가</label>
                    <div class="col-9"><b-form-select class="border-0 pl-0 col-4" value="0" :options="Object.assign({},['국가'])"/></div>

                    <label class="col-3 col-form-label">휴대폰</label>
                    <div class="col-9 row">
                        <b-form-select class="border-0 col-5" value="0" :options="Object.assign({},['국가번호'])"/>
                        <b-input class="col-7 border-0" placeholder="- 제외 입력"></b-input>
                    </div>

                    <label class="col-3 col-form-label">이메일</label>
                    <div class="col-9"><b-input type="email" placeholder="이메일을 입력해주세요" class="border-0 pl-0"></b-input></div>

                    <b-button variant="dark" class="mt-2 rounded" block>인증요청</b-button>

                    <label class="col-3 col-form-label">인증번호 <br>입력</label>
                    <div class="col-9"><b-input placeholder="인증번호 입력" class="pl-0 border-0"></b-input></div>
                </b-row>
            </b-form>

            <b-row no-gutters class="mt-5">
                <b-button variant="danger" class="rounded col">비밀번호 찾기</b-button>
            </b-row>
        </div>
    </div>
</template>

<script>
    import Heading from "../components/Heading";

    export default {
        name: 'FindPW',
        components: {Heading},
        data() {
            return {}
        },
        methods: {}
    }
</script>
