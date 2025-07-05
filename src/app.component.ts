import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MobfooterComponent } from "./app/pages/landing/components/mobfooter/mobfooter.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, MobfooterComponent],
    template: `<router-outlet></router-outlet>
    <app-mobfooter> </app-mobfooter>
    `
})
export class AppComponent {


}
