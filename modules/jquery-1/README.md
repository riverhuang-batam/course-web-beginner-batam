# jQuery 1

---

## Introduction

jQuery is a JavaScript library to simplify javascript programming.
jQuery starts with dollar sign `$` or can be `jQuery`

---

## Usage

we can [download jQuery](jquery.com) & put on our repository folder or using CDN
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
    $(document).ready(function(){
        //here is our code after jquery is ready
    });
</script>
```

---

## jQuery syntax / selector

Is filtering by selector ( class, id, tagname and attributes ) to get HTML elements and perform some actions.
`$(selector).action()`.
jQuery uses CSS syntax to select element, so selector can have combination / multiple selectors.

---

## functions
jQuery API functions are:
* `find`, `hide`, `show`, `html`, `append`, `prepend`, `css`, `attr`, 
* `val`, `text`, `each`, `toggle`, `off`, `on`, `one`, `ready`, `select`

events can be function too.

---

## Events

jQuery can set HTML elements to do something based user action / event.
the events are : 
* `click`, `dblclick`, `mouseenter`, `mouseleave`, `hover`, `mousemove`, `mousedown`, `mouseup`
* `change`, `submit` , `hover`, `blur`
* `focus`, `focusin`, `focusout` 
* `keydown`, `keypress`, `keyup`
* `load`, `resize`, `scroll`, `unload`

---

## selector

#### Classname selector

```js
$('.btn-success').click(function(){
    window.alert('btn-success class is clicked')
})
```
select all HTML elements filtered by class attribute with value `btn-success`, on click do pop up alert with message. 

#### Tagname selector

```js
$('button').click(function(){
    window.alert('button tagname is clicked')    
})
```

#### combination selector

```js
$('button.btn-success').click(function(){
    window.alert('button tagname and btn-successs clicked')
})

$('h1 p').click(function(){
    window.alert('p tagname where has parent h1 tagname is clicked')
})
```

#### multiple selector

```js
$('.btn-success, h1 p').click(function(event){
    window.alert('btn-success class or p tagname where has parent h1 tagname is clicked')
    console.log('this is event', event)
    console.log('this is context', this)
    debugger;
})
```

```js
// Equivalent event setup using the `.on()` method
$( "p" ).on( "click", function() {
    console.log( "click" );
});
```

---

## Attribute methods

* `attr`, `removeAttr`, `hasClass`, `removeClass`, `addClass`, `toggleClass`, `html`, `text`, `val`, `css` 

---

## JQuery DOM filter methods

* `eq`, `filter`, `is`, `not`, `slice`

---

## JQuery DOM

* `html`, `remove`, `empty`, `after`, `before`, `append`, `appendTo`, `clone`, `insertAfter`, 'insertBefore`, `prepend`, 'prependTo`, `replaceAll`, `replaceWith`

---

## AJAX

* `load`, `getJSON`, `ajax`, `serialize`, `serializeArray`
* we can use javascript build in request to server

---

## JQuery animate

* `animate`, `fadeIn`, `fadeOut`, `fadeTo`, `hide`, `show`, `slideDown`, `slideToggle`, `slideup`, `toggle`,


## References

* [Learn jQuery](https://learn.jquery.com)