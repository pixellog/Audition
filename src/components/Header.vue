<template>
    <header class="bg-white overflow-hidden w-100">
        <div class="logo-sm my-3 mx-auto">
            <div class="sr-only">Open Audition</div>
        </div>

        <b-button-group class="w-100">
            <b-button to="/audition" variant="light" squared><img src="../assets/images/ic-audition@3x.png" alt="" class="x3 mx-auto d-block">Audition</b-button>
            <b-button to="/audition/list" variant="light" squared><img src="../assets/images/ic-openaudition@3x.png" alt="" class="x3 mx-auto d-block">OpenAudition</b-button>
            <b-button to="/profile" variant="light" squared><img src="../assets/images/ic-profile@3x.png" alt="" class="x3 mx-auto d-block">Profile</b-button>
        </b-button-group>
    </header>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>
