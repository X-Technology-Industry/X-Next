import { request } from "@/utils/request";

export const  handler = async (req:any, res:any)=> {
    try {
        const respones = await request({url:'/page/robots',method:"GET"}) as  { text: any}
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.send(respones.text)
    } catch (error) {
        
    }
}

export default handler