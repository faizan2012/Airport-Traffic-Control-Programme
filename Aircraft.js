function AirPlane() {
    this.state = ko.observable();
    this.name = ko.observable();
    this.location = ko.observable();
    this.takeOfftime = ko.observable();
    this.startTime = null;

    //set take off state
    this.takeOff = function (runWay) {
        this.runWay = runWay;
        this.state('Taking off');
    }

    
}