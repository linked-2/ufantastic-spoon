import { LightningElement, api } from 'lwc';

export default class HelloWorld extends LightningElement {

    target = 'World';

    str = 'Hello I am a string!';
    arr = ['a', 'b', 'c', ];
    obj = {
        name: 'Matt', 
        height: '6\' 0\"'
    }
    bool = false;

    conditional = "";

    players = [
        {
            name : 'John Macintosh',
            age: '21',
            height:`6'4"`
        },
        {
            name : 'Cheryl Quandry',
            age: '24',
            height:`5'7"`
        },
        {
            name : 'Michael Jameson',
            age: '22',
            height:`6'1"`
        },
    ]
    changeHandler(event){
        this.conditional = event.target.value;
    }
    get addition() {
        return 2 + 2; 
    }
    get firstPlayerName(){
        return this.players[0].name;
    }
    
}