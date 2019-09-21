import {Routes} from "@angular/router";
import {PingComponent} from "../components/ping/ping.component";
import {CleanScreenComponent} from "../components/clean-screen/clean-screen.component";


export const appRoutes: Routes = [
  { path: 'ping', component: PingComponent},
  { path: 'clean-screen', component: CleanScreenComponent}
];
