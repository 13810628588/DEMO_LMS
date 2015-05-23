$(document).ready(function() {
    console.log('ready to go!');
    $('#footerDIV').load('footer.html');
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })
});