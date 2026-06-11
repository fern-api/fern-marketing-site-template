---
name: case-study
description: >
  Write customer case studies for Fern (a Postman company). Use this skill when the user asks to
  draft, write, or edit a case study, customer story, or customer success story for Fern. Triggers
  include: "case study", "customer story", "write up this customer", "draft a case study from these
  notes", or any request to turn interview notes or customer data into a structured case study.
  Also use when the user provides raw interview notes and asks to turn them into a publishable
  piece. Do NOT use for blog posts, changelog entries, LinkedIn posts, or general marketing copy.
---
 
# Case Study
 
Write customer case studies for Fern based on interview notes, metrics, and product details. Case studies are short-form (under 2,000 words), problem → solution → result pieces about how a specific customer uses Fern Docs and/or SDKs.
 
## Core principles
 
Every sentence should be about the customer. If a sentence could describe any company using any docs platform, it's filler — cut it or make it specific. The reader should finish the case study knowing exactly what this customer's setup looks like and why it matters that they chose Fern.
 
Specific rules:
 
- **No editorializing.** Don't tell the reader what to think ("a striking story", "a major improvement"). State the facts and let them land.
- **No exaggeration.** Don't inflate what happened. If a feature saved time, say how much. If you don't know how much, describe the workflow change instead of reaching for vague superlatives.
- **No generic filler.** Phrases like "seamless integration", "game-changing", "best-in-class", or "empowering teams" add nothing. Replace them with what actually happened.
- **Every bullet ties back to Fern.** Solution bullets describe what the customer does, but the connection to Fern must be clear — what Fern feature enables the workflow, or what Fern built based on the customer's feedback. If a bullet describes a customer process with no Fern connection, either find the connection or cut the bullet.
- **Metrics must mean something.** A number without context is decoration. "$1.3M in annual support costs offset" means something. "20,000 queries" only means something if you explain what those queries replaced or prevented. Don't include a metric just because you have it — include it because it tells a story.
- **Quotes should be specific and opinionated.** Generic executive quotes about "great partnership" are weak. A founding engineer saying "people don't read docs the same way anymore" is strong. Place quotes where they reinforce a specific point, not floating between sections.
- **Don't summarize the interview.** Phrases like "was called out as a major improvement" or "the team highlighted" read like you're reporting on the conversation rather than telling the customer's story. Just describe the capability and its impact directly.
## Output format
 
Plain text / Markdown. No special formatting beyond headers, bold for bullet labels, and blockquotes for pull quotes. The case study will be adapted into designed formats (PDF, web page) later — focus on the content, not the presentation.
 
## Structure
 
### Title
One sentence. Lead with whatever is most distinctive about this customer's story — their scale, the specific capability they unlocked, or the problem they escaped. Examples:
- "Deepgram unifies REST and WebSocket API documentation via Fern Docs"
- "Mintlify couldn't keep up with Payabli's growing API complexity"
Bad: "How Company X transformed their developer experience" (generic, could be anyone)
 
### Company Description
A short paragraph (3-5 sentences) covering: what the company does, who their users are, scale (users, apps, team size), and funding if notable. No Fern mention here — this is purely about the customer.
 
### Metrics
Three metrics. Each has a number/value and a one-line description. The user will typically provide candidate metrics — your job is to analyze them and suggest improvements, not just slot them in.
 
When the user provides metrics, evaluate each one:
- **Does it tell a story?** A number without context is decoration. "20,000 queries" means nothing on its own. "20,000 queries/month resolved at 88% without a support ticket" connects to a business outcome.
- **Can it be extrapolated to increase impact?** Look for opportunities to translate usage stats into business language. Hours saved per month → hours per year. Support queries resolved × average cost per ticket → dollars saved annually. Migration completed in X weeks → compare to industry norm if available. Always suggest the extrapolation and explain your math so the user can verify or adjust.
- **Is it actually surprising?** Metrics that just confirm a feature works as designed aren't interesting (e.g., high agent traffic to an llms.txt endpoint). Look for metrics that show unexpected scale, outsized impact, or a meaningful before/after contrast.
- **Is it redundant?** Check that metrics aren't restating the same number in different units (e.g., "20,000 queries/month" and "700 queries/day").
Present your analysis to the user: which metrics are strong as-is, which could be improved with extrapolation (show the math), and which are weak and might need additional data from the customer. If a strong third metric isn't available from the notes, flag it and suggest what to ask for in a follow-up.
 
