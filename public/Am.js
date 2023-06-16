function LD(){
  
       // if(div.backgroundColor = rgb(0,0,0)){
    
        nav = document.getElementById("nav");//.style.backgroundColor = rgb(23,23,83);
        body = document.getElementById("body");
        list = nav.classList;
        arrayNav = Array.from(list);
    
        if (arrayNav.includes('bg-success')){
            list.remove('bg-success');
            list.add('bg-dark');
            console.log('change;');
        }
        else{
            list.remove('bg-dark');
            list.add('bg-success');
            console.log('change;');
        }
       //}
       // else{
    
            //document.div.style.backgroundColor = rgb(0,0,0);
    
    //}
    }
