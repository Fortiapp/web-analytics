"use strict";

class PostController {
  show() {
    this.name = 'Steve';
    return [
      {
        a: this.name,
        b: 222
      },
      {
        a: 434444,
        b: 1111
      }
    ];
  }
}

module.exports = PostController;
