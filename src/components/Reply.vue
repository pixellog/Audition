<template>
    <div>
        <h5>댓글달기</h5>
        <div class="rounded bg-muted p-3 mb-4">
            <div style="min-height: 100px">주제와 무관한 악플은 무통보 삭제될 수 있습니다.</div>
            <b-row no-gutters>
                <b-button size="sm" variant="link" pill class="small">
                    <b-icon icon="camera" scale="2"></b-icon>
                </b-button>
                <b-button size="sm" variant="danger" pill class="ml-auto px-3">댓글등록</b-button>
            </b-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Reply',
    }
</script>
