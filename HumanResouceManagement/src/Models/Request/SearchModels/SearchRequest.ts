import {Filter} from "./Filter";
import {SortByInfo}from "./SortByInfo";


export class SearchRequest { 
    PageIndex: number | undefined;
    PageSize:number | undefined;
    Filters:Filter[]| undefined;
    SortByInfo:SortByInfo|undefined;
}