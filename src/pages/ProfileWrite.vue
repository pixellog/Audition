<template>
    <div class="bg-muted">
        <Header/>

        <HeadingDark title="Profile"/>

        <div class="px-4 py-5">
            <h5 class="mb-4">프로필 입력</h5>

            <b-form>

                <b-row align-v="center" class="mx-0">
                    <div class="col-6 align-items-center bg-white rounded row no-gutters">
                        <label for="" class="col-6 col-form-label required">생년월일</label>
                        <b-input class="col-6 border-0 text-right" placeholder="yyyymmdd" required></b-input>
                    </div>
                    <b-form-radio-group class="col-6 pr-0 text-right" :checked="0" :options="Object.assign({}, ['공개','비공개'])"/>

                    <div class="col-12 my-2"></div>

                    <div class="col-6 align-items-center bg-white rounded row no-gutters">
                        <label for="" class="col-6 col-form-label">신장</label>
                        <b-input class="col-6 border-0 text-right" placeholder="cm"></b-input>
                    </div>
                    <b-form-radio-group class="col-6 pr-0 text-right" :checked="0" :options="Object.assign({}, ['공개','비공개'])"/>

                    <div class="col-12 my-2"></div>

                    <div class="col-6 align-items-center bg-white rounded row no-gutters">
                        <label for="" class="col-6 col-form-label">체중</label>
                        <b-input class="col-6 border-0 text-right" placeholder="kg"></b-input>
                    </div>
                    <b-form-radio-group class="col-6 pr-0 text-right" :checked="0" :options="Object.assign({}, ['공개','비공개'])"/>

                    <div class="col-12 my-2"></div>

                    <div class="col-12 align-items-center bg-white rounded row no-gutters">
                        <label for="" class="col-5 col-form-label">신체사이즈(in)</label>
                        <b-input class="col-2 border-0 text-center" placeholder=""></b-input> -
                        <b-input class="col-2 border-0 text-center" placeholder=""></b-input> -
                        <b-input class="col-2 border-0 text-center" placeholder=""></b-input>
                    </div>
                    <b-form-radio-group class="col-12 text-right py-2 pr-0" :checked="0" :options="Object.assign({}, ['공개','비공개'])"/>

                    <div class="col-12 my-2"></div>

                    <div class="col-12 align-items-center bg-white rounded row no-gutters">
                        <label for="" class="col-5 col-form-label">취미/특기</label>
                        <b-input class="col-2 border-0 text-center" placeholder=""></b-input>
                    </div>
                    <b-form-radio-group class="col-12 text-right py-2 pr-0" :checked="0" :options="Object.assign({}, ['공개','비공개'])"/>

                    <div class="col-12 my-2"></div>

                    <div class="col-12 align-items-center bg-white rounded row no-gutters">
                        <label for="" class="col-12 col-form-label">자기소개</label>
                        <b-textarea rows="5" class="col-12 border-0 mb-3" placeholder="자기소개 100자 이내로 입력"></b-textarea>
                    </div>
                    <b-form-radio-group class="col-12 text-right py-2 pr-0" :checked="0" :options="Object.assign({}, ['공개','비공개'])"/>

                    <div class="col-12 my-2"></div>

                    <div class="col-12 align-items-center bg-white rounded row no-gutters">
                        <label for="" class="col-12 col-form-label">활동경력</label>
                        <b-textarea rows="5" class="col-12 border-0 mb-3" placeholder="활동경력 입력"></b-textarea>
                    </div>
                    <b-form-radio-group class="col-12 text-right py-2 pr-0" :checked="0" :options="Object.assign({}, ['공개','비공개'])"/>
                </b-row>


                <b-button variant="danger" pill block class="bg-gradient mx-auto w-50 my-5">완료</b-button>
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
        name: 'ProfileWrite',
        components: {HeadingDark, FooterMenu, Header},
        data() {
            return {}
        }
    }
</script>
