AOS.init();

document.addEventListener("DOMContentLoaded", function () {
    const birthDay = new Date("Jul 02, 2024 19:00:00");
    const timeStamp = birthDay.getTime();

    const countDown = setInterval(function () {
        const now = new Date();
        const timeStampNow = now.getTime();

        const timeToBirthDay = timeStamp - timeStampNow;

        const seconds = 1000;
        const minutes = seconds * 60;
        const hours = minutes * 60;
        const days = hours * 24;

        const daysToBirthDay = Math.floor(timeToBirthDay / days);
        const hoursToBirthDay = Math.floor((timeToBirthDay % days) / hours);
        const minutesToBirthDay = Math.floor((timeToBirthDay % hours) / minutes);
        const secondsToBirthDay = Math.floor((timeToBirthDay % minutes) / seconds);

        document.getElementById(
            "time_to_event"
        ).innerHTML = `${daysToBirthDay}d ${hoursToBirthDay}h ${minutesToBirthDay}m ${secondsToBirthDay}s`;

        if (timeToBirthDay < 0) {
            document.getElementsByClassName("hero__text")[0].innerHTML =
                "Você perdeu o evento...";
        }
    }, 1000);
});
