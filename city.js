class City {
    constructor(object, aboutText, name, isHide){
        this.object = object;
        this.aboutText = aboutText
        this.name = name;
        this.isHide = isHide;
    }

    isCityhidden(){
        return this.isHide;
    }
}
