import { useState } from "react";

const BRAND = "otobrothers";
const COURSE = "AI Knowledge Assessment";

const questions = [
  {
    id: "Q1", domain: "Prompting & Context", type: "mc", max: 2,
    prompt: "Which prompt is most likely to produce a useful business result?",
    options: { A: "Write something about sales.", B: "Give me ideas for business.", C: "Act as a sales operations assistant. Draft a follow-up email for a manufacturing prospect who asked about delivery time, price flexibility, and implementation risk. Keep it under 150 words, professional, and include a clear next step.", D: "Make this better." },
    best: ["C"]
  },
  {
    id: "Q2", domain: "Prompting & Context", type: "sata", max: 3,
    prompt: "When you want better output from an AI assistant for a real work task, what information usually helps most?",
    options: { A: "The goal of the task", B: "Relevant business context", C: "Constraints such as tone, length, or audience", D: "Examples or source material", E: "Random extra text to give the model more to work with", F: "Success criteria for what good looks like" },
    best: ["A", "B", "C", "D", "F"]
  },
  {
    id: "Q3", domain: "Prompting & Context", type: "mc", max: 2,
    prompt: "You upload a document and ask AI to summarize it for an executive audience. What is the best next step?",
    options: { A: "Accept the first summary because the file was uploaded", B: "Ask for a version tailored to your audience, priorities, and decision needs", C: "Ask for the output to be longer so it sounds smarter", D: "Copy the summary into an email immediately" },
    best: ["B"]
  },
  {
    id: "Q4", domain: "Research & Evaluation", type: "mc", max: 2,
    prompt: "Which statement best reflects good practice when using AI output for business decisions?",
    options: { A: "If the answer sounds confident, it is usually reliable", B: "AI is best used when you do not have time to verify anything", C: "AI output should be checked based on risk, importance, and source quality", D: "Verification only matters for legal teams" },
    best: ["C"]
  },
  {
    id: "Q5", domain: "Research & Evaluation", type: "sata", max: 3,
    prompt: "Which actions are useful ways to evaluate AI output before using it in work?",
    options: { A: "Compare it against source material or known facts", B: "Ask the AI to explain its reasoning or assumptions", C: "Check whether the output actually matches the brief", D: "Use a second tool or source for verification when needed", E: "Assume a polished answer is accurate", F: "Review for missing risks, edge cases, or weak logic" },
    best: ["A", "B", "C", "D", "F"]
  },
  {
    id: "Q6", domain: "Research & Evaluation", type: "mc", max: 2,
    prompt: "For a task that requires recent facts, source-backed findings, and reduced hallucination risk, what is usually the better choice?",
    options: { A: "A general chat prompt with no source checking", B: "A deep research or source-grounded workflow", C: "A longer brainstorming session", D: "A creative writing model" },
    best: ["B"]
  },
  {
    id: "Q7", domain: "Tools & Model Choice", type: "mc", max: 2,
    prompt: "A colleague says, 'We need ChatGPT for this.' What is the better business question?",
    options: { A: "Which brand is most popular?", B: "Which model has the best logo?", C: "What capability do we need for this task: chat drafting, research, reusable workspace, automation, or document-grounded support?", D: "Can we just use the same tool for everything?" },
    best: ["C"]
  },
  {
    id: "Q8", domain: "Tools & Model Choice", type: "sata", max: 3,
    prompt: "Which of the following are examples of reusable AI setups that can improve consistency?",
    options: { A: "A saved custom AI workspace with instructions and files", B: "A repeatable prompt template for a recurring business task", C: "A one-off casual chat with no structure", D: "A project setup with stored documents and agreed rules", E: "A role-specific assistant for sales, operations, or support" },
    best: ["A", "B", "D", "E"]
  },
  {
    id: "Q9", domain: "Tools & Model Choice", type: "mc", max: 2,
    prompt: "You need to compare competitors, gather recent market information, and produce a short executive briefing. Which approach is strongest?",
    options: { A: "Use only a generic chat assistant with no sources", B: "Use a research-oriented workflow or source-backed tool, then turn findings into an executive summary", C: "Use an image generator first", D: "Use the same prompt you use for brainstorming taglines" },
    best: ["B"]
  },
  {
    id: "Q10", domain: "Automation / Agents / Integrations", type: "mc", max: 2,
    prompt: "Which example best shows workflow thinking rather than isolated prompting?",
    options: { A: "Write me a better email", B: "Give me 10 ideas", C: "Take incoming quote requests, extract key details, check pricing rules, prepare a draft response, and send it for human approval before sending", D: "Summarize this paragraph" },
    best: ["C"]
  },
  {
    id: "Q11", domain: "Automation / Agents / Integrations", type: "mc", max: 2,
    prompt: "Which statement best distinguishes automation from an AI agent?",
    options: { A: "Automation and agents are exactly the same thing", B: "Automation usually follows predefined steps; an agent can make bounded decisions within a goal and toolset", C: "Agents only matter if you can code", D: "Automation is old and no longer useful", E: "I don't know" },
    best: ["B"], idk: "E"
  },
  {
    id: "Q12", domain: "Automation / Agents / Integrations", type: "sata", max: 3,
    prompt: "In a no-code business context, what does it usually mean to understand an API or integration well enough to work with it?",
    options: { A: "You can explain what data needs to move between systems", B: "You can identify triggers, inputs, outputs, and approval points", C: "You must be able to write production code", D: "You can map a business process across tools", E: "You understand where errors, permissions, or missing data may break the workflow", F: "I don't know" },
    best: ["A", "B", "D", "E"], idk: "F", invalidWith: ["C", "F"]
  },
  {
    id: "Q13", domain: "Automation / Agents / Integrations", type: "mc", max: 2,
    prompt: "What is the most practical description of a knowledge-base or RAG-style setup in business use?",
    options: { A: "A system that helps AI answer using approved documents or connected knowledge, not just general memory", B: "A tool for designing logos faster", C: "A replacement for all human judgment", D: "A coding framework only developers can use", E: "I don't know" },
    best: ["A"], idk: "E"
  },
  {
    id: "Q14", domain: "Governance / Business Implementation", type: "mc", max: 2,
    prompt: "Which is the safest default approach when using AI with confidential or sensitive business information?",
    options: { A: "Paste everything in; the tool will probably be secure", B: "Use approved tools, follow company policy, minimize unnecessary sensitive data, and apply caution based on the task", C: "Never use AI for any business task", D: "Only legal teams need to worry about confidentiality", E: "I don't know" },
    best: ["B"], idk: "E"
  },
  {
    id: "Q15", domain: "Governance / Business Implementation", type: "sata", max: 3,
    prompt: "Which practices support responsible AI implementation in a business?",
    options: { A: "Human approval for higher-risk outputs", B: "Clear guidance on what data can and cannot be used", C: "Some way to review or trace important AI-supported decisions", D: "Role-based access or usage boundaries", E: "Let every team invent its own rules from scratch", F: "Clear ownership for AI workflows and outputs" },
    best: ["A", "B", "C", "D", "F"]
  },
  {
    id: "Q16", domain: "Governance / Business Implementation", type: "mc", max: 2,
    prompt: "Which statement best reflects strong business implementation thinking for AI?",
    options: { A: "Start with the newest tool and hope the use case appears later", B: "Focus on where time, quality, speed, or risk can measurably improve in a workflow", C: "Roll out AI to everyone in the same way", D: "Judge success mainly by how impressive the demo looks" },
    best: ["B"]
  },
  {
    id: "Q17", domain: "Cross-domain gating", type: "mc", max: 2,
    prompt: "A team wants AI to draft customer replies automatically. Which design is strongest?",
    options: { A: "Let AI send all replies without review so the process is fast", B: "Use AI only for jokes and icebreakers", C: "Let AI draft the reply, apply rules and context, then route it to a human approver when the message is high-value, sensitive, or unusual", D: "Avoid using any customer context" },
    best: ["C"]
  },
  {
    id: "Q18", domain: "Cross-domain gating", type: "mc", max: 2,
    prompt: "Which statement best matches your current practical capability?",
    options: { A: "I mainly use AI as a casual assistant and often do not know how to improve poor outputs", B: "I can use AI for drafting, summarizing, or idea generation, but my process is not very repeatable", C: "I can use AI with context, files, checking, and structured prompts for recurring work tasks", D: "I can design no-code workflows that may include automation, connected tools, knowledge sources, or agent-like steps with human oversight" },
    best: ["D"],
    bandSignal: { A: "Entry", B: "Level 1", C: "Level 2", D: "Level 3" },
    customScoring: { A: 0, B: 1, C: 2, D: 2 }
  }
];

