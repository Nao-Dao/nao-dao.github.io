# Setting

## Themes
<div class="demo-theme-preview">
  <a data-theme="vue">Vue</a>
  <a data-theme="buble">Buble</a>
  <a data-theme="dark">Dark</a>
  <a data-theme="pure">Pure</a>
</div>

## Language
<div class="lang">
  <a data-lang="en" href="/">english</a>
  <a data-lang="zh" href="/zh/">简体中文</a>
</div>

<style>
  .demo-theme-preview a,
  .lang a {
    padding-right: 10px;
  }

  .demo-theme-preview a:hover,
  .lang a:hover {
    cursor: pointer;
    text-decoration: underline;
  }
</style>

<script>
  var preview = Docsify.dom.find('.demo-theme-preview');
  var themes = Docsify.dom.findAll('[rel="stylesheet"]');

  preview.onclick = function (e) {
    var title = e.target.getAttribute('data-theme');

    themes.forEach(function (theme) {
      theme.disabled = theme.title !== title;
      if(theme.title == "gitalk") {
        theme.disabled = false;
      }
      localStorage.setItem("data-theme", title);
    });
  };
</script>