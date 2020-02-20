<template>
    <b-button-group class="w-100 border-top">
        <b-button to="/profile" variant="light" squared size="sm" class="py-2">Profile</b-button>
        <b-button to="/myinfo" variant="light" squared size="sm" class="py-2">My info</b-button>
        <b-button to="/photo" variant="light" squared size="sm" class="py-2">Photo</b-button>
        <b-button to="/diary" variant="light" squared size="sm" class="py-2">Diary</b-button>
        <b-button to="/heart" variant="light" squared size="sm" class="py-2">Heart</b-button>
        <b-button to="/reward" variant="light" squared size="sm" class="py-2">Reward</b-button>
    </b-button-group>
</template>

<script>
    export default {
        name: 'FooterMenu',
    }
</script>
