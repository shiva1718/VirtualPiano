window.onload = function () {
    console.log(window.location.pathname);
    // console.log("Entering function");
    function detectKeys(key, e) {
        if (key.innerText === e.key.toUpperCase()) {
            console.log(`The '${e.key}' key is pressed.`);
            let audio = new Audio(`keyAudios\\${e.key.toUpperCase()}.mp3`);
            audio.play()
                .then(r => console.log("playing sound"))
                .catch(reason => console.log("failed to play sound"));
            return true
        }
        return false;
    }
    document.addEventListener("keypress", function (e) {
        let found = false;
        for (let key of document.getElementsByClassName("keys-white")) {
            // console.log(e.code.slice(-1));
            found ||= detectKeys(key, e);
            // if (key.innerText === e.key.toUpperCase()) {
            //     found = true;
            //     console.log(`The '${e.key}' key is pressed.`);
            //     let audio = new Audio(`keyAudios\\${e.key.toUpperCase()}.mp3`);
            //     audio.play()
            //         .then(r => console.log("playing sound"))
            //         .catch(reason => console.log("failed to play sound"));
            //
            // }
        }
        for (let key of document.getElementsByClassName("keys-black")) {
            // console.log(e.code.slice(-1));
            found ||= detectKeys(key, e);
            // if (key.innerText === e.key.toUpperCase()) {
            //     found = true;
            //     console.log(`The '${e.key}' key is pressed.`);
            //     let audio = new Audio(`keyAudios\\${e.key.toUpperCase()}.mp3`);
            //     audio.play()
            //         .then(r => console.log("playing sound"))
            //         .catch(reason => console.log("failed to play sound"));
            //
            // }
        }
        if (!found) {
            console.log("The key is not found in the piano");
        }
    });
};