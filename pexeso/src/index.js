// Executes this arrow function after everything loaded up
window.onload = () => {
    import("./presentation/pexeso-gui.js")
        .then((module) => {
            const PexesoGUI = module.PexesoGUI;
            const component = document.getElementById("game");
            var sizeOfGameField = prompt("Please enter desired size of the game field, use only even numbers. The game field will be input x input big. for your sanity please dont use numbers bigger than 20", "");

            if (sizeOfGameField == null || sizeOfGameField == "") {
                txt = "User cancelled the prompt.";
            } else { 
                if (sizeOfGameField % 2 == 0) {
                    const game = new PexesoGUI(component, sizeOfGameField, sizeOfGameField);
                    game.draw();
            }
                    
            }
            
        });
};
