$("#btn").click(function(event) {
    event.preventDefault(); 
    if(!$('#email').val()){
        $('#error').css('display','block');
        $('#email').css('outline','1px solid var(--clr-Light-Red)');
        $('#email').css('border','1px solid var(--clr-Light-Red)');
        $('#email').attr('value','john#mail.com');
    }else{
        $('#error').css('display','none');
        $('#email').css('border','none');
        $('#email').css('outline','none');
    }
})
