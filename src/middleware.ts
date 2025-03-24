import { NextRequest, NextResponse } from "next/server";
import { Language } from "@/utils/types/day";
import { defaultLanguage } from "./utils/constants";

// Define supported languages
const SUPPORTED_LANGUAGES = Object.values(Language); // ['en', 'ar']

export function middleware(req: NextRequest) {
    const { nextUrl } = req;
    const pathname = nextUrl.pathname;

    // Extract language from URL
    const currentLang = pathname.split("/")[1];

    // check if the current language is supported, redirect to default if not
    if (!SUPPORTED_LANGUAGES.includes(currentLang as Language)) {
        return NextResponse.redirect(new URL(`/${defaultLanguage}${pathname}`, req.url));
    }

    return NextResponse.next();
}

// Apply middleware to all routes except Next.js API routes, static files, etc.
export const config = {
    matcher: "/((?!_next|api|static|favicon.ico).*)",
};
