import { makeAutoObservable, runInAction } from "mobx"

interface newTodo {
   id: Number
   title: String
   completed: Boolean
}

class Todo {
   array = [
      { id: 1, title: "1234", completed: false },
 ]
   current: String = 'all'

   todos = this.array

   constructor() {
      makeAutoObservable(this)
   }

   sortedTodo = (select: String) => {
      if (select === 'all') {
         runInAction(() => {
            return this.todos = this.array
         })

      }
      if (select === 'process') {
         runInAction(() => {
            this.todos = this.array
            return this.todos = this.todos.filter(todo => todo.completed === false)
         })

      }
      if (select === 'end') {
         runInAction(() => {
            this.todos = this.array
            return this.todos = this.todos.filter(todo => todo.completed === true)
         })
      }
   }

   addTodo(todo: newTodo | any) {
      runInAction(() => {
         this.array.push(todo)
         this.sortedTodo(this.current)
      })
   }

   removeTodo(id: Number) {
      runInAction(() => {
         this.array = this.array.filter(todo => todo.id !== id)
         this.sortedTodo(this.current)
      })
   }

   completedTodo(id: Number) {
      runInAction(() => {
         this.array = this.array.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
         this.sortedTodo(this.current)
      })

   }

}
export default new Todo()