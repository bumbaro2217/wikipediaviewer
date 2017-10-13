$(function(){

    $('#search').click(function(){
        var searchFor = $('#searchFor').val();
        
        
        $.ajax({
            type: 'GET',
            url: 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+searchFor+'&callback=?',
            async: false,
            dataType: 'json',
            success: function(data) {
            //    console.log(data);

            $('#results').html('');

            for (var i = 0; i <= 10; i++) {
                $('#results').append('<a href=' + data[3][i] + ' target = "blank">' + data[1][i] + ' </h2></a><h4>' 
                + data[2][i] + '</h4>');
            }
            $('#searchFor').val('');
            },
            error: function(err) {
                alert("err");
            },
    });
   
    });
    $('#searchFor').keypress(function(e) {
        if(e.which == 13) {
            $('#search').click();
        }
})});