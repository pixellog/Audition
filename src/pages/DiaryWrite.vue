<template>
    <div>
        <Heading title="Create Post"/>

        <div class="p-4">

            <b-row>
                <div class="col-auto" style="width: 4.5rem;height: 4.5rem;">
                    <img src="../assets/images/thum-profile-sm.png" alt="" class="w-100 rounded-circle">
                </div>
                <b-textarea rows="5" placeholder="문구입력..." class="col border-0 p-0"></b-textarea>
            </b-row>

            <InputFile/>

            <b-row no-gutters class="mt-3">
                <strong>공개/비공개</strong>
                <b-form-checkbox size="lg" value="0" name="" switch class="ml-auto custom-switch-danger"></b-form-checkbox>
            </b-row>

            <b-button variant="danger" pill block class="my-5">올리기</b-button>

        </div>

    </div>
</template>

<script>
    import Heading from "@/components/Heading";
    import InputFile from "@/components/InputFile";

    export default {
        name: 'DiaryWrite',
        components: {InputFile, Heading},
        data() {
            return {}
        }
    }
</script>
