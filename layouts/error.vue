<template>
  <article class="error">
    <h1 class="large-heading large-heading-ja">エラー</h1>
    <div class="section-list">
      <section class="section">
        <div class="section-content">
          <p class="error-text">原因不明のエラーが発生しました。<br />少し休憩してから、もう一度試してみてください。</p>
        </div>
      </section>
    </div>
  </article>
</template>
<script>
export default {
  props: ['error']
}
</script>
