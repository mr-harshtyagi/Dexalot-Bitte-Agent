"use client";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="px-4 pt-16 pb-24 md:pt-32 md:pb-32 relative overflow-hidden lg:h-screen">
        {/* Animated background elements */}

        <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10 md:pt-16">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Dexalot Bitte
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                Agent
              </span>
            </h1>

            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-700 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
