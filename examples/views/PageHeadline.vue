<template>
  <div class="container">
    <my-headline :level="1" icon="user" size="tiny">
      tiny
      <div slot="sub">tiny子标题</div>
    </my-headline>
    <br />
    <br />
    <my-headline :level="2" icon="settings" size="huge">
      huge标题
      <div slot="sub">huge子标题</div>
    </my-headline>
    <br />
    <br />
    <my-headline :level="3" icon="settings">
      默认大小标题
      <div slot="sub">默认大小子标题</div>
    </my-headline>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang='less'></style>
