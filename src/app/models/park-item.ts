export class ParkItem {
    public name: string;
    public id: string;
    public onClick?: Function; // todo: rename to setActive?
    public onHover?: Function;
    public isActive: boolean;
}
