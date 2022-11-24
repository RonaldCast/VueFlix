<template>
    <div class="banner">
        <slot>
        
        </slot>
    </div>
</template>
<scrip>

</scrip>
<style lang="scss" scoped>
.banner {
    height: 100vh;
    width: 100vw;    
    background-image: url("../../assets/img/bannerLogin.webp");
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    &::before{
        content: "";
        height: 100vh;
        width: 100vw;
        background: rgba(0, 0, 0, 0.603);
        position: absolute;
    }
}

</style>