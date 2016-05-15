class Element {
  constructor(properties) {
    this._node = document.createElement(properties.tag);
    this.className = properties.className;
    this.id = properties.id;
    this.html = properties.html;
    this.eventListener = properties.eventListener;
    this.append(properties.children || []);
  }

  append(els) {
    els.forEach((el) => {
      this._node.appendChild(el.node);
    });
  }

  set id(id) {
    if (id) {
      this._node.id = id;
    }
  }

  set className(className) {
    if (className) {
      this._node.className = className;
    }
  }

  set html(html) {
    if (html) {
      this._node.innerHTML = html;
    }
  }

  set eventListener(callback) {
    if (callback) {
      this._node.addEventListener('click', callback);
    }
  }

  get node() {
    return this._node;
  }
}

export default Element;
