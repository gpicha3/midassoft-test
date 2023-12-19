const getClockAngle = (time :string) => {
    const [hour, minute] = time.split(":").map(Number);
    let hourAngle = (hour % 12 + minute / 60) * 30;
    let minuteAngle = minute * 6;

    const angleDiff = Math.abs(hourAngle - minuteAngle);
    return angleDiff > 180 ? 360 - angleDiff : angleDiff;
};

getClockAngle("09:00")
getClockAngle("17:30")