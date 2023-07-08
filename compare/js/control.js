lang_1='Java'
lang_2='Python'

is_right_side=false
function set_side(lang) {
	is_right_side=lang==lang_2
	if (concept){
		concept=concept.parentElement.children[0+is_right_side]
	}
}
function end_side(){
	expandAll()
}

concept=null
snippet=null
function set_concept(name){
	concept=document.getElementById(name).children[0+is_right_side]
}
function begin_snippet(){
	snippet=document.createElement('div')
	snippet.classList.add('snippet')
	concept.appendChild(snippet)
}
function add_line(text, indent=0){
	if(snippet){
		var elm=document.createElement('div')
		if (indent!=0){
			elm.classList.add('indent')
			if (indent>1) {
				elm.style.setProperty('--indents',indent)
			}
		}
		var parts=text.split('%')
		for (var i = 0; i < parts.length;) {
			add_highlighted_text(parts[i],elm)
			i++
			if (parts[i]=='var'){
				i++
				var v=document.createElement('var')
				v.textContent=parts[i]
				setup_hoverable(v)
				elm.appendChild(v)
				i++
			}else if (parts[i]=='cb'){
				i++
				var cb=document.createElement('span')
				cb.classList.add('code_block')
				cb.textContent=parts[i]
				setup_hoverable(cb)
				elm.appendChild(cb)
				i++
			}else if (parts[i]=='h'){
				i++
				var h=document.createElement('i')
				h.classList.add(parts[i])
				i++
				h.textContent=parts[i]
				elm.appendChild(h)
				i++
			}
		}
		snippet.appendChild(elm)
	}else{
		var elm=document.createElement('p')
		elm.textContent=text
		concept.appendChild(elm)
	}
}
function end_snippet(){
	snippet=null
}

function setup_lang_header(){
	document.getElementById("lang_1").textContent=lang_1
	document.getElementById("lang_2").textContent=lang_2
}
function create_concept_pair(id){
	var elm=document.createElement('div')
	elm.id=id
	elm.classList.add('concept_pair')
	elm.classList.add('split')
	document.getElementById('compare').lastElementChild.lastElementChild.appendChild(elm)
	var elm1=document.createElement('div')
	elm1.classList.add('concept')
	elm.appendChild(elm1)
	var elm2=document.createElement('div')
	elm2.classList.add('concept')
	elm.appendChild(elm2)
}

function create_topic(text) {
	let elm=document.createElement('div')
	elm.classList.add('topic')
	elm.classList.add('collapsable')
	elm.id=text
	let header=document.createElement('h3')
	header.textContent=text
	elm.appendChild(header)
	let content=document.createElement('div')
	content.classList.add('collapsable_content')
	elm.appendChild(content)
	document.getElementById('compare').appendChild(elm)
	add_collapse_button(header)
}
function create_header(text, id){
	let elm=document.createElement('h4')
	elm.textContent=text
	elm.id=text
	document.getElementById('compare').lastElementChild.lastElementChild.appendChild(elm)
	create_concept_pair(id)
}

function setup_hoverable(element){
	element.onmouseenter=hoverable_enter
	element.onmouseout=hoverable_exit
	element.classList.add('hoverable_'+element.textContent.replaceAll(' ','-'))
}
function hoverable_enter(event){
	let parent=event.target
	while (parent&& !parent.classList.contains('concept_pair')) {
		parent=parent.parentElement
	}if(!parent){parent=document}
	for (var i of parent.getElementsByClassName('hoverable_'+event.target.textContent.replaceAll(' ','-'))) {
		i.classList.add('hover_var')
	}
}
function hoverable_exit(event){
	let parent=event.target
	while (parent&& !parent.classList.contains('concept_pair')) {
		parent=parent.parentElement
	}if(!parent){parent=document}
	for (var i of parent.getElementsByClassName('hoverable_'+event.target.textContent.replaceAll(' ','-'))) {
		i.classList.remove('hover_var')
	}
}

function add_js_file(path){
	var elm=document.createElement('script')
	elm.src=path
	document.getElementsByTagName('body')[0].appendChild(elm)
}
add_js_file('./language/'+lang_1+'.js')
add_js_file('./language/'+lang_2+'.js')
