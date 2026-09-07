import { Header } from "@/components/layout/Header";
import { CeoMessage } from "@/components/sections/CeoMessage";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="flex flex-col items-center justify-center px-8 py-20 text-center">
          <h1 className="text-2xl font-semibold text-ink">Narola Infotech — Landing Page</h1>
          <p className="mt-2 text-sm text-slate">
            Project initialized. Core sections in development.
          </p>
        </div>

        {/* CEO Message Section above the footer */}
        <CeoMessage />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
