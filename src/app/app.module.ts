import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CoursesComponent } from "./courses.component";
import { CoursesService } from "./courses.service";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, CoursesComponent ],
  bootstrap: [AppComponent],
  providers: [CoursesService]
})
export class AppModule {}
