function render() {
    console.log("riiiight");
	const background = document.querySelector('#p1div');
	const body = document.querySelector('#p1frontbody') || document.querySelector('#p1backbody');
    body.innerHTML='';
    const lol = $('#p1frontbody') || $('#p1backbody');
    lol.attr('id','p1rightbody');

	const item = document.createElement('div');

	item.innerHTML = `<div>
        <img id="books_img" src="/resources/oldbooks.png"> 
        
        <img id="arrow_left" src="/resources/arrowleft.png"> 
        <img id="arrow_right" src="/resources/arrowright.png"> 						
	</div>`
	
	background.appendChild(item);
    body.appendChild(background);

	console.log('entrou no render');
	const button = $('#books_img');
    
	console.log('um botao', button);
    const button3 = $('#arrow_left');
    const button4 = $('arrow_right');
	

	button.on('click', function(){
		console.log("hola");
		
		console.log(button.attr('src'));
		
	});
   
    button3.on('click', function(){
		console.log("hola");
		
		console.log(button3.attr('src'));
		
	});
    button4.on('click', function(){
		console.log("hola");
		
		console.log(button4.attr('src'));
		
	});
}

export default { render };