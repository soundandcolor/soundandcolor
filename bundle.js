(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const keyboard = require('./js/inputs/keyboard');
const midi_sound = require('./js/ui/midi_sound');

$(document).ready(() => {
    keyboard.initialize();
    midi_sound.initialize();
    keyboard.addListener(midi_sound.keyEvent);
});

},{"./js/inputs/keyboard":2,"./js/ui/midi_sound":3}],2:[function(require,module,exports){
/*var svg_keys = [
	{ id: "octave-1-C-key", class: "piano-key white-key", data_key: "C", keyboard_key: "a", stroke: "#555555", fill: "#FFFFF7", x: 0, y: 0, width: 80, height: 400},
	{ id: "octave-1-D-key", class: "piano-key white-key", data_key: "D", keyboard_key: "s", stroke: "#555555", fill: "#FFFFF7", x: 80, y: 0, width: 80, height: 400},
	{ id: "octave-1-E-key", class: "piano-key white-key", data_key: "E", keyboard_key: "d", stroke: "#555555", fill: "#FFFFF7", x: 160, y: 0, width: 80, height: 400},
	{ id: "octave-1-F-key", class: "piano-key white-key", data_key: "F", keyboard_key: "f", stroke: "#555555", fill: "#FFFFF7", x: 240, y: 0, width: 80, height: 400},
	{ id: "octave-1-G-key", class: "piano-key white-key", data_key: "G", keyboard_key: "g", stroke: "#555555", fill: "#FFFFF7", x: 320, y: 0, width: 80, height: 400},
	{ id: "octave-1-A-key", class: "piano-key white-key", data_key: "A", keyboard_key: "h", stroke: "#555555", fill: "#FFFFF7", x: 400, y: 0, width: 80, height: 400},
	{ id: "octave-1-B-key", class: "piano-key white-key", data_key: "B",  keyboard_key: "j", stroke: "#555555", fill: "#FFFFF7", x: 480, y: 0, width: 80, height: 400},
	{ id: "octave-1-C#-key", class: "piano-key black-key", data_key: "C#", keyboard_key: "w", stroke: "#555555", fill: "#4B4B4B", x: 60, y: 0, width: 40, height: 280},
	{ id: "octave-1-D#-key", class: "piano-key black-key", data_key: "D#", keyboard_key: "e", stroke: "#555555", fill: "#4B4B4B", x: 140, y: 0, width: 40, height: 280},
	{ id: "octave-1-F#-key", class: "piano-key black-key", data_key: "F#", keyboard_key: "t", stroke: "#555555", fill: "#4B4B4B", x: 300, y: 0, width: 40, height: 280},
	{ id: "octave-1-G#-key", class: "piano-key black-key", data_key: "G#", keyboard_key: "y", stroke: "#555555", fill: "#4B4B4B", x: 380, y: 0, width: 40, height: 280},
	{ id: "octave-1-A#-key", class: "piano-key black-key", data_key: "A#", keyboard_key: "u", stroke: "#555555", fill: "#4B4B4B", x: 460, y: 0, width: 40, height: 280},

	{ id: "octave-2-C-key", class: "piano-key white-key", data_key: "C", keyboard_key: "k", stroke: "#555555", fill: "#FFFFF7", x: 560, y: 0, width: 80, height: 400},
	{ id: "octave-2-D-key", class: "piano-key white-key", data_key: "D", keyboard_key: "l", stroke: "#555555", fill: "#FFFFF7", x: 640, y: 0, width: 80, height: 400},
	{ id: "octave-2-E-key", class: "piano-key white-key", data_key: "E", keyboard_key: ";", stroke: "#555555", fill: "#FFFFF7", x: 720, y: 0, width: 80, height: 400},
	{ id: "octave-2-F-key", class: "piano-key white-key", data_key: "F", keyboard_key: "/'", stroke: "#555555", fill: "#FFFFF7", x: 800, y: 0, width: 80, height: 400},
	{ id: "octave-2-C#-key", class: "piano-key black-key", data_key: "C#", keyboard_key: "o", stroke: "#555555", fill: "#4B4B4B", x: 620, y: 0, width: 40, height: 280},
	{ id: "octave-2-D#-key", class: "piano-key black-key", data_key: "D#", keyboard_key: "p", stroke: "#555555", fill: "#4B4B4B", x: 700, y: 0, width: 40, height: 280}

]

var margin = {top: 40, right: 20, bottom: 30, left: 40},
	width = 960 - margin.left - margin.right,
	height = 500 - margin.top - margin.bottom;

	var x = d3.scaleBand()
	          .range([0, width])
	          .padding(0.1);
	var y = d3.scaleLinear()
	          .range([height, 0]);

	var svg = d3.select("#keyboard").append("svg")
			    .attr("width", width + margin.left + margin.right)
			    .attr("height", height + margin.top + margin.bottom)
			  .append("g")
			    .attr("transform",
					  "translate(" + margin.left + "," + margin.top + ")");

svg.selectAll(".key")
	  .data(svg_keys)
	.enter().append("rect")
	  .attr("class", function(d) {
	  	return d.class; })
	  .attr("id", function(d) { return d.id })
	  .attr("x", function(d) {
	  	return d.x;
	  })
	  .attr("width", function(d) {
	  	return d.width;
	  })
	  .attr("y", function(d) { return d.y; })
	  .attr("height", function(d) {
	  	return d.height;
	  })
	  .attr("stroke", function(d) { return d.stroke; })
	  .attr("fill", function(d) { return d.fill });

svg.selectAll(".black-key .white-key")
	.data(svg_keys)
	.enter().append("text")
	.attr("x", function(d) {
		if(d.class.includes("black-key")){
			return d.x + 15;
		}
		return d.x + 15;
	})
	.attr("y", function(d) {
		if(d.class.includes("black-key")){
			return d.y + 240;
		}
		return d.y + 360;
	})
	.attr("font-family", "helvetica")
	.attr("fill", function(d) {
		if(d.class.includes("black-key")){
			return "white";
		}
		return "black";
	})
	.text( function (d) {
		return d.keyboard_key;
	});


let on_screen_keys = {"1-C":true,"1-C#":true,"1-D":true,"1-D#":true,"1-E":true,"1-F":true,"1-F#":true,"1-G":true,"1-G#":true,"1-A":true,"1-A#":true,"1-B":true,"2-C":true,"2-C#":true,"2-D":true,"2-D#":true,"2-E":true,"2-F":true};
const MIDIMAP = generateMIDIMAP();

var key_list = [];

var KEYLISTMAX = 10;

// generates the midi map from 0: 1-C to 120: 12-C
function generateMIDIMAP() {
	let notes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
	midimap = {};
	for (i = 0; i <= 120; i++) {
		midimap[i] =  Math.floor(i/12 - 1).toString() + "-" + notes[i % 12];
	}
	return midimap;
}

function fillToFive(input_str){
	if(input_str.length > 5){
		return input_str
	}
	for(var i = input_str.length; i < 5; i++){
		input_str = "&nbsp" + input_str;
	}
	return input_str;
}

function updateKeyList(new_key) {
	key_list.push(new_key);
	var svg_id = findSVGKey(new_key).replace("#", "\\#");
	var curr_key = d3.select("#" + svg_id);
	var pre_press_fill = curr_key.attr("fill")

	curr_key
	.transition().duration(0)
      .style("fill", "green")
    .transition().duration(1000)
      .style("fill", pre_press_fill)
}

function findSVGKey(key_name) {
	if (!(key_name in on_screen_keys)) {
		key_name = "1-" + key_name.split("-")[1];
	}
	return "octave-" + key_name + "-key";
}

function keyListToString() {
	ret_string = ""
	var start_index = (key_list.length - KEYLISTMAX) < 0 ?
		              0 : key_list.length - KEYLISTMAX
	for (i = start_index; i < key_list.length; i++){
		if(i == key_list.length - 1){
			ret_string += " <span id='currentKey'>" + fillToFive(key_list[i]) + "</span>"
		} else {
			ret_string += fillToFive(key_list[i]);
		}
	}
	return ret_string;
}

// Processes heats and graphs. Does not process sounds. Called every key up and
// down event. should deal with both keyboard and midi
// new_key_down: if this is a keydown event, includes the new (musical) key (eg: 2-C)
// holding: contains all the (musical) keys still playing (eg: 2-C)
function updatePlayer(new_key_down, holding) {
  // hold note longer if it is in holding
  // process audio here too so we don't get multiple notes for one keydown
	updateHeat(new_key_down, holding);
  if (new_key_down) {
    updateKeyList(new_key_down);
		// majorScaleValues(key_heats);
		$("#key_stream").html(keyListToString());
  }
}


var svg = d3.select('#svg-keyboard')

navigator
  .requestMIDIAccess()
  .then(
    midi => {
    	var FIRST = midi.inputs.values().next().value;
			FIRST.addEventListener('midimessage', midiHandler);
    }
  );

function midiHandler (msg) {
	if (msg.data && msg.data.length >= 3) {
		let isKeyDown = msg.data[0] == 144;
		let isKeyUp = msg.data[0] == 128;

		let keyIndex = msg.data[1];
		let note = keyIndex in MIDIMAP ? MIDIMAP[keyIndex] : null;
		let velocity = msg.data[2];
		let delay = 0;
		if(isKeyDown){
			MIDI.setVolume(0, 100);
			MIDI.noteOn(0, keyIndex, velocity, delay);
			notePressHandler(note, true);
		} else if (isKeyUp) {
			MIDI.noteOff(0, keyIndex, delay);
			notePressHandler(note, false);
		}
	}
}
*/

var keys = {
	"a": "3-C",
	"w": "3-C#",
	"s": "3-D",
	"e": "3-D#",
	"d": "3-E",
	"f": "3-F",
	"t": "3-F#",
	"g": "3-G",
	"y": "3-G#",
	"h": "3-A",
	"u": "3-A#",
	"j": "3-B",
	"k": "4-C",
	"o": "4-C#",
	"l": "4-D",
	"p": "4-D#",
	";": "4-E",
	"'": "4-F"
};

let listeners = [];
function callListeners(new_key, is_key_down, held_keys) {
	for (let i = 0; i < listeners.length; ++i) {
		listeners[i](new_key, is_key_down, held_keys);
	}
}

function addListener() {
	for (let i = 0; i < arguments.length; ++i) {
		listeners.push(arguments[i]);
	}
}

// updates a dictionary of musical notes (eg: 2-C) with keydown / keyup events
// should be ambiguous as to where the input comes from (keybaord, MIDI)
function notePressHandler(note, down) {
	if (typeof notePressHandler.map === 'undefined') {
		notePressHandler.map = {};
	}
	let new_key_down = !notePressHandler.map[note] && down ? note : null;
	notePressHandler.map[note] = down;
	if (new_key_down || !down) {
		callListeners(note, down, Object.keys(notePressHandler.map).filter(key => notePressHandler.map[key]));
	}
}

function initialize() {
	$('body').on('keydown', function (e) {
		let note = e.key in keys ? keys[e.key] : null;
		notePressHandler(note, true);
	});

	$('body').on('keyup', function (e) {
		let note = e.key in keys ? keys[e.key] : null;
		notePressHandler(note, false);
	});
}

module.exports = {
	addListener,
	initialize
};

},{}],3:[function(require,module,exports){
function generateMIDIMAP() {
    let notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    midimap = {};
    for (i = 0; i <= 120; i++) {
        midimap[Math.floor(i / 12 - 1).toString() + "-" + notes[i % 12]] = i;
    }
    return midimap;
}

const delay = 0; // play one note every quarter second
const note = 50; // the MIDI note
const velocity = 127; // how hard the note hits

const key_note_map = generateMIDIMAP();

function initialize() {
    MIDI.loadPlugin({
        soundfontUrl: "js/midi/",
        instrument: "acoustic_grand_piano",
        onsuccess: function () {
            MIDI.setVolume(0, 100);
        }
    });
}

function keyEvent(new_key, is_key_down, held_keys, new_velocity = velocity, new_delay = delay) {
    if (is_key_down) {
        MIDI.noteOn(0, key_note_map[new_key], new_velocity, new_delay);
    } else {
        MIDI.noteOff(0, key_note_map[new_key], new_delay);
    }
}

module.exports = {
    initialize,
    keyEvent
};

},{}]},{},[1]);
