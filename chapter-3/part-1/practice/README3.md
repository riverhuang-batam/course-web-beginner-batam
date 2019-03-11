# Practice 5 (todo list app) part 3

we want to build simple todo list app

as user
1. i can add todo so it can saved to database
2. i can see what todo that i've got
3. i can edit each todo list
4. i can delete each todo list

---

## Version 3 (Intreactive with backend)

* When first time show, `ShowList` Component will get all `todoList` to backend API.
* When button add press, it will send `AddList` input data to backend API and saved. Then will return to web app is it success or fail. if success will added to `ShowList` component
* When button edit is presss. will show `window.prompt` where we can change value. When press ok will sent to backend API to be saved on database.
* When button delete is press. will show confirmation using `window.confirm`. it will send to backend API to delete that item. Then will return to `ShowList` is it success or fail. if success then will be removed on `ShowList` 

---

## Todo

### json-server
* install [`json-server`](./../../../modules/json-server-1/README.md). set `db.json` file with JSON where key is `cart` and the value is empty array
* start json-server

### AddList component
* add a state
* add `onChange` event on input and when changed the state is changed
* add `onClick` event on add button, when clicked will send state to backend API. Sending to backend API use axios. return from backend API will be succcess or fail. If success will empty input.
  
### ShowList component
* When first time load will empty the list. After that will load data from backend API. so the static array will be removed