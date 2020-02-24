<template>
    <div class="bg-dark text-white p-3 text-center d-flex justify-content-center">
        <slot name="left"></slot>
        <strong>{{title}}</strong>
        <slot name="right" class="ml-auto"></slot>
    </div>
</template>

<script>
    export default {
        name: 'HeadingDark',
        props: ['title']
    }
</script>
