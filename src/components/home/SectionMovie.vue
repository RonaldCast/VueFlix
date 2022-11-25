<template>
    <div class="sectionMovie">
        <FilterMovie @send-data="filterMovie"/>

    </div>
</template>
<script setup>
import FilterMovie from "../home/FilterMovie.vue"

const filterMovie = (filter) => {
    console.log(filter)
}

</script>

<style lang="scss" scoped>

    @import "../../assets/variable";
    .sectionMovie{
        background: $vt-c-primary-black ;
        padding: 20px 35px;
    }
</style>