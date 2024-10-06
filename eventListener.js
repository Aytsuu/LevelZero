let canPress = false
let intro = document.querySelector(".intro")
let play = document.querySelector(".playBtn")

// Click play button to start
play.addEventListener('click', () => {
    intro.classList.add("fade")
    bgSound.currentTime = 0
    bgSound.play()

    //Starts first scene
    setTimeout(() => {
        drawMap(); 
        drawMapDialogue();
        animationDogRun();

        setTimeout(()=>{
            switchAnimation('idle')
        }, 1000)

        setTimeout(()=>{
            switchAnimation('run')
        }, 2000)

        setTimeout(()=>{
            switchAnimation('idle')
            canPress = true
        }, 4800)

    }, 0);
});

// Changing Scenes
window.addEventListener('keyup', (event) => {
    if(!canPress) return;

    // Proceeding to next scene
    if (event.key == 'd') {
        switch(map) {
            case 1: 
                canPress = false
                switchAnimation('run');
                setTimeout(() => {
                    startAnimation();
                    paperSound.currentTime = 0
                    paperSound.play()
                    setTimeout(() => {
                        cancelNewspaperAnimation()
                        paperSound.pause()
                        changeMap(); 
                    }, 3000);
                    setTimeout(() => {
                        canPress = true
                    }, 3500);
                }, 2000);
                break;
            case 2: 
                changeMap()
                animationDogRun()
                canPress = false

                setTimeout(()=>{
                    switchAnimation('idle')
                }, 1000)

                setTimeout(()=>{
                    switchAnimation('tired')
                }, 2000)

                setTimeout(()=>{
                    switchAnimation('run')
                }, 3000)

                setTimeout(()=>{
                    switchAnimation('tired')
                }, 5000)
                
                setTimeout(()=>{
                    switchAnimation('idle')
                }, 6000)

                setTimeout(()=>{
                    canPress = true
                }, 7000)

                break;
            case 3:
                canPress = false
                changeMap()

                setTimeout(()=>{
                    canPress = true
                }, 2000)

                break;
            case 4:
                changeMap()
                windSound.currentTime = 0
                windSound.play()
                break;
            case 5:
                changeMap()
                animationDogRun()
                animateRain()
                windSound.pause()
                rainSound.currentTime = 0
                rainSound.play()
                setTimeout(()=>{
                    cancelAnimationFrame(dogAnimationFrame)
                }, 5000)
                break;
            case 6:
                changeMap()
                animateFlood()
                floodSound.currentTime = 0
                floodSound.play()
                break;
            case 7:
                changeMap()
                cancelFlood()
                floodSound.pause()
                break;
            case 8:
                canPress = false
                changeMap()
                cancelRain()
                rainSound.pause()
                animationDogRun()
                
                setTimeout(()=>{
                    switchAnimation('idle')
                    canPress = true
                }, 3500)

                break;
            case 9:
                changeMap()
                crowdChatterSound.currentTime = 0
                crowdChatterSound.play()
                break;
            case 10:
                changeMap()
                break;
            case 11:
                changeMap()
                crowdChatterSound.pause()
                break;
            case 12:
                changeMap()
                animateFlood()
                floodSound.currentTime = 0
                floodSound.play()
                break;
            case 13:
                changeMap()
                cancelFlood()
                floodSound.pause()
                break;
            case 14:
                changeMap()
                break;  
        }
    }

    // Returning to previous scene
    else if (event.key == 'a'){
        switch(map) {
            case 2: 
                canPress = false
                
                changeMapReturn()
                animationDogRun();
        
                setTimeout(()=>{
                    switchAnimation('idle')
                }, 1000)
        
                setTimeout(()=>{
                    switchAnimation('run')
                }, 2000)
        
                setTimeout(()=>{
                    switchAnimation('idle')
                    canPress = true
                }, 4800)
                break;
            case 3: 
                changeMapReturn()
                setTimeout(() => {
                    canPress = true
                }, 300);
                break

            case 4:
                changeMapReturn()
                animationDogRun()
                canPress = false

                setTimeout(()=>{
                    switchAnimation('idle')
                }, 1000)

                setTimeout(()=>{
                    switchAnimation('tired')
                }, 2000)

                setTimeout(()=>{
                    switchAnimation('run')
                }, 3000)

                setTimeout(()=>{
                    switchAnimation('tired')
                }, 5000)
                
                setTimeout(()=>{
                    switchAnimation('idle')
                }, 6000)

                setTimeout(()=>{
                    canPress = true
                }, 6300)
                break;
            case 5:
                changeMapReturn()
                break;
            case 6:
                changeMapReturn()
                cancelRain()
                rainSound.pause()
                break;
            case 7:
                changeMapReturn()
                animationDogRun()
                cancelRain()
                cancelFlood()
                floodSound.pause()
                animateRain()
                setTimeout(()=>{
                    cancelAnimationFrame(dogAnimationFrame)
                }, 5000)
                break;
            case 8:
                changeMapReturn()
                cancelRain()
                animateRain()
                animateFlood()
                break;
            case 9:
                changeMapReturn()
                animateRain()
                rainSound.play()
                break;
            case 10:
                canPress = false
                changeMapReturn()
                animationDogRun()
                crowdChatterSound.pause()
                
                setTimeout(()=>{
                    switchAnimation('idle')
                    canPress = true
                }, 3500)
                break;
            case 11:
                changeMapReturn()
                crowdChatterSound.play()
                break;
            case 12:
                changeMapReturn()
                break;
            case 13:
                changeMapReturn()
                cancelFlood()
                floodSound.pause()
                break;
            case 14:
                changeMapReturn()
                animateFlood()
                floodSound.play()
                break; 
            case 15:
                changeMapReturn()
                break;   
        }
    }
});
