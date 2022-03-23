try{
  const val = document.querySelectorAll(".mdc-text-field__input")[1];
  let clrs = [...document.querySelectorAll(".hex--label")] ;
  clrs = clrs.filter((clr, index) => { if(index != 0 && index != 10) return clr ;  }) 
  const ans = clrs.map((clr, index) => `--clr-primary-${(index+1)*100}: ${clr.textContent} ;`).join("") ;
console.log(ans) ;
  

}catch(err){
  console.log(err);
}
