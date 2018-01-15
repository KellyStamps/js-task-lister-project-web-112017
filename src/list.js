/*
list is responsible for creating a single list component
*/
const List = (() => {
  let id = 1
  return class List {
    constructor(title) {
      //your code here
      // NOTE: How can we use the private id variable to auto increment list ids🤔?

      if (title) {
        this.title = title;
      } else {
        throw "Title cannot be blank."
      }

      this.id = id++;
    }

  makeList () {

    let listView = document.getElementById('lists')
    let dropDown = document.getElementById('parent-list')
    //list container

    let newListTitle = document.getElementById('new-list-title').value
    //input from form

    let newListDeleteButton = document.createElement('button')
    newListDeleteButton.innerText = 'X'
    newListDeleteButton.className = 'delete-list'
    newListDeleteButton.setAttribute('data-id', this.id)

    let newListTasks = document.createElement('ul')
    newListTasks.setAttribute('data-id', this.id)

    let newListOption = document.createElement('option')
    newListOption.innerText = this.title
    newListOption.setAttribute('data-id', this.id)

    let newListDiv = document.createElement('div')
    newListDiv.className = 'list'
    newListDiv.id = this.id

    let newListH2 = document.createElement('h2')
    newListH2.innerText = this.title

    dropDown.append(newListOption)
    newListH2.prepend(newListDeleteButton)
    newListH2.append(newListTasks)
    newListDiv.append(newListH2)
    listView.append(newListDiv)

  }
}

})()
