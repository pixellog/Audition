<template>
    <div>
        <Header/>

        <HeadingDark title="Profile"/>

        <div class="px-4 py-5">
            <h5 class="mb-4">프로필 정보</h5>

            <b-form>
                <b-row no-gutters class="list-primary">
                    <label class="col-3 col-form-label">이름</label>
                    <div class="col-9">동백이</div>
                    <label class="col-3 col-form-label">생년월일</label>
                    <div class="col-9">1991. 02. 16 (만 29세)</div>
                    <label class="col-3 col-form-label">신장</label>
                    <div class="col-9">189 cm</div>
                    <label class="col-3 col-form-label">체중</label>
                    <div class="col-9">80 kg</div>
                    <label class="col-3 col-form-label">신체사이즈</label>
                    <div class="col-9">34 - 24 - 38</div>
                    <label class="col-3 col-form-label">취미/특기</label>
                    <div class="col-9">#그림, #운동, #먹방, #사진찍기, #유튜브</div>
                    <label class="col-3 col-form-label">자기소개</label>
                    <div class="col-9">꽃과 들을 좋아하는 홍길동입니다. 봉사활동하는 것이 취미이고, 늘 활기차게 살려고 노력하고 있습 니다. 잘 부탁드려요.</div>
                    <label class="col-3 col-form-label">경력</label>
                    <div class="col-9">2015년 청소년 모델 축제 입상 <br>
                        2018년 SM 아카데미 외모 부분 우수상
                    </div>
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
        name: 'ProfileView',
        components: {HeadingDark, FooterMenu, Header},
        data() {
            return {}
        }
    }
</script>
