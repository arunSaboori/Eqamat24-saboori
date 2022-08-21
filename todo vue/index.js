const { createApp } = Vue

createApp({
    data() {
        return {
            todo: "Saboori Todolist vue.js",
            task: "/new",
            footer: "all content blong to saboori 2022 todolist app",
            title: "title",
            date: "time",
            showcreate: false,
            table: true,
            newItemone: '',
            newItemto: '',
            tits: [],
            dats:[],
            Currents:[],
      
            }
    },
    methods: {

          add(){
            const current = new Date();
            const date = current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate();
            const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
            const dateTime = date +' '+ time;

            this.tits.push(this.newItemone);
            this.newItemone='';
            this.dats.push(this.newItemto);
            this.newItemto='';
            this.Currents.push(dateTime);
             
             
             },
      }


}).mount('#app')
