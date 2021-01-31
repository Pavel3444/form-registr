let setCursorPosition = (pos, elem) => {
    elem.focus();
    if (elem.setSelectionRange){
        elem.setSelectionRange(pos, pos);
    }else if (elem.createTextRange){
        let range =  elem.createTextRange();

        range.collapse(true);
        range.moveEnd('character',  pos);
        range.moveStart('character',  pos);
        range.select();
    }
}

function createMask(event, phoneTemplate) {
    let matrix = phoneTemplate,
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = event.target.value.replace(/\D/g, '');
    if (def.length >= val.length) {
        val = def;
    }

    event.target.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });

    if (event.type === 'blur') {
        if (event.target.value.length == 2) {
            event.target.value = '';
        }
    } else {
        setCursorPosition(event.target.value.length, event.target);
    }

}


export default createMask;