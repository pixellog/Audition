<template>
    <div class="d-flex small align-items-center">
        <b-icon icon="chat-fill" variant="light" scale="2" class="bg-dark mr-1 rounded-circle p-1"></b-icon>
        5
        <b-button variant="link" size="sm" pill class="mr-2 text-secondary">
            <b-icon icon="chat"></b-icon>
            댓글달기
        </b-button>
        <b-button variant="outline-danger" size="sm" pill class="bg-white ml-auto mr-2">
            <b-icon icon="star-fill"></b-icon>
            254
        </b-button>
        <b-button variant="outline-primary" size="sm" pill class="bg-white">
            <b-icon icon="star-fill"></b-icon>
            18
        </b-button>
    </div>
</template>

<script>
    export default {
        name: 'SnsButton',
    }
</script>
