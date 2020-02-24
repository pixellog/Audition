<template>
    <div>
        <b-row no-gutters align-v="end mt-3">
            <div>
                <strong>이미지첨부</strong> <br>
                <div class="text-primary">등록할 이미지를 첨부해주세요.</div>
            </div>

            <b-button variant="primary" size="sm" squared class="ml-auto border-0 px-3">첨부</b-button>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'InputFile',
        data() {
            return {
            }
        },
    }
</script>
