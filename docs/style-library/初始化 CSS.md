---
sidebar_position: 1
---

# 初始化 CSS

Add **Markdown or React** files to `src/pages` to create a **standalone page**:

## Create your first React Page

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
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

@mixin widthHeight($width,$height) {
  width: $width;
  height: $height;
}

@mixin fontFamily($font, $size, $color, $lineHeight) {
  font-family: $font;
  font-size: $size;
  color: $color;
  line-height: $lineHeight;
}

```

```
  <iframe></iframe>
```

A new page is now available at `http://localhost:3000/my-react-page`.

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at `http://localhost:3000/my-markdown-page`.
