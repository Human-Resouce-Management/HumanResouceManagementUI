// @ts-ignore
import {Filter} from "../../../../src/components/maynghien/BaseModels/Filter.js";
// @ts-ignore
import {SortByInfo} from "../BaseModels/SortByInfo.js";


export class SearchRequest {
    
    PageIndex: number | undefined;
    PageSize:number |undefined;
    filters:Filter[]|undefined;
    SortByInfo:SortByInfo|undefined;
}