<template>
    <div class="pages">
        <div class="w-100">
            <header></header>
            <div class="main"></div>
            <div class="ranking border">
                <b-row>
                    <h3>실시간 랭킹</h3>
                    <b-button variant="link" class="ml-auto">+</b-button>
                </b-row>
                <div>
                    <b-tabs content-class="mt-3">
                        <b-tab title="#종합" active>
                            <ul class="list-unstyled d-flex">

                                <li class="item" v-for="i in 3" v-bind:key="i">
                                    <img src="" :alt="i">
                                    <dl>
                                        <dt class="d-flex"><strong class="h5">오동백</strong>
                                            <b-button variant="link text-secondary small" class="ml-auto">보기+</b-button>
                                        </dt>
                                        <dd><i class="text-primary">i</i><span class="text-primary">5,354,555</span></dd>
                                        <dd><i class="text-dark">i</i><span class="text-warning">5,354,555</span></dd>
                                    </dl>
                                </li>

                            </ul>
                        </b-tab>
                        <b-tab title="#남자"><p>I'm the second tab</p></b-tab>
                        <b-tab title="#여자"><p>I'm the second tab</p></b-tab>
                    </b-tabs>
                </div>
            </div>
            <div class="heart">
                <b-button></b-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Main',
        props: {
            msg: String
        },
        data() {
            return {
                //i: 0
            }
        }
    }
</script>