const pQuestions = [
  {
    id: "P1", type: "sata",
    prompt: "Which of these tool families do you currently use at least occasionally?",
    options: { A: "Chat assistants (e.g. ChatGPT, Claude, Gemini, Copilot)", B: "Deep research tools (e.g. Perplexity, ChatGPT Deep Research)", C: "Custom AI workspaces / reusable setups (e.g. GPTs, Projects, Skills)", D: "Coding agents (e.g. Codex, Claude Code, Cursor)", E: "Automation tools (e.g. n8n, Make, Zapier)", F: "Knowledge / retrieval systems (e.g. RAG, document-grounded assistants)", G: "Voice agent systems (e.g. Vapi, ElevenLabs)", H: "Image / multimodal creation tools", I: "Meeting / note assistants", J: "None of these regularly" }
  },
  {
    id: "P2", type: "mc",
    prompt: "Which statement best describes your confidence with AI at work?",
    options: { A: "I am still figuring out the basics", B: "I can use it for a few tasks but not consistently", C: "I use it regularly and can structure my work with it", D: "I can design repeatable AI-supported workflows for business tasks" }
  }
];

const domains = ["Prompting & Context", "Research & Evaluation", "Tools & Model Choice", "Automation / Agents / Integrations", "Governance / Business Implementation"];

