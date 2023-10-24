# Placeholder Image Generator
This vue plugin generates placeholder images of any size and color.

## 1. Installation
 - `npm i placeholder-image-generator`



## 2. Usage
 - for vanilla js
```js
import PlaceholderImageGenerator 
  from "placeholder-image-generator/PlaceholderImageGenerator.js"

const phig = new PlaceholderImageGenerator();
phig.setDimensions(100,100).setText('Example',2).draw();
// setText() => 1. param: text, 2. param: length output "EX"
```
 - for vue plugin
```js
import placeholderImageGenerator 
  from "placeholder-image-generator"

app.use(placeholderImageGenerator);

// in vue component (script setup)
const phig = inject('phig');
//or under window object
phig.setDimensions(100,100).setText('Example',2).draw();
//or src directive
```
```vue
<img :src="$phig.setDimensions(100,100).setText('Example',2).draw()" alt=""></img>
```
## 3. Note
 - return value (data:image/png;base64)
 - setDimensions() method is required and parameter is optional (default: 300x300)
 - setText() method is required and parameter is optional (default: ' ')
 - draw() method is required

## 4. Example
![exampleImage](./example.png)