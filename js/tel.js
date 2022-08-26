document.addEventListener('DOMContentLoaded', function() {
    const eventCallback = function (e) {
        const el = e.target; 
        const clearVal = el.dataset.phoneClear;
        const pattern = el.dataset.phonePattern;
        const matrix__def = "+7(___)___-__-__";
        const matrix = pattern ? pattern : matrix__def;
        let i = 0;
        let def = matrix.replace(/\D/g,""); //replace() - выполняет внутри строки поиск с использованием регулярного выражения, или стрококвого значения и возвращает новую строку, в которой будут заменены найденные значения
        let val = e.target.value.replace(/\D/g,"");

        if(clearVal !== 'false' && e.type === 'blur') {
            if (val.length < matrix.match(/([\_\d])/g).length) { //match() - вощвращает получившиеся совпадения при сопоставлении строки с регулярныи выражением
                e.target.value = '';
                return;
            }
        }

        if(def.length >= val.length) val = def;

        e.target.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        })

    }

    const phoneInputs = document.querySelectorAll('[data-phone-pattern]');

    for(let elem of phoneInputs) {
        for(let ev of ['input', 'blur', 'focus']) {
            elem.addEventListener(ev, eventCallback)
        }
    }
})