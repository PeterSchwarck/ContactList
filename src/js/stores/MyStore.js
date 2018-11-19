import Flux from "@4geeksacademy/react-flux-dash";

class MyStore extends Flux.DashStore{
    constructor(){
        super();
        this.addEvent("contacts", (data)=> {
            if(!Array.isArray(data)) return data;
            
            const contacts = data.map((c) => {
                if(typeof c.id == 'undefined')
                c.id = Math.floor(Math.random() * 99999999);
                return c;
            });
            return contacts;
        });
    }
}
export default new MyStore();