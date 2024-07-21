
// Dashboard
document.addEventListener('DOMContentLoaded', function () {
	const infoArea = document.getElementById('info');
	// Current date and time
	const now = new Date();
	const dateTimeInfo = {
		date: now.toLocaleDateString(),
		time: now.toLocaleTimeString()
	};
	// Collect basic info
	const basicInfo = {
		userAgent: navigator.userAgent,
		platform: navigator.platform,
		cookiesEnabled: navigator.cookieEnabled,
		screenResolution: `${window.screen.width}x${window.screen.height}`,
		colorDepth: window.screen.colorDepth,
		language: navigator.language,
		timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
	};
	// Collect environmental data if supported
	const environmentalData = {
		deviceMemory: navigator.deviceMemory || 'unknown',
		hardwareConcurrency: navigator.hardwareConcurrency || 'unknown',
		connectionType: navigator.connection ? navigator.connection.effectiveType : 'unknown'
	};
	// Function to display information in blocks
	function displayInfo(title, data) {
		const block = document.createElement('div');
		block.className = 'info-block';
		block.innerHTML = `<h2>${title}</h2><pre>${JSON.stringify(data, null, 2)}</pre>`;
		infoArea.appendChild(block);
	}
	// Display collected info
	displayInfo('Date and Time', dateTimeInfo);
	displayInfo('User Agent and Platform', basicInfo);
	displayInfo('Environmental Data', environmentalData);
	// Request and display location data
	if ('geolocation' in navigator) {
		navigator.geolocation.getCurrentPosition(function (position) {
			displayInfo('GPS Location', {
				latitude: position.coords.latitude,
				longitude: position.coords.longitude
			});
		}, function (error) {
			displayInfo('GPS Location', { error: error.message });
		});
	}
	// Display battery status if supported
	if ('getBattery' in navigator) {
		navigator.getBattery().then(function (battery) {
			const batteryInfo = {
				level: battery.level * 100 + '%',
				charging: battery.charging
			};
			displayInfo('Battery Status', batteryInfo);
		});
	}
	// Ambient light sensor data
	if ('AmbientLightSensor' in window) {
		const sensor = new AmbientLightSensor();
		sensor.onreading = () => {
			displayInfo('Ambient Light', { illuminance: sensor.illuminance });
		};
		sensor.onerror = (event) => {
			displayInfo('Ambient Light', { error: event.error.name, message: event.error.message });
		};
		sensor.start();
	}
});