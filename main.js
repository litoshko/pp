ctrl = (function(){
    return {
        show: show,
        hide: hide
    }    

    function show(id) {
        hideElement('menu');
        showElement(id);
    }

    function hide(id) {
        hideElement(id);
        showElement('menu');
    }
    

    function showElement(id){    
        let element = document.getElementById(id);
        element.classList.remove('hidden');
    }

    function hideElement(id) {
        let element = document.getElementById(id);
        element.classList.add('hidden');
    }
})();