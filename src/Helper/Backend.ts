/*
 * DO NOT MODIFY THIS FILE!
 * */
import type { Response } from "../type/Response"
import type { User } from "../type/user"

const SendRegitrationForm = async(data: User):Promise<Response>=>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
			let res: Response = {
				error: false,
				message: "Registration sucessful"
			}
			for(const info in data ){
				if (data[info] === null || data[info] === undefined || data[info].length < 1){
					res.error = true
					res.message = `${info} is not valid`
					resolve(res)
				}
			}
			resolve(res)
		},3000)
	})
}

export {
	SendRegitrationForm
}
