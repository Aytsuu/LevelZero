const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1600
canvas.height = 900


const dogSpeed = 5
let dogAnimationFrame
let elementsAnimationFrame
var dialogue;
let map = 1


//Sound effects
const bgSound = new Audio('sound effects/Music Used/bg-music.mp3');
const paperSound = new Audio('sound effects/Music Used/paperSound.mp3');
const rainSound = new Audio('sound effects/Music Used/Heavy rain.mp3');
const floodSound = new Audio('sound effects/Music Used/Flash Flood.mp3');
const windSound = new Audio('sound effects/Music Used/windSound.mp3');
const crowdChatterSound = new Audio('sound effects/Music Used/crowd chatter.mp3');
windSound.volume = 0.7
rainSound.volume = 0.1
floodSound.volume = 0.1
bgSound.volume = 0.6

//dialogue 
var dialoguescene = {
    1: [
        "Once upon a sunny day, a stray black dog is seen running down the streets. The rays of the sun seem brighter today of all ",
        "days, prompting people to stay indoors. (Press 'D' to proceed.)"
    ],
    2:[
        "Press 'D' to proceed, 'A' to return."
    ],
    3: [
        "The black dog continues to roam the street looking dehydrated. Without finding anything to quench its thirst, the black", 
        "dog opted to find a shade to cool itself instead. (Press 'D' to proceed, 'A' to return.)"
    ],
    4:[
        "A few walks later, the black dog spots a bench to hide under. Exhaustion crept up and lulled the black dog to sleep.",
        "(Press 'D' to proceed, 'A' to return.)"
    ],

    5:[
        "The black dog wakes up to the onset of the typhoon. It sees the people running about in distress and curls up in fear.",
        "The sudden gust of wind blew the bench upside down, causing the black dog to stand up and look for shelter amidst the",
        "heavy downpour. (Press 'D' to proceed, 'A' to return.)"
    ], 

    6:[
        "As the black dog ran, the water level started to rise. The black dog tried to run as fast as it could but the water",
        "eventually caught up, making it swim for its dear life. (Press 'D' to proceed, 'A' to return.)"
    ],

    7:[
        "Press 'D' to proceed, 'A' to return."
    ],

    8:[
        "As lady luck blessed it, the black dog found an elevated floor in an abandoned building to stay. This time, the",
        "dog fainted due to stress and starvation. (Press 'D' to proceed, 'A' to return.)"
    ],
    9:[
        "As the typhoon trailed off to another location, so as the black dog walked weakly to find food. The short walk",
        "turned long until it came across an evacuation center. The black dog entered the evacuation center and observed",
        "the people inside. LGUs were distributing food supplies and typhoon victims lined up. Noticing these, the hungry",
        "black dog also lined up in hopes of getting something to eat. (Press 'D' to proceed, 'A' to return.)"
    ],
    10:[
        "Instead of chastising the poor black dog, the people felt pity towards it. They gave it food and water, realizing",
        "that they were not the only ones hungry. (Press 'D' to proceed, 'A' to return.)"

    ],
    11:[
        "The typhoon’s level of devastation wasn't extreme, but it wasn't mild either. People had to stay a week in the",
        "evacuation center. In that whole week, the black dog became an everyday companion for people. The black dog’s",
        "presence gave people hope during this predicament. (Press 'D' to proceed, 'A' to return.)"
    ],
    12:[
        "Few months passed, and the city has fully recovered. But the weather kept getting worse, and today, it was",
        "scorching hot once again. However, unlike the last time, the dog wasn’t dehydrated today The dog passed by",
        "a cafe where it was given water, allowed entry to an airconditioned place, and even given",
        "vanilla ice cream by a little girl. (Press 'D' to proceed, 'A' to return.)"

    ],
    13:[
        "Another typhoon visited, the dog was once again in its survival mode. It looked for shelter to hide away from the",
        "rain, but while doing so, water started accumulating its surroundings The dog, who couldnt find a shelter on time,",
        "was caught up in the flood having to swim with the coursing of water. But unlike last time, a responder saw the",
        "dog and rescued it. (Press 'D' to proceed, 'A' to return.)"

    ],
    14:[
        "The responder brought the dog to the evacuation center. The familiar faces of the victims welcomed the dog,",
        "wholeheartedly. It became their sign of hope, once again. (Press 'A' to return.)"
    ]

}

