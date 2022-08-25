import React from "react";


const Create =()=>{

return(
    <div>
 
        <div class="style" id="createPage">
            <div class=".style2 w-50">
              <h2 class="m-4">CREATE TASK</h2>
              <label for="title">title</label>
              <input type="text" id="title" class="form-control m-3" v-model="newItemone" required placeholder="add title"/>
              <label for="time">date</label>
              <input type="date" id="time" class="form-control m-3" v-model="newItemto" required placeholder="add date"/>
               <p v-model="newItemtree"></p>
              <button class="btn btn-warning w-25 m-3" >submit</button>
              </div>
           </div>

 
    </div>
)

}



export default Create;