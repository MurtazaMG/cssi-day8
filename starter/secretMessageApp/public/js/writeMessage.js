const messagesRef = firebase.database().ref();

messagesRef.push({
message: "This is new",
passcode: "JavaScript"
});