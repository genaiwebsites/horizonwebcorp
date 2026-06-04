# Graph Report - horizonwebcorp  (2026-06-05)

## Corpus Check
- 38 files · ~1,282,757 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 181 nodes · 243 edges · 19 communities (12 shown, 7 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `386a97de`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `🟢 Resolved Quality Issues (Completed)` - 11 edges
3. `ArrowRight()` - 9 edges
4. `PillButton()` - 8 edges
5. `Product` - 8 edges
6. `Footer()` - 6 edges
7. `Nav()` - 6 edges
8. `scripts` - 5 edges
9. `BlogPost` - 5 edges
10. `Web Quality Audit — Horizon Web Corp` - 5 edges

## Surprising Connections (you probably didn't know these)
- `BlogContentProps` --references--> `BlogPost`  [EXTRACTED]
  src/components/BlogContent.tsx → src/data/blogs.ts
- `BlogsGridProps` --references--> `BlogPost`  [EXTRACTED]
  src/components/BlogsGrid.tsx → src/data/blogs.ts

## Import Cycles
- None detected.

## Communities (19 total, 7 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.15
Nodes (14): metadata, Footer(), ArrowRight(), ExternalLink(), Layers(), MenuIcon(), XIcon(), Nav() (+6 more)

### Community 1 - "Community 1"
Cohesion: 0.07
Nodes (27): dependencies, cobe, framer-motion, lucide-react, next, react, react-dom, react-globe.gl (+19 more)

### Community 2 - "Community 2"
Cohesion: 0.13
Nodes (12): PROJECTS, AnimatedCounter(), AnimatedCounterProps, BentoCard(), ContactModal(), ContactModalProps, GlobeIcon(), Zap() (+4 more)

### Community 3 - "Community 3"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 4 - "Community 4"
Cohesion: 0.11
Nodes (18): 10. [SEO & Best Practices] Page Metadata & Titles, 1. [Accessibility] Form Labels Linked to Inputs, 1. [Best Practices] Vulnerable Dependency — PostCSS XSS, 2. [Accessibility] Modal Close Button Accessible Name, 2. [Performance] Google Fonts Resource Payload, 3. [Accessibility] Keyboard Skip Navigation Bypass, 3. [Anti-Pattern] Heading Gradient Text AI Tells, 4. [Accessibility] prefers-reduced-motion Support (+10 more)

### Community 5 - "Community 5"
Cohesion: 0.17
Nodes (12): BlogContent(), BlogContentProps, Section, BlogsGrid(), BlogsGridProps, containerVariants, itemVariants, Calendar() (+4 more)

### Community 6 - "Community 6"
Cohesion: 0.25
Nodes (6): inter, jetBrainsMono, metadata, spaceGrotesk, syne, Preloader()

### Community 7 - "Community 7"
Cohesion: 0.22
Nodes (8): Accessibility & Inclusion, Anti-references, Brand Personality, Design Principles, Product, Product Purpose, Register, Users

### Community 8 - "Community 8"
Cohesion: 0.32
Nodes (5): DynamicGlobe, Hero(), ParticleVortex(), Star, Starfield()

### Community 10 - "Community 10"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

## Knowledge Gaps
- **94 isolated node(s):** `eslintConfig`, `nextConfig`, `name`, `version`, `private` (+89 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `ArrowRight()` connect `Community 0` to `Community 8`, `Community 2`, `Community 5`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `nextConfig`, `name` to the rest of the system?**
  _94 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.1455026455026455 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.13157894736842105 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._