// Maps
let maps = {
    1: {
        
        init: () =>{
            dialogue = dialoguescene[1];
            background = new Sprite(
                {position:{ 
                    x: 0, 
                    y: 0 
                    
                }, imgSrc: './Scene-bg/Scene-1.png', })

            dialogue_box = new Dialogue(
                {grad_position:{
                    grad_x: 18,
                    grad_y: 15
                },
                grad_size: {
                    grad_length: 150,   
                    grad_width: 1563
                }, 
                // gradient_fill : '',
                gradient_content : dialogue  
            });
            
        }
    },

    2: {
        init: () =>{
            dialogue = dialoguescene[2];
            background = new Sprite(
                {position:{ 
                    x: 0, 
                    y: 0 
                }, imgSrc: './images/newspaper.png'})
            dialogue_box = new Dialogue(
                {grad_position:{
                    grad_x: 18,
                    grad_y: 15
                },
                grad_size: {
                    grad_length: 75,
                    grad_width: 1563
                }, 
                // gradient_fill : gradient,
                gradient_content : dialogue  
            });

            
        }
    },

    3: {
        init: () =>{
            dialogue = dialoguescene[3];
            background = new Sprite(
                {position:{ 
                    x: 0, 
                    y: 0 
                }, imgSrc: './Scene-bg/Scene-2.png'})
                
            dialogue_box = new Dialogue(
                {grad_position:{
                    grad_x: 18,
                    grad_y: 20
                },
                grad_size: {
                    grad_length: 150,
                    grad_width: 1563
                }, 
                // gradient_fill : gradient,
                gradient_content : dialogue  
            });
        }
    },

    4: {
        init: () =>{
            dialogue = dialoguescene[4];
            background = new Sprite(
                {position:{ 
                    x: 0, 
                    y: 0 
                }, imgSrc: './Scene-bg/Scene-3.png'})

            dialogue_box = new Dialogue(
                {grad_position:{
                    grad_x: 18,
                    grad_y: 15
                },
                grad_size: {
                    grad_length: 150,
                    grad_width: 1563
                }, 
                // gradient_fill : gradient,
                gradient_content : dialogue  
            });
        }
    },

    
      5: {
        init: () =>{
           dialogue = dialoguescene[5]
            background = new Sprite(
                {position:{ 
                    x: 0   , 
                    y: 0 
                }, imgSrc: './Scene-bg/Scene-4.png'})

            dialogue_box = new Dialogue(
                {grad_position: {
                    grad_x: 18,
                    grad_y: 20
                },
                grad_size: {
                    grad_length: 170,              
                    grad_width: 1563
                }, 
                // gradient_fill : gradient,
                gradient_content : dialogue  
            });
        }
    },

    6: {
        init: () =>{
            dialogue = dialoguescene[6];
            background = new Sprite(
                {position:{ 
                    x: 0, 
                    y: 0 
                }, imgSrc: './Scene-bg/Scene-4-running.png'})

            dialogue_box = new Dialogue(
                {grad_position:{
                    grad_x: 18,
                    grad_y: 15
                },
                grad_size: {
                    grad_length: 150,
                    grad_width: 1563
                }, 
                // gradient_fill : gradient,
                gradient_content : dialogue  
            });
        }
    },

    7: {
        init: () =>{
            dialogue = dialoguescene[7];
            background = new Sprite(
                {position:{ 
                    x: 0, 
                    y: 0 
                }, imgSrc: './Scene-bg/Scene-4-swimming.png'})

            dialogue_box = new Dialogue(
                {grad_position:{
                    grad_x: 18,
                    grad_y: 15
                },
                grad_size: {
                    grad_length: 75,
                    grad_width: 1563
                }, 
                // gradient_fill : gradient,
                gradient_content : dialogue  
            });
        }
    },

    8: {
        init: () =>{
            dialogue = dialoguescene[8];
            background = new Sprite(
                {position:{ 
                    x: 0, 
                    y: 0 
                }, imgSrc: './Scene-bg/Scene-4-faint.png'})

            dialogue_box = new Dialogue(
                {grad_position:{
                    grad_x: 18,
                    grad_y: 15
                },
                grad_size: {
                    grad_length: 150,
                    grad_width: 1563
                }, 
                // gradient_fill : gradient,
                gradient_content : dialogue  
            });
        }
    },

    9: {
        init: () =>{
            dialogue = dialoguescene[9];
            background = new Sprite(
                {position:{ 
                    x: 0, 
                    y: 0 
                }, imgSrc: './Scene-bg/Scene-5-walking.png'})

            dialogue_box = new Dialogue(
                {grad_position:{
                    grad_x: 18,
                    grad_y: 15
                },
                grad_size: {
                    grad_length: 220,
                    grad_width: 1563
                }, 
                // gradient_fill : gradient,
                gradient_content : dialogue  
            });
        }
    },

    10: {
        init: () =>{
            dialogue = dialoguescene[10];
            background = new Sprite(
                {position:{ 
                    x: 0, 
                    y: 0 
                }, imgSrc: './Scene-bg/Scene-5-line.png'})

            dialogue_box = new Dialogue(
                {grad_position:{
                    grad_x: 18,
                    grad_y: 700
                },
                grad_size: {
                    grad_length: 150,
                    grad_width: 1553
                }, 
                // gradient_fill : gradient,
                gradient_content : dialogue  
            });
        }
    },

    11: {
        init: () =>{
            dialogue = dialoguescene[11];
            background = new Sprite(
                {position:{ 
                    x: 0, 
                    y: 0 
                }, imgSrc: './Scene-bg/Scene-6-bone.png'})

            dialogue_box = new Dialogue(
                {grad_position:{
                    grad_x: 18,
                    grad_y: 725  
                },
                grad_size: {
                    grad_length: 160,
                    grad_width: 1563
                }, 
                // gradient_fill : gradient,
                gradient_content : dialogue  
            });
        }
    },

    12: {
        init: () =>{
            dialogue = dialoguescene[12];
            background = new Sprite(
                {position:{ 
                    x: 0, 
                    y: 0 
                }, imgSrc: './Scene-bg/Scene-7.png'})
            dialogue_box = new Dialogue(
                {grad_position:{
                    grad_x: 18,
                    grad_y: 15
                },
                grad_size: {
                    grad_length: 200,
                    grad_width: 1563
                }, 
                // gradient_fill : gradient,
                gradient_content : dialogue  
            });
        }
    },

    13: {
        init: () =>{
            dialogue = dialoguescene[13];
            background = new Sprite(
                {position:{ 
                    x: 0, 
                    y: 0 
                }, imgSrc: './Scene-bg/Scene-8-boat.png'})

            dialogue_box = new Dialogue(
                {grad_position:{
                    grad_x: 18,
                    grad_y: 15
                },
                grad_size: {
                    grad_length: 200,
                    grad_width: 1563
                }, 
                // gradient_fill : gradient,
                gradient_content : dialogue  
            });
    }
    },

    14: {
        init: () =>{
            dialogue = dialoguescene[14];
            background = new Sprite(
                {position:{ 
                    x: 0, 
                    y: 0 
                }, imgSrc: './Scene-bg/Scene-8-last.png'})

            dialogue_box = new Dialogue(
                {grad_position:{
                    grad_x: 18,
                    grad_y: 700
                },
                grad_size: {
                    grad_length: 150,
                    grad_width: 1563
                }, 
                // gradient_fill : gradient,
                gradient_content : dialogue  
            });
        }
    },

    15: {
        init: () =>{
            dialogue = dialoguescene[12];
            background = new Sprite(
                {position:{ 
                    x: 0, 
                    y: 0 
                }, imgSrc: './Scene-bg/moral.png'})

            dialogue_box = new Dialogue(
                {grad_position:{
                    grad_x: 0,
                    grad_y: 0
                },
                grad_size: {
                    grad_length: 0,
                    grad_width: 0
                }, 
                // gradient_fill : gradient,
                gradient_content : dialogue  
            });
        }
    }

}

