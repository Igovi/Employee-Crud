import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule, FormBuilder} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncionariosListagemComponent } from './funcionarios-listagem/funcionarios-listagem.component';
import{FuncionarioService} from './funcionario.service';
import { FuncionarioCriarComponent } from './funcionario-criar/funcionario-criar.component';
import {VmessageComponent} from './vmessage/vmessage.component'




@NgModule({
  declarations: [
    AppComponent,
    FuncionariosListagemComponent,
    FuncionarioCriarComponent,
    VmessageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [FuncionarioService , FuncionariosListagemComponent , FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
