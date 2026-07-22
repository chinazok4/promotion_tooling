// ── DATA — all reference data for the Kubrick Competency Framework tool ──
// This file must be loaded before main.js in index.html.
// To update role data, KPIs, or annex definitions, edit the relevant const below.

// Competency level definitions for each dimension (used in the Competency Dimensions section)
const annex1 = {
  "annex1": {
    "consulting_behaviours": {
      "definition": "Demonstrates professionalism, adaptability, initiative, and a commitment to continuous learning. Models Kubrick values consistently.",
      "exposure": "Demonstrates curiosity, punctuality, and professionalism. Seeks feedback and applies it.",
      "developing": "Applies Kubrick values in client environments. Adapts to ambiguity with resilience and professionalism.",
      "proficient": "Trusted role model in team settings. Demonstrates discretion and integrity, builds inclusivity and collaboration.",
      "mastered": "Exemplifies integrity and discretion in all engagements. Proactively adapts to change, ambiguity, and diverse environments. Coaches others on resilience, adaptability, and self-leadership. Creates psychologically safe and inclusive team environments."
    },
    "core_consulting_skills": {
      "definition": "Applies structured thinking, problem solving, stakeholder communication, and facilitation at increasing levels of scope and influence.",
      "exposure": "Applies basic problem-solving methods to simple tasks. Communicates clearly with guidance.",
      "developing": "Shapes discrete deliverables using structured approaches. Presents work clearly and contributes to meetings.",
      "proficient": "Owns workstream planning, applies frameworks independently, manages stakeholder interactions confidently.",
      "mastered": "Shapes complex engagements using structured frameworks and logic. Influences senior stakeholders with clarity and credibility. Facilitates high-impact meetings and drives toward decisions. Mentors others on communication and consulting craft."
    },
    "delivery": {
      "definition": "Owns delivery and outcomes of engagements and portfolios. Ensures value creation and client satisfaction.",
      "exposure": "Completes allocated tasks to time and quality expectations. Learns project delivery basics.",
      "developing": "Manages workstream deliverables with oversight. Begins identifying risks, issues, and dependencies.",
      "proficient": "Owns delivery of small projects or workstreams. Ensures outcomes, mitigates risks, and drives client satisfaction.",
      "mastered": "Leads multi-workstream programmes with clear outcomes and governance. Owns delivery health, proactively mitigates risk and scope issues. Drives measurable value for the client and showcases delivery ROI. Coaches delivery leads in best practice."
    },
    "content_and_innovation": {
      "definition": "Shapes internal IP, offers, or methodologies. Brings new thinking to client challenges.",
      "exposure": "Documents lessons learned; contributes ideas for templates or small tools.",
      "developing": "Champions innovation forums, contributes to whitepapers or assets. Brings market insights into client conversations.",
      "proficient": "Leads scalable asset creation across practices. Encourages consultants to codify and share learning.",
      "mastered": "Sponsors cross-practice IP strategy. Brings external insights to differentiate Kubrick. Recognised for thought leadership."
    },
    "people_development": {
      "definition": "Builds and sustains high-performing teams. Coaches individuals, supports career progression, and embeds a culture of growth and feedback.",
      "exposure": "Seeks feedback and demonstrates openness to coaching. Collaborates well with peers.",
      "developing": "Shares learnings with others; begins supporting junior colleagues informally.",
      "proficient": "Mentors consultants and supports their development. Helps drive retention through belonging and engagement.",
      "mastered": "Owns talent strategy and succession planning for their area. Leads performance reviews, career development and L&D initiatives. Recognised mentor and role model across the business. Drives retention through belonging and engagement."
    },
    "client_development": {
      "definition": "Builds lasting senior client relationships and identifies opportunities to grow influence and accounts.",
      "exposure": "Demonstrates professionalism in client interactions. Learns to recognise client priorities.",
      "developing": "Supports account growth by contributing insights. Joins senior colleagues in stakeholder meetings.",
      "proficient": "Manages relationships independently at project manager level. Translates client needs into opportunities.",
      "mastered": "Maintains multiple senior client relationships at Director/CxO level. Translates client goals into growth opportunities for Kubrick. Advises clients strategically, with influence across the business. Coaches team on stakeholder management and positioning."
    },
    "business_development": {
      "definition": "Supports strategic sales efforts, brings forward opportunities, and leads components of bids or propositions.",
      "exposure": "Gains exposure to bid preparation through research, analysis, or small drafting inputs, under guidance.",
      "developing": "Drives key sections of major bids, including commercials and delivery models. Identifies white space within accounts and advocates expansion. Works with Directors on shaping new go-to-market offers. Mentors consultants on sales awareness and opportunity spotting.",
      "proficient": "Owns significant bid components; co-authors proposals across practices or sectors.",
      "mastered": "Shapes commercial strategy, consistently originates sales through relationships and assets. Recognised leader in go-to-market growth."
    }
  }
};

