import { LitElement, css, html } from 'lit'
import '../src/indexTable'
const get_first=()=>{
  const data = localStorage.getItem('form-data')
  if(data){
    return JSON.parse(data);

  }else{
    return[];
  }
}
export class MyElement extends LitElement {






  static properties = {
    listTasks: {
      type: Array,
    },
  };


  constructor() {
    super();
    this.listTasks = get_first();
    console.log(this.listTasks);
  }

  static styles = css`
  input{
    width:200px;
    height:40px;
    margin:.5rem;
    border-top: 0px;
     border-left: 0px;
     border-right: 0px;
  
    }
    button{
      width:150px;
      height:40px;
      border-radius: 5px;
      border:none;
 
  
    }
    button:hover{
      background-color: red;
         box-shadow: 10px 9px;
        transition: .5s;

 
    }
    button:active{
      background-color: yellow;
      color:white;
    }
   

`;

  render() {
    return html`
 <form @submit=${this.addTask}> 
  <input type="text" name="title" id="title" >
  <input type="date" name="date" id="date">
  <button type="submit">okay</button>
  </form>
   `

  }
  get title() {
    return this.renderRoot?.querySelector("#title") ?? null;
  }
  get date() {
    return this.renderRoot?.querySelector("#date") ?? null;
  }
  _setLocalStorage() {
    window.localStorage.setItem("form-data", JSON.stringify(this.listTasks));
  }
  addTask(e) {
    e.preventDefault();

    if (this.title.value == "" || this.date.value == "") {
      return undefined;
    } else {
      console.log(this.title.value)
      this.listTasks = [
        ...this.listTasks,
        {
          id: Date.now(),
          title: this.title.value,
          date:this.date.value,
          completed: false,
        },
      ];
      this.title.value = "";
      this.date.value = "";
      this._setLocalStorage();
    }
  }
}
customElements.define('my-power', MyElement)










  