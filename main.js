function preload() {
    classifier = ml5.imageClassifier('DoodleNet') ;
    }; 
    
    function setup() {
    
        Canvas = createCanvas(300 ,300);
        Canvas.center() ; 
        background("white") ; 
         canvas.mouseRealesed(classifyCanvas); 
         synth = window.speechSynthesis ;
    }
    
    function clearcanvas() {
    
        background("white") ;
    } 