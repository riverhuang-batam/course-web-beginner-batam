# Web performance 1

---

## why

* to know website speed to deliver content to user. 
* people will leave our website if website is slow to show and impact to decrease visitor continuesly, eventualy it will degrade google ranking

---

## how
 * by reducing file size used by our website.
 * unblock website render the content.
 * remove unused HTML tag, CSS syntax and javascript script

### compress image

#### jpeg
#### png
#### webp

### use CDN
by this you can gain
* CDN files mostly have already cached.
* shared used by other website.
* close location server to your ISP location.
* save our server bandwidth.
* multiply request if different server location.

references : 
* [google](https://developers.google.com/speed/libraries/#libraries)
* [cdnjs](https://cdnjs.com/)
* [jquery](https://code.jquery.com/)
* [twitter bootstrap](https://www.bootstrapcdn.com/)
* usually library / framework provide CDN

by add resource file to CDN server on HTML
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
```