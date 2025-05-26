import {FormsModule} from "@angular/forms";
import {UserInputComponent} from "./user-input.component";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [UserInputComponent],
  imports: [FormsModule],
  exports: [UserInputComponent]
})
export class UserInputModule {

  // This module is another alternative for organizing your components
  // remember to declare exports: into metadata NgModule
}
