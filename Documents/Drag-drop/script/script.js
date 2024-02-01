let draggedElement = null;
    let offsetX, offsetY;

    document.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', endDrag);

    function startDrag(event) {
        if (event.target.classList.contains('draggable')) {
            draggedElement = event.target;
            offsetX = event.clientX - draggedElement.getBoundingClientRect().left;
            offsetY = event.clientY - draggedElement.getBoundingClientRect().top;
            draggedElement.style.cursor = 'grabbing';
        }
    }

    function drag(event) {
        if (draggedElement) {
            draggedElement.style.left = event.clientX - offsetX + 'px';
            draggedElement.style.top = event.clientY - offsetY + 'px';
        }
    }

    function endDrag() {
        if (draggedElement) {
            draggedElement.style.cursor = 'grab';
            draggedElement = null;
        }
    }