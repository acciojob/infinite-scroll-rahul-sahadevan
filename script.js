//your code here!

const scroll = document.getElementById("infi-list");

function isBottom(){
	return scroll.scrollHeight - scroll.scrollTop == scroll.clientHeight;
}

function addMore() {
	const ol = scroll;
	for(let i =0;i<2;i++){
		const li = document.createElement("li");
		li.innerText = `Item ${ol.children.length+1}`;
		ol.append(li);
	}
	
}

scroll.addEventListener("scroll",()=>{
	if(isBottom()){
		addMore();
	}
})
addMore();