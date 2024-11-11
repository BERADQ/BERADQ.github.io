export const css = {
  example1: `
.container {
  overflow: hidden;
  display: grid;
  grid-template-rows: auto 0fr;
  transition: grid-template-rows .8s ease-in-out;
  &:hover {
    grid-template-rows: auto 1fr;
  }
  & > .suspend {
    width: 80px;
    height: 80px;
    background-color: red;
  }
  & > .content {
    background: blue;
    overflow: hidden;
    min-height: 0;
  }
  * {
    margin: 0;
  }
}
`.trim(),
  example1afterfix: `
.container {
  overflow: hidden;
  & > .content {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows .8s ease-in-out;
    & > .inner {
      min-height: 0;
    }
  }
  &:hover {
    & > .content {
      grid-template-rows: 1fr;
    }
  }
  /* 略 */
}
`.trim(),
  example2: `
/* 略 */
.container.with-default-width {
  & > .content {
    transition: grid-template-rows 0.8s ease-in-out;
    grid-template-rows: 15px 0fr;
    & > .inner {
      grid-row: 1/-1;
    }
  }
  &:hover {
    & > .content {
      grid-template-rows: 15px 1fr;
    }
  }
}
`,
};
export const html = {
  example1: `
<div class="container">
  <div class="suspend"></div>
  <ul class="content">
    <li>这是一段内容</li>
    <li>这是一段内容</li>
    <li>这是一段内容</li>
  </ul>
</div>
`.trim(),
  example1afterfix: `
<div class="container">
  <div class="suspend"></div>
  <ul class="content">
    <div class="inner">
      <!-- 略 -->
    </div>
  </ul>
</div>
`.trim(),
  example2: `
<div class="container with-default-width">
  <!-- 略 -->
</div>
`.trim(),
};
