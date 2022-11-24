<template>
    <div class="logo">
        <img src="../../assets/img/logo.png"/>
        <span>Vue<span>Flix</span></span>
    </div>
</template>

<style lang="scss" scoped>
@import "../../assets/variable";
    .logo{
        text-align: center;
         display: flex;
         justify-content: center;
         align-items: center;
        font-family: "Ubuntu";
        font-size: 1.8rem;
        color:#fff;
        span {
            margin-top:10px;
            span{
                color:$vt-c-second-red;
            }
        }

        > img {
            width: 50px;
            transform: rotate(-10deg);
            margin-right: 2px;
        }
    }
</style>