const domainColors = {
  "Prompting & Context": "#4F46E5",
  "Research & Evaluation": "#0891B2",
  "Tools & Model Choice": "#059669",
  "Automation / Agents / Integrations": "#D97706",
  "Governance / Business Implementation": "#7C3AED"
};

const levelInfo = {
  Entry: {
    tier: "Foundations", color: "#6B7280",
    desc: "You are at the beginning of practical AI use for business. Your current approach is likely inconsistent, difficult to repeat, or not yet safe enough for higher-trust work.",
    strengths: ["Curiosity and early exposure", "Awareness of common AI tools", "Willingness to experiment"],
    blindSpots: ["Weak prompting structure", "Limited context use", "Little output checking", "Weak governance and confidentiality awareness", "Little workflow thinking"],
    priorities: ["How to write stronger prompts", "How to give context, constraints, and examples", "When to trust and when to verify", "Safe handling of business information", "Moving from one-off prompts to simple repeatable uses"],
    modules: ["Foundations", "Selected beginner lessons from Core Usage"]
  },
  "Level 1": {
    tier: "Core Usage", color: "#2563EB",
    desc: "You can already use AI for basic work tasks such as drafting, summarizing, brainstorming, or basic support. Your next step is to become more consistent, more context-driven, and more reliable in real workflows.",
    strengths: ["Basic prompt writing", "Basic task use", "Some safe-use awareness", "Familiarity with common chat assistants"],
    blindSpots: ["Over-reliance on one-shot prompts", "Weak evaluation habits", "Limited workflow design", "Tool choice based on brand rather than capability", "Inconsistent use of reusable setups"],
    priorities: ["Structured prompting", "Document/file-based work", "Research and verification workflows", "Reusable templates and workspaces", "Simple workflow design with human review"],
    modules: ["Core Usage", "Selected lessons from Workflow Building"]
  },
  "Level 2": {
    tier: "Workflow Building", color: "#059669",
    desc: "You are a practical AI user in a business setting. You can use AI with context, evaluate outputs, and support recurring work tasks more reliably. Your next step is to think in systems, workflows, approvals, and connected business processes.",
    strengths: ["Structured prompting", "Context-aware task setup", "Stronger evaluation habits", "Task-to-tool matching", "Recurring workflow support"],
    blindSpots: ["Limited automation design", "Limited API/integration thinking", "Incomplete understanding of agents vs automation", "Uneven governance readiness for broader rollout"],
    priorities: ["Workflow mapping", "Automation logic", "Human-in-the-loop design", "Agent concepts", "RAG / connected knowledge", "Business implementation and governance discipline"],
    modules: ["Workflow Building", "Selected lessons from Automation and Agents"]
  },
  "Level 3": {
    tier: "Automation and Agents", color: "#7C3AED",
    desc: "You are an emerging no-code AI builder. You can think beyond prompts and into workflows, connected tools, knowledge sources, approvals, and AI-supported operating models.",
    strengths: ["Strong prompting and context design", "Evaluation and QA discipline", "Workflow logic", "Practical understanding of automation, agents, integrations, RAG, and business rollout", "Stronger governance awareness"],
    blindSpots: ["Advanced implementation may still depend on specialists", "Scaling safely across teams may require more operating structure", "ROI measurement and governance formalization may need strengthening"],
    priorities: ["Designing higher-value automations", "Voice and conversational workflow applications", "Deeper integration planning", "Operating model design", "Governance and rollout discipline", "Business case and ROI prioritization"],
    modules: ["Automation and Agents", "Optional advanced implementation labs"]
  }
};

