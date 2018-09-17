function positionAt(anchor, position, elem){
			let anchored = anchor.getBoundingClientRect();
			if(position == 'top'){
				elem.style.top = anchored.top- elem.offsetHeight+'px';
				elem.style.left = anchored.left +'px';
			} else if(position == 'right'){
				elem.style.left = anchored.right +/*elem.offsetWidth+*/'px';
				elem.style.top = anchored.top+'px';
			} else if(position == 'bottom'){
				elem.style.left = anchored.left +'px';
				elem.style.top = anchored.top+anchor.offsetHeight+'px';
			}
		}

function showNote(anchor, position, html){
	let note = document.createElement('div');
	note.className = 'note';
	note.innerHTML = html;
	document.body.append(note);
	positionAt(anchor, position, note);
	}

		let anchor = document.getElementById('anchor');

showNote(anchor, 'top', 'note above');
showNote(anchor, 'right', 'note at the right');
showNote(anchor, 'bottom', 'note below');