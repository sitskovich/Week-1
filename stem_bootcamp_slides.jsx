import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Shield, ChevronLeft, ChevronRight } from "lucide-react";

export default function StemBootcampSlides() {
  const [timeLeft, setTimeLeft] = useState(null);
  const [playSound, setPlaySound] = useState(false);
  const [customMinutes, setCustomMinutes] = useState(5);
  const [slideIndex, setSlideIndex] = useState(0);

  // ===== Slides for Days 1 & 2 =====
  const slides = [
    {
      title: "Day 1 — Goals & Objectives",
      content: (
        <div className="leading-relaxed h-full flex flex-col items-start">
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold mb-6 text-purple-700 flex items-center gap-4">
            <Users className="w-14 h-14" />
            <span>Day 1: Welcome & STEM Identity</span>
          </h2>
          <p className="mb-6 text-[clamp(1.5rem,2.5vw,2.25rem)]"><strong>Objectives:</strong> Build relationships, set class norms, introduce digital citizenship.</p>
          <ul className="list-disc ml-12 space-y-6 text-[clamp(1.25rem,2.2vw,2rem)]">
            <li>👋 Greeting & Icebreaker (15–20m)</li>
            <li>📝 STEM Team Contract (10–15m)</li>
            <li>🛡️ Digital Citizenship: <em>Share with Care</em> (5–10m)</li>
            <li>✅ Exit Ticket (2m)</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Day 1 — Greeting & Icebreaker",
      content: (
        <div className="h-full flex flex-col items-start">
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold mb-6">👋 Greeting & Icebreaker</h2>
          <ul className="list-disc ml-12 space-y-5 text-[clamp(1.5rem,2.5vw,2rem)]">
            <li>Teacher shares 2 fun STEM facts.</li>
            <li>Students share their name + one fun fact (game, science topic, dream job, or superpower).</li>
            <li><strong>Prompt:</strong> If you could invent anything to make life easier, what would it be?</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Day 1 — Team Contract",
      content: (
        <div className="h-full flex flex-col items-start">
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold mb-6">📝 STEM Team Contract</h2>
          <p className="text-[clamp(1.5rem,2.5vw,2rem)] mb-6">Students collaborate to create class rules and norms for teamwork and respect.</p>
          <ul className="list-disc ml-12 space-y-4 text-[clamp(1.25rem,2.2vw,1.75rem)]">
            <li>Brainstorm behaviors that help teams succeed.</li>
            <li>Draft a class-wide STEM contract.</li>
            <li>All students sign it as a commitment.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Day 1 — Digital Citizenship",
      content: (
        <div className="h-full flex flex-col items-start">
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold mb-6">🛡️ Share with Care</h2>
          <ul className="list-disc ml-12 space-y-5 text-[clamp(1.5rem,2.5vw,2rem)]">
            <li><strong>Scenario:</strong> What kinds of personal info (photos, phone number, birthday, school name, address, etc.) should be kept private?</li>
            <li><strong>Activity:</strong> Think-Pair-Share safe vs unsafe sharing examples — students generate their own scenarios.</li>
            <li><strong>Takeaway:</strong> If it identifies you, keep it private.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Day 1 — Exit Ticket",
      content: (
        <div className="h-full flex flex-col items-start">
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold mb-6">✅ Exit Ticket</h2>
          <p className="text-[clamp(1.5rem,2.5vw,2rem)]">On your whiteboard: Write <strong>one reason</strong> privacy is important.</p>
        </div>
      ),
    },
    {
      title: "Day 2 — Goals & Objectives",
      content: (
        <div className="leading-relaxed h-full flex flex-col items-start">
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold mb-6 text-green-700 flex items-center gap-4">
            <Shield className="w-14 h-14" />
            <span>Day 2: Collaboration & Teamwork</span>
          </h2>
          <p className="mb-6 text-[clamp(1.5rem,2.5vw,2.25rem)]"><strong>Objectives:</strong> Strengthen teamwork, practice collaboration, reinforce digital safety.</p>
          <ul className="list-disc ml-12 space-y-6 text-[clamp(1.25rem,2.2vw,2rem)]">
            <li>🤝 Stick Tower Challenge (20m)</li>
            <li>🛡️ Digital Citizenship: <em>Don’t Fall for Fake</em> (10m)</li>
            <li>✅ Exit Ticket (2m)</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Day 2 — Team Challenge: Build Phase",
      content: (
        <div className="h-full flex flex-col items-start">
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold mb-6">🤝 Stick Tower Challenge — Build Phase</h2>
          <p className="text-[clamp(1.5rem,2.5vw,2rem)] mb-6"><strong>Goal:</strong> Build the tallest free-standing <strong>craft stick</strong> tower in 15 minutes.</p>
          <ul className="list-disc ml-12 space-y-4 text-[clamp(1.25rem,2.2vw,1.75rem)]">
            <li><strong>Setup (2m):</strong> Teams of 3–4. Roles: <em>Lead Builder</em>, <em>Stabilizer</em>, <em>Timekeeper</em>, <em>Reporter</em>.</li>
            <li><strong>Materials:</strong> Craft sticks (~30/team), masking tape (2 ft), scissors (optional).</li>
            <li><strong>Build (15m):</strong> Start on-screen timer. Only sticks & tape. <strong>No taping to tables/walls/floor.</strong></li>
            <li><strong>Safety:</strong> Scissors stay on tables. No standing on chairs.</li>
            <li><strong>Tips:</strong> Triangles & columns = strength; wide base; quick prototype → reinforce.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Day 2 — Team Challenge: Rules & Scoring",
      content: (
        <div className="relative h-full flex flex-col items-start">
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold mb-6">📏 Rules, Measuring & Debrief</h2>
          <ul className="list-disc ml-12 space-y-4 text-[clamp(1.25rem,2.2vw,1.75rem)]">
            <li><strong>Freestanding:</strong> Tower must remain upright for <strong>10 seconds</strong>.</li>
            <li><strong>Measuring:</strong> Height = table surface to tallest point (meter stick or teacher mark).</li>
            <li><strong>Scoring:</strong> 3 pts tallest • 2 pts stability (10s) • 1 pt teamwork (roles + respectful talk).</li>
            <li><strong>Debrief (3m):</strong> Reporter shares 1 design that worked + 1 improvement for next time.</li>
          </ul>
          {/* Rubric box */}
          <div className="absolute bottom-4 right-4 bg-green-50 border border-green-300 rounded-lg shadow px-4 py-3 text-sm">
            <div className="font-semibold mb-1">Rubric</div>
            <div>3 pts — Tallest tower</div>
            <div>2 pts — Stability (10s test)</div>
            <div>1 pt — Teamwork & roles</div>
          </div>
        </div>
      ),
    },
    {
      title: "Day 2 — Digital Citizenship",
      content: (
        <div className="h-full flex flex-col items-start">
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold mb-6">🛡️ Don’t Fall for Fake</h2>
          <ul className="list-disc ml-12 space-y-5 text-[clamp(1.5rem,2.5vw,2rem)]">
            <li><strong>Quick 3 Checks:</strong> Who posted it? What evidence? When was it posted?</li>
            <li><strong>Look for Tricks:</strong> Too-good-to-be-true claims, clickbait, blurry images, no source link.</li>
            <li><strong>Activity:</strong> In pairs, create a suspicious headline + 2 ways you’d verify it.</li>
            <li><strong>Share:</strong> Volunteers present their headline + verification plan.</li>
            <li><strong>Takeaway:</strong> <em>Pause, check, verify</em> before you share.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Day 2 — Exit Ticket",
      content: (
        <div className="h-full flex flex-col items-start">
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold mb-6">✅ Exit Ticket</h2>
          <p className="text-[clamp(1.5rem,2.5vw,2rem)]">On your whiteboard: Write <strong>one way</strong> you can check if something online is real.</p>
        </div>
      ),
    },
  ];

  // ===== Timer (adjustable + sound) =====
  useEffect(() => {
    if (timeLeft === null) return;
    if (timeLeft <= 0) {
      if (!playSound) {
        const audio = new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg");
        audio.play().catch(() => {});
        setPlaySound(true);
      }
      return;
    }
    const timer = setInterval(() => setTimeLeft((t) => (t !== null ? t - 1 : t)), 1000);
    setPlaySound(false);
    return () => clearInterval(timer);
  }, [timeLeft, playSound]);

  const startTimer = () => setTimeLeft(customMinutes * 60);
  const resetTimer = () => setTimeLeft(null);
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-gray-900 p-4 overflow-hidden">
      <div className="mx-auto max-w-[95vw] h-full flex flex-col items-center justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={slideIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.35 }}
            className="bg-white px-[clamp(2rem,4vw,4rem)] py-[clamp(2rem,4vw,4rem)] rounded-[28px] shadow-2xl w-full h-[85vh] overflow-auto flex flex-col items-start"
          >
            {slides[slideIndex].content}
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex justify-between items-center mt-3 w-full">
          <Button onClick={() => setSlideIndex((i) => Math.max(i - 1, 0))} className="px-4 py-3"><ChevronLeft className="w-8 h-8"/></Button>
          <div className="flex flex-col items-center gap-3 bg-white/70 backdrop-blur px-6 py-4 rounded-xl shadow">
            {/* Bigger Timer Display */}
            <span className="text-7xl font-mono font-bold tracking-wide">{timeLeft !== null ? formatTime(timeLeft) : "--:--"}</span>
            {/* Slider under timer */}
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="1"
                max="30"
                value={customMinutes}
                onChange={(e) => setCustomMinutes(Number(e.target.value))}
                className="w-64"
              />
              <span className="text-xl font-medium">{customMinutes} min</span>
            </div>
            {/* Timer Buttons */}
            <div className="flex gap-3">
              <Button onClick={startTimer} className="px-4 py-2">Start</Button>
              <Button onClick={resetTimer} className="px-4 py-2" variant="secondary">Reset</Button>
            </div>
          </div>
          <Button onClick={() => setSlideIndex((i) => Math.min(i + 1, slides.length - 1))} className="px-4 py-3"><ChevronRight className="w-8 h-8"/></Button>
        </div>
      </div>
    </div>
  );
}
