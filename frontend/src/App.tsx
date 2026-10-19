import { useEffect, useState } from "react";

type Health = { status: string; service: string };
const apiBase = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000/api";

export default function App() {
  const [health, setHealth] = useState<"checking" | "online" | "offline">("checking");
  useEffect(() => {
    const controller = new AbortController();
    fetch(apiBase + "/health/", { signal: controller.signal })
      .then((response) => { if (!response.ok) throw new Error("API unavailable"); return response.json() as Promise<Health>; })
      .then((data) => setHealth(data.status === "ok" ? "online" : "offline"))
      .catch((error: unknown) => { if (error instanceof Error && error.name === "AbortError") return; setHealth("offline"); });
    return () => controller.abort();
  }, []);
  return <main className="shell">
    <header><a className="brand" href="/"><span className="mark">K</span>KudiAI <span className="muted">Voice</span></a><span className={"status " + health}>● API {health}</span></header>
    <section className="hero"><p className="eyebrow">YOUR BUSINESS, IN BETTER FOCUS</p><h1>Run your business.<br/><span>Ask better questions.</span></h1><p className="intro">A voice-ready AI business assistant designed to help small businesses understand sales, track stock, and make confident decisions.</p><a className="button" href="#workspace">Explore the workspace ↗</a></section>
    <section id="workspace" className="workspace"><p className="eyebrow">WORKSPACE PREVIEW</p><h2>Everything starts with clarity.</h2><div className="cards">
      <article><span>01 / SALES</span><h3>Know what moves</h3><p>Record sales and understand which products work for your business.</p><small>Planned milestone</small></article>
      <article><span>02 / INVENTORY</span><h3>Stay ahead of stock</h3><p>Track stock movements and spot low inventory before it becomes a problem.</p><small>Planned milestone</small></article>
      <article className="dark"><span>03 / VOICE + AI</span><h3>Ask. Listen. Decide.</h3><p>Build toward answers grounded in your authorized business data.</p><small>Agora + open-weight AI planned</small></article>
    </div><p className="note">Foundation only: business records, authentication, AI responses, and voice sessions are not implemented yet.</p></section>
    <footer>Built in the open for small businesses. <span>Apache-2.0</span></footer>
  </main>;
}