function scoreQuestion(q, ans) {
  if (!ans || ans.length === 0) return 0;
  if (q.customScoring) return q.customScoring[ans[0]] ?? 0;
  if (q.type === "mc") return ans.length === 1 && q.best.includes(ans[0]) ? q.max : 0;
  if (q.idk && ans.includes(q.idk)) return 0;
  if (q.invalidWith && q.invalidWith.some(k => ans.includes(k))) return 0;
  const correct = ans.filter(a => q.best.includes(a)).length;
  const wrong = ans.filter(a => !q.best.includes(a)).length;
  const net = Math.max(0, correct - wrong);
  const ratio = net / q.best.length;
  if (ratio >= 1) return q.max;
  if (ratio >= 0.6) return q.max - 1;
  if (ratio >= 0.3) return 1;
  return 0;
}

function calcDomainScore(answers) {
  const scores = {}, maxes = {};
  domains.forEach(d => { scores[d] = 0; maxes[d] = 0; });
  questions.forEach(q => {
    if (!domains.includes(q.domain)) return;
    scores[q.domain] += scoreQuestion(q, answers[q.id] || []);
    maxes[q.domain] += q.max;
  });
  return { scores, maxes };
}

function domainLevel(domain, score, max) {
  const isNine = max === 9;
  if (isNine) {
    if (score >= 7) return "Level 3";
    if (score >= 5) return "Level 2";
    if (score >= 3) return "Level 1";
  } else {
    if (score >= 6) return "Level 3";
    if (score >= 4) return "Level 2";
    if (score >= 2) return "Level 1";
  }
  return "Entry";
}

const lvlOrder = ["Entry", "Level 1", "Level 2", "Level 3"];

