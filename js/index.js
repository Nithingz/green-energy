

const btns = document.querySelectorAll('.controls button'); // event target object

const newContent = document.querySelector('.new-content');

// event handler

function addContent(ev){
    
    let clickedButton = ev.target;
    
    for(let btn of btns){
        if(btn.hasAttribute('id')){
            
            btn.removeAttribute('id');
        }
    }
   
    clickedButton.id='active';
    
    if(clickedButton.value === 'c1'){
       
        newContent.innerHTML=`<figure class="newContent">
                                <img src="img/biomass.jpg" alt="Biomass Energy"/>
                             </figure>
                             <p>This is the conversion of solid fuel made from plant materials into electricity. Although fundamentally, biomass involves burning organic materials to produce electricity, 
                             this is not burning wood, and nowadays this is a much cleaner, more energy-efficient process. By converting agricultural, industrial and domestic waste into solid, liquid and 
                             gas fuel, biomass generates power at a much lower economical and environmental cost.</p>`;       
        
       
    } else if(clickedButton.value === 'c2'){
        
        newContent.innerHTML=`<figure class="newContent">
                                <img src="img/g-thermal.jpg" alt="Geo-thermal Energy"/> 
                             </figure>
                             <p>By harnessing the natural heat below the earth’s surface, geothermal energy can be used to heat homes directly or to generate electricity. Although it harnesses 
                             a power directly below our feet, geothermal energy is of negligible importance in the UK compared to countries such as Iceland, where geothermal heat is much more 
                             freely available.</p>`; 
    } else {
        
         newContent.innerHTML=`<figure class="newContent">
                                <img src="img/hydro.jpg" alt="Hydro Energy"/>  
                             </figure>
                             <p>As a renewable energy resource, hydro power is one of the most commercially developed. By building a dam or barrier, a large reservoir can be used to create a 
                             controlled flow of water that will drive a turbine, generating electricity. This energy source can often be more reliable than solar or wind power 
                             and also allows electricity to be stored for use when demand reaches a peak. </p>`; 
    }
    
    
}


for(let btn of btns){
  btn.addEventListener('click', addContent);
}
