// Code your solutions in this file
function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        let newMessage = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(newMessage);
    }
    return messages;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num--)
    }
}