let buttonContainer = document.getElementById('botones');
buttonContainer.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', event=> {
        let buttons = buttonContainer.querySelectorAll('button');
        buttons.forEach(btn => {
            let c = document.getElementById(btn.textContent.toLowerCase());
            if (btn !== event.currentTarget) {
                btn.className = 'btn';
                c.className = 'card-disable';
            } else {
                btn.className = 'btn-active';
                c.className = 'card';
            }
        });
    });
});