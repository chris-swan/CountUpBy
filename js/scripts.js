var countBy = function(total, multiple) {

    var result = [];

    for (var i = 1; i*multiple <= total; i++) {
        result.push(i*multiple);
    }
    return result;
}

// $(document).ready(function() {
//
//     $("form#prime").submit(function(event) {
//
//         var input = $("input").val()
//         var result = prime(input)
//
//         $(".phrase").text(result)
//         $("#result").show()
//         debugger
//         event.preventDefault()
//     });
// });

// total(10) multiple(2)
//
// 2xi
// i=1
//
// i+1 <= total
//
// array (2xi, 2xi+1, 2*i+1+1... 10)
