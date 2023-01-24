import { LightningElement, track } from 'lwc';

export default class MkDynamicPage extends LightningElement {
    @track item = {
        name: "John"
    }
    changeHandler(event){
        this.item.name = event.target.value
    }
}