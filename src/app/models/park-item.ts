export class ParkItem {
    public name: string;
    public address: string;
    public pictureUrl: string;
    public rating: number;
    public id: string;
    public isOpenNow: boolean;
    public onClick?: Function;
    public onHover?: Function;
    public isActive: boolean;
}
