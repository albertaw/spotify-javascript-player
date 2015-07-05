describe("Track", function () {

	it ("should play song", function (done) {
		var track = new AUDIO.Track('3vWacNioW8NvENyObBZ6Vn');
		setTimeout(function () {
			track.play();
			expect(track.isPlaying()).toBeTruthy();
			track.stop();
			done();	
		}, 3000);
	});
	
	it("should pause song", function (done) {
		var track = new AUDIO.Track('3vWacNioW8NvENyObBZ6Vn');
		setTimeout(function () {
			track.play();
			track.pause();
			expect(track.isPlaying()).toBeFalsy();
			track.stop();
			done();
		}, 3000);
	});

	it("should resume song", function (done) {
		var track = new AUDIO.Track('3vWacNioW8NvENyObBZ6Vn');
		setTimeout(function () {
			track.play();
			track.pause();
		}, 3000);
		setTimeout(function () {
			track.resume();
			expect(track.isPlaying()).toBeTruthy();
			track.stop()
			done();
		}, 3000);
		
	});

	it("it should mute", function (done) {
		var track = new AUDIO.Track('3vWacNioW8NvENyObBZ6Vn');
		
		setTimeout(function () {
			track.play();
			track.mute();
			console.log('muted');
			expect(track.isMute()).toBeTruthy();
			track.unmute();
			console.log('unmuted');
			expect(track.isMute()).toBeFalsy();
			track.stop();
			done();
		}, 2000);
		
	});


});

