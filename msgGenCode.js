const groundTechnique = ["Ice cube on wrist", "Drink fizzy drink or water", "Elastic on wrist", "54321 technique", "Get some fresh air", "Lay down on the floor","Take a cold AND hot shower", "Work out as hard as you can", "Meditate or yoga", "Eat a lime", "Spray a perfume, cologne, air spray or wear the skin cream you like", "Blast music in your ears", "Take a dip in really cold water. Can be a lake or a freezing bath", "Eat your favourite treat, cookie, snack"];

const motivationWords = ["One will learn to lie if they are constantly punished for telling the truth.", "I am not afraid of storms, for I am learning how to sail my ship.", "The only person you should try to be better than is the person you were yesterday.", "You must have chaos within you to give birth to a dancing star.", "Feed your faith and your doubts will starve to death.", "Nothing happens until something moves.", "Honest people don't hide their deeds.", "The more honest you can be with yourself, the less of a chance your feelings will get hurt.", "Whoever lives for the sake of combating an enemy has an interest in the enemy's staying alive."];

const distract = ["Watch Breaking Bad or favourite show/movie", "Code or do something on the computer or phone", "Take Buddy, your pet or just yourself for a walk", "Blast music as loud as possible", "Continue the \'Guilty x34\' song or any fun project", "Practice the bass or an instrument if you have one, if not, tap on the table and make a beat", "Research and find good new distractions", "If you feel like crying, let it out", "Play an action video game, a quick paced game", "Lift the heaviest lifts you can weight, try holding as many things as possible", "Count backwards from 100 by 7", "Name something backwards, letter-by-letter. Practice for at least a few minutes.", "Create a game where you pick a category. From each category, you name as many things or items as possible. Like, cereals: 'Cheerios', 'Cinnamon Toast Crunch', 'Combex', 'Capt\'n Crunch', 'Nesquik', 'Frosted Flakes', etc."]


let getRandMsg = arr => {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

let generateMsg = type => {
    type = type.trim().toLowerCase();

    let msgArr;

    switch(type) {
        case 'ground-technique':
            msgArr = groundTechnique;
            break;
        case 'motivation':
            msgArr = motivationWords;
            break;
        case 'distractions':
            msgArr = distract;
            break;
        default:
            console.log("Please specify a valid message type: grounding technique, motivational words or distractions")
            return;
    }

    const msg = getRandMsg(msgArr);

    const descElement = document.querySelector(`.${type} .generator .desc`);
    if (descElement) {
        descElement.textContent = msg;
    } else {
        console.error(`Desc element not found for type: ${type}`);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const groundingTechniqueBtn = document.getElementById('ground-technique-btn');
    const motivationBtn = document.getElementById('motivation-btn');
    const distractionBtn = document.getElementById('distractions-btn');

    groundingTechniqueBtn.addEventListener('click', function() {
        generateMsg('ground-technique');
    });

    motivationBtn.addEventListener('click', function() {
        generateMsg('motivation');
    });

    distractionBtn.addEventListener('click', function() {
        generateMsg('distractions');
    })
})