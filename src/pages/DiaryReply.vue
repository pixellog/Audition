<template>
    <div class="pb-5 bg-white">

        <div class="p-3 border-bottom">
            <h6 class="mb-0">
                <b-icon icon="chevron-left" scale="1.5" class="mr-2"></b-icon>
                Replies
            </h6>
        </div>

        <div class="px-4">

            <TalkItem class="mt-4"/>

        </div>


    </div>
</template>

<script>
    import TalkItem from "@/components/TalkItem";

    export default {
        name: 'DiaryReply',
        components: {TalkItem},
        data() {
            return {
                url: '//kinimage.naver.net/20171221_143/1513808401960QBcEc_JPEG/1513808401719.jpg'
            }
        }
    }
</script>
