function add_collapse_button(header){
	let elm=document.createElement('span')
	elm.classList.add('collapse_btn')
	elm.addEventListener('click',(event)=>{collapse_toggle(event.target.parentElement)})
	header.appendChild(elm)
}
function collapse_toggle(container){
	while (container&& !container.classList.contains('collapsable')) {
		container=container.parentElement
	}if(!container){container=document}
	if (container.classList.contains('collapsed')){expand(container)}
	else {collapse(container)}
}
function collapse(container){
	while (container&& !container.classList.contains('collapsable')) {
		container=container.parentElement
	}if(!container){container=document}
	content=container.getElementsByClassName('collapsable_content')[0]
	content.style.maxHeight = null;
	container.classList.add('collapsed')
}
function expand(container){
	while (container&& !container.classList.contains('collapsable')) {
		container=container.parentElement
	}if(!container){container=document}
	content=container.getElementsByClassName('collapsable_content')[0]
	content.style.maxHeight = content.scrollHeight + "px";
	container.classList.remove('collapsed')
}

function collapseAll(element=document){
	for (var i of element.getElementsByClassName('collapsable')) {collapse(i)}
}
function expandAll(element=document){
	for (var i of element.getElementsByClassName('collapsable')) {expand(i)}
}
