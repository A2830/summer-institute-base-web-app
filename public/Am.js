function LD(){
  
   // if(div.backgroundColor = rgb(0,0,0)){
  
    nav = document.getElementById("nav");//.style.backgroundColor = rgb(23,23,83);
    text = document.getElementById
    list = nav.classList;
    arrayNav = Array.from(list)
    var count = 0
    if (count==0){
        list.remove('bg-success');
        list.add('bg-light');
        list.remove('nav-bar light');
        list.add('nav-bar dark');
        count+=1
    }
    else if(count==1){
        list.remove('bg-light');
        list.add('bg-warning');
        count+=1;
        
    }
    else if(count==2){
        list.remove('bg-warning');
        list.add('bg-danger');
        count +=1;
//navbar light
    }
    else if(count==3){
        list.remove('bg-danger');
        list.add('bg-dark');
        count = 0;
    }
   //}
   // else{
      
        //document.div.style.backgroundColor = rgb(0,0,0);
    
//}
}