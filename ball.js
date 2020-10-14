(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(4,1,1).p("AEYAAQAAB0hSBSQhSBSh0AAQhzAAhShSQhShSAAh0QAAhzBShSQBShSBzAAQB0AABSBSQBSBSAABzg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#660000").s().p("AjFDGQhShSAAh0QAAhzBShSQBShSBzAAQB0AABSBSQBSBSAABzQAAB0hSBSQhSBSh0AAQhzAAhShSg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


// stage content:
(lib.ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.circle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(52.7,344,1.643,1.804,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:62.7,y:333},0).wait(1).to({x:74.7,y:318.5},0).wait(1).to({x:87.7,y:305.5},0).wait(1).to({x:100.7,y:285},0).wait(1).to({x:113.2,y:270},0).wait(1).to({x:129.2,y:257},0).wait(1).to({x:143.2,y:244.5},0).wait(1).to({x:159.7,y:228.5},0).wait(1).to({x:172.2,y:235},0).wait(1).to({x:186.7,y:248},0).wait(1).to({x:197.2,y:264.5},0).wait(1).to({x:209.7,y:281},0).wait(1).to({x:220.7,y:293.5},0).wait(1).to({x:230.7,y:305.5},0).wait(1).to({x:242.2,y:319},0).wait(1).to({x:253.2,y:332.5},0).wait(1).to({x:265.2,y:345},0).wait(1).to({x:276.7,y:335},0).wait(1).to({x:289.2,y:321.5},0).wait(1).to({x:303.7,y:305},0).wait(1).to({x:317.2,y:290},0).wait(1).to({x:332.2,y:274.5},0).wait(1).to({x:346.7,y:258.5},0).wait(1).to({x:373.7,y:237.5},0).wait(1).to({x:391.7,y:247},0).wait(1).to({x:407.7,y:262},0).wait(1).to({x:420.2,y:277.5},0).wait(1).to({x:433.7,y:293.5},0).wait(1).to({x:456.2,y:309.5},0).wait(1).to({x:472.7,y:329},0).wait(1).to({x:495.2,y:342.5},0).wait(1).to({startPosition:0},0).wait(1).to({x:486.7,y:334},0).wait(1).to({x:473.2,y:323.5},0).wait(1).to({x:460.2,y:312.5},0).wait(1).to({x:443.7,y:301.5},0).wait(1).to({x:425.2,y:285.5},0).wait(1).to({x:414.2,y:294},0).wait(1).to({x:406.2,y:305.5},0).wait(1).to({x:397.2,y:319.5},0).wait(1).to({x:386.2,y:334.5},0).wait(1).to({x:375.2,y:347},0).wait(1).to({x:363.2,y:335},0).wait(1).to({x:351.7,y:321.5},0).wait(1).to({x:334.2,y:311},0).wait(1).to({x:320.7,y:296},0).wait(1).to({x:307.7,y:282.5},0).wait(1).to({x:296.2,y:269},0).wait(1).to({x:284.7,y:254},0).wait(1).to({x:272.7,y:262.5},0).wait(1).to({x:261.7,y:278.5},0).wait(1).to({x:253.7,y:293},0).wait(1).to({x:245.7,y:306.5},0).wait(1).to({x:235.7,y:320.5},0).wait(1).to({x:226.2,y:335},0).wait(1).to({x:213.2,y:346.5},0).wait(1).to({x:203.2,y:328.5},0).wait(1).to({x:191.2,y:315},0).wait(1).to({x:182.2,y:304.5},0).wait(1).to({x:169.2,y:293},0).wait(1).to({x:152.7,y:300},0).wait(1).to({x:140.7,y:312.5},0).wait(1).to({x:128.7,y:326},0).wait(1).to({x:116.2,y:339},0).wait(1).to({x:103.2,y:349.5},0).wait(1).to({x:86.7,y:339.1},0).wait(1).to({x:71.2},0).wait(1).to({x:55.2},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(278.1,490.1,98.9,107.9);
// library properties:
lib.properties = {
	id: '632D4FC28FF32B4CAAEAACAF416BB3B6',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['632D4FC28FF32B4CAAEAACAF416BB3B6'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;