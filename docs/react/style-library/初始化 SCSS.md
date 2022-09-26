---
sidebar_position: 1
---

# 初始化 SCSS

## 对常用的 scss 样式做初始化处理

```
@mixin widthHeight($width,$height) {
  width: $width;
  height: $height;
}

@mixin fontFamily($font, $size, $color, $lineHeight:normal, $letterSpacing: normal, $textAlign: left) {
  font-family: $font;
  font-size: $size;
  color: $color;
  line-height: $lineHeight;
  text-align: $textAlign;
  letter-spacing: $letterSpacing;
}

@mixin bgColor($color) {
  background-color: $color;
}

@mixin borderRadius($topLeft, $topRight, $bottomRight, $bottomLeft) {
  border-top-left-radius: $topLeft;
  border-top-right-radius: $topRight;
  border-bottom-right-radius: $bottomRight;
  border-bottom-left-radius: $bottomLeft;
}

@mixin margin($top:0px, $left:0px, $bottom:0px, $right:0px) {
  margin-top: $top;
  margin-left: $left;
  margin-bottom: $bottom;
  margin-right: $right;
}

@mixin padding($top:0px, $left:0px, $bottom:0px, $right:0px) {
  padding-top: $top;
  padding-left: $left;
  padding-bottom: $bottom;
  padding-right: $right;
}

@mixin border-radius($radius: 5px, $moz: true, $webkit: true, $ms: true) {
  @if $moz    { -moz-border-radius:    $radius; }
  @if $webkit { -webkit-border-radius: $radius; }
  @if $ms     { -ms-border-radius:     $radius; }
  border-radius: $radius;
}

 @mixin absoluteTopRight($top:0, $right:0, $ZIndex:0 ) {
  position: absolute;
  top: $top;
  right: $right;
  z-index: $ZIndex;
}

@mixin absoluteBottomRight($bottom:0, $right:0, $ZIndex:0 ) {
  position: absolute;
  bottom: $bottom;
  right: $right;
  z-index: $ZIndex;
}

@mixin absoluteBottomLeft($bottom:0, $left:0, $ZIndex:0 ) {
  position: absolute;
  bottom: $bottom;
  left: $left;
  z-index: $ZIndex;
}

@mixin absoluteTopRight($top:0, $right:0, $ZIndex:0 ) {
  position: absolute;
  top: $top;
  right: $right;
  z-index: $ZIndex;
}

@mixin absoluteTopLeft($top:0, $left:0, $ZIndex:0 ) {
  position: absolute;
  top: $top;
  left: $left;
  z-index: $ZIndex;
}



```

<!-- A new page is now available at `http://localhost:3000/my-react-page`.

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at `http://localhost:3000/my-markdown-page`. -->
