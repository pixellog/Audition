<template>
    <div>
        <Header/>

        <HeadingDark title="My Info"/>

        <div class="bg-white px-4 py-5">
            <h5 class="mb-4">개인설정</h5>

            <b-form>
                <b-row no-gutters class="list-primary">
                    <label class="col-4 col-form-label">회원명</label>
                    <div class="col-8">홍길동</div>

                    <label class="col-4 col-form-label">닉네임</label>
                    <div class="col-8">아버지라못불러</div>

                    <label class="col-4 col-form-label">아이디</label>
                    <div class="col-8">gildong2@naver.com</div>

                    <label class="col-4 col-form-label">비밀번호</label>
                    <div class="col-8 text-right">
                        <b-button size="sm" squared>비밀번호 변경</b-button>
                    </div>

                    <label class="col-4 col-form-label">비밀번호확인</label>
                    <div class="col-8"></div>

                    <label class="col-4 col-form-label">국가</label>
                    <div class="col-8 d-flex">
                        대한민국
                        <b-button variant="primary" size="sm" squared class="ml-auto">국가 변경</b-button>
                    </div>

                    <label class="col-4 col-form-label">주소</label>
                    <div class="col-8">12345
                        <b-button size="sm" squared class="ml-2">우편번호 찾기</b-button>
                        <div class="mt-2">
                            서울특별시 강남구 개포2로 88(개포동, 파크뷰) 202동 300호
                        </div>
                    </div>

                    <label class="col-4 col-form-label">휴대폰</label>
                    <div class="col-8">010-9999-9999</div>

                    <label class="col-4 col-form-label">문자/메일수신</label>
                    <div class="col-8">
                        <b-form-radio-group :checked="0" :options="Object.assign({}, ['예','아니오'])"/>
                    </div>

                    <label class="col-4 col-form-label">가입일</label>
                    <div class="col-8">2019.12.01</div>
                </b-row>

                <b-button variant="danger" pill block class="bg-gradient mx-auto w-50 my-5">수정하기</b-button>
            </b-form>

        </div>

        <FooterMenu/>

    </div>
</template>

<script>
    import Header from "@/components/Header";
    import FooterMenu from "@/components/FooterMenu";
    import HeadingDark from "@/components/HeadingDark";

    export default {
        name: 'MyInfo',
        components: {HeadingDark, FooterMenu, Header},
        data() {
            return {}
        }
    }
</script>
