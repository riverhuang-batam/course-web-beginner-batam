# CSS 2

---

## CSS Position

With CSS `position` we can alter an element position. It has 4 possible value:

- Static : Default value of position properties, They aren’t affected by any left, right, top or bottom value.
- Relative : Move element according to current position, without affecting another element.
- Absolute : When the position is set to absolute, an element can move according to the first positioned ancestor.
- Fixed : Move element according to browser window.

With 4 coordinates properties:

- Left
- Right
- Top
- Bottom

```css
/* Position relative example */
#relative-example {
  position: relative;
  border-color: red;
  left: 20px;
  top: 10px;
}

/* Position absolute example */
#relative-div {
  background: gold;
  height: 200px;
  padding: 10px;
  position: relative; /* This turns the #relative-div into a point of reference for the #absolute-div */
}

#absolute-div {
  background: limegreen;
  color: white;
  padding: 10px;
  position: absolute; /* This makes the #absolute-div freely movable */
  bottom: 10px; /* 10px from the bottom */
  left: 20px; /* 20px from the left */
}

/* Position fixed example*/
#fixed-example {
  position: fixed;
  left: 100px;
  top: 150px;
}
```

---

## CSS Web Safe Fonts

The font-family property should hold several font names as a "fallback" system, to ensure maximum compatibility between browsers/ OS. **If the browser does not support the first font, it tries the next font**.

Start with the font you want, and end with a generic family, to let the **browser pick a similar font in the generic family**, **if no other fonts are available**

```CSS
p  {
  font-family: "Lucida Console", monaco, monospace;
}
```

Example:

![web-safe-fonts](./assets/web-safe-fonts.png)

#### references
* [common fonts used](https://websitesetup.org/web-safe-fonts-html-css)
* [google fonts](https://fonts.google.com/)

---