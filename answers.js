<!--1번-->
function answer_1() {
  document.getElementById("q1-answer").innerHTML = "<ul><li>D - Document</li><li>O - Object</li><li>M - Model</li></ul>";
}

<!--2번-->
function answer_2(){
   document.getElementById("q2-answer").innerHTML = "<ol><li>It can change HTML(Elements, Attributes, CSS style) by accessing DOM</li><li>It can react to events happening(such as button click) in a page.</li></ol>";
}
<!--3번-->
t=document.getElementsByClassName("q34-answer");

function answer_3(){
   t[0].innerHTML="<ol><li>Parent node is a node directly above a node</li><li>Child nodes are nodes one level directly below</li><li>Sibling nodes are nodes at the same level on the understanding that parent node is same </li><li>Descendant nodes are a set of nodes any number of levels below another node</li><li>Ancestor nodes are a set of nodes above a node in a tree</li></ol>";
}

<!--4번-->
function answer_4(){
	t[1].innerHTML="<ol><li>'document.getElementById' returns an element with a given Id.(It returns only one.) </li><li>'document.getElementsByName' gets a list of elements based on the name.(It returns many.) </li><li>'document.getElementByClassName' gets a list of elements based on the class name.(It returns many.)</li><li>'document.getElementsByTagName' gets a list of elements with the input tag name.(It returns many.)</li></ol>";
}
<!--5번-->
s=$("a");

$(s[0]).click(function(){
	$(s[0]).text('Answers5');
})

$(s[1]).click(function(){
	$(s[1]).text('Answers5');
})

<!--6번-->
x=$(".item");

$(x[0]).click(function(){
	$(x[0]).attr('style','font-size:3em;');
})

$(x[1]).click(function(){
	$(x[1]).attr('style','font-size:3em;');
})

<!--7번-->
y=$(".demo");
$(y[0]).dblclick(function(){
	$(y[0]).attr('style','color:blue;');
})

$(y[2]).dblclick(function(){
	$(y[2]).attr('style','color:blue;');
})



