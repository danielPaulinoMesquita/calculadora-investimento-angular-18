import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);

 // bootstrapApplication(AppComponent) <- this is the older way to start
// .catch((err) => console.error(err));