const dogRun = new Elements({imgSrc: './dogImg/dog_run.png', frameRate: 9})
const dogIdle = new Elements({imgSrc: './dogImg/dog_idle.png', frameRate: 7})
const dogTired = new Elements({imgSrc: './dogImg/dog_tired.png', frameRate: 11})


// Functions 

// function drawMap(){
//     window.requestAnimationFrame(drawMap)
//     background.draw()

// }

// function drawMapDialogue(){
//     dialogueAnimation = window.requestAnimationFrame(drawMapDialogue)
//     if (dialogue_box) {
//         dialogue_box.write();
//     }
// }

function updateDialogue(newDialogueContent) {
    clearCanvas();
    // Update the dialogue_box content to the new dialogue
    dialogue_box.gradient_content = dialoguescene[map];
    charIndex = 0;  // Reset the charIndex to start animation from the beginning
    lineIndex = 0;  // Reset the lineIndex to the first line of dialogue
}

function clearCanvas() {
    // Clear the entire canvas before redrawing
    c.clearRect(0, 0, canvas.width, canvas.height);
    // Optionally, redraw the background here if needed
    background.draw();
}

// Functions 
function drawMap(){
    window.requestAnimationFrame(drawMap)
    background.draw()

}

function drawMapDialogue(){
    dialogueAnimation = window.requestAnimationFrame(drawMapDialogue)
    background.draw(); // Redraw the background each frame
    dialogue_box.write()
}

