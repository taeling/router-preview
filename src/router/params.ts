import { ParamGetSet } from "@kitbag/router"

type SortDirection = 'asc' | 'desc'

function isSortDirection(value: unknown): value is SortDirection {
  return !!value && typeof value === 'string' && ['asc', 'desc'].includes(value)
}

export const sortParam:ParamGetSet<SortDirection> = {
  get: (value, {invalid}) => {
    if(value === undefined){
      return 'asc'
    }
    
    if(isSortDirection(value)){
      return value as SortDirection
    }
    
    throw invalid(`value provided does not satisfy `)
  },
  set: (value, {invalid}) => {
    if(value === undefined){
      return 'asc'
    }
  
    if(isSortDirection(value)){
      return value
    }
  
    throw invalid(`value provided does not satisfy `)
  }
}