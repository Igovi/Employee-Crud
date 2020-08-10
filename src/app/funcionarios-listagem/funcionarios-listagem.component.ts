import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';
import{Employee} from '../employee'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-funcionarios-listagem',
  templateUrl: './funcionarios-listagem.component.html',
  styleUrls: ['./funcionarios-listagem.component.css']
})
export class FuncionariosListagemComponent implements OnInit {

  funcionarios: Array<Employee>;
  id = 0;  
  form: FormGroup;
  
  
  

  constructor( private formBuilder: FormBuilder, private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.maxLength(30), Validators.required]],
      salary: [0,[Validators.min(0),Validators.max(999000), Validators.required]],
      age: [0,[Validators.min(0),Validators.max(120),Validators.required]]
    })
    this.listar();
    this.id = 24
  }

  listar(){
    this.funcionarioService.listar().subscribe(dados => this.funcionarios = dados)
  }
  adicionar(name:string,salary:number,age:number){
    this.id += 1;
    const funcionario = new Employee
    funcionario.id = this.id;
    console.log(name,salary,age)
    funcionario.employee_name = name;
    funcionario.employee_salary = salary;
    funcionario.employee_age = age;
    console.log(funcionario)
    this.funcionarios.push(funcionario)
  }
  editar(id){
    for(let i = 0; i < this.funcionarios.length; ++i){
      if (this.funcionarios[i].id === id) {
          const nameEl = document.getElementById("funcaName");
          const ageEl = document.getElementById("funcAge");
          const salaryEl = document.getElementById("funcSalary")
          ageEl.style.backgroundColor = "lightgray"
          nameEl.style.backgroundColor = "lightgray"
          salaryEl.style.backgroundColor = "lightgray"
          ageEl.contentEditable = "true"
          nameEl.contentEditable = "true"
          salaryEl.contentEditable = "true"
      }
    }
  }

  salvar(id){
    for(let i = 0; i < this.funcionarios.length; ++i){
      if (this.funcionarios[i].id === id) {
          const nameEl = document.getElementById("funcaName");
          const ageEl = document.getElementById("funcAge");
          const salaryEl = document.getElementById("funcSalary")
          ageEl.style.backgroundColor = ""
          nameEl.style.backgroundColor = ""
          salaryEl.style.backgroundColor = ""
          ageEl.contentEditable = "false"
          nameEl.contentEditable = "false"
          salaryEl.contentEditable = "false"
      }
    }

  }

  deletar(id){
    for(let i = 0; i < this.funcionarios.length; ++i){
      if (this.funcionarios[i].id === id) {
          this.funcionarios.splice(i,1);
          
      }
  }
  this.funcionarioService.deletar(id).subscribe(res => console.log(res));
  }
}
