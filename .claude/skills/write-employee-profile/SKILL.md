---
name: employee-profile
description: >
  Write employee profile blog posts for Fern (a Postman company), specifically with a
  "customer to employee/contributor" framing. Use this skill when the user asks to draft,
  write, or edit an employee profile, team profile, team spotlight, or "meet the team" post
  for Fern's blog. Triggers include: "employee profile", "team profile", "write up this
  person", "draft a profile from these notes", "customer to employee", "customer turned
  engineer", or any request to turn interview notes about a Fern team member into a
  publishable blog post. Also use when the user provides raw interview transcripts or
  meeting notes about a Fern employee and asks to turn them into a blog post or profile.
  Do NOT use for case studies, changelog entries, LinkedIn posts, or general marketing copy.
---
 
# Employee Profile
 
Write employee profiles for Fern's blog based on interview notes, transcripts, and Slack context. These are first-person narrative blog posts (~800–1,200 words) that tell the story of someone who used Fern as a customer and then joined the company.
 
## The angle
 
Every Fern employee profile follows the same core arc: **customer → contributor**. The person used Fern at a previous company, saw the product from the outside, and now builds it from the inside. The post should make the reader understand:
 
1. What the person's previous company needed from Fern (specific products, languages, workflows)
2. What they noticed about Fern as a customer (support quality, product velocity, specific features)
3. How they ended up joining
4. What's different about working at Fern vs. where they came from
5. What they're working on now and why it matters to customers
The arc should feel natural, not forced. Not everyone will have a dramatic conversion story—some people just liked the product and an opportunity came up. That's fine. Don't inflate the narrative.
 
## Core principles
 
These are shared with Fern's case study voice. Internalize them—they apply to every sentence.
 
- **No editorializing.** Don't tell the reader what to think ("an incredible journey", "a perfect fit"). State what happened and let it land.
- **No exaggeration.** Don't inflate what the person did or what Fern does. If they helped migrate SDKs, say which ones. If they shipped a small feature on day one, call it small.
- **No generic filler.** Phrases like "passionate about developer experience", "thriving startup culture", or "exciting opportunity" add nothing. Replace them with what actually happened or what the person actually said.
- **No marketing language about Fern.** The profile should describe Fern's products concretely (what they do, how they work) rather than promoting them. The reader should come away understanding the product, not feeling sold to.
- **Specifics over abstractions.** Name the languages (Ruby, PHP, TypeScript). Name the tools (APIMatic, Fern CLI). Name the features (SDK previews, Autorelease). Name the people if appropriate (with their permission). Vague descriptions of "developer tools" or "SDK infrastructure" waste the reader's time.
- **Don't summarize the interview.** Phrases like "Barry highlighted that" or "one thing he called out was" reveal the seams. Just describe the thing directly, in first person.
## Voice and tone
 
- **First person.** The profile reads as if the subject wrote it. Use "I", "we", "my".
- **Conversational but not slangy.** Aim for the tone of a thoughtful blog post by an engineer, not a press release or a casual Slack message. Contractions are fine. Exclamation points are not.
- **Honest about tradeoffs.** If the person came from a big company, it's fine to name things that were better there (clear ownership boundaries, more resources) alongside things that are better at Fern (speed, directness). One-sided enthusiasm reads as fake.
- **Let the person's personality come through.** If they're understated, keep it understated. If they're opinionated, let the opinions show. Don't sand everyone into the same voice.
## Structure
 
The structure below is a guide, not a rigid template. Sections can be combined, reordered, or retitled based on what the person's story actually is. The Sandeep and Barry profiles both follow this general shape but handle the sections differently based on what's interesting about each person's story.
 
### TL;DR
Two to three sentences at the top in italics. Cover: where they were before, that they joined Fern, and a teaser for what the post covers. If this isn't the first profile in the series, link back to earlier ones naturally (e.g., "he's not the first to go from Fern customer to Fern engineer").
 
### Opening paragraphs (no header)
Brief setup: where they worked, what they did, how they encountered Fern. This should be short—two to three paragraphs max. Get to the Fern connection quickly.
 
### The customer experience
What Fern products they used and how. This section should include:
- Specific products and languages (e.g., "migrated Java, TypeScript, and Python SDKs")
- What they were migrating from and why (name the previous tool)
- What their role was in the integration (reviewing PRs, refining the release pipeline, etc.)
- What stood out about Fern from the customer side (support responsiveness, product velocity, etc.)
Be concrete. "I helped bring over Ruby and PHP" is better than "I helped with the SDK migration." "We'd mention an issue and hear back quickly" is better than "the support was great."
 
Don't oversell Fern's support or service. Describe what the person experienced without making promises about what every customer will get.
 
### The transition
How they went from customer to employee/contributor. Keep this proportional to how interesting the story actually is:
- If there's a good story (founder sold on the mission, deliberate career decision), give it a full section.
- If it was circumstantial (left previous job, someone made an introduction, timing worked out), keep it to a paragraph or fold it into another section.
Don't force drama. "I connected with Danny about contributing to Fern" is fine if that's what happened. Don't pad with "soul-searching" language if the person just took an opportunity that came up.
 
