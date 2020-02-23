<template>
    <div class="bg-white border-bottom p-3">
        <b-button variant="link">
            <b-icon icon="chevron-left" scale="1.5" class="mr-2"></b-icon>
        </b-button>
        <strong>{{title}}</strong>
    </div>
</template>

<script>
    export default {
        name: 'Heading',
        props: ['title']
    }
</script>
