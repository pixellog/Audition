<template>
    <div class="bg-muted p-3">
        <b-row align-v="center" class="bg-white mx-0 px-3 shadow-sm rounded-lg">
            <b-form-select class="col-3 border-0 px-0" value="0" :options="Object.assign({},['대한민국'])"/>
            <b-form-select class="col-2 border-0 px-0" value="0" :options="Object.assign({},['성별','남','여'])"/>
            <b-form-select class="col-2 border-0 px-0" value="0" :options="Object.assign({},['연령'])"/>
            <b-form-select class="col-2 border-0 px-0" value="0" :options="Object.assign({},['분야'])"/>
            <b-input class="col-2 text-right border-0 px-0" placeholder="이름"></b-input>
            <b-button variant="outline-secondary" class="ml-auto border-0 p-1 col-auto">
                <b-icon icon="search" scale="1.2" />
            </b-button>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'Search',
    }
</script>
