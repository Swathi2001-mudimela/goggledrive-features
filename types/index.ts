export interface ICollectionResponse<T>{
    data:T;

}

export interface IPagination{
    page:number;
    pagesize:number;
    pageCount:number;
    total:number;
}
export interface IResourceMeta{
    pagination:IPagination;
}
export interface ICollectionResponse<T>{
    data:T;
    meta:IResourceMeta;
}

export interface Ifirstpage{
    id:number;
    attributes: IfirstpageAttribute;
}
export interface IfirstpageAttribute{
    Title:String;
    description:string;
    Slug:String;
}