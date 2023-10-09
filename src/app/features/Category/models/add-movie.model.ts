export interface AddMovie{
    Name:string
    Director:string;
    Genre:string;
    ReleaseDate:Date;
    MovieImage: File|null;
}