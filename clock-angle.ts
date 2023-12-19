const getClockAngle = (time: string) => {
    let Hour = Number(time.split(":")[0]);
    let Minute = Number(time.split(":")[1]);

    let CalHour = Hour > 12? Hour - 12 : Hour;
    let AngleMinute = Minute*6;
    let tolerance = (Minute*100)/60;
    let AngleHour = (CalHour+(tolerance/100))*30;

    if(AngleHour > 180){
        AngleHour = 360-AngleHour;
        AngleMinute = AngleMinute > 180? 360-AngleMinute : AngleMinute;
        return Math.abs(AngleHour-AngleMinute);
    }

    if(AngleMinute > 180 ){
        AngleMinute = 360-AngleMinute
        AngleHour = AngleHour < 180? 180-AngleHour: AngleHour;
        return Math.abs(AngleHour+AngleMinute);
    }

    return Math.abs(AngleHour-AngleMinute);
}

getClockAngle("09:00")
getClockAngle("17:30")