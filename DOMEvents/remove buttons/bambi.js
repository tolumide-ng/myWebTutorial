let panes = document.querySelectorAll('.pane');

    for(let pane of panes) {
      pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
      // button becomes the first child of pane
      pane.firstChild.onclick = () => pane.remove();
    }