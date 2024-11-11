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
.example1 {
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
      <li>这是一段内容</li>
      <li>这是一段内容</li>
      <li>这是一段内容</li>
    </div>
  </ul>
</div>
`.trim(),
};
