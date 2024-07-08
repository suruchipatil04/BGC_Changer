function changeColor(clr) {
    document.body.style.backgroundColor =clr;
    
    let txt=document.getElementsByClassName("txt");
    if(clr == "black" || clr =="indianred")
    {
          for(let ele of txt)
            {
               ele.style.color="white"  
            }
    }
    else
    {
        for(let ele of txt)
            {
               ele.style.color="black"  
            }
    }
}
