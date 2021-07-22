

function display(msgObject) {
    console.log(msgObject.message);
    const login = document.querySelector(".login");
    console.log(login);
    login.classList.add("hidden");
    console.log(login);
    document.querySelector("#message").innerHTML = msgObject.message;
}

document.querySelector("#viewMsg").addEventListener("click", () => {
    const userPasscode = document.querySelector("#passcode").value;

    const messagesRef = firebase.database().ref();
    messagesRef.on("value", (snapshot) => {
        const data = snapshot.val();
        for(let key in data) {
            if(userPasscode == data[key].passcode) {
                display(data[key]);
            }
        }
    })
})


