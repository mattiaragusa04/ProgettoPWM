import { Routes } from '@angular/router';
import {Home} from "./home/home";
import {Accessori} from "./accessori/accessori";
import {Elettronica} from "./elettronica/elettronica";
import {Console} from "./console/console";
import {Videogiochi} from "./videogiochi/videogiochi";
import {Login} from "./login/login";
import {Register} from "./register/register";
import {Carrello} from "./carrello/carrello";

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'accessori', component: Accessori},
    { path: 'elettronica', component: Elettronica},
    { path: 'console', component: Console},
    { path: 'videogiochi', component: Videogiochi},
    { path: 'login', component: Login},
    { path: 'register', component: Register},
    { path: 'carrello', component: Carrello}
];