### The Problem
Title: A specific headline summarizing the core challenge. Should name the customer's actual previous tool or setup.
 
Two to four short paragraphs — length depends on the content available. Don't pad to hit a target. The section should cover:
1. Describe what the previous setup was (name the actual tools: Next.js, ReadMe, Mintlify, etc.)
2. Explain what specifically wasn't working and why — tie it to the customer's scale and constraints
3. Describe what they tried before finding Fern (evaluated alternatives, tried building in-house, explored specific tools, etc.) — only if this happened
4. Bridge to Fern: name the specific Fern features that matched their needs, and give a migration timeline if available. If there's a concrete milestone worth mentioning (e.g., becoming Fern's top consumer of a feature), include it — but don't force one.
Everything in this section should be specific to this customer's situation. Don't describe how Fern features work in general — describe why they mattered to this customer specifically.
 
End this section with a pull quote from the customer if you have one that reinforces the problem or the reason they chose Fern. Engineer/practitioner quotes are stronger than executive quotes here. Most case studies will have a single pull quote — place it where it does the most work, usually in or after the Problem section.
 
### The Solution
Title: A short headline summarizing what Fern enabled.
 
Opening paragraph (2-3 sentences): Set up the bullets with context on the migration or collaboration — whatever framing fits the angle of this particular case study. Give the reader a sense of the overall system before diving into specifics.
 
