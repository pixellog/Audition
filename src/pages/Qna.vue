<template>
    <div class="min-vh-100">
        <Heading title="Q&A"/>

        <b-tabs nav-class="tabs-border" fill>
            <div class="pb-3 bg-muted"></div>
            <b-tab title="문의하기" class="p-4" active>
                <b-form>
                    <b-row>
                        <label for="" class="col-3 col-form-label">문의유형</label>
                        <b-form-select class="col-9 border-0 px-0" value="0" :options="Object.assign({},['유형을선택해주세요.'])"/>

                        <label for="" class="col-3 col-form-label">제목</label>
                        <b-input class="col-9 border-0 pl-0" placeholder="제목을 입력해주세요. "></b-input>

                        <label for="" class="col-12 col-form-label">문의내용</label>
                        <div class="col-12">
                            <b-textarea placeholder="문의내용을 입력해주세요." rows="5"></b-textarea>
                        </div>

                        <label for="" class="col-12 col-form-label mt-3">이미지 첨부</label>
                        <div class="col-12">
                            <b-form-file multiple
                                         v-model="file"
                                         :state="Boolean(file)"
                                         placeholder="등록할 이미지를 첨부해주세요."
                                         drop-placeholder="Drop file here...">
                                <template slot="file-name" slot-scope="{ names }">
                                    <b-badge variant="dark">{{ names[0] }}</b-badge>
                                    <b-badge v-if="names.length > 1" variant="dark" class="ml-1">
                                        + {{ names.length - 1 }} More files
                                    </b-badge>
                                </template>
                            </b-form-file>
                        </div>

                    </b-row>

                    <b-button variant="danger" size="lg" block pill class="my-5">문의하기</b-button>
                </b-form>
            </b-tab>

            <b-tab title="문의내역" class="bg-muted pb-5">

                <div role="tablist">
                    <b-card no-body class="mb-2 border-left-0 border-right-0" v-for="i in 3" v-bind:key="i">
                        <b-card-header header-tag="header" class="p-0 border-0" role="tab">
                            <b-button @click="active = i" block href="#" v-b-toggle="`accordion-${i}`" variant="light" squared class="py-3 d-flex align-items-center">
                                <strong class="col-auto text-danger">Q.</strong>
                                <div class="col text-left p-0">
                                    소셜오디션 프로필 사진 등록이 안됨.(질문제목{{i}})
                                </div>
                                <b-icon icon="triangle-fill" :rotate="active == i ? 0 : 180" scale=".75" class="ml-auto"></b-icon>
                            </b-button>
                        </b-card-header>
                        <b-collapse :id="`accordion-${i}`" visible accordion="my-accordion" role="tabpanel">
                            <b-card-body class="bg-muted p-4">
                                <div class="text-primary">
                                    어느순간부터 프로필 사진에 등록이 안 됩니다.
                                    +를 아무리 눌러도 실행이 되지 않고, 사진 앨범에는 뜨지만 오디
                                    션 참가하기 눌렀을 때 아무런 사진이 없다고만 뜹니다.
                                    <div class="small text-right my-3">2020.02.14 19:30</div>
                                </div>
                                <div>
                                    <h6>이미지 첨부</h6>
                                    <div class="text-primary">
                                        이미지 첨부 완료
                                    </div>
                                    <b-row no-gutters class="border-top border-primary pt-3 mt-4">
                                        <strong class="col-auto pr-3">A.</strong>
                                        <div class="col">
                                            앱 오류로 보여지며,앱을 삭제하였다가 다시 재설치 해보
                                            시기 바랍니다. 그래도 오류가 해결 되지 않았을 경우,
                                            111-1111로 연락주세요.
                                            감사합니다.
                                        </div>
                                    </b-row>
                                </div>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                </div>

                <b-button variant="danger" size="lg" block pill class="w-90 my-5 mx-auto">재문의하기</b-button>
            </b-tab>
        </b-tabs>

    </div>
</template>

<script>

    import Heading from "../components/Heading";

    export default {
        name: 'Qna',
        components: {Heading},
        data() {
            return {
                file: null,
                active: 1
            }
        },
        methods: {}
    }
</script>
