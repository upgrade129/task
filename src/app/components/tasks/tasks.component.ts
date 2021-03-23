import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task } from '../../module/task/task.module'
import { resetFakeAsyncZone } from '@angular/core/testing';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks : Task[]
  intitle = ""
  Edit=false
  EditId
  EditUserId

  floatLabelControl = new FormControl('auto');

  constructor(private Taskservice : TaskService) { }

  ngOnInit(): void {
    this.tasks = this.Taskservice.getTasks();
    console.log("tasks",this.tasks)
  }
  
  colorchange(taskstatus){
    if(taskstatus){
      return{
        'bg-comp': true
      }
    }
    else{
      return{
        'bg-ncomp':true
      }
    }
  }

  onToggle(id){
    this.tasks =this.Taskservice.completeTask(id)
    console.log("id-",id,"tasks-",this.tasks)
  }  
  
  onDelete(id){
    this.tasks=this.Taskservice.deleteTask(id)
    console.log("delete",id)
  }

  onEdit(task){
    console.log("edittask",task)
    this.intitle = task.title
    this.Edit=true
    this.EditUserId=task.userId
    this.EditId = task.id
  }

  EditorAdd(tit,comp){
    console.log(this.Edit)
    if(this.Edit){
      this.edit(tit,comp)
    }
    else{
      this.add(tit,comp)
    }
    this.reset()
  }

  reset(){
    this.intitle = ""
  }

  edit(tit,comp){
    let Edit = {
        "userId": this.EditUserId,
        "id": this.EditId,
        "title": tit,
        "completed": comp
      
    }
    this.Taskservice.editTask(Edit)
    this.Edit = false
  }
  

  add(tit,comp){
    let id = this.tasks.length + 1
    console.log("add",tit,"comp",comp)
    let  check = false
    let addtask
    if(comp)
    {
      check=true
    }
    if(check){
      addtask =[
        {
          "userId":1,
          "id":id,
          "title":tit,
          "completed":true
        }
      ]

      this.tasks = [...this.tasks,...addtask]
      console.log("check1",this.tasks);
      
    }
    else{
      addtask =[
        {
          "userId":1,
          "id":id,
          "title":tit,
          "completed":false
        }
      ]
      this.tasks = [...this.tasks,...addtask]
      console.log("check2 ",this.tasks);
      
    }
    console.log("addtask",addtask[0].id)
    this.Taskservice.updateTask(this.tasks)
    
  }

}
