<template>
    <div class="pages bg-white">

        <b-form class="w-75 mx-auto">
            <div class="logo mx-auto">
                <div class="sr-only">Open Audiiton</div>
            </div>

            <div class="text-center" style="margin-top: 6rem;">
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

            <b-row class="mt-2 align-items-center">
                <b-button variant="link" class="text-secondary">아이디 찾기</b-button>
                <b-icon icon="dash" rotate="90" scale="2"></b-icon>
                <b-button variant="link" class="text-secondary">비밀번호 찾기</b-button>
                <b-button variant="link" class="ml-auto text-secondary">회원가입</b-button>
            </b-row>

            <div class="text-center" style="margin-top: 5rem;">
                <b-button variant="danger" size="lg" pill class="w-75 bg-gradient">로그인</b-button>
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
