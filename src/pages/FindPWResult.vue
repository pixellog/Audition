<template>
    <div>
        <Heading title="비밀번호 찾기"/>

        <div class="bg-white px-4 pt-5">
            <h6 class="font-weight-bold">비밀번호를 <br>
                찾았습니다.</h6>

            <div class="text-center py-5">
                <span>gildong@gmail.com</span> 님의 비밀번호는 <br>
                <strong>openaudition@</strong> 입니다.
            </div>

            <b-row no-gutters class="mt-5">
                <b-button variant="danger" class="rounded col">로그인 하기</b-button>
            </b-row>

        </div>
    </div>
</template>

<script>
    import Heading from "../components/Heading";

    export default {
        name: 'FindPWResult',
        components: {Heading},
        data() {
            return {}
        },
        methods: {}
    }
</script>
