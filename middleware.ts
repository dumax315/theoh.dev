import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// doesn't work
export function middleware(request: NextRequest) {   
  const url = request.nextUrl.clone()   
  console.log(url.pathname)
  if (url.pathname === '/GroupNewTab') {
    url.pathname = 'https://chrome.google.com/webstore/detail/group-tab-saver-new-tab/aoficjpojclhhkpfgmeeenmknpnbagak'
    return NextResponse.redirect(url)   
  } 
}