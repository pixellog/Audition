<template>
    <div class="d-flex small align-items-center">
        <i class="icon icon-reply-fill p-2 mr-1"></i>
        5
        <b-button variant="link" size="sm" pill class="mr-2 text-secondary">
            <i class="icon icon-reply p-2 mr-1"></i>
            댓글달기
        </b-button>
        <b-button variant="outline-danger" size="sm" pill class="py-0 ml-auto mr-2">
            <i class="icon icon-like p-1 mr-1"></i>
            <small>254</small>
        </b-button>
        <b-button variant="outline-primary" size="sm" pill class="py-0">
            <i class="icon icon-hate p-1 mr-1"></i>
            <small>18</small>
        </b-button>
    </div>
</template>

<script>
    export default {
        name: 'SnsButton',
    }
</script>
