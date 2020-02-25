<template>
    <header class="bg-white overflow-hidden w-100">
        <div class="logo-sm my-3 mx-auto">
            <div class="sr-only">Open Audition</div>
        </div>

        <b-button-group class="w-100">
            <b-button to="/audition" variant="light" squared><i class="icon icon-audition d-flex p-3"></i>Audition</b-button>
            <b-button to="/audition/list" variant="light" squared><i class="icon icon-openaudition d-flex p-3"></i>OpenAudition</b-button>
            <b-button to="/profile" variant="light" squared><i class="icon icon-profile d-flex p-3"></i>Profile</b-button>
        </b-button-group>
    </header>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>
