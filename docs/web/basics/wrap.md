---
title: CSS解决纯英文文字不会自动换行
description: CSS解决纯英文文字不会自动换行
---

# CSS解决纯英文文字不会自动换行

> 代码不规范，亲人两行泪

## 示例

> 只需要两行代码就可以搞定

```css
{
  word-wrap: break-word;
  word-break: break-all;
}
```

## 效果对比

<div>asdhaklssdhaklsdhaklsdhklasdhkdhaklsdhklaasdhaklssdhaklsdhaklsdhklasdhkdhaklsdhklasdhkasdhaklssdhaklsdhaklsdhklasdhkdhaklsdhklasdhk</div>

<div class="text">asdhaklssdhaklsdhaklsdhklasdhkdhaklsdhklaasdhaklssdhaklsdhaklsdhklasdhkdhaklsdhklasdhkasdhaklssdhaklsdhaklsdhklasdhkdhaklsdhklasdhk</div>

<style lang="scss" scoped>
.text {
  margin-top: 20px;
  word-wrap: break-word;
  word-break: break-all;
}
</style>
