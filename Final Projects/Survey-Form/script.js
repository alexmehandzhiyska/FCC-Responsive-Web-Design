document.addEventListener('DOMContentLoaded', () => {
    let submitBtnEl = document.getElementById('submit');

    submitBtnEl.addEventListener('click', e => {
        let checkEls = Array.from(document.querySelectorAll('input[type="checkbox"]'));
        let isChecked = false;

        for (checkEl of checkEls) {
            if (checkEl.checked) {
                isChecked = true;
                break;
            };
        };

        if (!isChecked) {
            alert('Please, choose at least one extracurricular activity!');
            e.preventDefault();
        }
    })
})