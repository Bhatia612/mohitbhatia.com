import React from "react";

function Approach() {
  return (
    <div className="w-full min-h-screen bg-black text-white px-6 py-10 flex flex-col items-start justify-start gap-8">
      <h1 className="text-4xl font-bold border-b border-gray-700 pb-2">Crafting the Process</h1>

      <div className="space-y-6 max-w-3xl">
        <section>
          <h2 className="text-xl font-semibold text-gray-300 mb-1">🧭 The Why</h2>
          <p className="text-gray-400">
            Projects are born with purpose. It all starts with understanding the deeper intent—what impact it should create and for whom.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-300 mb-1">📐 The Blueprint</h2>
          <p className="text-gray-400">
            Sketching ideas, structuring flow, and selecting the right tools set the tone. The canvas is planned before the strokes begin.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-300 mb-1">🧱 The Build</h2>
          <p className="text-gray-400">
            With a foundation laid, each element is sculpted through modular React components and Tailwind finesse—pixel by pixel.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-300 mb-1">🔍 The Polish</h2>
          <p className="text-gray-400">
            Fine-tuning every interaction and layout ensures consistency. It’s the little tweaks that make the big difference.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-300 mb-1">🚀 The Release</h2>
          <p className="text-gray-400">
            Once live, it’s not the end. Feedback flows in, and improvements follow. The cycle continues, better each time.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Approach;