function calcOverallLevel(answers) {
  const total = questions.reduce((s, q) => s + scoreQuestion(q, answers[q.id] || []), 0);
  const { scores, maxes } = calcDomainScore(answers);
  const dLevels = {};
  domains.forEach(d => dLevels[d] = domainLevel(d, scores[d], maxes[d]));

  const lvlIdx = l => lvlOrder.indexOf(l);
  const q18ans = answers["Q18"] || [];
  const q12score = scoreQuestion(questions.find(q => q.id === "Q12"), answers["Q12"] || []);
  const q15score = scoreQuestion(questions.find(q => q.id === "Q15"), answers["Q15"] || []);

  const l3 = [
    dLevels["Prompting & Context"] === "Level 3",
    lvlIdx(dLevels["Research & Evaluation"]) >= 2,
    dLevels["Automation / Agents / Integrations"] === "Level 3",
    lvlIdx(dLevels["Governance / Business Implementation"]) >= 2,
    (answers["Q10"] || []).includes("C"),
    (answers["Q11"] || []).includes("B"),
    q12score > 0,
    (answers["Q14"] || []).includes("B"),
    q15score > 0,
    (answers["Q17"] || []).includes("C"),
    q18ans.includes("D")
  ];
  if (l3.every(Boolean) && total >= 32) return "Level 3";

  const coreAtL1 = domains.filter(d => lvlIdx(dLevels[d]) <= 1).length;
  const l2 = [
    lvlIdx(dLevels["Prompting & Context"]) >= 2,
    lvlIdx(dLevels["Research & Evaluation"]) >= 2,
    (answers["Q10"] || []).includes("C"),
    (answers["Q17"] || []).includes("C"),
    coreAtL1 <= 1
  ];
  if (l2.every(Boolean) && total >= 21) return "Level 2";

  const q2score = scoreQuestion(questions.find(q => q.id === "Q2"), answers["Q2"] || []);
  const l1 = [
    (answers["Q1"] || []).includes("C"),
    q2score > 0,
    (answers["Q14"] || []).includes("B")
  ];
  if (l1.every(Boolean) && total >= 12) return "Level 1";

  return "Entry";
}

function getDomainFeedback(domain, level) {
  const map = {
    "Prompting & Context": { Entry: "Focus on understanding what makes a prompt clear and specific.", "Level 1": "Work on adding context, constraints, and examples to your prompts.", "Level 2": "Explore reusable prompt structures and managing context across sessions.", "Level 3": "Strong foundation — consider teaching prompt design to your team." },
    "Research & Evaluation": { Entry: "Start by learning when and why AI output can be unreliable.", "Level 1": "Build habits around checking and comparing AI output before use.", "Level 2": "Develop repeatable QA processes for source-grounded research.", "Level 3": "You have strong evaluation discipline — apply it to workflow design." },
    "Tools & Model Choice": { Entry: "Learn how different AI tools serve different purposes.", "Level 1": "Practice matching tool type to task type more deliberately.", "Level 2": "Think in capability families and tool combinations for complex tasks.", "Level 3": "You think strategically about tooling — extend this to team adoption." },
    "Automation / Agents / Integrations": { Entry: "Start recognising which repetitive tasks could benefit from AI support.", "Level 1": "Learn how repeatable workflows and handoffs work in practice.", "Level 2": "Explore no-code automation tools, APIs, and agent-like setups.", "Level 3": "Strong automation thinking — focus on governance and oversight at scale." },
    "Governance / Business Implementation": { Entry: "Build awareness of privacy, confidentiality, and safe AI use.", "Level 1": "Learn about approval steps, role boundaries, and implementation basics.", "Level 2": "Develop skills in rollout planning, oversight, and business adoption.", "Level 3": "Extend your governance thinking to auditability and enterprise scale." }
  };
  return map[domain]?.[level] || "";
}

