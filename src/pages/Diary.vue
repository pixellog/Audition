<template>
    <div class="bg-muted">
        <Header/>

        <HeadingDark title="Diary">
            <div slot="right" style="position:absolute; right: 1rem; top: .75rem; border:1px solid #000;">
                <!-- https://bootstrap-vue.js.org/docs/components/form-checkbox -->
                <b-form-checkbox value="0" name="" switch size="lg"></b-form-checkbox>
            </div>
        </HeadingDark>

        <b-row class="px-4 pt-2 pb-1 bg-muted">
            <b-button variant="link" class="text-dark font-weight-normal">선택 삭제</b-button>
            <b-button variant="link" class="ml-auto text-dark">전체 삭제</b-button>
        </b-row>

        <b-row no-gutters align-h="between" align-v="center" class="bg-white p-2">
            <div class="col-4">
                <b-button variant="link" size="sm">
                    <b-icon icon="chevron-left" class="mr-1"></b-icon>
                    2019.11
                </b-button>
            </div>
            <div class="col-4">2019.12월</div>
            <div class="col-4"></div>
        </b-row>

        <b-row class="p-3 mt-3 bg-white" v-for="i in 3" v-bind:key="i">
            <div class="col-auto" style="width: 4.5rem;height: 4.5rem;">
                <img src="../assets/images/thum-profile-sm.png" alt="" class="w-100 m-1 rounded-circle">
            </div>
            <div class="col">
                <div>
                    <div class="small">자존감 문제는 내게만 중요한 일이 아니었다. 불행하다며 나를 찾아오는 대다수는 자존감이 부족한 사람들이었다. - 자존감 수업中 ...</div>
                    <div class="mt-2 d-flex" style="overflow-x: auto; margin-right: -15px;">
                        <img src="../assets/images/thum-profile-sm.png" alt="" class="w-25 m-1" v-for="i in 6" v-bind:key="i">
                    </div>
                </div>

                <div class="small my-2">2018.04.28</div>

                <SnsButton/>
            </div>
        </b-row>

        <FooterMenu/>
        <FooterButton>
            <FooterButton>
                <b-button to="/diary/write" variant="danger" pill class="ml-auto btn-icon">
                    <img src="../assets/images/btn-write@3x.png" alt="write" style="width: 60px;">
                </b-button>
            </FooterButton>
        </FooterButton>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import FooterMenu from "@/components/FooterMenu";
    import SnsButton from "@/components/SnsButton";
    import HeadingDark from "@/components/HeadingDark";
    import FooterButton from "@/components/FooterButton";

    export default {
        name: 'Diary',
        components: {FooterButton, HeadingDark, SnsButton, FooterMenu, Header},
        data() {
            return {}
        }
    }
</script>
