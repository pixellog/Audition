<template>
    <div class="bg-dark text-white p-3 text-center position-relative">
        <strong>{{title}}</strong>
        <slot name="right"></slot>
    </div>
</template>

<script>
    export default {
        name: 'HeadingDark',
        props: ['title']
    }
</script>