Then 3-5 bold-labeled bullets, each telling a mini story. Each bullet should:
- Lead with a descriptive label (not a Fern feature name — describe the capability from the customer's perspective)
- Describe the customer's actual workflow or setup
- Make the Fern connection explicit (what feature enables this, or what Fern built based on this customer's feedback)
- Include a specific detail: a tool name, a number, a workflow step, a concrete example
**Specificity over generality.** Many Fern customers share common needs — custom components, docs-as-code, AI search. The job of the case study is to describe how *this* customer uses the feature in their specific context, not that the feature exists. For example: don't write "Acme uses custom React components in their docs." Do write "Acme imports custom React components and constants directly from their codebase so that when a parameter changes in the app, the docs reflect it automatically. Some reference pages are generated entirely from code using custom MDX components that pull from shared packages." The first version could describe any customer. The second version is unmistakably about Acme's setup.
 
Consolidate related capabilities into single bullets. For example, PR preview links belong inside a docs-as-code workflow bullet, not as a standalone item. If a bullet doesn't have enough substance to tell a mini story, merge it with a related bullet.
 
### Looking Ahead
Title: A short headline about what's next.
 
One to two short paragraphs. Focus on:
- The ongoing collaboration between the customer and Fern (features the customer inspired that shipped to other customers, features currently being built from their feedback)
- Where the customer's product is heading and how their docs will evolve with it
If you have a second quote, this section is a natural place for it — woven into prose rather than as a standalone blockquote. But most case studies will only have one quote, and that's fine.
 
## Writing process
 
Input will typically be raw meeting notes, Slack messages, and/or scattered details — not a clean brief. The process has two phases: outline, then draft. Do not skip to drafting.
 
### Phase 1: Outline
 
1. **Read all the notes.** Identify: the previous setup, the specific pain points, the Fern features they use, the metrics available, any quotes, and the angle (what makes this customer's story different from other Fern case studies).
2. **Assess the metrics.** Analyze whatever candidate metrics are available in the notes. For each one: is it strong as-is? Can it be extrapolated to increase impact (show the math)? Is it redundant with another metric? Is it actually surprising? Present your analysis and suggestions. Flag if a third metric is missing and suggest what data to look for.
3. **Present a structured outline.** Format:
   - **Title:** The proposed one-line title
   - **The Problem:** Section headline + 1-2 sentences summarizing what this section will cover
   - **The Solution:** Section headline + one-line summary of each proposed bullet (3-5 bullets)
   - **Looking Ahead:** Section headline + 1 sentence on what this section will cover
   - **Metrics:** Your recommended three metrics with analysis
   - **Quote placement:** Where the pull quote will go and why
   - **Gaps:** Anything missing from the notes that would strengthen the case study
   - **Questions for the user:** Specific things you need more information on or a better angle for — e.g., "The notes mention custom components but not what they render or why they matter. Can you get more detail on this?" or "The migration timeline is vague — do you know when they started and when they went live?" or "This bullet about automated publishing is thin — is there a specific workflow detail or before/after contrast you can get from the customer?"
4. **Wait for approval.** Iterate on the outline with the user until they approve it. Do not draft until the outline is approved.
### Phase 2: Draft
 
5. **Draft the full case study** based on the approved outline.
6. **Audit every sentence.** For each sentence, ask:
   - Is this specific to this customer, or could it describe anyone?
   - Does this say something concrete, or is it filler?
   - If this is in the Solution section, is the Fern connection clear?
   - Am I telling the reader what to think, or letting the facts speak?
7. **Flag gaps.** If any section feels thin, tell the user what's missing and suggest what to ask the customer in a follow-up.
## What NOT to do
 
- Don't use "seamless", "game-changing", "best-in-class", "empowering", "supercharge", "cutting-edge", or any similar filler
- Don't editorialize ("a striking story", "an impressive achievement", "a major win")
- Don't use phrases that reveal you're summarizing an interview ("the team highlighted", "was called out as", "they noted that")
- Don't include bullets in the Solution section that have no connection to Fern
- Don't include metrics just because they're available — only if they tell a story
- Don't pad short sections with generic content. If a section is short because the notes are thin, flag it to the user
- Don't write a Looking Ahead section that's just "as they scale, Fern scales with them" — be specific about what's actually next

## Reference examples

Five published case studies establish the pattern. Use them as tone and specificity benchmarks — don't copy any one mechanically.

1. **[Deepgram](https://buildwithfern.com/customers/deepgram)** ([mdx](../../../content/case-studies/deepgram.mdx)) — Voice AI. Unified REST (OpenAPI) and WebSocket (AsyncAPI 3.0) docs into one developer experience and opened doc contribution to PMs across the company via Fern Writer.
2. **[ElevenLabs](https://buildwithfern.com/customers/elevenlabs)** ([mdx](../../../content/case-studies/elevenlabs.mdx)) — Voice AI at >1B end users. Consolidated docs and SDK generation on Fern as the API surface scaled. Heavy Fern Editor usage (200+ commits/month).
3. **[Frame.io](https://buildwithfern.com/customers/frame)** ([mdx](../../../content/case-studies/frame.mdx)) — Adobe-owned creative collaboration platform. Shipped SDKs alongside synced docs and turned auth questions from 90% of support load into self-serve answers.
4. **[Payabli](https://buildwithfern.com/customers/payabli)** ([mdx](../../../content/case-studies/payabli.mdx)) — Payments infrastructure. Migrated off Mintlify in three weeks, switched OpenAPI to Fern Definition, and shipped 9 SDK languages.
5. **[Unleash](https://buildwithfern.com/customers/unleash)** ([mdx](../../../content/case-studies/unleash.mdx)) — Open-source FeatureOps. Migrated 300+ pages off Docusaurus in two weeks with a one-person docs team and made every page AI-ready as half their traffic shifted to LLM tools.