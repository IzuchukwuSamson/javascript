const myList = document.getElementById('myList');

class ListBinding {
  constructor(element) {
    this.listElement = element;
    this.textList = ['Bottle', 'decode'];
  }

  static createListItem(text) {
    const li = document.createElement('li');
    li.textContent = text;

    return li;
  }

  update() {
    /**  Remove all existing <li> elements*/

    while (this.listElement.firstChild) {
      this.listElement.removeChild(this.listElement.firstChild);
    }

    /** Fill the <ul> tag with <li>  */
    for (const text of this.textList) {
      this.listElement.appendChild(ListBinding.createListItem(text));
    }
  }

  add(text) {
    this.textList.push(text);
    this.update();
  }

  remove(index) {
    this.textList.splice(index, 1);
    this.update();
  }
}

const listBinding = new ListBinding(myList);
