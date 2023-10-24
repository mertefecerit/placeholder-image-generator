export default class PlaceholderImageGenerator
{
  #width;
  #height;
  #bgColor;
  #textColor;
  #text;
  #canvas;
  #ctx;
  #dataUrl;
  constructor(){
    this.#width = null;
    this.#height = null;
    this.#bgColor = null;
    this.#textColor = null;
    this.#text = null;
    this.#canvas = document.createElement('canvas');
    this.#ctx = this.#canvas.getContext('2d');
    this.#dataUrl = null;
  }

  #_generate(){
    this.#canvas.width = this.#width;
    this.#canvas.height = this.#height;
    return this;
  }

  #_drawBackground(){
    this.#ctx.fillStyle = this.#bgColor;
    this.#ctx.fillRect(0, 0, this.#width, this.#height);
  }

  #_drawText(){
    this.#ctx.fillStyle = this.#textColor;
    this.#ctx.font = '2rem Arial';
    this.#ctx.textAlign = 'center';
    this.#ctx.textBaseline = 'middle';
    this.#ctx.fillText(this.#text, this.#width/2, this.#height/2);
  }

  #_invertColor(hex){
    return (Number(`0x${hex}`) ^ 0xFFFFFF).toString(16).padStart(6, '0');
  }
  #_getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '';
    for (let i=0; i<6; i++){
      color += letters[Math.floor(Math.random()*16)];
    }
    this.#bgColor = '#'+color;
    this.#textColor = '#'+this.#_invertColor(color);
  }

  #_makeUrl(){
    return this.#canvas.toDataURL('image/png');
  }
  setText(text= ' ', length = text.length){
    if (text) this.#text = text.split('').slice(0, length).join('').toLocaleUpperCase();
    else this.#text = ' ';
    return this;
  }
  setDimensions(width=300, height=300){
    this.#width = width;
    this.#height = height;
    return this;
  }

  draw(){
    if (!this.#width && !this.#height) throw new Error('You need call first _setDimensions method and set the width and height or leave empty');
    if (!this.#text) throw new Error('You need call first _setText method and set the text or leave empty');
    this.#_getRandomColor();
    this.#_generate();
    this.#_drawBackground();
    this.#_drawText();
    return this.#_makeUrl();
  }
}