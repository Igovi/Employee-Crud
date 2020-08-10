import { Component, OnInit, Input } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';
import{EmpPost} from '../empPost'
import { Router } from '@angular/router';
import { FuncionariosListagemComponent } from '../funcionarios-listagem/funcionarios-listagem.component';
import { Employee } from '../employee';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-funcionario-criar',
  templateUrl: './funcionario-criar.component.html',
  styleUrls: ['./funcionario-criar.component.css']
})
export class FuncionarioCriarComponent implements OnInit {
  //@Input() empPost = {name:'',salary:0,age:0}

  form: FormGroup;
  
  
  constructor(private funcionariosListagemComponent: FuncionariosListagemComponent,private funcionarioService: FuncionarioService, private router: Router ,   private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.maxLength(5)],
      salary: [0, Validators.required],
      age: [0,Validators.required]
    })
  }

  adicionar(){
    this.funcionariosListagemComponent.adicionar(this.form.get('name').value,this.form.get('salary').value,this.form.get('age').value);
  }

  /*criarFuncionario(){
    
    console.log(this.empPost)
    this.funcionarioService.criarFuncionario(this.empPost).subscribe((res)=>{
        console.log("Created a employee"), error => console.log(error);
    });
    this.router.navigate([''])
    
  }*/
}
