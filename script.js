// Declare variables
var noteInput, noteName, textEntered, target;

//Element that holds note
noteName = document.getElementById('noteName');
//Input for writing a note
noteInput = document.getElementById('noteInput');

//Declare Function
function writeLabel(e) {
    if (!e) {               //if event object not present
        e  = window.event; // use ie8 fallback
    }
    target = e.target || e.srcElement;  // get target of element
    //Value of that element
    textEntered = target.value;
    //Update note text
    noteName.textContent = textEntered;

}

// This is where the record / pause controls and functions go ...

function recorderControls(e) {          //Declare recorderControls()
        if (!e) {
            e = window.event;       //If event object not present
                                    // Use ie 5-8 fallback
        }
        target = e.target || e.srcElement;  //Get the target element
        if (e.preventDefault) {            //If preventDefault() supported
            e.preventDefault();             //Stop default action
        } else {                            //Otherwise
            e.returnValue = false;          // IE fallback:stop default action
        }

    switch (target.getAttribute('data-state')) {  //get the data-state attribute
        case 'record' :                            //if its value is record
            record(target);                        //Call the record() funciton
            break;                                // Exit function to where called
        case 'stop' :                           // if its value is stip
            stop(target);                       // call the stop() funciton
            break;                              // exit funciton to where called
    }
}

// Here are the functions that work in the switch statement

//declare function
function record (target) {
    target.setAttribute('data-state', 'stop');      // set data-state arrt to stop
    target.textContent = 'stop'                     // Set text to 'stop'
}

function stop(target) {                         // Declate the function
    target.setAttribute('data-state', 'record');       // Set data-state attr to record
    target.textContent = 'record';                    // Ste text to 'record'
}


//===End of recorded functions=====

if (document.addEventListener) {                    // if event listener supported
    document.addEventListener('click', function(e) {    //for any click document
        recorderControls(e);                        //call recorderControls()
    },false);                                       //Capture during buble phase
    //If input event fires on noreInput, call writeLabel()
    noteInput.addEventListener('input', writeLabel, false); //
} else {                                            //otherwise
    document.attachEvent('onclick', function(e) {       
        recorderControls(e);                        // calls recorederControls()
    });
    //if keyup event fires on noteInput, call writeLabel()
    noteInput.attachEvent('onkeyup', writeLabel);
}