function animationDogRun(){
    dogAnimationFrame = window.requestAnimationFrame(animationDogRun)
    dogRun.draw()
    dogRun.move(dogSpeed);
}

function animationDogIdle(){
    dogAnimationFrame = window.requestAnimationFrame(animationDogIdle)
    dogIdle.position.x = dogRun.position.x
    dogIdle.draw()
}

function animationDogTired(){
    dogAnimationFrame = window.requestAnimationFrame(animationDogTired)
    dogTired.position.x = dogRun.position.x
    dogTired.draw()
}

function changeMap(){
    if (maps[map + 1]) { // Ensure there's a next map to switch to
        map++;

        // Initialize the new map
        maps[map].init();
        updateDialogue(dialoguescene[map])

        // Reset dog positions
        dogRun.position.x = 100;
        dogIdle.position.x = 100;

        // Cancel previous animations
        cancelAnimationFrame(dogAnimationFrame);
        
    }
}

function changeMapReturn(){
    if (maps[map - 1]) { // Ensure there's a next map to switch to
        map--;  

        // Initialize the new map
        maps[map].init();
        updateDialogue(dialoguescene[map])

        // Reset dog positions
        dogRun.position.x = 100;
        dogIdle.position.x = 100;

        // Cancel previous animations
        cancelAnimationFrame(dogAnimationFrame);
        
    }
}


function switchAnimation(action){
    cancelAnimationFrame(dogAnimationFrame)
    
    switch(action){
        case 'idle': animationDogIdle()
            break;
        case 'run': animationDogRun()
            break;
        case 'tired': animationDogTired()
            break;
    }
}


maps[map].init()