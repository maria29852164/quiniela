import {NextRequest, NextResponse} from "next/server";
import {client} from "@/app/supabase/client";

export  async function  middleware(req:NextRequest){

    const session = await client.auth.getSession();
    if (!session.data.session ) {
        const url = req.nextUrl.clone()
        url.pathname = '/login'
        return NextResponse.redirect(url)
    }else{
        return NextResponse.next()
    }

}

export const config={
    matcher: ['/dashboard','/quiniela','/'],
}