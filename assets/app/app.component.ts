import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    message = {
        content: 'This is a message content.',
        author: 'Amit'
    }
}