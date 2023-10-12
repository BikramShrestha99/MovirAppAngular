export interface AddMovie{
    Name:string
    Director:string;
    Genre:string;
    ReleaseDate:Date|null;
    MovieImage: File|null;
}