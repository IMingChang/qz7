import res from "./xxx.json" assert { type: "json" };

$(document).ready(function () {
    $('#Btdropdown1 .dropdown-item').on('click', function () {
        $('button').html($(this).html());
    })
    
    $('#btDownload').on('click', function () {
        //ajaxGet("https://cors-anywhere.herokuapp.com/https://wic.heo.taipei/OpenData/API/Rain/Get?stationNo=&loginId=open_rain&dataKey=85452C1D%22);  
        var year = res.data[0].recTime.substring(0, 4);
            var month = res.data[0].recTime.substring(4, 6);
            var day = res.data[0].recTime.substring(6, 8);
            var hour = res.data[0].recTime.substring(8, 10);
            var min = res.data[0].recTime.substring(10, 12);
            $('#years').text(year);
            $('#months').text(month);
            $('#days').text(day);
            $('#hours').text(hour);
            $('#mins').text(min);
            for (var i = 0; i < res.count; i++) {
                $('tbody').append("<tr><td>" + i + 1 + "</td><td>" + res.data[i].stationName + "</br>" + res.data[i].stationNo + "</td><td>" + res.data[i].rain + "</td></tr>");
            }
            console.log("suc");
    })
});



function ajaxGet(path){
    var motcData=[];
    $.ajax({ 
        type: 'GET',
        url: path,
        dataType: 'json',
        success: res =>{
            var year = res.data[0].recTime.substring(0, 4);
            var month = res.data[0].recTime.substring(4, 6);
            var day = res.data[0].recTime.substring(6, 8);
            var hour = res.data[0].recTime.substring(8, 10);
            var min = res.data[0].recTime.substring(10, 12);
            $('#years').text(year);
            $('#months').text(month);
            $('#days').text(day);
            $('#hours').text(hour);
            $('#mins').text(min);
            for (var i = 0; i < res.count; i++) {
                $('tbody').append("<tr><td>" + i + 1 + "</td><td>" + res.data[i].stationName + "</br>" + res.data[i].stationNo + "</td><td>" + res.data[i].rain + "</td></tr>");
            }
            console.log("suc");
        },
        error: res =>{
            console.log("err");
        }
    });
}