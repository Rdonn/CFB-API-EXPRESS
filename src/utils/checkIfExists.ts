import { isUndefined } from "util";


export function checkIfExist(values: any[],names: string[]): [boolean, string]{
    if(values.length != names.length){
        return; 
    }
    var returnString = ''; 
    var isLegit = true; 
    
    values.forEach((value, index)=>{
        if (isUndefined(value)){
            isLegit = false; 
            returnString += `${names[index]} is undefined `; 
        }
    })

    return [isLegit, returnString]; 
}