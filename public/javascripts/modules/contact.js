/*----------------------------------------
            CONTACT FORM
----------------------------------------*/
document.querySelector('.contactsuccess').addEventListener('click', function(e) {
    e.preventDefault();
    // UI ELEMENTS
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const budget = document.querySelector('#budget');
    const message = document.querySelector('#message');

    const ck = [name, email, budget, message]
    var a = 0;
    ck.forEach(item => {
        item.style.border = '2px solid green';
        if (item.value === '') {
            a++;
            item.style.border = '1px solid #ffcc74';
        }
    });


    //   Clear Fields
    function clear() {
        name.value = '';
        email.value = '';
        budget.value = '';
        message.value = '';
    }


    if (a === 0) {
        //   Loader On, Button Disabled
        loader.style.display = 'block';

        sendBtn.disabled = true;
        $.ajax({
                url: 'mail.php',
                method: 'POST',
                data: {
                    name: name.value,
                    email: email.value,
                    budget: message.value,
                    message: message.value
                }
            })

            .error(function() {
                console.log('ERROR');
            });
    }
});