### What's different on the inside
Observations about Fern's engineering culture from someone who's seen both sides. This is where the big-company-to-startup contrast lives. Common themes from existing profiles:
- Speed of decision-making and prototyping
- Ownership model (one team, everyone swarms on problems)
- How customer feedback flows directly into priorities
Ground observations in examples. "The team pivots fast" is weak. "You go from 'this is a problem' to 'here's something that works' much quicker than I was used to" is stronger.
 
It's fine—and encouraged—to acknowledge tradeoffs. Big companies have strengths too (accountability structures, resources). Acknowledging this makes the startup observations more credible.
 
### What I'm working on
Current projects, described at a level a technical reader outside Fern would understand. For each project:
- What it does (in one or two sentences a developer would understand)
- Why it matters to customers (connect it to the customer experience)
- Enough detail to be concrete, but not so much that it reads like internal documentation
The "docs preview, but for SDKs" level of explanation is about right. CLI flags, benchmark methodologies, and infrastructure specifics (Alpine vs. Debian) are too deep for this audience.
 
If relevant, connect current work back to the customer experience: "It's the kind of work where having been on the customer side helps."
 
### Closing
Optional. If there's a natural forward-looking beat (hiring, a product direction they're excited about), include it. If not, the "What I'm working on" section can end the post. Don't force a closing just to have one.
 
The Sandeep post ends with a hiring CTA ("If building developer tools you'd want to use yourself sounds appealing, we're hiring."). This is fine but not required for every profile.
 
## Writing process
 
### Phase 1: Assess the material
 
Input will typically be raw interview transcripts, meeting notes, and/or Slack messages. Before drafting:
 
1. **Identify the arc.** What's the most interesting version of this person's customer-to-contributor story? What makes their path different from other profiles?
2. **Extract specifics.** Pull out: product names, language names, tool names, feature names, team names, timelines, and any concrete anecdotes.
3. **Identify gaps.** Flag anything that's missing or vague. Common gaps: exact timeline of events, specific project details, what they were doing at their previous company beyond the Fern integration, what specifically they're working on now.
4. **Check sensitivity.** Flag anything the subject might not want published: layoff details, internal company dynamics, criticism of previous employers, details about unreleased features. When in doubt, flag it and let the user decide.
Present a short summary of the arc you see, the key specifics you'll use, and any gaps or sensitivity flags. Wait for the user to confirm direction before drafting.
 
### Phase 2: Draft
 
5. **Draft the full profile** based on the confirmed direction.
6. **Audit every paragraph.** For each paragraph, ask:
   - Is this specific to this person, or could it describe anyone joining any startup?
   - Am I telling the reader what to think, or letting the story speak?
   - Would this person actually say this, or does it sound like marketing copy?
   - Is this the right level of detail for a blog audience (not too shallow, not too deep)?
7. **Flag remaining gaps.** If any section feels thin, tell the user what's missing and suggest what to ask the subject.
### Phase 3: Iterate
 
8. Work with the user to refine. Common iteration patterns:
   - Adjusting how much detail to include about previous employer
   - Calibrating how positively to describe Fern (avoid overselling)
   - Deciding what's too internal/specific for a public post
   - Combining or splitting sections based on how much material exists
## What NOT to do
 
- Don't use "passionate", "thrilling", "incredible", "game-changing", or similar filler
- Don't editorialize ("a natural fit", "an exciting new chapter", "a perfect match")
- Don't use interview-reporting language ("he noted that", "she highlighted", "one thing that stood out")
- Don't make the profile sound like a recruiting pitch—it should read as a genuine story
- Don't include internal details the subject hasn't approved (layoff specifics, internal disagreements, unreleased features without clearance)
- Don't describe Fern's culture in ways that would make a current employee cringe ("we're like a family", "we move fast and break things")
- Don't pad thin sections with generic startup platitudes. If a section is thin, flag it
- Don't force every profile into identical structure—adapt to what's interesting about each person's story
## Reference examples
 
Two published profiles establish the pattern:
 
1. **[Sandeep Dinesh](https://buildwithfern.com/post/fernie-sandeep)** ([mdx](../../../content/blog/fernie-sandeep.mdx)) — YC founder → Fern customer at Mercoa → Fern engineer. Strong "deliberate career choice" arc. Includes a specific day-one feature (progress bar for `fern docs dev`). Forward-looking section about docs performance and self-service workflow.
2. **[Barry Zou](https://buildwithfern.com/post/from-fern-customer-to-fern-contributor)** ([mdx](../../../content/blog/from-fern-customer-to-fern-contributor.mdx)) — Square engineer → Fern customer via SDK pipeline migration → Fern contributor. More circumstantial transition (left Square, connected with Danny). Strong big-company-to-startup contrast section. Current work section focused on SDK previews and generator performance.

When writing new profiles, don't copy the structure of either one mechanically. Use them as tone and specificity benchmarks.