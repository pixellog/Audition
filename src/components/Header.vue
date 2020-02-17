<template>
    <header>
        <div class="logo-sm mt-4 mb-3 mx-auto">
            <div class="sr-only">Open Audition</div>
        </div>

        <b-button-group class="w-100">
            <b-button class="col-4 px-0" size="lg" variant="light" active active-class="border-bottom border-danger"><img src="../assets/images/ic-audition@3x.png" alt="" class="x2 mx-auto d-block">Audition</b-button>
            <b-button class="col-4 px-0" size="lg" variant="light"><img src="../assets/images/ic-openaudition@3x.png" alt="" class="x2 mx-auto d-block">OpenAudition</b-button>
            <b-button class="col-4 px-0" size="lg" variant="light"><img src="../assets/images/ic-profile@3x.png" alt="" class="x2 mx-auto d-block">Profile</b-button>
        </b-button-group>
    </header>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>
