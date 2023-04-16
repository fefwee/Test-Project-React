interface User {
    users {
        id:number,
        name:string,
        status:string,
        followed:boolean,
        location{
            country:string,
            city:string
        }
    }
}

export {User}