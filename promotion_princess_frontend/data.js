// ── SAMPLE DATA — fictional competency framework for demo/portfolio purposes ──
// This file mirrors the exact structure (keys, nesting, and shape) of the production
// data.js used by the real tool, but all company name, role names, KPI figures,
// and descriptive text below are fictional placeholders — no real company data.
//
// Company used throughout: "Nimbus Consulting" (fictional)
// This file must be loaded before main.js in index.html.

// Competency level definitions for each dimension (used in the Competency Dimensions section)
const annex1 = {
  "annex1": {
    "consulting_behaviours": {
      "definition": "Demonstrates professionalism, adaptability, initiative, and a commitment to continuous learning. Models Nimbus values consistently.",
      "exposure": "Shows curiosity, punctuality, and professionalism. Seeks feedback and applies it.",
      "developing": "Applies Nimbus values in client environments. Adapts to ambiguity with resilience and professionalism.",
      "proficient": "Trusted role model in team settings. Demonstrates discretion and integrity, builds inclusivity and collaboration.",
      "mastered": "Exemplifies integrity and discretion across all engagements. Proactively adapts to change and diverse environments. Coaches others on resilience and self-leadership. Creates psychologically safe, inclusive team environments."
    },
    "core_consulting_skills": {
      "definition": "Applies structured thinking, problem solving, stakeholder communication, and facilitation at increasing levels of scope and influence.",
      "exposure": "Applies basic problem-solving methods to simple tasks. Communicates clearly with guidance.",
      "developing": "Shapes discrete deliverables using structured approaches. Presents work clearly and contributes to meetings.",
      "proficient": "Owns workstream planning, applies frameworks independently, manages stakeholder interactions confidently.",
      "mastered": "Shapes complex engagements using structured frameworks and logic. Influences senior stakeholders with clarity and credibility. Facilitates high-impact meetings and drives decisions. Mentors others on communication and consulting craft."
    },
    "delivery": {
      "definition": "Owns delivery and outcomes of engagements and portfolios. Ensures value creation and client satisfaction.",
      "exposure": "Completes allocated tasks to time and quality expectations. Learns project delivery basics.",
      "developing": "Manages workstream deliverables with oversight. Begins identifying risks, issues, and dependencies.",
      "proficient": "Owns delivery of small projects or workstreams. Ensures outcomes, mitigates risks, and drives client satisfaction.",
      "mastered": "Leads multi-workstream programmes with clear outcomes and governance. Owns delivery health and proactively mitigates risk. Drives measurable client value. Coaches delivery leads in best practice."
    },
    "content_and_innovation": {
      "definition": "Shapes internal IP, offers, or methodologies. Brings new thinking to client challenges.",
      "exposure": "Documents lessons learned; contributes ideas for templates or small tools.",
      "developing": "Champions innovation forums, contributes to whitepapers or assets. Brings market insight into client conversations.",
      "proficient": "Leads scalable asset creation across practices. Encourages consultants to codify and share learning.",
      "mastered": "Sponsors cross-practice IP strategy. Brings external insight to differentiate Nimbus. Recognised for thought leadership."
    },
    "people_development": {
      "definition": "Builds and sustains high-performing teams. Coaches individuals, supports career progression, and embeds a culture of growth and feedback.",
      "exposure": "Seeks feedback and demonstrates openness to coaching. Collaborates well with peers.",
      "developing": "Shares learnings with others; begins supporting junior colleagues informally.",
      "proficient": "Mentors consultants and supports their development. Helps drive retention through belonging and engagement.",
      "mastered": "Owns talent strategy and succession planning for their area. Leads performance reviews and development initiatives. Recognised mentor and role model across the business."
    },
    "client_development": {
      "definition": "Builds lasting senior client relationships and identifies opportunities to grow influence and accounts.",
      "exposure": "Demonstrates professionalism in client interactions. Learns to recognise client priorities.",
      "developing": "Supports account growth by contributing insight. Joins senior colleagues in stakeholder meetings.",
      "proficient": "Manages relationships independently at project-manager level. Translates client needs into opportunities.",
      "mastered": "Maintains multiple senior client relationships at Director/CxO level. Translates client goals into growth opportunities for Nimbus. Advises clients strategically, with influence across the business."
    },
    "business_development": {
      "definition": "Supports strategic sales efforts, brings forward opportunities, and leads components of bids or propositions.",
      "exposure": "Gains exposure to bid preparation through research, analysis, or small drafting inputs, under guidance.",
      "developing": "Drives key sections of major bids, including commercials and delivery models. Identifies white space within accounts and advocates expansion.",
      "proficient": "Owns significant bid components; co-authors proposals across practices or sectors.",
      "mastered": "Shapes commercial strategy, consistently originates sales through relationships and assets. Recognised leader in go-to-market growth."
    }
  }
};

