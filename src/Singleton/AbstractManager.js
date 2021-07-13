
export class AbstractManager {
	static _instance;
	// Counter to track the number of subscribers
	subscribersCount = 0;
	timers = [];
	intervals = [];

	subscribe() {
		this.subscribersCount++;
		if (!this.constructor._instance) this.constructor._instance = this;
		return this.unsubscribeHandler;
	}

	unsubscribeHandler = () => {
		this.subscribersCount--;
		if (this.subscribersCount === 0) {
			this.clearAllTimers();
			this.clearAllIntervals();
			this.constructor._instance = null;
			// Object.setPrototypeOf(this.constructor.prototype, Object.create(null));
		}
	}
	setTimeout(handler, ms) {
		const timerId = window.setTimeout(handler, ms);
		this.timers.push(timerId);
		return timerId;
	}

	setInterval(handler, ms) {
		const intervalId = window.setInterval(handler, ms);
		this.intervals.push(intervalId);
		return intervalId;
	}
	clearTimeout(timerId) {
		window.clearTimeout(timerId);
		this.timers = this.timers.filter(_timerId => _timerId !== timerId);
	}
	clearInterval(intervalId) {
		window.clearInterval(intervalId);
		this.intervals = this.intervals.filter(_intervalId => _intervalId !== intervalId);
	}
	clearAllTimers() {
		this.timers.forEach(timerId => window.clearTimeout(timerId));
	}
	clearAllIntervals() {
		this.intervals.forEach(intervalId => window.clearInterval(intervalId));
	}
}