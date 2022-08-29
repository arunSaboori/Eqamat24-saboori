import { LitElement, css, html } from 'lit'

const get_first=()=>{
    const data = localStorage.getItem('form-data')
    if(data){
      return JSON.parse(data);
  
    }else{
      return[];
    }
  }
  
export class MyTable extends LitElement {



  

    static properties = {
        GetItems: {
            type: Array,
        },
        listTasks: {
            type: Array,
          },
    };
    constructor() {
        super();
        this.listTasks = get_first();
        this.GetItems = JSON.parse(localStorage.getItem('form-data')) || [];
       


    }


  

    static styles = css`
    aside{
        width:100vw;
        display: flex;
        justify-content: center;
    
     }
     table{
    background-color:yellow;
    border-radius: 5%;

     }
     table td{
     padding:2rem;
    }
     table th{
     padding:2rem;
    }
    
    `

    render() {
     
        const tasks = this.GetItems;

        return html`
      
            <aside> 
  
      <table>
      <thead>
        <tr>
          <th>title</th>
          <th>date</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
      ${tasks.map((data => html`
      <tr>
        <td>${data.title}</td>
        <td>${data.date}</td>
        <td>
        <button @click=${()=>this.OnClick(data)}>delete</button>
        <input type="checkbox">
    
        </td>
      </tr>
      `))}

       </tbody>
     </table>
  
     </aside>
  
     
     `
   
      
     
    }
    _setLocalStorage() {
        window.localStorage.setItem("form-data", JSON.stringify(this.GetItems));
      }
    
     OnClick(data){
    this.GetItems = this.GetItems.filter(task=>task.id !== data.id)
     this._setLocalStorage();
    
    }

}
customElements.define('my-table', MyTable)
