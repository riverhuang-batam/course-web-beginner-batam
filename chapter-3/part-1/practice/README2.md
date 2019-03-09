# Practice 5 (todo list app) part 2

we want to build simple todo list app

as user
1. i can add todo so it can saved to database
2. i can see what todo that i've got
3. i can edit each todo list
4. i can delete each todo list

---

## Version 2 (Local Intreactive)

* When user type on inputed and press button add, the inputed will clear.
* When list is load, first initial is no data then after it's loaded it will add list item.

---

## Todo

* on `AddTodo/index.js`. when user type on input and button clicked, the input typed by user will be gone.
  
* on `ListTodo/index.js`. the view is empty and load / shows list by variable array of lists using state. the array will be like this.
  ```js
  [{
      id: 1,
      todo: "Buy T-Shirt"
  }, {
      id: 2,
      todo: "Buy Read Bull"
  }, {
      id: 3,
      todo: "Do Laundry"
  }]
  ```

  The array data will be loop with `map` array function to produce `li` tag HTML
  
## [Version 3](./README3.md)