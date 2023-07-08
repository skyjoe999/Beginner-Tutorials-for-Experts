syntax_list_1={}
syntax_list_2={}
function add_syntax(cls,re){
	syntax_list=is_right_side?syntax_list_2:syntax_list_1
	if(syntax_list[cls]){
		syntax_list[cls]=syntax_list[cls].concat(new RegExp(re, re.flags + 'g'))
	}else{
		syntax_list[cls]=[new RegExp(re, re.flags + 'g')];
	}
}
function add_highlighted_text(text,elm){
	var syntax_list=is_right_side?syntax_list_2:syntax_list_1

	for (var rel in syntax_list) {
		for (var i = 0; i < syntax_list[rel].length; i++) {
			text=text.replace(syntax_list[rel][i],'%h%'+rel+'%$&%')
		}
	}
	var parts=text.split('%')
	for (var i = 0; i < parts.length;) {
		elm.appendChild(document.createTextNode(parts[i]))
		i++
		if (parts[i]=='h'){
			i++
			var h=document.createElement('i')
			h.classList.add(parts[i])
			i++
			h.textContent=parts[i]
			elm.appendChild(h)
			i++
		}
	}
}
