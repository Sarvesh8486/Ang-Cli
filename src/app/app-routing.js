"use strict";
//components
var main_page_component_1 = require("./main-page/main-page.component");
//guard
var auth_guard_1 = require("./login/auth.guard");
var appRoute = [
    { path: '', component: main_page_component_1.MainPageComponent, canActivate: [auth_guard_1.AuthGuard] },
];
//# sourceMappingURL=app-routing.js.map
