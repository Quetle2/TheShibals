function render() {

	const background = document.querySelector('#p1div');
	const body = document.querySelector('#p1frontbody') || document.querySelector('#p1backbody');
    body.innerHTML='';
    const lol = $('#p1frontbody') || $('#p1backody');
    lol.attr('id','p1leftbody');

	const item = document.createElement('div');
	item.innerHTML = `<div>
        <img id="alchemy_img" src="/resources/Alchemy_table.png">
        <img id="arrow_left" src="/resources/arrowleft.png"> 
        <img id="arrow_right" src="/resources/arrowright.png"> 						
	</div>`
	
	
	background.appendChild(item);
    body.appendChild(background);

	console.log('entrou no render');
	const button = $('#alchemy_img');
	console.log('um botao', button);
	const button2 = $('#arrow_left');
    const button3 = $('arrow_right');

	button.on('click', function(){
		console.log("hola");
		
		console.log(button.attr('src'));
		
	});
    
	

	button2.on('click', function(){
		console.log("hola");
		
		console.log(button2.attr('src'));
		
	});
    button3.on('click', function(){
		console.log("hola");
		
		console.log(button33.attr('src'));
		
	});
}

export default { render };