function getToolNote(p1Answers) {
  if (!p1Answers || p1Answers.length === 0) return null;
  const has = k => p1Answers.includes(k);
  if (has("E") || has("F") || has("G")) return "You are already exposed to more advanced tool categories. Your next priority is not more tools — it is stronger workflow controls, approval rules, and safe rollout discipline.";
  if (has("A") && has("B")) return "You already use chat and research-oriented tools. Your next leverage point is to make those uses more repeatable with templates, reusable setups, and evaluation rules.";
  if (p1Answers.length === 1 && has("A")) return "Your next gains are likely to come from learning capability families beyond chat alone, especially reusable workspaces, research workflows, and simple automation.";
  return "Consider expanding beyond your current tools into reusable setups, research workflows, or simple automation to increase your business impact.";
}

const AIAssessment = () => {
  const [screen, setScreen] = useState("intro");
  const [current, setCurrent] = useState(0);
  const [pCurrent, setPCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [pAnswers, setPAnswers] = useState({});
  const [selected, setSelected] = useState([]);

  const allQ = questions;
  const q = screen === "quiz" ? allQ[current] : pQuestions[pCurrent];
  const progress = screen === "quiz" ? (current / allQ.length) * 100 : 100;

  function toggleOption(key) {
    if (!q) return;
    if (q.type === "mc") {
      setSelected([key]);
    } else {
      if (q.idk && key === q.idk) {
        setSelected([key]);
      } else {
        setSelected(prev => {
          const without = prev.filter(k => k !== (q.idk || "__"));
          return without.includes(key) ? without.filter(k => k !== key) : [...without, key];
        });
      }
    }
  }

  function handleNext() {
    if (screen === "quiz") {
      const newA = { ...answers, [q.id]: selected };
      setAnswers(newA);
      setSelected([]);
      if (current + 1 < allQ.length) setCurrent(c => c + 1);
      else { setScreen("personalization"); setPCurrent(0); }
    } else {
      const newA = { ...pAnswers, [q.id]: selected };
      setPAnswers(newA);
      setSelected([]);
      if (pCurrent + 1 < pQuestions.length) setPCurrent(c => c + 1);
      else setScreen("results");
    }
  }

  function restart() { setScreen("intro"); setCurrent(0); setPCurrent(0); setAnswers({}); setPAnswers({}); setSelected([]); }

  const level = screen === "results" ? calcOverallLevel(answers) : null;
  const info = level ? levelInfo[level] : null;
  const { scores, maxes } = screen === "results" ? calcDomainScore(answers) : { scores: {}, maxes: {} };
  const totalScore = screen === "results" ? questions.reduce((s, q2) => s + scoreQuestion(q2, answers[q2.id] || []), 0) : 0;
  const toolNote = screen === "results" ? getToolNote(pAnswers["P1"] || []) : null;

  if (screen === "intro") return (
    <div style={{ minHeight: "100vh", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ maxWidth: 520, width: "100%" }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: "#6B7280", letterSpacing: "0.02em", marginBottom: 24 }}>{BRAND}</div>
        <h1 style={{ fontSize: 32, fontWeight: 800, color: "#111827", marginBottom: 16, lineHeight: 1.2 }}>{COURSE}</h1>
        <p style={{ color: "#6B7280", lineHeight: 1.6, marginBottom: 32 }}>
          This assessment evaluates your current AI knowledge across five business capability domains. Your results will recommend the right course tier and learning priorities for you.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
          {[["📋", "18 questions", "Multiple choice and select-all-that-apply"], ["⏱️", "10–15 minutes", "Work through at your own pace"], ["🎯", "Personalised results", "Domain profile, strengths, and course recommendation"]].map(([icon, title, sub]) => (
            <div key={title} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ fontSize: 24 }}>{icon}</div>
              <div>
                <div style={{ fontWeight: 600, color: "#111827" }}>{title}</div>
                <div style={{ fontSize: 14, color: "#6B7280" }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => setScreen("quiz")} style={{ width: "100%", padding: "14px 24px", background: "#111827", color: "#fff", border: "none", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer" }}>Begin Assessment →</button>
      </div>
    </div>
  );

  if (screen === "quiz" || screen === "personalization") {
    const isPersonalization = screen === "personalization";
    return (
      <div style={{ minHeight: "100vh", background: "#F9FAFB", padding: "24px 16px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#6B7280" }}>{BRAND}</div>
            <div style={{ fontSize: 13, color: "#9CA3AF" }}>{isPersonalization ? `Almost done — ${pCurrent + 1} of ${pQuestions.length}` : `Question ${current + 1} of ${allQ.length}`}</div>
          </div>
          <div style={{ height: 4, background: "#E5E7EB", borderRadius: 2, marginBottom: 32 }}>
            <div style={{ height: "100%", background: "#111827", borderRadius: 2, width: `${progress}%`, transition: "width 0.3s" }} />
          </div>
          {isPersonalization && (
            <div style={{ background: "#FEF3C7", border: "1px solid #FCD34D", borderRadius: 8, padding: "12px 16px", marginBottom: 24, fontSize: 14, color: "#92400E" }}>
              Just 2 quick questions to personalise your results — these don't affect your score.
            </div>
          )}
          <div style={{ background: "#fff", borderRadius: 12, padding: 32, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
            <div style={{ display: "inline-block", padding: "4px 12px", background: "#F3F4F6", borderRadius: 20, fontSize: 12, fontWeight: 600, color: "#6B7280", marginBottom: 16 }}>
              {isPersonalization ? "Personalisation" : q.domain}
            </div>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#111827", lineHeight: 1.4, marginBottom: 8 }}>{q.prompt}</h2>
            {q.type === "sata" && <p style={{ fontSize: 13, color: "#9CA3AF", marginBottom: 24 }}>Select all that apply</p>}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 24 }}>
              {Object.entries(q.options).map(([k, v]) => {
                const sel = selected.includes(k);
                const isIdk = q.idk && k === q.idk;
                return (
                  <button key={k} onClick={() => toggleOption(k)} style={{ textAlign: "left", padding: "14px 16px", border: `2px solid ${sel ? "#111827" : "#E5E7EB"}`, borderRadius: 8, background: sel ? "#111827" : "#fff", color: sel ? "#fff" : "#374151", fontSize: 14, lineHeight: 1.5, cursor: "pointer", transition: "all 0.15s", display: "flex", gap: 12, alignItems: "flex-start", fontStyle: isIdk ? "italic" : "normal", opacity: isIdk ? 0.85 : 1 }}>
                    <span style={{ fontWeight: 700, minWidth: 20 }}>{k}</span><span>{v}</span>
                  </button>
                );
              })}
            </div>
            <button onClick={handleNext} disabled={selected.length === 0} style={{ marginTop: 32, width: "100%", padding: "14px 24px", background: selected.length > 0 ? "#111827" : "#D1D5DB", color: "#fff", border: "none", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: selected.length > 0 ? "pointer" : "not-allowed", transition: "background 0.2s" }}>
              {(isPersonalization && pCurrent + 1 === pQuestions.length) ? "View My Results" : "Next"} →
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#F9FAFB", padding: "24px 16px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: "#6B7280", marginBottom: 24 }}>{BRAND}</div>
        <h1 style={{ fontSize: 28, fontWeight: 800, color: "#111827", marginBottom: 32 }}>{COURSE} — Your Results</h1>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
          <div style={{ background: "#fff", borderRadius: 12, padding: 24, border: `3px solid ${info.color}` }}>
            <div style={{ fontSize: 12, color: "#6B7280", marginBottom: 8 }}>Your Level</div>
            <div style={{ fontSize: 32, fontWeight: 800, color: info.color }}>{level}</div>
            <div style={{ fontSize: 14, color: "#374151", marginTop: 8 }}>Course Tier: <strong>{info.tier}</strong></div>
          </div>
          <div style={{ background: "#fff", borderRadius: 12, padding: 24 }}>
            <div style={{ fontSize: 12, color: "#6B7280", marginBottom: 8 }}>Total Score</div>
            <div style={{ fontSize: 32, fontWeight: 800, color: "#111827" }}>{totalScore} / 41</div>
          </div>
        </div>

        <div style={{ background: "#fff", borderRadius: 12, padding: 24, marginBottom: 24 }}>
          <p style={{ color: "#374151", lineHeight: 1.6 }}>{info.desc}</p>
        </div>

        <div style={{ background: "#fff", borderRadius: 12, padding: 24, marginBottom: 24 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 20 }}>Domain Profile</h3>
          {domains.map(d => {
            const s = scores[d] || 0, m = maxes[d] || 1;
            const dl = domainLevel(d, s, m), pct = Math.round((s / m) * 100), col = domainColors[d];
            return (
              <div key={d} style={{ marginBottom: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <span style={{ fontWeight: 600, color: "#374151", fontSize: 14 }}>{d}</span>
                  <span style={{ fontSize: 12, color: col, fontWeight: 600 }}>{dl}</span>
                </div>
                <div style={{ height: 8, background: "#E5E7EB", borderRadius: 4, marginBottom: 6 }}>
                  <div style={{ height: "100%", background: col, borderRadius: 4, width: `${pct}%`, transition: "width 0.5s" }} />
                </div>
                <div style={{ fontSize: 13, color: "#6B7280" }}>{s}/{m} pts — {getDomainFeedback(d, dl)}</div>
              </div>
            );
          })}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
          <div style={{ background: "#ECFDF5", borderRadius: 12, padding: 24 }}>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: "#065F46", marginBottom: 12 }}>✓ Strengths</h4>
            {info.strengths.map((s, i) => <p key={i} style={{ fontSize: 14, color: "#047857", marginBottom: 6 }}>• {s}</p>)}
          </div>
          <div style={{ background: "#FEF3C7", borderRadius: 12, padding: 24 }}>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: "#92400E", marginBottom: 12 }}>⚠ Blind Spots</h4>
            {info.blindSpots.map((s, i) => <p key={i} style={{ fontSize: 14, color: "#B45309", marginBottom: 6 }}>• {s}</p>)}
          </div>
        </div>

        {toolNote && (
          <div style={{ background: "#EFF6FF", borderRadius: 12, padding: 24, marginBottom: 24 }}>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: "#1E40AF", marginBottom: 8 }}>🔧 Tool Usage Note</h4>
            <p style={{ fontSize: 14, color: "#1E3A8A" }}>{toolNote}</p>
          </div>
        )}

        <div style={{ background: "#fff", borderRadius: 12, padding: 24, marginBottom: 24 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Next Learning Priorities</h3>
          {info.priorities.map((p, i) => (
            <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 12 }}>
              <span style={{ width: 24, height: 24, background: "#F3F4F6", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#6B7280", flexShrink: 0 }}>{i + 1}</span>
              <span style={{ fontSize: 14, color: "#374151" }}>{p}</span>
            </div>
          ))}
        </div>

        <div style={{ background: info.color, borderRadius: 12, padding: 24, color: "#fff", marginBottom: 32 }}>
          <div style={{ fontSize: 12, opacity: 0.8, marginBottom: 8 }}>Recommended Starting Point</div>
          <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 16 }}>{info.tier} Module</div>
          {info.modules.map((m, i) => <p key={i} style={{ fontSize: 14, opacity: 0.9, marginBottom: 4 }}>→ {m}</p>)}
          <p style={{ fontSize: 14, marginTop: 16, opacity: 0.9 }}>Based on your domain profile and score, the <strong>{info.tier}</strong> track is the most appropriate starting point within the Business AI Confidence Programme.</p>
        </div>

        <button onClick={restart} style={{ width: "100%", padding: "14px 24px", background: "#fff", color: "#374151", border: "1px solid #E5E7EB", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer" }}>Retake Assessment</button>
      </div>
    </div>
  );
};

export default AIAssessment;
