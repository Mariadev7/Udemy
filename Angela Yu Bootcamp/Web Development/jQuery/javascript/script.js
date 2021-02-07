
$("a").attr("href", "https://www.yahoo.com");


$('h1').click(function(){
$('h1').css('color', 'pink')

})

$('button').click(function(){
    $('h1').css('color', 'red')
})

$('body').keypress(function(event){
    $('h1').text(event.key)
})

$('h1').on('mouseover', function(){
    $('h1').css('color','blue')
})

$('h1').mouseover(function(){
    $('h1').slideUp(3000).slideDown(3000)
})