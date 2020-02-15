<template>
    <div class="pages bg-muted py-5">

        <b-form>
            <div class="logo mx-auto">
                <div class="sr-only">Open Audiiton</div>
            </div>

            <div class="rounded-circle bg-black-50 mx-auto position-relative" style="width: 200px;height: 200px; border:4px solid #fff; margin-top: 20vh;">
                <b-button variant="link" class="position-absolute" style="right: -20px;bottom: 4px;"><img src="../assets/images/camera@2x.png" alt="" style="width: 63px;"></b-button>
            </div>

            <b-button variant="danger" size="lg" pill block class="mt-5">대표사진 등록</b-button>
            <b-button variant="light" size="lg" pill block class="mt-4 text-dark">다음에 등록</b-button>
        </b-form>

    </div>
</template>

<script>
    export default {
        name: 'Profile',
        props: {
            msg: String
        }
    }
</script>
