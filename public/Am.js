function LD(event){
    console.log(event);
   // if(div.backgroundColor = rgb(0,0,0)){
  
    nav = document.getElementById("nav");//.style.backgroundColor = rgb(23,23,83);

    list = nav.classList;
    arrayNav = Array.from(list)

    if (arrayNav.includes('bg-success')){
        list.remove('bg-success');
        list.add('bg-light');
    }
    else{
        list.remove('bg-light');
        list.add('bg-success')
        
    }
   //}
   // else{
      
        //document.div.style.backgroundColor = rgb(0,0,0);
    
//}
}