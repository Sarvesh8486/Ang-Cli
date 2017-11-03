  import { NgModule }       from '@angular/core';
  import { CommonModule }   from '@angular/common';
  import { FormsModule }    from '@angular/forms';


  //components
  import { MainPageComponent }  from './main-page.component';
  import { ChangeComponent }  from './change.component';
  import { TemplateFilterByCloudPipe } from './main-page-cloud.pipe';
  import { MainPageRoutingModule } from './main-page-routing.module';

  @NgModule({
    imports: [
      CommonModule,
      FormsModule,
      MainPageRoutingModule
    ],
    declarations: [
      MainPageComponent,
      ChangeComponent,
      TemplateFilterByCloudPipe,
    ],
  })
  export class MainPageRouting {}
