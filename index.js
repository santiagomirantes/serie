(function () {

    const obj = {
        "845": "https://ibb.co/F5T4CDc",
        "los pollos pibe": "https://pastebin.com/jre5BFD1",
        "1a2b3c4d": "https://ibb.co/vkBbRyT",
        "lza v ch wvy z": "https://ibb.co/my9Pm0T",
        "iastttiaac": "https://ibb.co/NndfNnC",
        "109845845845845": "https://ibb.co/F5T4CDc",
        "wgsrn83740": "https://ibb.co/bdggLbv",
        "dnacxd": "https://ibb.co/hRBsBKQ",
        "imrftrn": "https://ibb.co/fxfNj8N",
        "yourgg": "https://ibb.co/Sf7ppth",
        "ihstroonfts": "https://ibb.co/74wsJTt",
        "don7_7ru37": "https://ibb.co/j8tTtfT",
        "adskasddshola": "https://ibb.co/rGPKKhh",
        "rev_pit.mp4": "https://ibb.co/jMkMF5F"
    }

    const list = document.querySelector("#links_list")
    let count = 0

    for (const [key, val] of Object.entries(obj)) {
        count++
        const li = document.createElement("li")
        const a = document.createElement("a")
        a.href = val
        a.innerHTML = key
        li.appendChild(a)
        list.appendChild(li)
    }

    document.querySelector("#links p span").innerHTML = count

    const daysEl = document.querySelector("#days")
    const hoursEl = document.querySelector("#hours")
    const minutesEl = document.querySelector("#minutes")
    const secondsEl = document.querySelector("#seconds")

    let ms = new Date(2025, 1, 17, 0, 0, 0, 0) - Date.now()

    const countdown = setInterval(() => {
        ms -= 1000

        if (ms <= 0) {
            clearInterval(countdown)
            daysEl.innerHTML = "TI"
            daysEl.style.color = "red"
            hoursEl.innerHTML = "ME"
            hoursEl.style.color = "red"
            minutesEl.innerHTML = "OV"
            minutesEl.style.color = "red"
            secondsEl.innerHTML = "ER"
            secondsEl.style.color = "red"
            return
        }

        let days = Math.floor(ms / (24 * 60 * 60 * 1000))
        let rest = ms % (24 * 60 * 60 * 1000)
        let hours = Math.floor(rest / (60 * 60 * 1000))
        rest = rest % (60 * 60 * 1000)
        let minutes = Math.floor(rest / (60 * 1000))
        rest = rest % (60 * 1000)
        let seconds = Math.floor(rest / 1000)


        daysEl.innerHTML = days
        hoursEl.innerHTML = hours < 10 ? '0' + hours : hours;
        minutesEl.innerHTML = minutes < 10 ? '0' + minutes : minutes;
        secondsEl.innerHTML = seconds < 10 ? '0' + seconds : seconds;

        return

    }, 1000)

})();