// Managed Revenue definition, formula, and illustration (shown for senior consultant and above)
const annex3 = {
  "annex3": {
    "definition": "Managed Revenue is the total billed value of client projects attributable to an individual, based on: 1. Their own billable work, and 2. The billable work of consultants from their team who are graded at the same level (peers) or below, deployed on client projects.",
    "formula": "Managed Revenue = Sum(Billable Days of Self + Peers + All Team Members Below Grade) x Daily Rate of Each",
    "illustration": "Associate Director contributes 50 days x $2,000 = $100K. Team: 2 Managers (each 100 days x $1,100) + 3 Consultants (each 120 days x $800). Managers: 200 days x $1,100 = $220K. Consultants: 360 days x $800 = $288K. Total Managed Revenue = $100K + $220K + $288K = $608K",
    "caveats": [
      "Higher grades are assumed to be accountable for the combined revenue of multiple teams/projects.",
      "Even if the individual is not the formal day-to-day lead, revenue their team (peers or below) bills is attributed to them.",
      "Historical averages for project sizes and team mixes are used as a guide for revenue targets.",
      "Approved internal investment codes are considered billable if there is a business justification."
    ]
  }
};

// AI Adoption KPI scoring criteria and role labels
const annex4 = {
  "annex4": {
    "purpose": "Encourage everyday use of data & AI to run Nimbus more effectively",
    "score_calculation": "Your quarterly KPI score = sum of points from IDs 1-5, capped at 10",
    "what_is_counted": [
      "Artefacts/IP that enable AI adoption (policy, best practice, process)",
      "Business cases for data/AI-driven operational improvements",
      "Delivered changes that improve decisions or productivity/quality/cycle time",
      "Formal assessments of tools/technologies for operational gains",
      "Personal use of approved AI tools in day-to-day work"
    ],
    "evidence_and_approval": [
      "Where possible, provide one link (Jira/ADO/Confluence/SharePoint) plus 2-3 bullets: what changed, who uses it, rough impact",
      "Line manager or initiative lead validates role and evidence"
    ],
    "role_labels": {
      "owner": "accountable for creating/delivering the item",
      "contributor": "provided material input",
      "reviewer": "performed quality/assurance or sign-off"
    },
    "criteria": [
      {
        "id": 1,
        "assessed_criteria": "Contribution to artefacts/IP assets that facilitate adoption of AI",
        "measured_by": [
          "Anecdotal categorisation of contribution as one of (Owner, Contributor, Reviewer)",
          "Time booked against Jira/ADO tickets on relevant projects as a contributor"
        ],
        "scoring": [
          "5 points for each \"owner\"",
          "1 point for \"contributor\"/\"reviewer\""
        ]
      },
      {
        "id": 2,
        "assessed_criteria": "Contribution to business cases submitted for initiatives designed to increase Nimbus's operational efficiency and/or effectiveness through the use of data and/or AI",
        "measured_by": [
          "Anecdotal categorisation of contribution as one of (Owner, Contributor, Reviewer)"
        ],
        "scoring": [
          "5 points for each \"owner\"",
          "1 point for \"contributor\"/\"reviewer\""
        ]
      },
      {
        "id": 3,
        "assessed_criteria": "Contribution to the delivery of projects that successfully increase operational efficiency and/or effectiveness through more accurate and/or timely data-driven decision-making",
        "measured_by": [
          "Anecdotal categorisation of contribution as one of (Owner, Contributor, Reviewer)",
          "Time booked against Jira/ADO tickets on relevant projects",
          "Anecdotal evidence of impact of enhanced decision-making, captured through user surveys"
        ],
        "scoring": [
          "5 points for each \"owner\"",
          "1 point for \"contributor\"/\"reviewer\" where evidence indicates a productivity enhancement",
          "5 bonus points where productivity enhancements exceed 15%"
        ]
      },
      {
        "id": 4,
        "assessed_criteria": "Contribution to formal assessment of tools/technologies that could enhance operational efficiency and/or effectiveness",
        "measured_by": [
          "Anecdotal categorisation of contribution as one of (Owner, Contributor, Reviewer)",
          "Anecdotal evidence of productivity gains, captured through user surveys"
        ],
        "scoring": [
          "5 points for each \"owner\"",
          "1 point for \"contributor\"/\"reviewer\""
        ]
      },
      {
        "id": 5,
        "assessed_criteria": "Use of AI tooling in day-to-day activities to enhance personal productivity",
        "measured_by": [
          "Anecdotal, validated through discussion with line manager"
        ],
        "scoring": [
          "1 point for evidencing"
        ]
      }
    ]
  }
};

