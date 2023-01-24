import { LightningElement, api } from 'lwc';


export default class MkSetterChild extends LightningElement {
    item_val = 'Initial value';
    @api 
    get item(){
    }

    set item(data){
        console.log('inside the setter');
        this.item_val = data.slice(0,3);
    }
}