// Managed Revenue definition, formula, and illustration (shown for senior consultant and above)
const annex3 = {
  "annex3": {
    "definition": "Managed Revenue is the total billed value of client projects attributable to an individual, based on: 1. Their own billable work, and 2. The billable work of consultants from their team who are graded at the same level (peers) or below, deployed on client projects.",
    "formula": "Managed Revenue = ∑(Billable Days of Self + Peers + All Team Members Below Grade) × Daily Rate of Each",
    "illustration": "Associate Director contributes 50 days × £2000 = £100K. Team: 2 Managers (each 100 days × £1,100) + 3 Consultants (each 120 days × £800). Managers: 200 days × £1,100 = £220K. Consultants: 360 days × £800 = £288K. Total Managed Revenue = £100K + £220K + £288K = £608K",
    "caveats": [
      "Higher grades are assumed to be accountable for the combined revenue of multiple teams/projects.",
      "Even if the individual is not the formal day-to-day lead, revenue is attributed their team (peers or below) are billed.",
      "Historical averages for project sizes and team mixes are used as a guide for revenue targets.",
      "Approved internal investment codes are considered billable if there is a business justification."
    ]
  }
};

// AI Adoption KPI scoring criteria and role labels
const annex4 = {
  "annex4": {
    "purpose": "Encourage everyday use of data & AI to run Kubrick more effectively",
    "score_calculation": "Your quarterly KPI score = sum of points from IDs 1–5, capped at 10",
    "what_is_counted": [
      "Artefacts/IP that enable AI adoption (policy, best practice, process)",
      "Business cases for data/AI-driven operational improvements",
      "Delivered changes that improve decisions or productivity/quality/cycle time",
      "Formal assessments of tools/technologies for operational gains",
      "Personal use of approved AI tools in day-to-day work"
    ],
    "evidence_and_approval": [
      "Where possible, provide one link (Jira/ADO/Confluence/SharePoint) plus 2–3 bullets: what changed, who uses it, rough impact",
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
        "assessed_criteria": "Contribution to Artefacts/IP Assets that facilitate adoption of AI",
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
        "assessed_criteria": "Contribution to business cases submitted for initiatives designed to increase Kubrick's operational efficiency and/or effectiveness through the use of data and/or AI",
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
        "assessed_criteria": "Contribution to the delivery of projects that successfully increase the operational efficiency and/or effectiveness of the business through more accurate and/or timely data-driven decision-making",
        "measured_by": [
          "Anecdotal categorisation of contribution as one of (Owner, Contributor, Reviewer)",
          "Time booked against Jira/ADO tickets on relevant projects",
          "Anecdotal evidence of impact of enhanced decision-making, captured through user surveys"
        ],
        "scoring": [
          "5 points for each \"owner\"",
          "1 point for \"contributor\"/\"reviewer\" where evidence indicates a productivity enhancement",
          "5 bonus points where productivity enhancements >15%"
        ]
      },
      {
        "id": 4,
        "assessed_criteria": "Contribution to formal assessment of tools/technologies that could be used as part of a solution that enhances operational efficiency and/or effectiveness",
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
        "revenue managed": "£4M–£6M+ (portfolio of multiple clients/sectors, plus leadership responsibilities)",
        "utilisation": "50–60% (typically 2–3dpw client-facing; remainder on strategy, leadership, and growth)",
        "sales originated": "£1M+",
        "sales supported": "£5M+",
        "assets": "4-5 annually, with measurable reuse",
        "bids supported": "20+ high-value bids, across sectors and geographies",
        "ai adoption": "10 points per year"
      },
      "core objectives": {
        "commercial leadership": "Own multi-million-pound revenue portfolios, drive profitability, and ensure sustainable margin growth.",
        "client impact & delivery": "Act as senior executive sponsor, guaranteeing delivery excellence across practices and regions.",
        "strategic leadership": "Shape and execute Kubrick's strategic priorities, ensuring alignment with global direction and Board-level goals.",
        "people & culture": "Build, inspire, and retain high-performing leadership teams. Role-model inclusive leadership, psychological safety, and continuous development.",
        "innovation & market impact": "Sponsor IP development, assets, and thought leadership that extend Kubrick's influence across industries and geographies."
      },
      "competency dimensions": {
        "consulting behaviours": [
          "Mastered",
          "Annex 1.1"
        ],
        "core consulting skills": [
          "Mastered",
          "Annex 1.2"
        ],
        "delivery": [
          "Mastered",
          "Annex 1.3"
        ],
        "content & innovation": [
          "Mastered",
          "Annex 1.4"
        ],
        "people development": [
          "Mastered",
          "Annex 1.5"
        ],
        "client development": [
          "Mastered",
          "Annex 1.6"
        ],
        "business development": [
          "Mastered",
          "Annex 1.7"
        ]
      },
      "focus": [
        "Works globally across practices, sectors, and geographies, ensuring consistency and alignment.",
        "Partners with Sector Leads, Solution Leads, Finance, Sales, Marketing, and Client Leadership Teams to drive sustainable growth.",
        "Collaborates with Kubrick's executive leadership to deliver on strategic priorities and Board-level outcomes.",
        "Represents Kubrick externally as a thought leader and trusted advisor to C-level executives."
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
        "revenue managed": "£4M–£6M+ (portfolio of multiple clients/sectors, plus leadership responsibilities)",
        "utilisation": "50–60% (typically 2–3dpw client-facing; remainder on strategy, leadership, and growth)",
        "sales originated": "£1M+",
        "sales supported": "£5M+",
        "assets": "4-5 annually, with measurable reuse",
        "bids supported": "20+ high-value bids, across sectors and geographies",
        "ai adoption": "10 points per year"
      },
      "core objectives": {
        "commercial leadership": "Own multi-million-pound revenue portfolios, drive profitability, and ensure sustainable margin growth.",
        "client impact & delivery": "Act as senior executive sponsor, guaranteeing delivery excellence across practices and regions.",
        "strategic leadership": "Shape and execute Kubrick's strategic priorities, ensuring alignment with global direction and Board-level goals.",
        "people & culture": "Build, inspire, and retain high-performing leadership teams. Role-model inclusive leadership, psychological safety, and continuous development.",
        "innovation & market impact": "Sponsor IP development, assets, and thought leadership that extend Kubrick's influence across industries and geographies."
      },
      "competency dimensions": {
        "consulting behaviours": [
          "Mastered",
          "Annex 1.1"
        ],
        "core consulting skills": [
          "Mastered",
          "Annex 1.2"
        ],
        "delivery": [
          "Mastered",
          "Annex 1.3"
        ],
        "content & innovation": [
          "Mastered",
          "Annex 1.4"
        ],
        "people development": [
          "Mastered",
          "Annex 1.5"
        ],
        "client development": [
          "Mastered",
          "Annex 1.6"
        ],
        "business development": [
          "Mastered",
          "Annex 1.7"
        ]
      },
      "focus": [
        "Works globally across practices, sectors, and geographies, ensuring consistency and alignment.",
        "Partners with Sector Leads, Solution Leads, Finance, Sales, Marketing, and Client Leadership Teams to drive sustainable growth.",
        "Collaborates with Kubrick's executive leadership to deliver on strategic priorities and Board-level outcomes.",
        "Represents Kubrick externally as a thought leader and trusted advisor to C-level executives."
      ],
      "indicators of readiness": [
        "Trusted advisor to C-level clients across domains.",
        "Leads technical strategy on multi-million-pound programmes.",
        "Sets technical standards scalable across engagements.",
        "Influences industry direction through external thought leadership.",
        "Builds a strong pipeline of next-generation technical leaders."
      ]
    }
  },
  "associate director": {
    "leadership": {
      "kpi": {
        "revenue managed": "£2.5M-£3.5M",
        "utilisation": "60% (3dpw)",
        "sales originated": "£500K-£1M",
        "sales supported": "£4M-£6M",
        "assets": "0-2",
        "bids supported": "24",
        "ai adoption": "10 per year"
      },
      "core objectives": {
        "commercial leadership": "Drive revenue and margin, own and forecast pipeline, lead bids, grow accounts.",
        "client impact & delivery": "Act as executive sponsor, ensure delivery excellence, drive innovation.",
        "talent development": "Mentor future leaders, oversee performance, champion inclusive culture.",
        "strategic initiatives": "Advance Kubrick's priorities, sponsor internal IP/tooling, represent externally."
      },
      "competency dimensions": {
        "consulting behaviours": [
          "Mastered",
          "Annex 1.1"
        ],
        "core consulting skills": [
          "Mastered",
          "Annex 1.2"
        ],
        "delivery": [
          "Mastered",
          "Annex 1.3"
        ],
        "content & innovation": [
          "Proficient",
          "Annex 1.4"
        ],
        "people development": [
          "Mastered",
          "Annex 1.5"
        ],
        "client development": [
          "Proficient",
          "Annex 1.6"
        ],
        "business development": [
          "Proficient",
          "Annex 1.7"
        ]
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
        "revenue managed": "£3M-£4M",
        "utilisation": "60% - 70% (3-3.5dpw)",
        "sales originated": "£300K-£750K",
        "sales supported": "£4M-£6M",
        "assets": "3+",
        "bids supported": "12",
        "ai adoption": "10 per year"
      },
      "core objectives": {
        "commercial leadership": "Drive revenue and margin, own and forecast pipeline, lead bids, grow accounts.",
        "client impact & delivery": "Act as executive sponsor, ensure delivery excellence, drive innovation.",
        "talent development": "Mentor future leaders, oversee performance, champion inclusive culture.",
        "strategic initiatives": "Advance Kubrick's priorities, sponsor internal IP/tooling, represent externally."
      },
      "competency dimensions": {
        "consulting behaviours": [
          "Mastered",
          "Annex 1.1"
        ],
        "core consulting skills": [
          "Mastered",
          "Annex 1.2"
        ],
        "delivery": [
          "Mastered",
          "Annex 1.3"
        ],
        "content & innovation": [
          "Proficient",
          "Annex 1.4"
        ],
        "people development": [
          "Mastered",
          "Annex 1.5"
        ],
        "client development": [
          "Proficient",
          "Annex 1.6"
        ],
        "business development": [
          "Proficient",
          "Annex 1.7"
        ]
      },
      "focus": [
        "Technical direction, innovation, and cross-capability excellence.",
        "Set the direction for Kubrick's core capabilities — e.g., establishing standards, frameworks, and reusable assets for Applied Data Intelligence, Product Management, Data & AI Governance, Data Engineering, ML & Generative AI, and Platform Engineering — ensuring they are market-relevant, scalable, and consistently applied across engagements.",
        "Own solution design and technical vision for large-scale programmes.",
        "Establish technical governance, assurance, and best practice frameworks.",
        "Act as senior technical counterpart to client CTOs, CDOs, CIOs.",
        "Mentor and grow architects, engineers, and data specialists."
      ],
      "indicators of readiness": [
        "Acts as technical lead for multi-million-pound programmes.",
        "Recognised expert in at least one Kubrick capability (ADI, PM, Governance, Data Engineering, ML/GenAI, Platform).",
        "Shapes and enforces technical frameworks across projects.",
        "Coaches technical leaders; builds a pipeline of next-generation specialists."
      ]
    }
  },
  "senior manager": {
    "leadership": {
      "kpi": {
        "revenue managed": "£1.25M–£1.75M",
        "utilisation": "75% - 80%(3.5-4dpw)",
        "sales originated": "£200K–£400K",
        "sales supported": "£2M–£4M",
        "assets": "2-3",
        "bids supported": "10-15",
        "ai adoption": "7 Points per year"
      },
      "core objectives": {
        "delivery excellence": "Lead large-scale engagements or multi-workstream programmes with measurable outcomes.",
        "commercial exposure": "Support pipeline forecasting, contribute to bids, and start originating opportunities.",
        "client engagement": "Develop senior client relationships and act as delivery lead for critical accounts.",
        "talent development": "Mentor managers and consultants, support succession planning, foster inclusive culture.",
        "innovation & ip": "Codify best practice, contribute to asset development, and bring market insights to teams."
      },
      "competency dimensions": {
        "consulting behaviours": [
          "Proficient",
          "Annex 1.1"
        ],
        "core consulting skills": [
          "Proficient",
          "Annex 1.2"
        ],
        "delivery": [
          "Mastered",
          "Annex 1.3"
        ],
        "content & innovation": [
          "Proficient",
          "Annex 1.4"
        ],
        "people development": [
          "Proficient",
          "Annex 1.5"
        ],
        "client development": [
          "Developing",
          "Annex 1.6"
        ],
        "business development": [
          "Developing",
          "Annex 1.7"
        ]
      },
      "focus": [
        "Lead multi-workstream delivery engagements and ensure measurable client ROI.",
        "Develop client relationships at senior manager/director level, with Director sponsorship.",
        "Support pipeline forecasting and contribute to bids.",
        "Mentor consultants and managers, embedding consulting craft and delivery excellence.",
        "Act as deputy sponsor for high-profile programmes."
      ],
      "indicators of readiness": [
        "Demonstrates ability to lead complex programmes with measurable ROI.",
        "Begins building relationships with client senior managers and decision-makers.",
        "Recognised as a role model for delivery excellence and team leadership.",
        "Contributes actively to cross-practice initiatives, IP development, or innovation forums.",
        "Demonstrates ability to lead technical delivery across multi-workstream engagements.",
        "Recognised specialist in at least one Kubrick capability area.",
        "Trusted by client technical leadership to guide solutions and ensure quality.",
        "Contributes to the development of reusable assets, frameworks, or methodologies."
      ]
    },
    "expert": {
      "kpi": {
        "revenue managed": "£1.5M–£2M",
        "utilisation": "80% (4dpw)",
        "sales originated": "£150–£300K",
        "sales supported": "£2M–£4M",
        "assets": "3+",
        "bids supported": "12+",
        "ai adoption": "7 Points per year"
      },
      "core objectives": {
        "delivery excellence": "Lead large-scale engagements or multi-workstream programmes with measurable outcomes.",
        "commercial exposure": "Support pipeline forecasting, contribute to bids, and start originating opportunities.",
        "client engagement": "Develop senior client relationships and act as delivery lead for critical accounts.",
        "talent development": "Mentor managers and consultants, support succession planning, foster inclusive culture.",
        "innovation & ip": "Codify best practice, contribute to asset development, and bring market insights to teams."
      },
      "competency dimensions": {
        "consulting behaviours": [
          "Proficient",
          "Annex 1.1"
        ],
        "core consulting skills": [
          "Proficient",
          "Annex 1.2"
        ],
        "delivery": [
          "Mastered",
          "Annex 1.3"
        ],
        "content & innovation": [
          "Proficient",
          "Annex 1.4"
        ],
        "people development": [
          "Proficient",
          "Annex 1.5"
        ],
        "client development": [
          "Developing",
          "Annex 1.6"
        ],
        "business development": [
          "Developing",
          "Annex 1.7"
        ]
      },
      "focus": [
        "Provide technical direction, cross-capability leadership, and delivery assurance.",
        "Shape technical solutions across Kubrick's capability areas: Applied Data Intelligence, Data & AI Product Management, Data & AI Governance, Data Engineering, ML & Generative AI and Platform Engineering",
        "Ensure delivery quality through technical assurance and governance.",
        "Act as a credible counterpart to client senior technical leaders (e.g., architects, engineering managers, data leads).",
        "Mentor consultants and managers on technical craft, guiding their career growth.",
        "Maintain broad fluency in Python, SQL, Spark, Databricks, Power BI/Tableau, ML lifecycle & model governance, cloud (Azure/AWS/GCP), DevOps, metadata strategy and similar tools. Not expected to code day-to-day, but must credibly assure, shape, and mentor delivery in these domains."
      ],
      "indicators of readiness": [
        "Demonstrates ability to lead complex programmes with measurable ROI.",
        "Begins building relationships with client senior managers and decision-makers.",
        "Recognised as a role model for delivery excellence and team leadership.",
        "Contributes actively to cross-practice initiatives, IP development, or innovation forums.",
        "Demonstrates ability to lead technical delivery across multi-workstream engagements.",
        "Recognised specialist in at least one Kubrick capability area.",
        "Trusted by client technical leadership to guide solutions and ensure quality.",
        "Contributes to the development of reusable assets, frameworks, or methodologies."
      ]
    }
  },
  "manager": {
    "leadership": {
      "kpi": {
        "revenue managed": "£600K–£1M",
        "utilisation": "80% (4dpw)",
        "sales originated": "£0–£200K",
        "sales supported": "£1M+",
        "assets": "1-2 frameworks, accelerators",
        "bids supported": "8-12",
        "ai adoption": "3 Points per year"
      },
      "core objectives": {
        "delivery leadership": "Own client engagements or technical workstreams, ensuring outcomes and managing risks.",
        "client engagement": "Build trusted relationships at project lead/manager level.",
        "people development": "Mentor consultants, support career growth, foster inclusive teams.",
        "commercial awareness": "Support bids, pipeline, and understand revenue and margin drivers.",
        "content & innovation": "Contribute to assets, methods, and continuous improvement."
      },
      "competency dimensions": {
        "consulting behaviours": [
          "Proficient",
          "Annex 1.1"
        ],
        "core consulting skills": [
          "Proficient",
          "Annex 1.2"
        ],
        "delivery": [
          "Proficient",
          "Annex 1.3"
        ],
        "content & innovation": [
          "Developing",
          "Annex 1.4"
        ],
        "people development": [
          "Developing",
          "Annex 1.5"
        ],
        "client development": [
          "Developing",
          "Annex 1.6"
        ],
        "business development": [
          "Developing",
          "Annex 1.7"
        ]
      },
      "focus": [
        "Lead end-to-end delivery of single or smaller multi-workstream engagements.",
        "Ensure delivery quality, tracking outcomes, risks, and benefits with Director or Senior Manager sponsorship.",
        "Build trusted client relationships at project and programme level.",
        "Contribute to pipeline and bids by providing delivery models, case studies, and commercial input.",
        "Mentor junior consultants, embedding structured thinking and consulting craft."
      ],
      "indicators of readiness": [
        "Demonstrates ability to lead complex programmes with measurable ROI is not applicable, instead: Demonstrates ability to lead end-to-end delivery of single or smaller multi-workstream engagements.",
        "Begins building relationships with client senior managers and decision-makers.",
        "Recognised as a role model for delivery excellence and team leadership.",
        "Contributes actively to cross-practice initiatives, IP development, or innovation forums.",
        "Demonstrates ability to lead technical delivery across multi-workstream engagements.",
        "Recognised specialist in at least one Kubrick capability area.",
        "Trusted by client technical leadership to guide solutions and ensure quality.",
        "Contributes to the development of reusable assets, frameworks, or methodologies."
      ]
    },
    "expert": {
      "kpi": {
        "revenue managed": "£1M–£1.25M",
        "utilisation": "80% (4dpw)",
        "sales originated": "£0–£150K",
        "sales supported": "£1M–£2M",
        "assets": "2 reusable frameworks/accelerators",
        "bids supported": "8+",
        "ai adoption": "3 Points per year"
      },
      "core objectives": {
        "delivery leadership": "Own client engagements or technical workstreams, ensuring outcomes and managing risks.",
        "client engagement": "Build trusted relationships at project lead/manager level.",
        "people development": "Mentor consultants, support career growth, foster inclusive teams.",
        "commercial awareness": "Support bids, pipeline, and understand revenue and margin drivers.",
        "content & innovation": "Contribute to assets, methods, and continuous improvement."
      },
      "competency dimensions": {
        "consulting behaviours": [
          "Proficient",
          "Annex 1.1"
        ],
        "core consulting skills": [
          "Proficient",
          "Annex 1.2"
        ],
        "delivery": [
          "Proficient",
          "Annex 1.3"
        ],
        "content & innovation": [
          "Developing",
          "Annex 1.4"
        ],
        "people development": [
          "Developing",
          "Annex 1.5"
        ],
        "client development": [
          "Developing",
          "Annex 1.6"
        ],
        "business development": [
          "Developing",
          "Annex 1.7"
        ]
      },
      "focus": [
        "Act as technical lead for project delivery, accountable for solution quality and assurance.",
        "Shape and oversee technical work across one or more capability areas: Applied Data Intelligence, Data & AI Product Management, Data & AI Governance, Data Engineering, ML & Generative AI, and Platform Engineering",
        "Provide technical assurance on deliverables, ensuring best practice, performance, and scalability.",
        "Act as a credible peer to client technical leads (e.g., senior developers, data leads, solution architects).",
        "Mentor consultants in core technical skills and approaches, supporting their career growth.",
        "Maintain fluency in Python, SQL, Spark, Databricks, Power BI/Tableau, cloud platforms (Azure/AWS/GCP), data pipelines, ML model deployment, and DevOps practices, with hands-on ability to review and assure code or designs."
      ],
      "indicators of readiness": [
        "Demonstrates ability to lead complex programmes with measurable ROI is not applicable, instead: Demonstrates ability to lead end-to-end delivery of single or smaller multi-workstream engagements.",
        "Begins building relationships with client senior managers and decision-makers.",
        "Recognised as a role model for delivery excellence and team leadership.",
        "Contributes actively to cross-practice initiatives, IP development, or innovation forums.",
        "Demonstrates ability to lead technical delivery across multi-workstream engagements.",
        "Recognised specialist in at least one Kubrick capability area.",
        "Trusted by client technical leadership to guide solutions and ensure quality.",
        "Contributes to the development of reusable assets, frameworks, or methodologies."
      ]
    }
  },
  "senior consultant": {
    "all": {
      "kpi": {
        "revenue managed": "£500-650K",
        "utilisation": "100% (5dpw)",
        "delivery quality": "Positive client feedback and successful achievement of workstream outcomes",
        "people development": "Evidence of mentoring, coaching, and supporting junior consultants",
        "content and innovation": "Contribution to 1–2 reusable methods, frameworks, or accelerators per year (exposure only)",
        "ai adoption": "2 Points per year"
      },
      "core objectives": {
        "delivery ownership": "Lead key workstreams, manage deliverables, and ensure client value under Manager/Senior Manager sponsorship.",
        "client engagement": "Build trusted relationships with client managers and workstream leads.",
        "people development": "Coach and support junior consultants, enabling knowledge transfer and fostering inclusive collaboration.",
        "content & innovation": "Contribute to methods, frameworks, and internal knowledge bases."
      },
      "competency dimensions": {
        "consulting behaviours": [
          "Proficient",
          "Annex 1.1"
        ],
        "core consulting skills": [
          "Proficient",
          "Annex 1.2"
        ],
        "delivery": [
          "Proficient",
          "Annex 1.3"
        ],
        "content & innovation": [
          "Developing",
          "Annex 1.4"
        ],
        "people development": [
          "Developing",
          "Annex 1.5"
        ],
        "client development": [
          "Developing",
          "Annex 1.6"
        ],
        "business development": [
          "N/A",
          "N/A"
        ]
      },
      "focus": [
        "Lead delivery of one or more workstreams, accountable for outputs and outcomes.",
        "Act as deputy to Managers or Senior Managers, taking responsibility for day-to-day delivery management.",
        "Build relationships with client managers and programme teams, representing Kubrick with credibility.",
        "Mentor and develop junior consultants, embedding consulting craft and technical skills.",
        "Contribute to the creation and reuse of methods, frameworks, or accelerators within your area of expertise.",
        "Support internal initiatives (knowledge sharing, practice assets, communities of practice) alongside client delivery."
      ],
      "indicators of readiness": [
        "Independently owns a small workstream or multiple deliverables with limited oversight.",
        "Produces consistently high-quality outputs; manages risks, assumptions, and dependencies.",
        "Builds trusted relationships with client peers/workstream leads; presents with confidence.",
        "Contributes to bids, case studies, or accelerators with tangible re- use value."
      ]
    }
  },
  "consultant": {
    "all": {
      "kpi": {
        "utilisation": "100% (5dpw)",
        "delivery quality": "Consistently strong outputs and positive client feedback",
        "collaboration": "Evidence of effective teamwork and peer support",
        "content and innovation": "Application of 2–4 Kubrick methods, frameworks, or accelerators per year; contribution of feedback for reuse",
        "ai adoption": "1 Point per year"
      },
      "core objectives": {
        "delivery execution": "Deliver defined work packages or small workstreams to a high standard, ensuring measurable client value under Senior Consultant or Manager sponsorship.",
        "client engagement": "Contribute to discussions with client stakeholders, representing Kubrick with professionalism and credibility.",
        "collaboration & teamwork": "Work effectively within mixed client/Kubrick teams, sharing knowledge and supporting colleagues.",
        "content & innovation": "Apply and refine Kubrick's methods, frameworks, and tools, contributing to their reuse and improvement."
      },
      "competency dimensions": {
        "consulting behaviours": [
          "Developing",
          "Annex 1.1"
        ],
        "core consulting skills": [
          "Developing",
          "Annex 1.2"
        ],
        "delivery": [
          "Developing",
          "Annex 1.3"
        ],
        "content & innovation": [
          "Developing",
          "Annex 1.4"
        ],
        "people development": [
          "Exposure",
          "Annex 1.5"
        ],
        "client development": [
          "Exposure",
          "Annex 1.6"
        ],
        "business development": [
          "Exposure",
          "Annex 1.7"
        ]
      },
      "focus": [
        "Execute defined deliverables and small sub-workstreams reliably and on time.",
        "Engage directly with client peers; present and explain outputs clearly.",
        "Apply Kubrick methods and tools; suggest improvements and contribute to re-usable content.",
        "Collaborate across teams; support Associates through informal peer coaching.",
        "Demonstrate ownership of your workload, quality, and professional standards.",
        "Independently owns a small workstream or multiple deliverables with limited oversight.",
        "Produces consistently high-quality outputs; manages risks, assumptions, and dependencies.",
        "Builds trusted relationships with client peers/workstream leads; presents with confidence.",
        "Contributes to bids, case studies, or accelerators with tangible re-use value."
      ],
      "indicators of readiness": [
        "Consistently delivers supervised tasks to a high standard and demonstrates growing independence.",
        "Builds confidence in applying methods and frameworks in practice.",
        "Shows professionalism and credibility in client-facing settings (exposure).",
        "Demonstrates collaboration and reliability within project teams.",
        "Seeks and applies feedback to improve consulting and technical skills."
      ]
    }
  },
  "senior associate": {
    "all": {
      "kpi": {
        "utilisation": "100% (5dpw)",
        "delivery quality": "Consistently strong outputs and positive client feedback",
        "collaboration": "Evidence of effective teamwork and peer support",
        "content and innovation": "Application of 1–2 Kubrick methods, frameworks, or accelerators per year; contribution of feedback for reuse",
        "ai adoption": "1 Point per year"
      },
      "core objectives": {
        "delivery contribution": "Deliver defined tasks and small sub-workstreams to a high standard; manage actions and escalate risks early.",
        "client interaction": "Present outputs confidently, contribute actively in meetings, build credibility with client peers.",
        "capability development": "Strengthen technical skills and consulting craft, seek coaching and apply feedback.",
        "collaboration": "Contribute to inclusive, high-performing teams, support peer learning and knowledge sharing.",
        "innovation contribution": "Help create case studies, methods, or accelerators, document re-usable work."
      },
      "competency dimensions": {
        "consulting behaviours": [
          "Developing",
          "Annex 1.1"
        ],
        "core consulting skills": [
          "Developing",
          "Annex 1.2"
        ],
        "delivery": [
          "Developing",
          "Annex 1.3"
        ],
        "content & innovation": [
          "Exposure",
          "Annex 1.4"
        ],
        "people development": [
          "N/A",
          "Annex 1.5"
        ],
        "client development": [
          "Exposure",
          "Annex 1.6"
        ],
        "business development": [
          "N/A",
          "Annex 1.7"
        ]
      },
      "focus": [
        "Deliver high-quality outputs for defined and supervised tasks within a workstream.",
        "Build foundational consulting and technical skills in real client contexts.",
        "Learn from Consultants and Senior Consultants, applying feedback to improve delivery.",
        "Gain exposure to client environments, observing interactions and developing professionalism.",
        "Collaborate effectively with peers and contribute to a positive team culture.",
        "Apply established Kubrick methods and tools with guidance.",
        "Consistently delivers supervised tasks to a high standard and demonstrates growing independence.",
        "Builds confidence in applying methods and frameworks in practice.",
        "Shows professionalism and credibility in client-facing settings (exposure).",
        "Demonstrates collaboration and reliability within project teams.",
        "Seeks and applies feedback to improve consulting and technical skills."
      ],
      "indicators of readiness": [
        "Consistently delivers supervised tasks to a high standard and demonstrates growing independence.",
        "Builds confidence in applying methods and frameworks in practice.",
        "Shows professionalism and credibility in client-facing settings (exposure).",
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
        "content and innovation": "Application of Kubrick methods and frameworks with guidance",
        "ai adoption": "1 Point per year"
      },
      "core objectives": {
        "delivery contribution": "Deliver assigned tasks reliably and accurately under supervision, ensuring quality outputs.",
        "client exposure": "Gain exposure to client meetings and discussions, developing confidence and professionalism.",
        "collaboration & teamwork": "Work effectively within project teams, supporting colleagues and learning from more experienced consultants.",
        "content & innovation": "Apply Kubrick's methods and frameworks in delivery with guidance, building foundational understanding."
      },
      "competency dimensions": {
        "consulting behaviours": [
          "Developing",
          "Annex 1.1"
        ],
        "core consulting skills": [
          "Developing",
          "Annex 1.2"
        ],
        "delivery": [
          "Developing",
          "Annex 1.3"
        ],
        "content & innovation": [
          "Exposure",
          "Annex 1.4"
        ],
        "people development": [
          "N/A",
          "Annex 1.5"
        ],
        "client development": [
          "Exposure",
          "Annex 1.6"
        ],
        "business development": [
          "N/A",
          "Annex 1.7"
        ]
      },
      "focus": [
        "Deliver high-quality outputs for defined and supervised tasks within a workstream.",
        "Build foundational consulting and technical skills in real client contexts.",
        "Learn from Consultants and Senior Consultants, applying feedback to improve delivery.",
        "Gain exposure to client environments, observing interactions and developing professionalism.",
        "Collaborate effectively with peers and contribute to a positive team culture.",
        "Apply established Kubrick methods and tools with guidance.",
        "Consistently delivers supervised tasks to a high standard and demonstrates growing independence.",
        "Builds confidence in applying methods and frameworks in practice.",
        "Shows professionalism and credibility in client-facing settings (exposure).",
        "Demonstrates collaboration and reliability within project teams.",
        "Seeks and applies feedback to improve consulting and technical skills."
      ],
      "indicators of readiness": []
    }
  }
};
