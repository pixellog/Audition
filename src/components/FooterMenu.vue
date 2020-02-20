<template>
    <b-button-group class="w-100 border-top">
        <b-button to="/my/profile" variant="light" squared size="sm" class="py-2">Profile</b-button>
        <b-button to="/my/myinfo" variant="light" squared size="sm" class="py-2">My info</b-button>
        <b-button to="/my/photo" variant="light" squared size="sm" class="py-2">Photo</b-button>
        <b-button to="/my/diary" variant="light" squared size="sm" class="py-2">Diary</b-button>
        <b-button to="/my/heart" variant="light" squared size="sm" class="py-2">Heart</b-button>
        <b-button to="/my/reward" variant="light" squared size="sm" class="py-2">Reward</b-button>
    </b-button-group>
</template>

<script>
    export default {
        name: 'FooterMenu',
    }
</script>
