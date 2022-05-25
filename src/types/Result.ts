import { GenericType, Type } from "typescript";
import { status } from "../enums/status";

export type Result = {
    status : status,
    message : string,
    content? : any
}   