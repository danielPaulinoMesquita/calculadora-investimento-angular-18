import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {InvestmentResultsComponent} from "./investment-results/investment-results.component";
import {BrowserModule} from "@angular/platform-browser";
import {UserInputModule} from "./user-input/user-input.module";

@NgModule({
  imports: [BrowserModule, UserInputModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    InvestmentResultsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  // BrowserModule here there many modules, including CurrencyPipe
  // 'bootstrap' is essential for recognizing the components from declarations
  // after change metadata bootstrap, you need to change the main.ts
}
