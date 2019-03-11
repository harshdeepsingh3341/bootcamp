var clock = function(){
    var date = new Date();

    var hour = date.getHours();
    var minute = date.getMinutes();
    var seconds = date.getSeconds();

    var greet_message = "good ";

    var time_message, date_message;

    var months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sept", "oct", "nov","dec"];

    if(hour<12){

        if (hour < 12 && hour >=0) {
            greet_message += "morning";
        }

        time_message = {
            hour: hour,
            minute: minute,
            seconds: seconds,
            extra: "am"
        }
        
    }
    else {
        if(hour >=12 && hour < 16){
            greet_message += "afternoon";
        }
        else {
            greet_message += "evening";
        }
        
        time_message = {
            hour: hour-12,
            minute: minute,
            seconds: seconds,
            extra: "pm"
        }

        if(time_message.hour == 0){
            time_message.hour = 12;
        }
    }

    document.getElementById('greet').innerText = greet_message;
    
    if(time_message.hour<=9){
       
        time_message.hour = "0" + time_message.hour;
    }
    if(time_message.minute<=9){
        time_message.minute = "0" + time_message.minute;
    }
    if(time_message.seconds<=9){
        time_message.seconds = "0" + time_message.seconds;
    }

    document.getElementById('time').innerText=time_message.hour + ":" + time_message.minute + ":" + time_message.seconds + " " + time_message.extra;

    date_message = {
        date: date.getDate(),
        month: months[date.getMonth()],
        year: date.getFullYear()
    }

    document.getElementById('date').innerText = date_message.date + " " + date_message.month + " " + date_message.year;



}

setInterval(clock, 100);