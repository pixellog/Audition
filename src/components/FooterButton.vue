<template>
    <div class="position-fixed w-100 px-2 pb-5 d-flex align-items-center" style="bottom: 0;">
        <b-button variant="light" pill size="sm" class="p-0 border-0" style="background-color:rgba(0,0,0,0);">
            <img src="../assets/images/ic-heart-break@3x.png" alt="" class="w-100 x3">
        </b-button>
        <b-button variant="danger" size="lg" pill class="ml-auto">
            <b-icon icon="plus" scale="2"></b-icon>
        </b-button>
    </div>
</template>

<script>
    export default {
        name: 'FooterButton',
    }
</script>
