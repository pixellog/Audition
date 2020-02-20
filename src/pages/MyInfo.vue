<template>
    <div>
        <Header/>

        <div class="bg-dark text-center py-3">
            <h6 class="text-white mb-0">My Info</h6>
        </div>

        <div class="bg-white px-4 py-5">
            <h5 class="mb-4">개인설정</h5>

            <b-form>
                <b-row no-gutters class="border-bottom py-2">
                    <div class="col-4 font-weight-bold">회원명</div>
                    <div class="col-8">홍길동</div>
                </b-row>
                <b-row no-gutters class="border-bottom py-2">
                    <div class="col-4 font-weight-bold">닉네임</div>
                    <div class="col-8">아버지라못불러</div>
                </b-row>
                <b-row no-gutters class="border-bottom py-2">
                    <div class="col-4 font-weight-bold">아이디</div>
                    <div class="col-8">gildong2@naver.com</div>
                </b-row>
                <b-row no-gutters class="border-bottom py-2">
                    <div class="col-4 font-weight-bold">비밀번호</div>
                    <div class="col-8 text-right">
                        <b-button size="sm" squared>비밀번호 변경</b-button>
                    </div>
                </b-row>
                <b-row no-gutters class="border-bottom py-2">
                    <div class="col-4 font-weight-bold">비밀번호확인</div>
                    <div class="col-8"></div>
                </b-row>
                <b-row no-gutters class="border-bottom py-2">
                    <div class="col-4 font-weight-bold">국가</div>
                    <div class="col-8 d-flex">
                        대한민국
                        <b-button variant="primary" size="sm" squared class="ml-auto">국가 변경</b-button>
                    </div>
                </b-row>
                <b-row no-gutters class="border-bottom py-2">
                    <div class="col-4 font-weight-bold">주소</div>
                    <div class="col-8">12345
                        <b-button size="sm" squared>우편번호 찾기</b-button>
                        <div class="mt-2">
                            서울특별시 강남구 개포2로 88(개포동, 파크뷰) 202동 300호
                        </div>
                    </div>
                </b-row>
                <b-row no-gutters class="border-bottom py-2">
                    <div class="col-4 font-weight-bold">휴대폰</div>
                    <div class="col-8">010-9999-9999</div>
                </b-row>
                <b-row no-gutters class="border-bottom py-2">
                    <div class="col-4 font-weight-bold">문자/메일수신</div>
                    <div class="col-8">
                        <b-form-radio-group :checked="0" :options="Object.assign({}, ['예','아니오'])"/>
                    </div>
                </b-row>
                <b-row no-gutters class="border-bottom py-2">
                    <div class="col-4 font-weight-bold">가입일</div>
                    <div class="col-8">2019.12.01</div>
                </b-row>

                <b-button variant="danger" pill block class="bg-gradient mx-auto w-50 my-4 py-2">수정하기</b-button>
            </b-form>

        </div>

        <FooterMenu/>

    </div>
</template>

<script>
    import Header from "@/components/Header";
    import FooterMenu from "@/components/FooterMenu";

    export default {
        name: 'MyInfo',
        components: {FooterMenu, Header},
        data() {
            return {}
        }
    }
</script>
