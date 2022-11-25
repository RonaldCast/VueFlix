<template>
  <div class="notFoundMovie">
    <div>
      <img src="../../assets/img/sad.png" />
    </div>
    <p>Not Found Movie</p>
  </div>
</template>
<style lang="scss" scoped>
.notFoundMovie {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    div{
        width:200px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    p{
        margin-top:10px;
        color:rgb(148, 143, 143);
        font-size: 1.3rem;
    }
}
</style>