// Full role profiles — KPIs, objectives, competency dimensions, focus, and indicators of readiness
const roleProfiles = {
  "director": {
    "leadership": {
      "kpi": {
        "revenue managed": "$4M-$6M+ (portfolio of multiple clients/sectors, plus leadership responsibilities)",
        "utilisation": "50-60% (typically 2-3dpw client-facing; remainder on strategy, leadership, and growth)",
        "sales originated": "$1M+",
        "sales supported": "$5M+",
        "assets": "4-5 annually, with measurable reuse",
        "bids supported": "20+ high-value bids, across sectors and geographies",
        "ai adoption": "10 points per year"
      },
      "core objectives": {
        "commercial leadership": "Own multi-million-dollar revenue portfolios, drive profitability, and ensure sustainable margin growth.",
        "client impact & delivery": "Act as senior executive sponsor, guaranteeing delivery excellence across practices and regions.",
        "strategic leadership": "Shape and execute Nimbus's strategic priorities, ensuring alignment with global direction and Board-level goals.",
        "people & culture": "Build, inspire, and retain high-performing leadership teams. Role-model inclusive leadership and continuous development.",
        "innovation & market impact": "Sponsor IP development, assets, and thought leadership that extend Nimbus's influence across industries and geographies."
      },
      "competency dimensions": {
        "consulting behaviours": ["Mastered", "Annex 1.1"],
        "core consulting skills": ["Mastered", "Annex 1.2"],
        "delivery": ["Mastered", "Annex 1.3"],
        "content & innovation": ["Mastered", "Annex 1.4"],
        "people development": ["Mastered", "Annex 1.5"],
        "client development": ["Mastered", "Annex 1.6"],
        "business development": ["Mastered", "Annex 1.7"]
      },
      "focus": [
        "Works globally across practices, sectors, and geographies, ensuring consistency and alignment.",
        "Partners with Sector Leads, Finance, Sales, Marketing, and Client Leadership Teams to drive sustainable growth.",
        "Collaborates with Nimbus's executive leadership to deliver on strategic priorities and Board-level outcomes.",
        "Represents Nimbus externally as a thought leader and trusted advisor to C-level executives."
      ],
      "indicators of readiness": [
        "Consistent revenue/margin growth.",
        "Visible leader of cross-functional initiatives.",
        "Recognised as internal and external thought leader.",
        "Proven influence with C-suite clients.",
        "Strong succession plan in place."
      ]
    },
    "expert": {
      "kpi": {
        "revenue managed": "$4M-$6M+ (portfolio of multiple clients/sectors, plus leadership responsibilities)",
        "utilisation": "50-60% (typically 2-3dpw client-facing; remainder on strategy, leadership, and growth)",
        "sales originated": "$1M+",
        "sales supported": "$5M+",
        "assets": "4-5 annually, with measurable reuse",
        "bids supported": "20+ high-value bids, across sectors and geographies",
        "ai adoption": "10 points per year"
      },
      "core objectives": {
        "commercial leadership": "Own multi-million-dollar revenue portfolios, drive profitability, and ensure sustainable margin growth.",
        "client impact & delivery": "Act as senior executive sponsor, guaranteeing delivery excellence across practices and regions.",
        "strategic leadership": "Shape and execute Nimbus's strategic priorities, ensuring alignment with global direction and Board-level goals.",
        "people & culture": "Build, inspire, and retain high-performing leadership teams. Role-model inclusive leadership and continuous development.",
        "innovation & market impact": "Sponsor IP development, assets, and thought leadership that extend Nimbus's influence across industries and geographies."
      },
      "competency dimensions": {
        "consulting behaviours": ["Mastered", "Annex 1.1"],
        "core consulting skills": ["Mastered", "Annex 1.2"],
        "delivery": ["Mastered", "Annex 1.3"],
        "content & innovation": ["Mastered", "Annex 1.4"],
        "people development": ["Mastered", "Annex 1.5"],
        "client development": ["Mastered", "Annex 1.6"],
        "business development": ["Mastered", "Annex 1.7"]
      },
      "focus": [
        "Works globally across practices, sectors, and geographies, ensuring consistency and alignment.",
        "Partners with Sector Leads, Finance, Sales, Marketing, and Client Leadership Teams to drive sustainable growth.",
        "Collaborates with Nimbus's executive leadership to deliver on strategic priorities and Board-level outcomes.",
        "Represents Nimbus externally as a thought leader and trusted advisor to C-level executives."
      ],
      "indicators of readiness": [
        "Trusted advisor to C-level clients across domains.",
        "Leads technical strategy on multi-million-dollar programmes.",
        "Sets technical standards scalable across engagements.",
        "Influences industry direction through external thought leadership.",
        "Builds a strong pipeline of next-generation technical leaders."
      ]
    }
  },
  "associate director": {
    "leadership": {
      "kpi": {
        "revenue managed": "$2.5M-$3.5M",
        "utilisation": "60% (3dpw)",
        "sales originated": "$500K-$1M",
        "sales supported": "$4M-$6M",
        "assets": "0-2",
        "bids supported": "24",
        "ai adoption": "10 per year"
      },
      "core objectives": {
        "commercial leadership": "Drive revenue and margin, own and forecast pipeline, lead bids, grow accounts.",
        "client impact & delivery": "Act as executive sponsor, ensure delivery excellence, drive innovation.",
        "talent development": "Mentor future leaders, oversee performance, champion inclusive culture.",
        "strategic initiatives": "Advance Nimbus's priorities, sponsor internal IP/tooling, represent externally."
      },
      "competency dimensions": {
        "consulting behaviours": ["Mastered", "Annex 1.1"],
        "core consulting skills": ["Mastered", "Annex 1.2"],
        "delivery": ["Mastered", "Annex 1.3"],
        "content & innovation": ["Proficient", "Annex 1.4"],
        "people development": ["Mastered", "Annex 1.5"],
        "client development": ["Proficient", "Annex 1.6"],
        "business development": ["Proficient", "Annex 1.7"]
      },
      "focus": [
        "Commercial growth, client leadership, and cross-practice expansion.",
        "Lead multi-workstream programmes and own delivery ROI.",
        "Grow accounts and maintain senior CxO relationships.",
        "Shape new propositions and support cross-sector pursuits.",
        "Sponsor and mentor high-potential consultants into leadership roles."
      ],
      "indicators of readiness": [
        "Proven commercial exposure: supports sales, manages pipeline, delivers ROI.",
        "Recognised leader of large-scale programmes.",
        "Builds CxO-adjacent relationships.",
        "Sponsors cross-practice innovation initiatives."
      ]
    },
    "expert": {
      "kpi": {
        "revenue managed": "$3M-$4M",
        "utilisation": "60%-70% (3-3.5dpw)",
        "sales originated": "$300K-$750K",
        "sales supported": "$4M-$6M",
        "assets": "3+",
        "bids supported": "12",
        "ai adoption": "10 per year"
      },
      "core objectives": {
        "commercial leadership": "Drive revenue and margin, own and forecast pipeline, lead bids, grow accounts.",
        "client impact & delivery": "Act as executive sponsor, ensure delivery excellence, drive innovation.",
        "talent development": "Mentor future leaders, oversee performance, champion inclusive culture.",
        "strategic initiatives": "Advance Nimbus's priorities, sponsor internal IP/tooling, represent externally."
      },
      "competency dimensions": {
        "consulting behaviours": ["Mastered", "Annex 1.1"],
        "core consulting skills": ["Mastered", "Annex 1.2"],
        "delivery": ["Mastered", "Annex 1.3"],
        "content & innovation": ["Proficient", "Annex 1.4"],
        "people development": ["Mastered", "Annex 1.5"],
        "client development": ["Proficient", "Annex 1.6"],
        "business development": ["Proficient", "Annex 1.7"]
      },
      "focus": [
        "Technical direction, innovation, and cross-capability excellence.",
        "Set the direction for Nimbus's core capabilities, establishing standards, frameworks, and reusable assets across engagements.",
        "Own solution design and technical vision for large-scale programmes.",
        "Establish technical governance, assurance, and best-practice frameworks.",
        "Act as senior technical counterpart to client CTOs, CDOs, CIOs.",
        "Mentor and grow architects, engineers, and data specialists."
      ],
      "indicators of readiness": [
        "Acts as technical lead for multi-million-dollar programmes.",
        "Recognised expert in at least one Nimbus capability area.",
        "Shapes and enforces technical frameworks across projects.",
        "Coaches technical leaders; builds a pipeline of next-generation specialists."
      ]
    }
  },
  "senior manager": {
    "leadership": {
      "kpi": {
        "revenue managed": "$1.25M-$1.75M",
        "utilisation": "75%-80% (3.5-4dpw)",
        "sales originated": "$200K-$400K",
        "sales supported": "$2M-$4M",
        "assets": "2-3",
        "bids supported": "10-15",
        "ai adoption": "7 points per year"
      },
      "core objectives": {
        "delivery leadership": "Own delivery across multiple concurrent workstreams, ensuring quality and client satisfaction.",
        "commercial contribution": "Support pipeline development and contribute to bid components within area of expertise.",
        "team leadership": "Lead and develop a team of consultants, providing coaching and performance guidance.",
        "practice contribution": "Contribute to practice-level initiatives, methods, and internal capability building."
      },
      "competency dimensions": {
        "consulting behaviours": ["Proficient", "Annex 1.1"],
        "core consulting skills": ["Mastered", "Annex 1.2"],
        "delivery": ["Mastered", "Annex 1.3"],
        "content & innovation": ["Proficient", "Annex 1.4"],
        "people development": ["Proficient", "Annex 1.5"],
        "client development": ["Proficient", "Annex 1.6"],
        "business development": ["Developing", "Annex 1.7"]
      },
      "focus": [
        "Own delivery outcomes across a portfolio of workstreams.",
        "Develop and coach a growing team of consultants.",
        "Build credibility with senior client stakeholders.",
        "Contribute to bid writing and commercial proposals."
      ],
      "indicators of readiness": [
        "Consistently delivers complex, multi-workstream programmes.",
        "Demonstrated commercial acumen and bid contribution.",
        "Recognised people leader with strong team retention.",
        "Building visible reputation with senior client stakeholders."
      ]
    },
    "expert": {
      "kpi": {
        "revenue managed": "$1.5M-$2M",
        "utilisation": "80%-85% (4dpw)",
        "sales originated": "$100K-$300K",
        "sales supported": "$2M-$4M",
        "assets": "2-3",
        "bids supported": "8-10",
        "ai adoption": "7 points per year"
      },
      "core objectives": {
        "technical leadership": "Own technical direction for complex engagements, ensuring architectural soundness and delivery quality.",
        "capability building": "Develop reusable technical assets, frameworks, and best practices for the practice.",
        "mentorship": "Coach and develop technical talent across engagements.",
        "client advisory": "Act as trusted technical advisor to client engineering and data leadership."
      },
      "competency dimensions": {
        "consulting behaviours": ["Proficient", "Annex 1.1"],
        "core consulting skills": ["Mastered", "Annex 1.2"],
        "delivery": ["Mastered", "Annex 1.3"],
        "content & innovation": ["Mastered", "Annex 1.4"],
        "people development": ["Proficient", "Annex 1.5"],
        "client development": ["Developing", "Annex 1.6"],
        "business development": ["Developing", "Annex 1.7"]
      },
      "focus": [
        "Own technical solution design for complex, high-stakes engagements.",
        "Build and maintain reusable technical assets and accelerators.",
        "Mentor engineers and technical consultants.",
        "Serve as escalation point for technical risk and architecture decisions."
      ],
      "indicators of readiness": [
        "Recognised technical authority within a capability area.",
        "Track record of scalable, reused technical assets.",
        "Strong mentorship record with measurable talent growth.",
        "Trusted by client technical stakeholders."
      ]
    }
  },
  "manager": {
    "leadership": {
      "kpi": {
        "revenue managed": "$600K-$900K",
        "utilisation": "85%-90% (4-4.5dpw)",
        "sales originated": "$50K-$150K",
        "sales supported": "$1M-$2M",
        "assets": "1-2",
        "bids supported": "5-8",
        "ai adoption": "5 points per year"
      },
      "core objectives": {
        "delivery ownership": "Own delivery of a single workstream or small project end-to-end.",
        "team coordination": "Coordinate day-to-day work of a small team, unblocking and prioritizing effectively.",
        "client communication": "Maintain regular, clear communication with client stakeholders at working level.",
        "quality assurance": "Ensure outputs meet Nimbus quality standards before client delivery."
      },
      "competency dimensions": {
        "consulting behaviours": ["Proficient", "Annex 1.1"],
        "core consulting skills": ["Proficient", "Annex 1.2"],
        "delivery": ["Proficient", "Annex 1.3"],
        "content & innovation": ["Developing", "Annex 1.4"],
        "people development": ["Developing", "Annex 1.5"],
        "client development": ["Developing", "Annex 1.6"],
        "business development": ["Exposure", "Annex 1.7"]
      },
      "focus": [
        "Own end-to-end delivery of a defined workstream.",
        "Coordinate and prioritize the work of a small team.",
        "Build working-level client relationships.",
        "Uphold quality standards across deliverables."
      ],
      "indicators of readiness": [
        "Reliable owner of workstream-level delivery.",
        "Effective day-to-day team coordinator.",
        "Comfortable communicating directly with client stakeholders.",
        "Consistently produces quality-assured outputs."
      ]
    },
    "expert": {
      "kpi": {
        "revenue managed": "$700K-$1M",
        "utilisation": "85%-90% (4-4.5dpw)",
        "sales originated": "$50K-$150K",
        "sales supported": "$1M-$2M",
        "assets": "1-2",
        "bids supported": "3-5",
        "ai adoption": "5 points per year"
      },
      "core objectives": {
        "technical ownership": "Own technical design and implementation for a defined workstream.",
        "quality & standards": "Ensure technical outputs meet architecture and quality standards.",
        "knowledge sharing": "Document and share technical learnings for reuse across projects.",
        "peer mentorship": "Support the technical growth of junior consultants on the team."
      },
      "competency dimensions": {
        "consulting behaviours": ["Proficient", "Annex 1.1"],
        "core consulting skills": ["Proficient", "Annex 1.2"],
        "delivery": ["Proficient", "Annex 1.3"],
        "content & innovation": ["Developing", "Annex 1.4"],
        "people development": ["Developing", "Annex 1.5"],
        "client development": ["Exposure", "Annex 1.6"],
        "business development": ["Exposure", "Annex 1.7"]
      },
      "focus": [
        "Own technical design for a defined workstream or component.",
        "Ensure technical quality and adherence to standards.",
        "Document reusable technical learnings.",
        "Support junior technical consultants' growth."
      ],
      "indicators of readiness": [
        "Reliable technical owner for defined components.",
        "Produces reusable technical documentation.",
        "Emerging mentor to junior technical staff.",
        "Growing depth in a specific technical capability."
      ]
    }
  },
  "senior consultant": {
    "all": {
      "kpi": {
        "utilisation": "90%-95% (4.5dpw)",
        "delivery quality": "Consistently strong, independent delivery with positive client feedback",
        "collaboration": "Actively supports and coaches peers within the team",
        "content and innovation": "Application of 2-3 Nimbus methods, frameworks, or accelerators per year; contributes to reuse",
        "ai adoption": "3 points per year"
      },
      "core objectives": {
        "delivery contribution": "Independently deliver defined tasks and workstream components to a high standard.",
        "client interaction": "Communicate confidently with client stakeholders at working level, building trust.",
        "capability development": "Deepen technical and consulting expertise, begin specializing.",
        "collaboration": "Support and coach junior colleagues within the team.",
        "innovation contribution": "Contribute to reusable methods, templates, or case studies."
      },
      "competency dimensions": {
        "consulting behaviours": ["Proficient", "Annex 1.1"],
        "core consulting skills": ["Proficient", "Annex 1.2"],
        "delivery": ["Proficient", "Annex 1.3"],
        "content & innovation": ["Developing", "Annex 1.4"],
        "people development": ["Developing", "Annex 1.5"],
        "client development": ["Developing", "Annex 1.6"],
        "business development": ["Exposure", "Annex 1.7"]
      },
      "focus": [
        "Deliver workstream components independently and to a high standard.",
        "Build trust and confidence with client working-level stakeholders.",
        "Deepen technical or consulting specialization.",
        "Coach and support junior team members.",
        "Contribute to reusable Nimbus methods and assets."
      ],
      "indicators of readiness": [
        "Delivers independently with minimal oversight.",
        "Builds genuine trust with client stakeholders.",
        "Shows early signs of specialization and depth.",
        "Actively coaches and supports junior colleagues.",
        "Contributes visible reusable content."
      ]
    }
  },
  "consultant": {
    "all": {
      "kpi": {
        "utilisation": "95%-100% (4.5-5dpw)",
        "delivery quality": "Reliable, high-quality delivery of assigned tasks",
        "collaboration": "Positive contribution to team dynamics and knowledge sharing",
        "content and innovation": "Application of 1-2 Nimbus methods or frameworks per year, with guidance",
        "ai adoption": "2 points per year"
      },
      "core objectives": {
        "delivery contribution": "Deliver assigned tasks reliably, escalating risks and blockers early.",
        "client interaction": "Present work confidently in meetings, build credibility with client peers.",
        "capability development": "Strengthen core consulting and technical skills through practice and coaching.",
        "collaboration": "Contribute positively to an inclusive, high-performing team.",
        "innovation contribution": "Help create case studies, templates, or reusable assets."
      },
      "competency dimensions": {
        "consulting behaviours": ["Developing", "Annex 1.1"],
        "core consulting skills": ["Developing", "Annex 1.2"],
        "delivery": ["Developing", "Annex 1.3"],
        "content & innovation": ["Exposure", "Annex 1.4"],
        "people development": ["N/A", "Annex 1.5"],
        "client development": ["Exposure", "Annex 1.6"],
        "business development": ["N/A", "Annex 1.7"]
      },
      "focus": [
        "Deliver assigned tasks reliably and to a high standard.",
        "Build confidence presenting work in client-facing settings.",
        "Strengthen foundational consulting and technical skills.",
        "Contribute to a positive, collaborative team culture.",
        "Apply established Nimbus methods with growing independence."
      ],
      "indicators of readiness": [
        "Delivers assigned tasks reliably with growing independence.",
        "Presents work confidently to client stakeholders.",
        "Applies established methods without close supervision.",
        "Demonstrates strong team collaboration.",
        "Proactively seeks and applies feedback."
      ]
    }
  },
  "senior associate": {
    "all": {
      "kpi": {
        "utilisation": "100% (5dpw)",
        "delivery quality": "Consistently strong outputs and positive client feedback",
        "collaboration": "Evidence of effective teamwork and peer support",
        "content and innovation": "Application of 1-2 Nimbus methods, frameworks, or accelerators per year; contribution of feedback for reuse",
        "ai adoption": "1 point per year"
      },
      "core objectives": {
        "delivery contribution": "Deliver defined tasks and small sub-workstreams to a high standard; manage actions and escalate risks early.",
        "client interaction": "Present outputs confidently, contribute actively in meetings, build credibility with client peers.",
        "capability development": "Strengthen technical skills and consulting craft, seek coaching and apply feedback.",
        "collaboration": "Contribute to inclusive, high-performing teams, support peer learning and knowledge sharing.",
        "innovation contribution": "Help create case studies, methods, or accelerators, document re-usable work."
      },
      "competency dimensions": {
        "consulting behaviours": ["Developing", "Annex 1.1"],
        "core consulting skills": ["Developing", "Annex 1.2"],
        "delivery": ["Developing", "Annex 1.3"],
        "content & innovation": ["Exposure", "Annex 1.4"],
        "people development": ["N/A", "Annex 1.5"],
        "client development": ["Exposure", "Annex 1.6"],
        "business development": ["N/A", "Annex 1.7"]
      },
      "focus": [
        "Deliver high-quality outputs for defined and supervised tasks within a workstream.",
        "Build foundational consulting and technical skills in real client contexts.",
        "Learn from Consultants and Senior Consultants, applying feedback to improve delivery.",
        "Gain exposure to client environments, observing interactions and developing professionalism.",
        "Collaborate effectively with peers and contribute to a positive team culture.",
        "Apply established Nimbus methods and tools with guidance."
      ],
      "indicators of readiness": [
        "Consistently delivers supervised tasks to a high standard and demonstrates growing independence.",
        "Builds confidence in applying methods and frameworks in practice.",
        "Shows professionalism and credibility in client-facing settings.",
        "Demonstrates collaboration and reliability within project teams.",
        "Seeks and applies feedback to improve consulting and technical skills."
      ]
    }
  },
  "associate": {
    "all": {
      "kpi": {
        "utilisation": "100% (5dpw)",
        "delivery quality": "Consistent, reliable outputs under supervision; positive feedback from project team",
        "collaboration": "Active participation in team activities; evidence of learning and knowledge sharing",
        "content and innovation": "Application of Nimbus methods and frameworks with guidance",
        "ai adoption": "1 point per year"
      },
      "core objectives": {
        "delivery contribution": "Deliver assigned tasks reliably and accurately under supervision, ensuring quality outputs.",
        "client exposure": "Gain exposure to client meetings and discussions, developing confidence and professionalism.",
        "collaboration & teamwork": "Work effectively within project teams, supporting colleagues and learning from more experienced consultants.",
        "content & innovation": "Apply Nimbus's methods and frameworks in delivery with guidance, building foundational understanding."
      },
      "competency dimensions": {
        "consulting behaviours": ["Developing", "Annex 1.1"],
        "core consulting skills": ["Developing", "Annex 1.2"],
        "delivery": ["Developing", "Annex 1.3"],
        "content & innovation": ["Exposure", "Annex 1.4"],
        "people development": ["N/A", "Annex 1.5"],
        "client development": ["Exposure", "Annex 1.6"],
        "business development": ["N/A", "Annex 1.7"]
      },
      "focus": [
        "Deliver high-quality outputs for defined and supervised tasks within a workstream.",
        "Build foundational consulting and technical skills in real client contexts.",
        "Learn from Consultants and Senior Consultants, applying feedback to improve delivery.",
        "Gain exposure to client environments, observing interactions and developing professionalism.",
        "Collaborate effectively with peers and contribute to a positive team culture.",
        "Apply established Nimbus methods and tools with guidance."
      ],
      "indicators of readiness": []
    }
  }
};
