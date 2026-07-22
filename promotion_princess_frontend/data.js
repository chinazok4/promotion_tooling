// ── SAMPLE DATA — fictional competency framework for demo/portfolio purposes ──
// All descriptive text throughout this file is lorem ipsum placeholder content.
// EXCEPTION: competency-dimension level words (Exposure/Developing/Proficient/Mastered/N/A) are kept
// as real, valid tokens — main.js uses these exact strings to pick a CSS class (level-mastered, etc.)
// and to look up the matching definition text in annex1 (annexData[level.toLowerCase()]). Every other
// value — including the annex-reference label next to each level — is lorem ipsum. All object/array
// KEYS (structure) are unchanged from the production shape.
// This file must be loaded before main.js in index.html.

// Competency level definitions for each dimension (used in the Competency Dimensions section)
const annex1 = {
  "annex1": {
    "consulting_behaviours": {
      "definition": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      "exposure": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      "developing": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "proficient": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "mastered": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis."
    },
    "core_consulting_skills": {
      "definition": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
      "exposure": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
      "developing": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      "proficient": "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      "mastered": "Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur, at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium."
    },
    "delivery": {
      "definition": "Et harum quidem rerum facilis est et expedita distinctio, nam libero tempore cum soluta nobis est eligendi.",
      "exposure": "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.",
      "developing": "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias.",
      "proficient": "Consequatur aut perferendis doloribus asperiores repellat, sed ut perspiciatis unde omnis iste natus error.",
      "mastered": "Sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    "content_and_innovation": {
      "definition": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.",
      "exposure": "Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      "developing": "Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.",
      "proficient": "Placeat facere possimus omnis voluptas assumenda est omnis dolor repellendus temporibus autem quibusdam.",
      "mastered": "Et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."
    },
    "people_development": {
      "definition": "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias.",
      "exposure": "Consequatur aut perferendis doloribus asperiores repellat, sed ut perspiciatis unde omnis iste natus.",
      "developing": "Error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo.",
      "proficient": "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem.",
      "mastered": "Quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    },
    "client_development": {
      "definition": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit sed quia.",
      "exposure": "Non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      "developing": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid.",
      "proficient": "Ex ea commodi consequatur quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.",
      "mastered": "Quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur at vero eos et accusamus."
    },
    "business_development": {
      "definition": "Et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
      "exposure": "Quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.",
      "developing": "Qui officia deserunt mollitia animi, id est laborum et dolorum fuga et harum quidem rerum facilis est.",
      "proficient": "Expedita distinctio nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
      "mastered": "Id quod maxime placeat facere possimus omnis voluptas assumenda est omnis dolor repellendus temporibus autem quibusdam et aut."
    }
  }
};

// Placeholder annex — structure (definition/formula/illustration/caveats) preserved, all text lorem ipsum
const annex3 = {
  "annex3": {
    "definition": "Consequat exercitation tempor ut sunt nisi qui sint ad est irure ut deserunt cillum aute amet.",
    "formula": "Excepteur deserunt aliquip labore proident laborum exercitation et",
    "illustration": "Cillum irure veniam aliquip et dolor ut velit anim ad ut aliquip incididunt quis sit dolore consequat elit anim consectetur amet velit ex enim occaecat.",
    "caveats": [
      "Magna cupidatat nisi nostrud amet proident dolor sit nulla cillum sed.",
      "Eu pariatur esse ea magna consequat duis incididunt irure ut qui ut anim excepteur.",
      "Sed labore culpa ut pariatur pariatur reprehenderit eu culpa nulla ea velit id in ea excepteur quis.",
      "Commodo et sed cillum esse pariatur voluptate ipsum adipiscing cupidatat nulla reprehenderit voluptate ut fugiat ex officia."
    ]
  }
};

// Placeholder annex — structure preserved, all text lorem ipsum
const annex4 = {
  "annex4": {
    "purpose": "Non tempor ad dolor ea esse irure dolore et non qui.",
    "score_calculation": "Incididunt sint proident sed minim cillum dolor dolor ullamco minim dolore.",
    "what_is_counted": [
      "Laboris ullamco ad pariatur mollit enim eu labore qui.",
      "Fugiat nisi tempor cupidatat laboris consequat mollit et incididunt ex.",
      "In deserunt ipsum adipiscing reprehenderit proident tempor laborum.",
      "Labore ea veniam esse commodo deserunt.",
      "Ex ut minim cupidatat cillum laboris deserunt fugiat irure incididunt excepteur incididunt."
    ],
    "evidence_and_approval": [
      "Ut eu ipsum ea ea nostrud ipsum ipsum.",
      "Labore eu elit ea officia enim magna consectetur reprehenderit est esse laboris."
    ],
    "role_labels": {
      "owner": "Ipsum ut sint reprehenderit minim fugiat sunt et.",
      "contributor": "Sed minim nulla qui sit.",
      "reviewer": "Commodo occaecat ullamco aliquip id ullamco sed."
    },
    "criteria": [
      {
        "id": 1,
        "assessed_criteria": "Consectetur mollit aliqua proident magna aliqua consectetur in exercitation et enim dolor excepteur non reprehenderit laborum duis duis.",
        "measured_by": [
          "Mollit dolore nostrud minim eiusmod quis labore cillum.",
          "Lorem ut laborum adipiscing tempor aliquip officia ipsum reprehenderit proident sed."
        ],
        "scoring": [
          "Ad anim aute occaecat culpa incididunt velit aliqua eiusmod.",
          "Cillum qui do ullamco excepteur."
        ]
      },
      {
        "id": 2,
        "assessed_criteria": "Mollit ut labore velit cillum dolore id duis eiusmod enim et nostrud consectetur incididunt minim.",
        "measured_by": [
          "Non exercitation velit commodo dolor dolore fugiat velit est non voluptate."
        ],
        "scoring": [
          "Et ullamco exercitation laboris ullamco.",
          "Occaecat amet magna nulla sint occaecat velit anim deserunt."
        ]
      },
      {
        "id": 3,
        "assessed_criteria": "Laborum amet eiusmod veniam esse in laboris adipiscing cillum esse proident sunt ullamco et commodo eiusmod sint consectetur.",
        "measured_by": [
          "Non laborum ut non esse veniam eiusmod ex.",
          "Aliqua qui laborum reprehenderit aliqua aliqua consequat.",
          "Ex ex excepteur laborum qui velit."
        ],
        "scoring": [
          "Sed incididunt aute cillum sunt.",
          "Officia est minim labore dolor reprehenderit.",
          "Ullamco cillum qui duis."
        ]
      },
      {
        "id": 4,
        "assessed_criteria": "Dolor sunt officia id nulla culpa consectetur in enim proident qui velit irure lorem magna occaecat quis velit.",
        "measured_by": [
          "Exercitation sed tempor commodo tempor ut elit incididunt minim velit in.",
          "Ea cupidatat reprehenderit adipiscing labore irure."
        ],
        "scoring": [
          "Aliqua enim ut ullamco et aute lorem occaecat ad.",
          "Minim deserunt et veniam excepteur pariatur."
        ]
      },
      {
        "id": 5,
        "assessed_criteria": "Dolore quis veniam sunt aute incididunt mollit nulla sed mollit dolore.",
        "measured_by": [
          "Et reprehenderit lorem ad eiusmod sint aute quis ad nostrud."
        ],
        "scoring": [
          "Sit ut veniam exercitation laboris id sint."
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
        "revenue managed": "Qui irure non commodo dolore occaecat",
        "utilisation": "Incididunt sunt reprehenderit proident exercitation",
        "sales originated": "In culpa irure culpa cillum amet amet ut",
        "sales supported": "Velit mollit elit laborum labore commodo consequat",
        "assets": "Quis eu ut elit culpa excepteur",
        "bids supported": "Ex consequat anim id",
        "ai adoption": "Culpa fugiat commodo ad do duis excepteur fugiat"
      },
      "core objectives": {
        "commercial leadership": "Irure occaecat excepteur incididunt cupidatat sint dolor tempor id consequat minim nulla sit eu ex.",
        "client impact & delivery": "Velit esse anim voluptate cillum sed sit mollit sit ad.",
        "strategic leadership": "Adipiscing qui sunt fugiat sed minim magna ea sint labore nostrud ea laborum ut laborum est nostrud esse in.",
        "people & culture": "Officia magna ea sed ullamco dolore sint laboris sit dolore sint magna laborum.",
        "innovation & market impact": "Quis quis lorem pariatur sunt excepteur occaecat non aliquip anim fugiat aute velit mollit aliquip magna qui irure dolore."
      },
      "competency dimensions": {
        "consulting behaviours": [
          "Proficient",
          "Aute nostrud"
        ],
        "core consulting skills": [
          "Mastered",
          "Adipiscing aute sit"
        ],
        "delivery": [
          "Exposure",
          "Cupidatat laboris"
        ],
        "content & innovation": [
          "Developing",
          "Ex ullamco"
        ],
        "people development": [
          "Proficient",
          "Amet ullamco dolore"
        ],
        "client development": [
          "Mastered",
          "Qui qui aute"
        ],
        "business development": [
          "Exposure",
          "Eiusmod enim"
        ]
      },
      "focus": [
        "Minim ipsum nulla do laborum laboris laboris duis.",
        "In do commodo amet tempor fugiat dolore amet irure irure et commodo.",
        "Adipiscing id enim amet ad duis aute lorem in lorem nisi sunt.",
        "Dolor excepteur quis labore fugiat sed exercitation elit commodo lorem ullamco deserunt ullamco dolor excepteur."
      ],
      "indicators of readiness": [
        "Veniam nisi laboris proident ullamco sunt.",
        "Consectetur sint proident culpa in ut eiusmod excepteur nostrud exercitation cillum occaecat lorem.",
        "Non nostrud nostrud deserunt id dolor aliquip sed elit deserunt minim lorem.",
        "Est do sed ex id pariatur dolore sunt officia pariatur et.",
        "Enim duis consequat ullamco tempor sunt."
      ]
    },
    "expert": {
      "kpi": {
        "revenue managed": "Commodo reprehenderit sit nostrud qui laboris do",
        "utilisation": "Veniam dolore laborum incididunt elit esse",
        "sales originated": "Sed est exercitation pariatur minim irure",
        "sales supported": "Tempor quis minim officia tempor",
        "assets": "Mollit nisi dolore cillum",
        "bids supported": "Ipsum duis anim sunt laborum dolor",
        "ai adoption": "Nostrud labore laboris tempor"
      },
      "core objectives": {
        "commercial leadership": "Lorem occaecat in minim in voluptate proident sit ullamco officia duis exercitation id consequat laborum nisi nostrud reprehenderit sint aute.",
        "client impact & delivery": "Ad laboris in duis aliquip cupidatat culpa dolor eu esse irure cillum quis commodo incididunt laboris et.",
        "strategic leadership": "Labore incididunt ea tempor occaecat consectetur pariatur laboris qui magna duis magna labore duis fugiat lorem sunt.",
        "people & culture": "Sit qui enim excepteur dolor enim consequat excepteur laborum cupidatat laboris cupidatat laborum ea sed commodo.",
        "innovation & market impact": "Exercitation occaecat aliquip ipsum ut incididunt laboris labore est dolor et labore labore cillum."
      },
      "competency dimensions": {
        "consulting behaviours": [
          "Developing",
          "Occaecat incididunt"
        ],
        "core consulting skills": [
          "Proficient",
          "Lorem culpa"
        ],
        "delivery": [
          "Mastered",
          "Mollit ipsum"
        ],
        "content & innovation": [
          "Exposure",
          "Id adipiscing sed"
        ],
        "people development": [
          "Developing",
          "Commodo aute laborum"
        ],
        "client development": [
          "Proficient",
          "Ut sunt lorem"
        ],
        "business development": [
          "Mastered",
          "Ex deserunt proident"
        ]
      },
      "focus": [
        "Aliquip mollit non sed laboris est cillum reprehenderit magna ex culpa.",
        "Est reprehenderit id in magna eiusmod nulla dolore tempor.",
        "Lorem exercitation labore deserunt magna nisi exercitation incididunt sunt qui in culpa occaecat culpa officia.",
        "Nisi quis ea excepteur fugiat sed tempor ad culpa tempor voluptate consectetur."
      ],
      "indicators of readiness": [
        "Dolor ut ex laborum eu velit culpa.",
        "Lorem adipiscing magna ipsum elit labore amet ad incididunt reprehenderit do aute ipsum laborum.",
        "Excepteur magna ut tempor ullamco ad sint proident consequat officia anim ut.",
        "Eiusmod proident ex deserunt sint sint in nisi magna velit enim ullamco aliquip pariatur.",
        "Ex eiusmod aliqua adipiscing lorem sunt excepteur eu fugiat proident reprehenderit."
      ]
    }
  },
  "associate director": {
    "leadership": {
      "kpi": {
        "revenue managed": "Cupidatat velit nulla elit minim",
        "utilisation": "Magna minim amet esse",
        "sales originated": "Proident nulla deserunt sunt",
        "sales supported": "Ad irure ea fugiat exercitation sit aliquip sint",
        "assets": "Ipsum amet aute non nulla veniam et do",
        "bids supported": "Nulla occaecat elit cillum lorem officia ea",
        "ai adoption": "Commodo velit est nostrud ea"
      },
      "core objectives": {
        "commercial leadership": "Deserunt ex quis consequat dolor officia velit duis consequat esse nisi eu ipsum eiusmod cupidatat.",
        "client impact & delivery": "Consectetur dolore nostrud esse ea et dolore mollit consectetur veniam id.",
        "talent development": "Ad ipsum laboris in consequat occaecat in officia occaecat pariatur duis culpa ullamco.",
        "strategic initiatives": "Nisi amet ad anim elit aliqua sint id incididunt minim ipsum aliquip consectetur nulla ea exercitation ex pariatur nulla."
      },
      "competency dimensions": {
        "consulting behaviours": [
          "Exposure",
          "Velit sint"
        ],
        "core consulting skills": [
          "Developing",
          "Cupidatat aliqua"
        ],
        "delivery": [
          "Proficient",
          "Sint elit aliquip"
        ],
        "content & innovation": [
          "Mastered",
          "Cillum sit"
        ],
        "people development": [
          "Exposure",
          "Veniam deserunt culpa"
        ],
        "client development": [
          "Developing",
          "Aliquip minim non"
        ],
        "business development": [
          "Proficient",
          "Nulla ullamco"
        ]
      },
      "focus": [
        "In nisi non nisi ipsum labore sint proident quis anim enim velit nostrud culpa.",
        "Consequat mollit dolore sint officia laboris duis tempor ullamco dolore labore voluptate.",
        "Nisi aliquip tempor et veniam labore dolor nulla qui et est.",
        "Magna consequat cillum aute cupidatat velit ea ut officia consequat tempor sunt.",
        "Elit officia ea laboris aliquip magna duis laborum."
      ],
      "indicators of readiness": [
        "Officia qui ex qui consequat pariatur deserunt quis lorem exercitation proident eu cupidatat.",
        "Incididunt ea labore anim deserunt ipsum quis nisi.",
        "Culpa aute non culpa voluptate eu.",
        "Consectetur amet ipsum veniam nostrud ipsum proident amet eiusmod anim consequat deserunt elit."
      ]
    },
    "expert": {
      "kpi": {
        "revenue managed": "Laboris non nisi deserunt laboris",
        "utilisation": "Consequat eu ut pariatur lorem cillum id occaecat",
        "sales originated": "Irure nisi proident ipsum ullamco quis nulla",
        "sales supported": "Excepteur consectetur anim laboris",
        "assets": "Ad occaecat ex cillum dolore minim",
        "bids supported": "Dolore consequat anim incididunt aliquip fugiat",
        "ai adoption": "Aute adipiscing aute et duis non"
      },
      "core objectives": {
        "commercial leadership": "Aliquip eu ipsum magna in anim nostrud mollit elit ut sed id tempor reprehenderit culpa fugiat sint aliqua tempor dolor.",
        "client impact & delivery": "Amet sunt magna pariatur in eu velit eu dolore tempor aute ullamco sint velit aute non.",
        "talent development": "Sed sint ipsum consequat ipsum eiusmod eiusmod laborum eiusmod ex consectetur nisi qui.",
        "strategic initiatives": "Ullamco excepteur quis ea aute nostrud adipiscing eu ut esse irure et aute voluptate deserunt et et velit."
      },
      "competency dimensions": {
        "consulting behaviours": [
          "Mastered",
          "Reprehenderit eu ad"
        ],
        "core consulting skills": [
          "Exposure",
          "Laborum lorem veniam"
        ],
        "delivery": [
          "Developing",
          "Dolor pariatur irure"
        ],
        "content & innovation": [
          "Proficient",
          "Ad nulla pariatur"
        ],
        "people development": [
          "Mastered",
          "Voluptate et proident"
        ],
        "client development": [
          "Exposure",
          "Sint in ullamco"
        ],
        "business development": [
          "Developing",
          "Labore do nisi"
        ]
      },
      "focus": [
        "Qui sunt reprehenderit deserunt mollit elit occaecat enim amet.",
        "Ullamco qui cillum esse id duis aliquip pariatur officia labore voluptate tempor nostrud dolor occaecat minim.",
        "Sed commodo adipiscing esse ad in excepteur incididunt magna sunt consequat.",
        "Veniam excepteur qui fugiat magna voluptate aliqua consequat et duis deserunt sed qui.",
        "Nulla fugiat excepteur exercitation nisi dolor voluptate consequat sed occaecat veniam nisi enim minim exercitation.",
        "Deserunt exercitation consectetur ex qui tempor aliquip et aliqua magna deserunt culpa minim."
      ],
      "indicators of readiness": [
        "Magna amet non est qui officia quis tempor.",
        "Culpa exercitation quis officia anim in sunt et sit tempor fugiat do magna excepteur.",
        "Aute occaecat officia aliquip et exercitation nostrud consequat.",
        "Sint amet pariatur laborum dolore nostrud ex."
      ]
    }
  },
  "senior manager": {
    "leadership": {
      "kpi": {
        "revenue managed": "Ad nisi proident veniam",
        "utilisation": "Voluptate cillum qui laborum",
        "sales originated": "Sed enim sint aliqua ipsum exercitation occaecat",
        "sales supported": "Laborum ipsum dolore mollit laboris voluptate",
        "assets": "Ullamco sit consequat exercitation anim dolor cupidatat",
        "bids supported": "Irure dolor cupidatat aute commodo in exercitation",
        "ai adoption": "Duis commodo qui dolor enim in ea"
      },
      "core objectives": {
        "delivery leadership": "Labore minim cillum incididunt laborum sit deserunt culpa occaecat cupidatat quis enim.",
        "commercial contribution": "Mollit ipsum fugiat id minim irure qui cillum aliqua adipiscing nisi labore.",
        "team leadership": "Adipiscing sunt elit ipsum duis excepteur voluptate pariatur minim veniam.",
        "practice contribution": "Ad in aliqua elit occaecat aliquip sed ad non occaecat esse excepteur ex eiusmod eu velit aliqua ipsum fugiat."
      },
      "competency dimensions": {
        "consulting behaviours": [
          "Proficient",
          "Elit reprehenderit"
        ],
        "core consulting skills": [
          "Mastered",
          "Fugiat do quis"
        ],
        "delivery": [
          "Exposure",
          "Nulla id"
        ],
        "content & innovation": [
          "Developing",
          "Nulla cupidatat nisi"
        ],
        "people development": [
          "Proficient",
          "Aliqua consectetur nulla"
        ],
        "client development": [
          "Mastered",
          "Dolore aute id"
        ],
        "business development": [
          "Exposure",
          "Ea id"
        ]
      },
      "focus": [
        "Incididunt sit ipsum voluptate sed aliquip nulla veniam incididunt qui sed.",
        "Duis culpa sed sed laborum incididunt dolor deserunt tempor eu amet consequat commodo.",
        "Esse mollit eu est ad lorem deserunt sed incididunt culpa occaecat eu dolore eu deserunt.",
        "Et dolore dolor qui eiusmod dolore ipsum sit in amet enim nisi."
      ],
      "indicators of readiness": [
        "Nostrud et in cillum exercitation qui in minim excepteur irure.",
        "Voluptate ipsum incididunt mollit veniam id dolor laborum do exercitation.",
        "Ut laboris sunt duis duis qui irure eiusmod deserunt.",
        "Eu enim quis duis commodo est do anim anim deserunt lorem eu."
      ]
    },
    "expert": {
      "kpi": {
        "revenue managed": "Est aliqua enim nostrud quis qui do reprehenderit",
        "utilisation": "Eu ullamco minim laboris",
        "sales originated": "Sit sint ex cillum do",
        "sales supported": "Irure id sunt ut voluptate proident",
        "assets": "Irure qui enim ut laboris reprehenderit id deserunt",
        "bids supported": "Labore fugiat sint nisi dolore",
        "ai adoption": "Ipsum est non quis dolore ut"
      },
      "core objectives": {
        "technical leadership": "Duis amet sit dolore proident labore occaecat qui sunt irure esse ad ipsum aute consectetur duis ipsum consequat irure aliquip.",
        "capability building": "Commodo magna eiusmod cupidatat deserunt tempor non excepteur aute laborum.",
        "mentorship": "Fugiat sint sint sit consequat sint ipsum fugiat esse laborum fugiat sunt.",
        "client advisory": "Id excepteur fugiat qui cupidatat dolore qui exercitation commodo nostrud est culpa cupidatat anim."
      },
      "competency dimensions": {
        "consulting behaviours": [
          "Developing",
          "Cupidatat duis"
        ],
        "core consulting skills": [
          "Proficient",
          "Velit deserunt"
        ],
        "delivery": [
          "Mastered",
          "Cupidatat adipiscing sint"
        ],
        "content & innovation": [
          "Exposure",
          "Ea quis occaecat"
        ],
        "people development": [
          "Developing",
          "Excepteur laboris reprehenderit"
        ],
        "client development": [
          "Proficient",
          "Consectetur tempor"
        ],
        "business development": [
          "Mastered",
          "Do voluptate fugiat"
        ]
      },
      "focus": [
        "Duis fugiat irure dolor eu sint eu enim nulla mollit est qui eiusmod elit.",
        "Non do ullamco aliqua ex esse ipsum consequat pariatur ullamco nulla adipiscing officia.",
        "Eiusmod culpa eiusmod ad excepteur dolore lorem id eiusmod velit mollit aliqua.",
        "Sit dolor exercitation sint culpa veniam aliquip sed mollit in enim commodo duis."
      ],
      "indicators of readiness": [
        "Duis excepteur id nisi reprehenderit aliqua reprehenderit aute eiusmod aliquip lorem ipsum.",
        "Veniam dolore anim dolor aliqua quis ex aute eiusmod consectetur.",
        "Pariatur dolore exercitation commodo nisi non qui dolor sed magna.",
        "Pariatur elit sed amet non aliquip consequat occaecat officia duis."
      ]
    }
  },
  "manager": {
    "leadership": {
      "kpi": {
        "revenue managed": "Quis veniam incididunt proident",
        "utilisation": "Lorem laboris velit officia in adipiscing magna nulla",
        "sales originated": "Irure et cupidatat ut aute sunt in",
        "sales supported": "Et sed magna laboris",
        "assets": "Ea cupidatat nostrud incididunt occaecat",
        "bids supported": "Occaecat cupidatat aliqua cillum et deserunt magna aute",
        "ai adoption": "Ipsum do aute enim"
      },
      "core objectives": {
        "delivery ownership": "Ullamco irure non incididunt labore nulla aliqua eu irure do quis occaecat eiusmod cillum.",
        "team coordination": "Sint dolor id quis qui pariatur quis reprehenderit aute ut voluptate non enim quis mollit sit dolore ad.",
        "client communication": "Eu exercitation labore adipiscing in aliquip officia enim sit ex est quis enim laborum culpa excepteur occaecat anim dolore.",
        "quality assurance": "Lorem labore quis ex adipiscing laborum cupidatat dolore sit veniam do est in eiusmod eiusmod officia pariatur sit."
      },
      "competency dimensions": {
        "consulting behaviours": [
          "Exposure",
          "Qui lorem elit"
        ],
        "core consulting skills": [
          "Developing",
          "Ullamco dolore incididunt"
        ],
        "delivery": [
          "Proficient",
          "Nulla minim"
        ],
        "content & innovation": [
          "Mastered",
          "Anim nulla"
        ],
        "people development": [
          "Exposure",
          "Enim nulla"
        ],
        "client development": [
          "Developing",
          "Magna occaecat"
        ],
        "business development": [
          "Proficient",
          "Labore enim commodo"
        ]
      },
      "focus": [
        "Aliqua sit ullamco ut irure aliquip id dolor dolore deserunt culpa labore ea aliquip.",
        "Sed dolore enim dolore esse dolore dolore consectetur sit aute anim consectetur irure cillum.",
        "Pariatur cillum aute nisi quis proident sed eiusmod dolor ut ea duis consectetur sint non.",
        "Exercitation dolore deserunt cupidatat magna eu exercitation aliqua anim."
      ],
      "indicators of readiness": [
        "Fugiat consectetur proident est commodo commodo ex eu dolor velit laborum.",
        "Officia proident veniam velit esse id enim culpa adipiscing enim qui eiusmod dolor.",
        "Reprehenderit id est non laboris officia ut.",
        "Aliqua labore non irure dolore duis do excepteur consequat nisi consectetur tempor officia eu."
      ]
    },
    "expert": {
      "kpi": {
        "revenue managed": "Pariatur veniam cupidatat nisi velit dolore officia",
        "utilisation": "Quis aliquip ut aute in ad dolore",
        "sales originated": "Consequat culpa tempor magna cupidatat aliquip est",
        "sales supported": "Laborum ipsum minim sed proident sint",
        "assets": "Sunt incididunt lorem aliquip sit",
        "bids supported": "Elit nulla ullamco ut velit laborum",
        "ai adoption": "Labore fugiat nostrud officia"
      },
      "core objectives": {
        "technical ownership": "Aliqua amet ut ad do sunt qui aute magna quis nulla mollit ut dolor ut sunt anim duis cillum sunt.",
        "quality & standards": "Adipiscing eiusmod sit duis enim dolor nisi fugiat sint incididunt sint voluptate labore.",
        "knowledge sharing": "Ipsum anim duis exercitation occaecat consectetur eiusmod sed est pariatur laboris reprehenderit consequat consectetur exercitation anim consequat occaecat ullamco.",
        "peer mentorship": "Do quis nostrud anim ut velit aute minim minim ullamco incididunt."
      },
      "competency dimensions": {
        "consulting behaviours": [
          "Mastered",
          "Dolor in"
        ],
        "core consulting skills": [
          "Exposure",
          "Ipsum duis deserunt"
        ],
        "delivery": [
          "Developing",
          "Irure qui"
        ],
        "content & innovation": [
          "Proficient",
          "Adipiscing non"
        ],
        "people development": [
          "Mastered",
          "Duis sed"
        ],
        "client development": [
          "Exposure",
          "Enim dolore quis"
        ],
        "business development": [
          "Developing",
          "In et commodo"
        ]
      },
      "focus": [
        "Id incididunt pariatur aute pariatur dolore cillum dolore officia fugiat eiusmod amet sit culpa eiusmod eiusmod.",
        "Voluptate laboris veniam culpa magna est aliqua elit sit minim nostrud dolor exercitation ex enim.",
        "Non enim magna non laboris deserunt deserunt elit et ex sint eu est non esse non.",
        "Aute nostrud pariatur proident elit laboris qui nisi tempor elit sint exercitation id."
      ],
      "indicators of readiness": [
        "Consequat proident sit anim sed qui amet enim veniam minim.",
        "Deserunt eiusmod officia id id do mollit do deserunt labore sed voluptate.",
        "Ad fugiat ex eiusmod aute magna amet in.",
        "Laboris et magna cillum mollit enim."
      ]
    }
  },
  "senior consultant": {
    "all": {
      "kpi": {
        "utilisation": "Officia occaecat reprehenderit excepteur dolor elit",
        "delivery quality": "Nulla ea eu labore incididunt",
        "collaboration": "Laborum reprehenderit nostrud exercitation eiusmod nisi deserunt",
        "content and innovation": "Incididunt deserunt minim sit non",
        "ai adoption": "Laboris amet sit sint sit consequat nisi"
      },
      "core objectives": {
        "delivery contribution": "Esse deserunt anim proident aute eu aliquip non proident laborum elit non.",
        "client interaction": "Proident dolor nostrud ullamco mollit amet aliqua deserunt enim sunt quis commodo commodo sint elit fugiat ex commodo proident.",
        "capability development": "Sed ad irure exercitation in occaecat fugiat dolor laborum ex elit reprehenderit do incididunt amet sed pariatur sint non sed.",
        "collaboration": "Velit cupidatat irure ipsum eiusmod commodo quis voluptate quis elit voluptate.",
        "innovation contribution": "Esse aute ea exercitation culpa reprehenderit cupidatat mollit aliqua dolore incididunt id tempor amet sit est."
      },
      "competency dimensions": {
        "consulting behaviours": [
          "Proficient",
          "Adipiscing est"
        ],
        "core consulting skills": [
          "Mastered",
          "Elit nisi consequat"
        ],
        "delivery": [
          "Exposure",
          "Duis commodo anim"
        ],
        "content & innovation": [
          "Developing",
          "Ad reprehenderit labore"
        ],
        "people development": [
          "Proficient",
          "Laborum esse"
        ],
        "client development": [
          "Mastered",
          "Commodo veniam"
        ],
        "business development": [
          "Exposure",
          "In pariatur ut"
        ]
      },
      "focus": [
        "Est consectetur enim do mollit ea laborum qui est deserunt exercitation do ad officia ullamco esse.",
        "Ut ad nisi id nulla minim amet aliqua qui anim nisi aliquip lorem reprehenderit.",
        "Eu eiusmod aliquip nostrud aute nulla consequat ut eu duis commodo cupidatat.",
        "Deserunt nisi cupidatat cupidatat consectetur qui in adipiscing ex pariatur deserunt ipsum reprehenderit anim mollit.",
        "Voluptate reprehenderit aliqua veniam ea deserunt duis est anim voluptate ex non ipsum."
      ],
      "indicators of readiness": [
        "Anim sed et nulla quis ad irure eiusmod adipiscing.",
        "Mollit laborum ut consectetur exercitation non dolor excepteur eiusmod ut aliquip eu dolor id.",
        "Officia velit qui labore mollit nostrud nisi et pariatur laborum lorem ad labore.",
        "Irure reprehenderit commodo deserunt duis consectetur excepteur nisi occaecat ea pariatur.",
        "Aute sunt eiusmod nostrud do cillum."
      ]
    }
  },
  "consultant": {
    "all": {
      "kpi": {
        "utilisation": "Et laboris amet dolore laborum enim labore",
        "delivery quality": "Excepteur duis excepteur sunt velit",
        "collaboration": "Laborum anim proident reprehenderit proident aliqua adipiscing",
        "content and innovation": "Irure deserunt sed adipiscing laboris veniam enim",
        "ai adoption": "Culpa irure enim sit"
      },
      "core objectives": {
        "delivery contribution": "Ea veniam sit sit tempor amet laboris id sunt ipsum consectetur sint dolore.",
        "client interaction": "Aliqua duis consectetur cupidatat aliqua cupidatat pariatur mollit consequat ex qui fugiat ea consequat pariatur eiusmod minim dolor deserunt eu.",
        "capability development": "Eiusmod lorem do ad nulla occaecat non labore veniam amet.",
        "collaboration": "Aliqua aliquip minim lorem nisi excepteur deserunt nisi velit ullamco sunt ullamco id amet ea mollit duis enim sint eu.",
        "innovation contribution": "Qui deserunt pariatur eu velit incididunt in magna dolor dolor et eu."
      },
      "competency dimensions": {
        "consulting behaviours": [
          "Developing",
          "Mollit in in"
        ],
        "core consulting skills": [
          "Proficient",
          "Incididunt reprehenderit consectetur"
        ],
        "delivery": [
          "Mastered",
          "Lorem excepteur irure"
        ],
        "content & innovation": [
          "Exposure",
          "Veniam tempor"
        ],
        "people development": [
          "Developing",
          "Enim anim fugiat"
        ],
        "client development": [
          "Proficient",
          "Aliqua proident"
        ],
        "business development": [
          "Mastered",
          "Velit exercitation consequat"
        ]
      },
      "focus": [
        "Id aute eiusmod proident amet cillum aliqua velit nostrud excepteur cillum.",
        "Voluptate irure sit ad cupidatat proident magna pariatur aliquip officia non nostrud irure nisi.",
        "Occaecat sit nulla qui dolor est ad proident.",
        "Commodo proident fugiat culpa ex ipsum cupidatat tempor consequat.",
        "Veniam esse amet exercitation cupidatat et sint exercitation esse sunt sunt excepteur amet aute."
      ],
      "indicators of readiness": [
        "Proident laborum irure irure commodo eiusmod eu aute amet voluptate aute pariatur sint deserunt.",
        "Aute dolor id exercitation veniam veniam fugiat magna tempor officia labore.",
        "Exercitation voluptate nulla reprehenderit qui magna est ullamco mollit qui velit sit excepteur.",
        "Elit ipsum non ea consectetur voluptate voluptate quis occaecat mollit aliqua fugiat cupidatat magna.",
        "Cillum nulla aute id sit ad amet eu consequat nisi sit in ex."
      ]
    }
  },
  "senior associate": {
    "all": {
      "kpi": {
        "utilisation": "Qui consectetur laborum esse adipiscing proident",
        "delivery quality": "Id minim occaecat adipiscing",
        "collaboration": "Est mollit lorem sed qui lorem cillum minim",
        "content and innovation": "Ipsum excepteur exercitation irure commodo",
        "ai adoption": "Occaecat amet aliquip dolor cupidatat magna sint"
      },
      "core objectives": {
        "delivery contribution": "Commodo quis commodo irure aliqua ad officia mollit laborum culpa eu.",
        "client interaction": "Mollit ipsum irure ex enim ad anim laborum reprehenderit excepteur ex non aliqua tempor nostrud lorem consequat pariatur aliqua mollit.",
        "capability development": "In occaecat laboris aliqua consequat reprehenderit proident in labore reprehenderit veniam fugiat amet.",
        "collaboration": "Nisi in pariatur officia voluptate eiusmod nisi aute laborum consequat proident reprehenderit.",
        "innovation contribution": "Sunt nisi mollit dolor mollit consectetur cupidatat aliquip laboris aute aliquip nostrud pariatur veniam quis excepteur."
      },
      "competency dimensions": {
        "consulting behaviours": [
          "Exposure",
          "Amet consectetur"
        ],
        "core consulting skills": [
          "Developing",
          "Nulla labore"
        ],
        "delivery": [
          "Proficient",
          "Labore dolor do"
        ],
        "content & innovation": [
          "Mastered",
          "Mollit enim"
        ],
        "people development": [
          "Exposure",
          "Ad laboris"
        ],
        "client development": [
          "Developing",
          "Voluptate anim"
        ],
        "business development": [
          "Proficient",
          "Dolore dolore"
        ]
      },
      "focus": [
        "Occaecat lorem aliquip amet mollit commodo voluptate mollit elit qui ullamco eu.",
        "Proident velit elit irure exercitation anim amet nostrud sed pariatur.",
        "Adipiscing est cillum et incididunt non lorem sunt.",
        "Cupidatat minim tempor ipsum sit labore elit nisi ullamco ex mollit eiusmod consequat officia qui.",
        "Occaecat est nostrud lorem qui ipsum id laborum lorem consectetur excepteur sint cupidatat aute.",
        "Commodo sunt aliqua voluptate lorem officia irure ex mollit occaecat cillum non velit laborum."
      ],
      "indicators of readiness": [
        "In qui sunt dolor nulla non exercitation id enim consectetur lorem excepteur commodo dolore.",
        "Elit eiusmod elit enim adipiscing qui ex consequat et amet.",
        "Esse ea nisi ex tempor sint tempor commodo et eiusmod mollit dolore proident.",
        "Et reprehenderit cillum voluptate deserunt proident cupidatat do excepteur incididunt excepteur non labore.",
        "Aliquip ad eu elit qui qui incididunt."
      ]
    }
  },
  "associate": {
    "all": {
      "kpi": {
        "utilisation": "Velit cupidatat voluptate tempor est",
        "delivery quality": "Enim incididunt tempor laboris officia eiusmod est ex",
        "collaboration": "Minim quis voluptate id",
        "content and innovation": "Mollit labore nulla commodo in ipsum cupidatat nisi",
        "ai adoption": "Tempor labore anim consectetur minim"
      },
      "core objectives": {
        "delivery contribution": "Anim incididunt amet eiusmod ut nostrud do cupidatat excepteur ad exercitation in elit ullamco.",
        "client exposure": "Mollit dolore minim tempor minim consectetur enim adipiscing id eu mollit exercitation occaecat.",
        "collaboration & teamwork": "Cupidatat est commodo in eu consectetur incididunt minim ullamco lorem quis deserunt.",
        "content & innovation": "Eiusmod est id do dolor anim pariatur consequat cupidatat veniam proident id ullamco exercitation sunt."
      },
      "competency dimensions": {
        "consulting behaviours": [
          "Mastered",
          "Duis nulla eu"
        ],
        "core consulting skills": [
          "Exposure",
          "Minim veniam"
        ],
        "delivery": [
          "Developing",
          "Aliquip minim irure"
        ],
        "content & innovation": [
          "Proficient",
          "Consectetur non est"
        ],
        "people development": [
          "Mastered",
          "Eu tempor ex"
        ],
        "client development": [
          "Exposure",
          "In id lorem"
        ],
        "business development": [
          "Developing",
          "Culpa magna velit"
        ]
      },
      "focus": [
        "Voluptate qui consequat mollit nisi ullamco pariatur laborum ullamco nisi mollit.",
        "Commodo esse ullamco enim reprehenderit labore dolore incididunt proident non sunt voluptate veniam id ipsum enim.",
        "Nisi consectetur dolore ad elit aliqua dolor non nisi sit in eiusmod pariatur qui sunt duis.",
        "Deserunt qui in occaecat do culpa qui sint.",
        "Reprehenderit tempor enim nostrud sint ad velit est excepteur occaecat.",
        "Lorem labore qui commodo nostrud ullamco eu eu labore."
      ],
      "indicators of readiness": []
    }
  }
};
