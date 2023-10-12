export interface UpdateMovie{
    id:Number;
    name:string;
    director:string;
    genre:string;
    releaseDate:Date;
    movieImage: File|null;
}