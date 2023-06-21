function LD(){
  
       // if(div.backgroundColor = rgb(0,0,0)){
    
        nav = document.getElementById("nav");//.style.backgroundColor = rgb(23,23,83);
        body = document.getElementById("body");
        list = nav.classList;
        arrayNav = Array.from(list);
        count = 0; 
        
        if (count==0){
            list.remove('bg-success');
            list.add('bg-dark');
            console.log('change;');
            count = count+1;
            
        }
        else if (count==1){
            list.remove('bg-dark');
            list.add('bg-danger');
            count = count+1;
          
          }  console.log('change;');
        else if (count==2){
          list.remove('bg-danger');
          list.add('bg-warning');
          count = count+ 1;
        }
        else if(count==3){
          list.remove('bg-warning');
          list.add('bg-info');
          count = count + 1;
        } 

        
       //}
       // else{
    
            //document.div.style.backgroundColor = rgb(0,0,0);
    
    //}
    }
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    