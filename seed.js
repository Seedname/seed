export class Canvas {
  constructor(width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    document.appendChild(canvas);
    
    const canvases = document.getElementsByTagName('canvas');
    this.canvas = canvases[canvases.length-1].getContext("2D");
    this.width = width;
    this.height = height;
    
    this.fillS = "rgba(255,255,255,1)";
    this.strokeS = "rgba(255,255,255,1)";
    this.backgroundS = "rgba(255,255,255,1)";
    this.useStroke = true;
  }
  
  background(r, g, b, a) {
    if (r && g && b) {
      let str = "rgba(" + r + "," + g + "," + b + ",";
      if(a) {
        str += a/255 + ")";
      } else {
        str += "1)"
      }
      
      this.backgroundS = str;
      this.canvas.fillStyle = str;
      this.canvas.fillRect(-1, -1, this.width, this.height);
 
      return;
    }
    this.backgroundS = "rgba(255,255,255,1)";

  }
  
  noStroke() {
    this.useStroke = false;
  }
  
  stroke(r, g, b, a) {
    this.useStroke = true;
    if (r && g && b) {
      let str = "rgba(" + r + "," + g + "," + b + ",";
      if(a) {
        str += a/255 + ")";
      } else {
        str += "1)"
      }
      this.strokeS = str;
      return;
    }
    this.strokeS = "rgba(255,255,255,1)";
  }
  
  fill(r, g, b, a) {
    if (r && g && b) {
      let str = "rgba(" + r + "," + g + "," + b + ",";
      if(a) {
        str += a/255 + ")";
      } else {
        str += "1)"
      }
      this.fillS = str;
      return;
    }
    this.fillS = "rgba(255,255,255,1)";
  }
  
  rect(x, y, w, h) {
    if(this.useStroke) {
      this.canvas.fillStyle = this.strokeS;
      this.canvas.strokeRect(x, y, w, h);
    }
    
    this.canvas.fillStyle = this.fillS;
    this.canvas.fillRect(x, y, w, h);
  }
  
}


