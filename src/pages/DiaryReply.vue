<template>
    <div>
        <Heading title="Replies"/>

        <div class="px-4">
            <TalkItem class="mt-4"/>
        </div>
    </div>
</template>

<script>
    import TalkItem from "@/components/TalkItem";
    import Heading from "@/components/Heading";

    export default {
        name: 'DiaryReply',
        components: {Heading, TalkItem},
        data() {
            return {
            }
        }
    }
</script>
