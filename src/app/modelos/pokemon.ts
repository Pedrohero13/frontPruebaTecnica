export interface Pokemon {
    id:number,
    name: string,
    abilities:[{
        ability:{
            name: string,
            url: string
        }
    }],
    types:[{
        type:{
            name:string,
            url: string
        }
    }]
}
