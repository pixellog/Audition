<template>
    <div class="bg-white border-bottom p-3">
        <h6 class="mb-0 font-weight-bold">
            <b-icon icon="chevron-left" scale="1.5" class="mr-2"></b-icon>
            {{title}}
        </h6>
    </div>
</template>

<script>
    export default {
        name: 'Heading',
        props: ['title']
    }
</script>
