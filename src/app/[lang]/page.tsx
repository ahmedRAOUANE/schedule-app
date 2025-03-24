import DayTracker from "@/components/day-tracker";
import { Language } from "@/utils/types/day";

export default async function Home({params}: {params: Promise<{lang: Language}>}) {
  const {lang} = await params;

  return (
    <main className="p-6 mx-auto container md:max-w-6xl">
      <DayTracker lang={lang} />
    </main>
  );
}

