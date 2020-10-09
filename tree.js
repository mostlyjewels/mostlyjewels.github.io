(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.lef2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#669933").s().p("AgIAoQgDgQgBgYQABgXADgRQAEgRAEAAQAFAAADARQAFARAAAXQAAAYgFAQQgDARgFABQgEgBgEgRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lef2, new cjs.Rectangle(-1.2,-5.7,2.5,11.5), null);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lef2();
	this.instance.parent = this;
	this.instance.setTransform(33.8,-0.2);

	this.instance_1 = new lib.lef2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-33.7,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-6,70,12);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lef2();
	this.instance.parent = this;
	this.instance.setTransform(33.8,-37.7);

	this.instance_1 = new lib.lef2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-33.7,37.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-43.5,70,87);


// stage content:
(lib.tree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// leaf4
	this.instance = new lib.lef2();
	this.instance.parent = this;
	this.instance.setTransform(179.1,205);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:179,y:206.5},0).wait(1).to({x:178.9,y:208.1},0).wait(1).to({y:209.7},0).wait(1).to({y:211.3},0).wait(1).to({y:212.9},0).wait(1).to({y:214.5},0).wait(1).to({y:216.1},0).wait(1).to({x:179,y:217.7},0).wait(1).to({y:219.3},0).wait(1).to({x:179.1,y:220.9},0).wait(1).to({x:179.2,y:222.4},0).wait(1).to({x:179.3,y:224},0).wait(1).to({x:179.4,y:225.6},0).wait(1).to({x:179.6,y:227.2},0).wait(1).to({x:179.7,y:228.8},0).wait(1).to({x:179.9,y:230.4},0).wait(1).to({x:180.1,y:232},0).wait(1).to({x:180.3,y:233.5},0).wait(1).to({x:180.5,y:235.1},0).wait(1).to({x:180.8,y:236.7},0).wait(1).to({x:181.1,y:238.2},0).wait(1).to({x:181.3,y:239.8},0).wait(1).to({x:181.6,y:241.4},0).wait(1).to({x:181.9,y:242.9},0).wait(1).to({x:182.3,y:244.5},0).wait(1).to({x:182.6,y:246},0).wait(1).to({x:183,y:247.6},0).wait(1).to({x:183.4,y:249.1},0).wait(1).to({x:183.8,y:250.7},0).wait(1).to({x:184.2,y:252.2},0).wait(1).to({x:184.6,y:253.7},0).wait(1).to({x:185.1,y:255.3},0).wait(1).to({x:185.5,y:256.8},0).wait(1).to({x:186,y:258.3},0).wait(1).to({x:186.5,y:259.8},0).wait(1).to({x:187,y:261.3},0).wait(1).to({x:187.6,y:262.8},0).wait(1).to({x:188.1,y:264.3},0).wait(1).to({x:188.7,y:265.8},0).wait(1).to({x:189.3,y:267.3},0).wait(1).to({x:189.9,y:268.8},0).wait(1).to({x:190.5,y:270.2},0).wait(1).to({x:191.1,y:271.7},0).wait(1).to({x:191.8,y:273.1},0).wait(1).to({x:192.4,y:274.6},0).wait(1).to({x:193.1,y:276},0).wait(1).to({x:193.8,y:277.5},0).wait(1).to({x:194.5,y:278.9},0).wait(1).to({x:195.2,y:280.3},0).wait(1).to({x:196,y:281.7},0).wait(1).to({x:196.7,y:283.1},0).wait(1).to({x:197.5,y:284.5},0).wait(1).to({x:198.3,y:285.9},0).wait(1).to({x:199.1,y:287.3},0).wait(1).to({x:199.9,y:288.6},0).wait(1).to({x:200.7,y:290},0).wait(1).to({x:201.6,y:291.4},0).wait(1).to({x:202.4,y:292.7},0).wait(1).to({x:203.3,y:294},0).wait(1).to({x:204.2,y:295.4},0).wait(1).to({x:205,y:296.7},0).wait(1).to({x:205.9,y:298},0).wait(1).to({x:206.9,y:299.3},0).wait(1).to({x:207.8,y:300.6},0).wait(1).to({x:208.7,y:301.9},0).wait(1).to({x:209.7,y:303.1},0).wait(1).to({x:210.6,y:304.4},0).wait(1).to({x:211.6,y:305.7},0).wait(1).to({x:212.6,y:306.9},0).wait(1).to({x:213.6,y:308.2},0).wait(1).to({x:214.6,y:309.4},0).wait(1).to({x:215.6,y:310.6},0).wait(1).to({x:216.7,y:311.8},0).wait(1).to({x:217.7,y:313},0).wait(1).to({x:218.7,y:314.2},0).wait(1).to({x:219.8,y:315.4},0).wait(1).to({x:220.9,y:316.6},0).wait(1).to({x:221.9,y:317.8},0).wait(1).to({x:223,y:318.9},0).wait(1).to({x:224.1,y:320.1},0).wait(1).to({x:225.2,y:321.2},0).wait(1).to({x:226.3,y:322.4},0).wait(1).to({x:227.5,y:323.5},0).wait(1).to({x:228.6,y:324.6},0).wait(1).to({x:229.7,y:325.7},0).wait(1).to({x:230.9,y:326.8},0).wait(1).to({x:232,y:327.9},0).wait(1).to({x:233.2,y:329},0).wait(1).to({x:234.4,y:330.1},0).wait(1).to({x:235.5,y:331.2},0).wait(1).to({x:236.7,y:332.2},0).wait(1).to({x:237.9,y:333.3},0).wait(1).to({x:239.1,y:334.3},0).wait(1).to({x:240.3,y:335.4},0).wait(1).to({x:241.5,y:336.4},0).wait(1).to({x:242.8,y:337.4},0).wait(1).to({x:244,y:338.4},0).wait(1).to({x:245.2,y:339.4},0).wait(1).to({x:246.5,y:340.4},0).wait(1).to({x:247.7,y:341.4},0).wait(1).to({x:249,y:342.4},0).wait(1).to({x:250.2,y:343.4},0).wait(1).to({x:251.5,y:344.4},0).wait(1).to({x:252.7,y:345.3},0).wait(1).to({x:254,y:346.3},0).wait(1).to({x:255.3,y:347.2},0).wait(1).to({x:256.6,y:348.2},0).wait(1).to({x:257.9,y:349.1},0).wait(1).to({x:259.2,y:350},0).wait(1).to({x:260.5,y:351},0).wait(1).to({x:261.8,y:351.9},0).wait(1).to({x:263.1,y:352.8},0).wait(1).to({x:264.4,y:353.7},0).wait(1).to({x:265.7,y:354.6},0).wait(1).to({x:267,y:355.5},0).wait(1).to({x:268.3,y:356.3},0).wait(1).to({x:269.7,y:357.2},0).wait(1).to({x:271,y:358.1},0).wait(1).to({x:272.4,y:358.9},0).wait(1).to({x:273.7,y:359.8},0).wait(1).to({x:275,y:360.6},0).wait(1).to({x:276.4,y:361.5},0).wait(1).to({x:277.8,y:362.3},0).wait(1).to({x:279.1,y:363.1},0).wait(1).to({x:280.5,y:364},0).wait(1).to({x:281.8,y:364.8},0).wait(1).to({x:283.2,y:365.6},0).wait(1).to({x:284.6,y:366.4},0).wait(1).to({x:286,y:367.2},0).wait(1).to({x:287.3,y:368},0).wait(1).to({x:288.7,y:368.8},0).wait(1).to({x:290.1,y:369.6},0).wait(1).to({x:291.5,y:370.3},0).wait(1).to({x:292.9,y:371.1},0).wait(1).to({x:294.3,y:371.9},0).wait(1).to({x:295.7,y:372.6},0).wait(1).to({x:297.1,y:373.4},0).wait(1).to({x:298.5,y:374.1},0).wait(1).to({x:299.9,y:374.9},0).wait(1).to({x:301.3,y:375.6},0).wait(1).to({x:302.7,y:376.3},0).wait(1).to({x:304.1,y:377.1},0).wait(1).to({x:305.6,y:377.8},0).wait(1).to({x:307,y:378.5},0).wait(1).to({x:308.4,y:379.2},0).wait(1).to({x:309.8,y:379.9},0).wait(1).to({x:311.2,y:380.6},0).wait(1).to({x:312.7,y:381.3},0).wait(1).to({x:314.1,y:382},0).wait(1).to({x:315.5,y:382.7},0).wait(1).to({x:317,y:383.4},0).wait(1).to({x:318.4,y:384.1},0).wait(1).to({x:319.9,y:384.8},0).wait(1).to({x:321.3,y:385.4},0).wait(1).to({x:322.8,y:386.1},0).wait(1).to({x:324.2,y:386.8},0).wait(1).to({x:325.6,y:387.4},0).wait(1).to({x:327.1,y:388.1},0).wait(1).to({x:328.6,y:388.7},0).wait(1).to({x:330,y:389.4},0).wait(1).to({x:331.5,y:390},0).wait(1).to({x:332.9,y:390.6},0).wait(1).to({x:334.4,y:391.3},0).wait(1).to({x:335.8,y:391.9},0).wait(1).to({x:337.3,y:392.5},0).wait(1).to({x:338.8,y:393.1},0).wait(1).to({x:340.2,y:393.7},0).wait(1).to({x:341.7,y:394.3},0).wait(1).to({x:343.2,y:395},0).wait(1).to({x:344.7,y:395.6},0).wait(1).to({x:346.1,y:396.2},0).wait(1).to({x:347.6,y:396.8},0).wait(1).to({x:349.1,y:397.3},0).wait(1).to({x:350.6,y:397.9},0).wait(1).to({x:352.1,y:398.5},0).wait(1).to({x:353.5,y:399.1},0).wait(1).to({x:355,y:399.7},0).wait(1).to({x:356.5,y:400.2},0).wait(1).to({x:358,y:400.8},0).wait(1).to({x:359.5,y:401.4},0).wait(1).to({x:361,y:401.9},0).wait(1).to({x:362.5,y:402.5},0).wait(1).to({x:364,y:403},0).wait(1).to({x:365.4,y:403.6},0).wait(1).to({x:366.9,y:404.1},0).wait(1).to({x:368.4,y:404.7},0).wait(1).to({x:369.9,y:405.2},0).wait(1).to({x:371.4,y:405.8},0).wait(1).to({x:372.9,y:406.3},0).wait(1).to({x:374.4,y:406.8},0).wait(1).to({x:375.9,y:407.4},0).wait(1).to({x:377.4,y:407.9},0).wait(1).to({x:378.9,y:408.4},0).wait(1).to({x:380.4,y:408.9},0).wait(1).to({x:382,y:409.4},0).wait(1).to({x:383.5,y:409.9},0).wait(1).to({x:385,y:410.4},0).wait(1).to({x:386.5,y:410.9},0).wait(1).to({x:388,y:411.5},0).wait(1).to({x:389.5,y:412},0).wait(1));

	// tree
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#669933").s().p("AmKHBIgPgMQhGg6gIhOQh1gIhWg0Qhjg9AAhXQAAhVBjg8QBLguBjgLQgig4AAhCQAAhxBfhOQBfhQCHAAQBsAABUA1QBPgyBpAAQCHAABfBVQBEA7AVBNQAOgBAPAAQB5AABVBAQBVBBAABcQAABbhVBBIgNAKQAIALAEANQAGASABAUQAABLheA1QgdAQghALIgCABQgOA7hGAuQhXA5h9AAQgqABgngIQgygIgqgVQg4AZhNAAIgNgBIgWgBQguAVg2AFQgQACgQAAQhnAAhLg2g");
	this.shape.setTransform(259.1,188.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663333").s().p("Ai/M9QCcsphos5IANABQBOAAA3gZQAqAVAyAIQhVM8CyMhg");
	this.shape_1.setTransform(266.8,317.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},200).wait(1));

	// leaf3
	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(263.1,195.6);

	this.instance_2 = new lib.Tween4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(267.5,406);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},140).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,x:267.5,y:406},140).wait(61));

	// leaf1
	this.instance_3 = new lib.lef2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(207.5,228.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:3240,guide:{path:[207.5,230,203.9,259.5,203.5,289.3,203.4,294,199.9,297.7,186.8,311.7,184.3,330.7,192.2,338.2,196.6,339.8,200.9,341.4,201.8,337.1,202.7,332.8,202.1,330.3,201.5,327.8,199.5,327,195.2,322.1,189,327,186.6,328.9,184.3,330.7,154.1,343.2,150.4,375.9,148.8,390.8,141.3,403]}},99).to({_off:true},101).wait(1));

	// leaf2
	this.instance_4 = new lib.lef2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(334.8,205.6,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-3645,guide:{path:[334.8,205.7,330.4,208.3,328.4,214.3,327,218.3,327,222.3,327,226.6,330.1,231.1,332.6,234.6,340,242,342.6,244.6,346.8,245.9,349.9,246.9,358.5,248.5,372.9,251.2,377.4,258.3,380.5,263.3,380.5,276.3,380.5,287.7,373.3,297.4,369.1,303.1,357.5,313.2,346.1,323,341.7,329.3,334.5,339.4,334.5,351.5,334.5,359.8,339,371.7,343.5,383.7,343.5,388.3,343.5,394.7,337.3,398.6,332.8,401.5,326.2,402.5]}},77).wait(124));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(452.8,338.6,161.9,261.4);
// library properties:
lib.properties = {
	id: 'A1A4444EC4A9EE49975BC60694CD6508',
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
an.compositions['A1A4444EC4A9EE49975BC60694CD6508'] = {
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