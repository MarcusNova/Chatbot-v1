import { Component } from "@angular/core";

@Component({
    templateUrl: './chatbot.component.html',
    styleUrls: ['./chatbot.component.css'],
    selector: 'app-chatbot-selectop'
})
export class ChatBotComponent {
    messages = [
        {
            text: 'Hola de nuevo ✌️',
            by: 'system'
        },
        {
            text: '¿En que te puedo ayudar hoy?',
            by: 'system'
        }
    ]
    actualMessage: string = '';

    submit() {
        console.log("El usuario ingreso el mensaje", this.actualMessage);
        this.messages.push(
            {
                text: this.actualMessage,
                by: 'user'
            },
            {
                text: 'Lorem ipsum',
                by: 'system'
            }
        )
        this.actualMessage = '';
    }
}