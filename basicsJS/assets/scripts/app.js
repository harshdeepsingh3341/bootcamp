var greeting = function(hour) {
    var greet_message = "good ";
    if (hour < 12 && hour >=0) {
        greet_message += "morning";
    }
    else if(hour >=12 && hour < 16){
        greet_message += "afternoon";
    }
    else {
        greet_message += "evening";
    }
    return greet_message;
}

var time = function(hour, minute, seconds){
    var time_message;
    if(hour<12){
        if(hour == 0) hour = 12;

        time_message = {
            hour: (hour<=9?"0"+hour:hour),
            minute: (minute<=9?"0"+minute:minute),
            seconds: (seconds<=9?"0"+seconds:seconds),
            extra: "am"
        }
    }
    else {
        time_message = {
            hour: ((hour-12)<=9?"0"+(hour-12):(hour-12)),
            minute: (minute<=9?"0"+minute:minute),
            seconds: (seconds<=9?"0"+seconds:seconds),
            extra: "pm"
        }
        if(time_message.hour == "00"){
            time_message.hour = '12';
        }
    }
    return time_message.hour + ":" + time_message.minute + ":" + time_message.seconds + " " + time_message.extra;
}

var my_date = function(date){
    var months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sept", "oct", "nov","dec"];
    var date_message = {
        date: date.getDate(),
        month: months[date.getMonth()],
        year: date.getFullYear()
    }
    return date_message.date + " " + date_message.month + " " + date_message.year;
}

var page = function(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var seconds = date.getSeconds();
    document.getElementById('greet').innerText = greeting(hour);
    document.getElementById('time').innerText= time(hour, minute, seconds);
    document.getElementById('date').innerText = my_date(date);
}

setInterval(page, 100);