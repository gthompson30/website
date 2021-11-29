var files = {
	"about.txt": `----------------------------------------------------------------
				 Hi, I'm Gabriel Thompson. I'm a programmer and web developer living in New York City. I'm currently a Junior attending Stuyvesant High School. My hobbies outside of CS include long-distance cycling, vexillography, geography, and music composition.
				 ----------------------------------------------------------------`,
	"links.txt": "",
	"projects.txt": "",
	"contact.txt": ""
};

files['about.txt'] = `
------------------------------------------------------------------------------
Hi, I'm Gabriel Thompson. I'm a programmer and web developer living in New York City
`;

var WIDTH = 50;

$(document).ready(function() {

	setTimeout(function(){
		$('body').addClass('loaded');
		$('.crt').css('visibility', 'visible');
	}, 1000);
});

$('body').terminal({
    hello: function(what) {
        this.echo('Hello, ' + what +
                  '. Wellcome to this terminal.');
    },
    sayhi: function() {
		this.echo('hi');
    },
    greetings: function() {
		this.echo('GabrielOS [Version 12.27.05]\n&#127279; 2021 GABE.BIZ. Rights not really reserved.\nPsst... try running "ls"')
   	},
   	ls: function() {
   		for (var file in files) {
   			this.echo(teal(file));
   		}
   	},
   	cat: function(file) {
		if (files[file] != undefined) {
		    this.echo(files[file]);
		} else {
		   	this.echo("cat: " + file + ": No such file or directory");
		}
	}
}, {
    greetings: ' .d8888b.           888              d8b          S88      .d88888b.   .d8888b.  \n' +
		'd88P  Y88b          888              Y8P          888     d88P" "Y88b d88P  Y88b \n' +
		'888    888          888                           888     888     888 Y88b.      \n' +
		'888         8888b.  88888b.  888d888 888  .d88b.  888     888     888  "Y888b.   \n' +
		'888  88888     "88b 888 "88b 888P"   888 d8P  Y8b 888     888     888     "Y88b. \n' +
		'888    888 .d888888 888  888 888     888 88888888 888     888     888       "888 \n' +
		'Y88b  d88P 888  888 888 d88P 888     888 Y8b.     888     Y88b. .d88P Y88b  d88P \n' +
		' "Y8888P88 "Y888888 88888P"  888     888  "Y8888  888      "Y88888P"   "Y8888P" \n\n' + 'GabrielOS [Version 12.27.05]\n&#127279; 2021 GABE.BIZ. Rights not really reserved.\nPsst... try running "ls"\n'
});

function teal(message) {
    return "[[gb;teal;black]" + message + "]";
}

/*
$('body').terminal({
    hello: function(what) {
        this.echo('Hello, ' + what +
                  '. Wellcome to this terminal.');
    }
}, {
    greetings: 'GabrielOS [Version 12.27.05]\n&#127279; 2021 GABE.BIZ. Rights not really reserved.\nPsst... try running "ls"'
});
*/
