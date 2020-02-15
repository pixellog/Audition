<template>
    <div class="pages bg-white">

        <div class="logo mx-auto" style="margin: 95px 0 165px;">
            <div class="sr-only">Open Audiiton</div>
        </div>

        <b-form class="w-75 mx-auto">

            <div class="text-center">
                <h5>회원로그인</h5>
                <p>아이디(E-mail)와 비밀번호를입력하세요.</p>
            </div>

            <b-row class="bg-muted rounded mt-5">
                <label class="col-4 col-form-label" for="">아이디</label>
                <b-input class="col-8 border-0"/>
            </b-row>

            <b-row class="bg-muted rounded mt-3">
                <label class="col-4 col-form-label" for="">비밀번호</label>
                <b-input class="col-8 border-0"/>
            </b-row>

            <b-row no-gutters class="mt-2 align-items-center">
                <b-button variant="link">아이디 찾기</b-button>
                <b-button variant="link">비밀번호 찾기</b-button>
                <b-button variant="link" class="ml-auto">회원가입</b-button>
            </b-row>

            <div class="text-center" style="margin-top: 106px;">
                <b-button variant="danger" size="lg" pill class="w-60">로그인</b-button>
            </div>
        </b-form>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        props: {
            msg: String
        }
    }
</script>
