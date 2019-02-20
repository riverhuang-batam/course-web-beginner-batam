#react-image-gallery 1

---

## Introduction

Is carousel image gallery component with thumbnail & mobile support

---

## Installation

`npm install react-image-gallery`

---

## Usage

```js
import ImageGAllery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";

class MyComponent extends React.Component {
    render() {
        const images = [
            {
                original: 'http://lorempiel.com/1000/600/nature/1/',
                thumbnail: 'http://lorempixel.com/250/150/nature/1/'
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/2/',
                thumbnail: 'http://lorempixel.com/250/150/nature/2/'
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/3/',
                thumbnail: 'http://lorempixel.com/250/150/nature/3/'
            }
        ]

        return (
            <ImageGallery items={images} />
        )
    }
}
```