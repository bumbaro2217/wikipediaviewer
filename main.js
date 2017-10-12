$(function(){

    $('#search').click(function(){
        var searchFor = $('#searchFor').val();
        
        
        $.ajax({
            type: 'GET',
            url: 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+searchFor+'&callback=?',
            async: false,
            dataType: 'json',
            success: function(data) {
                console.log(data);
            },
            error: function(err) {
                alert("err");
            },
    })
    // hit enter on keyboard to search 
})});