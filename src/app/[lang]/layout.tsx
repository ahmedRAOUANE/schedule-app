import Header from '@/components/header'
import Navbar from '@/components/navbar'
import { loadTranslation } from '@/utils/load-transloation'
import { Language } from '@/utils/types/language'

const Layout = async ({ children, params }: { children: React.ReactNode, params: Promise<{ lang: Language }> }) => {
    const { lang } = await params;

    const translation = await loadTranslation(lang);

    return (
        <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
            <body>
                <div className='min-h-screen py-16 px-2'>
                    <Header lang={lang} translation={translation} />

                    <main className="mx-auto container md:max-w-6xl">
                        {children}
                    </main>

                    <Navbar translations={translation} lang={lang} />
                </div>
            </body>
        </html>
    )
}

export default Layout