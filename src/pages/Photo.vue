<template>
    <div class="min-vh-100 d-flex flex-column">
        <Header/>

        <div class="flex-grow-1">
            <div class="bg-dark text-white text-center p-3 font-weight-bold">Photo</div>

            <div class="bg-muted mx-2 mt-5 mb-2" >
                list
            </div>

            <div class="p-3">
                <b-row no-gutters>
                    <b-button size="" pill variant="primary" class="px-4 border-0">일괄삭제</b-button>
                    <b-button size="" pill variant="danger" class="ml-auto px-4">일괄등록</b-button>
                </b-row>

                <p class="mt-3">최대 100개 사진을 업로드 할 수 있습니다.</p>
            </div>
        </div>

        <FooterMenu/>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import FooterMenu from "@/components/FooterMenu";

    export default {
        name: 'Photo',
        components: {FooterMenu, Header},
        data() {
            return {}
        },
        methods: {}
    }
</script>
