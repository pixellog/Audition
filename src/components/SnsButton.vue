<template>
    <div class="d-flex small align-items-center">
        <i class="icon icon-reply-fill p-2 mr-1"></i>
        5
        <b-button variant="link" size="sm" pill class="mr-2 text-secondary">
            <i class="icon icon-reply p-2 mr-1"></i>
            댓글달기
        </b-button>
        <b-button variant="outline-danger" size="sm" pill class="ml-auto mr-2">
            <i class="icon icon-like mr-1"></i>
            254
        </b-button>
        <b-button variant="outline-primary" size="sm" pill>
            <i class="icon icon-hate mr-1"></i>
            18
        </b-button>
    </div>
</template>

<script>
    export default {
        name: 'SnsButton',
    }
</script>
