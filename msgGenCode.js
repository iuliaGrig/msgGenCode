const groundTechnique = ["Ice cube on wrist", "Drink fizzy drink or water", "Elastic on wrist", "54321 technique", "Get some fresh air", "Lay down on the floor"];

const motivationWords = ["One will learn to lie if they are constantly punished for telling the truth.", "I am not afraid of storms, for I am learning how to sail my ship.", "The only person you should try to be better than is the person you were yesterday.", "You must have chaos within you to give birth to a dancing star.", "Feed your faith and your doubts will starve to death."];

const distract = ["Watch Breaking Bad", "Code", "Take Buddy for a walk", "Blast music", "Continue the \'Guilty x34\' song", "Practice the bass"]


let getRandMsg = arr => {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

let generateMsg = type => {
    type = type.trim().toLowerCase();

    let msgArr;

    switch(type) {
        case 'grounding technique':
            msgArr = groundTechnique;
            break;
        case 'motivational words':
            msgArr = motivationWords;
            break;
        case 'distractions':
            msgArr = distract;
            break;
        default:
            // alert("Please specify a valid message type: grounding technique, motivational words or distractions")
            console.log("Please specify a valid message type: grounding technique, motivational words or distractions")
            return;
    }

    const msg = getRandMsg(msgArr);
    // alert(msg);
    console.log(msg);
}

/*
generateMsg('grounding technique');
generateMsg('motivational words');
*/