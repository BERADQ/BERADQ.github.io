<script lang="ts">
  import Code from "$lib/component/Code.svelte";
  import { css as cssExample, html as htmlExample } from "./example_code";
</script>

<h1>关于使用实现 css 固有尺寸过渡的几种思路</h1>
<p>
  在进行一个前端项目时，我希望实现一个常见的交互效果：用户将鼠标悬停在某个元素上时，另外一部分内容能够展开。
</p>
<p>
  但是在实现的过程中，我遇到了一个棘手的问题：使用 intrinsic sizing 关键字（例如
  auto）来设置尺寸的元素并不支持过渡动画。
  为了解决这个问题，当时我使用了接下来要讲的其他方法中的方法三，代码非常不雅观。
</p>
<p>
  今天闲着没事干翻别人的好文章时偶然发现这个 issue 已经存在很长时间了，并且 w3c
  在最近也已经有了相应的草案用于解决这个问题。
</p>
<p>
  但是草案毕竟是草案，一时半会也不能在常规项目中使用，于是研究了几种解决办法，故此记录。
</p>

<h2>思路一：使用 gird 布局动画（推荐）</h2>
<h3>第一部分：基本思路</h3>
<a href="#1end">点我直接看第一部分结果</a>
<p>
  该方法是通过 0fr {"->"} 1fr 从而实现过渡，这样的话 1fr 时盒子照样可以被自动尺寸的子元素撑开。
</p>
<p>不多废话了，直接上代码</p>
<Code lang="css" code={cssExample.example1} />
<Code lang="html" code={htmlExample.example1} />
<p>效果：</p>
<div class="example1">
  <div class="suspend"></div>
  <div class="content">
    <p>这是一段内容</p>
    <p>这是一段内容</p>
    <p>这是一段内容</p>
  </div>
</div>
<p>
  可以看到过渡动画出现了，但是可以看到还有一个问题：content 发生了奇怪的漂移。
</p>
<p>
  这是因为 grid-template 中的 auto
  会使浏览器在排版时计算出现一些问题。那么解决这个问题就很简单了：☝️🤓只给 grid
  里装一个元素。
</p>
<p id="1end">第一部分结论：</p>
<Code lang="css" code={cssExample.example1afterfix} />
<Code lang="html" code={htmlExample.example1afterfix} />
<p>现在来看看成果：</p>

<div class="example1 afterfix">
  <div class="suspend"></div>
  <div class="content">
    <div class="inner">
      <p>这是一段内容</p>
      <p>这是一段内容</p>
      <p>这是一段内容</p>
    </div>
  </div>
</div>
<p>到这我们就解决了问题，非常完美😎。</p>
<p>
  ☝️🤓诶，那么就有小伙伴要问了：我该怎么实现初始高度到完整高度的动画过渡呢？
</p>
<h3>第二部分：具有初始尺寸的动画过渡</h3>
<a href="#2end">点我直接看第二部分结果</a>
<p>
  相信不用我说，大家已经想到了：grid
  可以让元素填充到任意格子甚至跨格子。那么我们直接分成两格，第一格不就是初始尺寸了吗？
</p>
<p>甜菜！👆👇</p>
<p>直接上代码：</p>
<Code lang="css" code={cssExample.example2} />
<Code lang="css" code={htmlExample.example2} />
<p>☝️😎诶，这不就成了吗。你看看，多简单。</p>
<div class="example1 afterfix example2">
  <div class="suspend"></div>
  <div class="content">
    <div class="inner">
      <p>这是一段内容</p>
      <p>这是一段内容</p>
      <p>这是一段内容</p>
    </div>
  </div>
</div>
<p>待补充……</p>

<style lang="postcss">
  .example1 {
    overflow: hidden;
    display: grid;
    grid-template-rows: auto 0fr;
    transition: grid-template-rows 0.8s ease-in-out;
    &.afterfix {
      display: block;
      & > .content {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 0.8s ease-in-out;
        & > .inner {
          min-height: 0;
        }
      }
      &:hover {
        & > .content {
          grid-template-rows: 1fr;
        }
      }
    }
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
  .example1.afterfix.example2 {
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
</style>
