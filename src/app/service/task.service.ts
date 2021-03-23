import { Injectable } from '@angular/core';
import { Task } from '../module/task/task.module';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})



export class TaskService {
  constructor( private http:HttpClient) { }

  TaskData :Task[]= [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "userId": 1,
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "userId": 1,
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    }]

    getTasks(){
      console.log("getTasks", this.TaskData)
      return this.TaskData
    }

    editTask(etask){
      for(let i in this.TaskData){
        if(etask.id == this.TaskData[i].id){
          this.TaskData[i] = etask
          break
        }
      }
      return(this.TaskData)
    }

    deleteTask(id){
      for(let i in this.TaskData){
        if(id == this.TaskData[i].id){
          let x : number =+ i
          this.TaskData.splice(x,1)
          break
        }
      }
      return(this.TaskData)
    }

    completeTask(id){
      for(let i in this.TaskData){
        if(id == this.TaskData[i].id){
          this.TaskData[i].completed = !this.TaskData[i].completed
        }
      }
      return(this.TaskData)
    }

    updateTask(utask){
      this.TaskData=utask
    }

    getTaskFromHttp(){
      let url= "https://jsonplaceholder.typicode.com/todos?_limit=2"
      return(this.http.get(url))
      
    }

  
}
