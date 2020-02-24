<template>
    <div class="bg-white border-bottom p-2">
        <b-button variant="link">
            <b-icon icon="chevron-left" scale="1.5"></b-icon>
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
