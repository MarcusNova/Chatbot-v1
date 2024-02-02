import { Component } from "@angular/core";

@Component({
    templateUrl: './chatbot.component.html',
    styleUrls: ['./chatbot.component.css'],
    selector: 'app-chatbot-selectop'
})
export class ChatBotComponent {
    startMessages = [        
        {
            text: 'Hola de nuevo ✌️',
            by: 'system'
        },
        {
            text: '¿En que te puedo ayudar hoy?',
            by: 'system'
        }
    ]
    messages = [...this.startMessages]
    pastConversation: any[] = [];
    actualMessage: string = '';
    systemMessage: string = '';
    showIndicator: boolean = false;
    readonly SESSION_KEY = 'conversation';
    
    ngOnInit() {
        const getPastConversation = window.sessionStorage.getItem(this.SESSION_KEY)
        if (getPastConversation) {
            const toParse = JSON.parse(getPastConversation);
            this.pastConversation = [...toParse];
        }
     }

    keyUpHandler() {
        this.showIndicator = true;
    }

    submit() {
        console.log("El usuario ingreso el mensaje", this.actualMessage);
        this.messages.push(
            {
                text: this.actualMessage,
                by: 'user'
            }        
        )
        this.actualMessage = '';
        this.systemMessage = 'respondiendo...'
        setTimeout(() => {
            this.showIndicator = false;
            this.systemMessage = '';
            this.messages.push({
                text: 'LOREM',
                by: 'system'
            })
        }, 1000)
    }
    clear() {
        this.messages = [
            ...this.startMessages
        ]
        this.actualMessage = '';
    }
    save() {
        window.sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(this.messages))
    }
    setConversation() {
        if (this.pastConversation.length > 0) {
            this.messages = [...this.pastConversation]
        }
    }
}