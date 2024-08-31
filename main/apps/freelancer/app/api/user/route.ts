import { getServerSession } from "next-auth"
import { NextResponse } from "next/server";
import { authOptions } from "../../lib/auth";
import { useRouter } from "next/router";
import { useState } from "react";

export const GET = async () => {
    const session = await getServerSession(authOptions);
  
    const router=useRouter();
    if (session?.user) {
        return router.push("/dashboard");
    } else {
        return NextResponse.json({
            message: "You are not logged in"
        }, {
            status: 403
        });
    }
   
   
     
    // if (session.user) {
    //     return NextResponse.json({
    //         user: session.user
    //     })
    // }
    // return NextResponse.json({
    //     message: "You are not logged in"
    // }, {
    //     status: 403
    // })
}