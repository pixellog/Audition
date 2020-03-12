<template>
    <div>
        <Heading title="아이디 찾기"/>

        <div class="bg-white px-4 pt-5">
            <h6 class="font-weight-bold">아이디를 <br>
                찾았습니다.</h6>

            <div class="text-center py-5">
                <span>홍길동</span> 님의 아이디는 <br>
                <strong>gildong@gmail.com</strong> 입니다.
            </div>

            <b-row no-gutters class="mt-5">
                <b-button variant="danger" class="rounded col">로그인 하기</b-button>
                <b-button variant="primary" class="ml-2 border-0 rounded col">비밀번호 찾기</b-button>
            </b-row>

        </div>
    </div>
</template>

<script>
    import Heading from "../components/Heading";

    export default {
        name: 'FindIDResult',
        components: {Heading},
        data() {
            return {}
        },
        methods: {}
    }
</script>
