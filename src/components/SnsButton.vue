<template>
    <div class="d-flex small align-items-center">
        <b-icon icon="chat-fill" variant="light" class="bg-dark mr-2"></b-icon>
        5
        <b-button variant="outline-primary border-0 ml-3" size="sm" pill class="mr-2 py-0 px-1">
            <b-icon icon="chat"></b-icon>
            댓글달기
        </b-button>
        <b-button variant="outline-danger" size="sm" pill class="bg-white ml-auto mr-2">
            <b-icon icon="like"></b-icon>
            254
        </b-button>
        <b-button variant="outline-primary" size="sm" pill class="bg-light">
            <b-icon icon="hate"></b-icon>
            18
        </b-button>
    </div>
</template>

<script>
    export default {
        name: 'SnsButton',
    }
</script>
