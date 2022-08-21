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
        }
    },
    methods: {
          add(){
            this.tits.push(this.newItemone);
            this.newItemone='';
            this.dats.push(this.newItemto);
            this.newItemto='';
        
          }
    }


}).mount('#app')
