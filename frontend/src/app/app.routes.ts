import { Routes } from '@angular/router';
import {Home} from "./home/home";
import {Prodotti} from "./prodotti/prodotti";
import {Login} from "./login/login";
import {Register} from "./register/register";
import {Carrello} from "./carrello/carrello";

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'categoria/:nome', component: Prodotti},
    { path: 'login', component: Login},
    { path: 'register', component: Register},
    { path: 'carrello', component: Carrello}
];
