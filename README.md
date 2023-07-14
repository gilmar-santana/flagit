# flagit
Flagit is a simple jQuery component that provides flag icons for Brazilian states in a select list.

How to use it?

Step 1: Include the CSS and JS files in your HTML code

```html
<link href="flagit.css".css rel="stylesheet">
<script src="flagit.js"></script>
```

Step 2: Write a ```<select>``` element like

```html
<select class="estados" style="display: none;"></select>
```

Step 3: Call the function on the HTML element ```<select>``` by class or ID

```javascript
$('.estados').flagit();
```
It will render the default settings for the ```<select>```


Step 4: Pass options

* data: Array of items
* flags: true/false - shows it or not
* ext: Extension of the image file
* placeholder: Title of the select
* path: Path for image icons

```javascript
$('.estados').flagit({
    data: [
        ['sc','sc','Santa Catarina'],
        ['sp','sp','São Paulo'],
    ],
    flags: true,
    ext: 'svg',
    placeholder: 'Estados...',
    path: 'assets/img/flags/'
});
```
