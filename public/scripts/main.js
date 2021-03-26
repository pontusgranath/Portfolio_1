$('#active').click(function (){
    $('#active').toggleClass('activated')

    if($('#active').hasClass('activated')){
        console.log('test')
        setTimeout(function(){
            $('.test').addClass('show')
        }, 1500)
    }
    else{
        $('.test').removeClass('show')
    }
})
