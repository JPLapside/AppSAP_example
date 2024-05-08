export interface Gallery {
    id: number;
    previewURL: string;
    previewWidth: number;
    previewHeight: number;
}


export interface APIreponse{
    hits: Gallery [];
    total: number;
    totalHits: number;
}