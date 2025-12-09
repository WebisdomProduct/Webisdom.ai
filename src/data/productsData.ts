import { 
  ExternalLink, CheckCircle, Sparkles, Github, Code2, Terminal, 
  Hotel, Heart, Building2, ShoppingBag, GraduationCap, Home, Factory, Truck, Gavel 
} from "lucide-react";

export const products = [
  // ==========================================
  // 1. HOSPITALITY AI
  // ==========================================
  {
    id: "ai-chieftain",
    title: "AI Chieftain",
    subtitle: "Total Hotel Management",
    description: "Complete AI-powered hotel management system that transforms guest experience and operational efficiency.",
    longDescription: "AI Chieftain is the central nervous system for modern hospitality. \n\nIt goes beyond basic management to predict guest needs before they arrive, optimize room inventory in real-time, and orchestrate housekeeping staff with algorithmic precision. \n\nFrom contactless check-ins to personalized room settings via IoT, it ensures a 5-star experience while cutting operational overheads significantly.",
    industry: "hospitality",
    service: "ai-solutions",
    url: "https://ai-chieftain.webisdomtech.com",
    category: "Hospitality AI",
    status: "Live Platform",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6",
    features: ["Smart Room Allocation", "Guest Sentiment Analysis", "Automated Concierge", "IoT Room Control"],
    technologies: ["Machine Learning", "NLP", "IoT", "React"],
    benefits: ["30% Operational Cost Cut", "5-Star Guest Experience", "Zero Booking Errors"],
    useCases: ["Luxury Resorts", "Business Hotels"],
    stats: ["30% Lower OpEx", "4.8/5 Avg Rating"],
    integrations: ["Oracle Opera", "Salesforce"],
    testimonials: [{ name: "Sarah J.", role: "GM, Marriott", quote: "A game changer for our operations.", avatar: "https://randomuser.me/api/portraits/women/44.jpg" }],
    faqs: [
      { q: "Does it integrate with Oracle Opera?", a: "Yes, we have a native 2-way integration with Opera PMS, ensuring seamless data flow between front desk and AI agents." },
      { q: "Is training provided for staff?", a: "Absolutely. We provide a comprehensive 2-week onsite training program along with 24/7 video support." },
      { q: "Can it handle multi-language guests?", a: "Yes! Our Guest Experience AI supports over 30 languages instantly, allowing international guests to communicate in their native tongue." },
      { q: "What hardware is required?", a: "AI Chieftain is cloud-based. You only need standard tablets or PCs for staff; no expensive on-premise servers are needed." }
    ]
  },
  {
    id: "ai-pms",
    title: "AI PMS",
    subtitle: "Next-Gen Property Management",
    description: "Smart, AI-powered PMS that automates daily hotel operations with real-time analytics.",
    longDescription: "A next-generation Property Management System that leverages predictive analytics to forecast occupancy and automate pricing. \n\nIt unifies reservations, billing, housekeeping, and channel management into a single, intuitive dashboard that learns from your property's history to suggest better operational decisions.",
    industry: "hospitality",
    service: "custom-model",
    url: "https://ai-chieftain.webisdomtech.com",
    category: "Hospitality AI",
    status: "Demo",
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c",
    features: ["Dynamic Pricing Engine", "Channel Manager Sync", "Self Check-in Kiosk"],
    technologies: ["Cloud Computing", "Predictive Analytics"],
    benefits: ["Increase RevPAR", "Automate Front Desk"],
    useCases: ["Chain Hotels", "Hostels"],
    stats: ["50% Faster Check-in", "20% Higher RevPAR"],
    integrations: ["Stripe", "Expedia"],
    testimonials: [{ name: "David C.", role: "Ops Manager", quote: "Finally a PMS that makes sense.", avatar: "https://randomuser.me/api/portraits/men/45.jpg" }],
    faqs: [
      { q: "Does it support multi-property management?", a: "Yes, our dashboard allows you to manage unlimited properties from a single login." },
      { q: "Is it mobile friendly?", a: "Yes, we have a dedicated mobile app for managers to track occupancy and revenue on the go." },
      { q: "How does the dynamic pricing work?", a: "It analyzes local events, competitor rates, and historical demand to adjust your room rates automatically in real-time." },
      { q: "Is data backup automated?", a: "Yes, data is backed up to the cloud every hour with bank-grade encryption." }
    ]
  },
  {
    id: "restaurant-agent",
    title: "Restaurant AI Agent",
    subtitle: "Voice & Chat Automation",
    description: "AI agent that automates table reservations, menu suggestions, and customer support.",
    longDescription: "This voice and text-enabled AI agent acts as your best front-of-house staff member. \n\nIt handles peak-hour phone calls, takes complex orders with modifiers, manages table reservations, and even answers FAQs about allergens or parking, ensuring you never miss a revenue opportunity due to a busy line.",
    industry: "hospitality",
    service: "nlp-chatbot",
    url: "https://ai-chieftain.webisdomtech.com",
    category: "Hospitality AI",
    status: "Demo",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    features: ["Voice Ordering", "Multi-language Support", "Table Management"],
    technologies: ["Conversational AI", "Twilio"],
    benefits: ["Never Miss a Call", "Faster Order Taking"],
    useCases: ["Fine Dining", "Cloud Kitchens"],
    stats: ["Zero Missed Calls", "15% Higher Ticket Size"],
    integrations: ["OpenTable", "UberEats"],
    testimonials: [{ name: "Marco P.", role: "Owner", quote: "It handles reservations while I focus on food.", avatar: "https://randomuser.me/api/portraits/men/22.jpg" }],
    faqs: [
      { q: "Does it understand accents?", a: "Yes, our NLP model is trained on diverse accents and dialects to ensure high accuracy." },
      { q: "Can it handle complex orders?", a: "Absolutely. It understands modifiers like 'no onions', 'extra cheese', and allergy alerts." },
      { q: "What if the AI gets stuck?", a: "If the AI cannot understand a request after two tries, it gracefully forwards the call to a human staff member." },
      { q: "Does it integrate with my POS?", a: "Yes, we integrate with major POS systems like Toast, Clover, and Square." }
    ]
  },

  // ==========================================
  // 2. REVENUE AI
  // ==========================================
  {
    id: "rms",
    title: "AI Revenue System",
    subtitle: "Smart Revenue Optimization",
    description: "Predicts pricing to maximize hotel revenue using demand forecasting and competitor analysis.",
    longDescription: "Our Revenue Management System (RMS) doesn't just react to the market; it anticipates it. \n\nBy analyzing competitor rates, local events, flight data, and historical booking curves, it adjusts room rates in real-time to ensure you are always priced perfectly to maximize Yield and RevPAR.",
    industry: "revenue",
    service: "ai-solutions",
    url: "https://ai-chieftain.webisdomtech.com",
    category: "Revenue AI",
    status: "Demo",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296",
    features: ["Dynamic Pricing", "Demand Forecasting", "Market Intelligence"],
    technologies: ["Predictive AI", "Data Analytics"],
    benefits: ["Increase RevPAR", "Optimize Pricing 24/7"],
    useCases: ["Hotels", "Airlines"],
    stats: ["15% Revenue Uplift", "98% Forecast Accuracy"],
    integrations: ["SiteMinder", "RateGain"],
    testimonials: [{ name: "Rajiv M.", role: "Revenue Mgr", quote: "Best pricing tool we've used.", avatar: "https://randomuser.me/api/portraits/men/32.jpg" }],
    faqs: [
      { q: "How often does it update rates?", a: "Our system scans the market and updates rates every 15 minutes to capture every opportunity." },
      { q: "Can I set minimum and maximum prices?", a: "Yes, you have full control to set floor and ceiling prices to protect your brand value." },
      { q: "What data sources does it use?", a: "It uses historical booking data, competitor rates, local event calendars, and flight search volume." },
      { q: "Is it difficult to set up?", a: "No, we can connect to your existing PMS and start generating recommendations within 48 hours." }
    ]
  },
  {
    id: "price-surger",
    title: "Dynamic Price Surger",
    subtitle: "Event-Based Pricing",
    description: "Automatically adjusts pricing based on local events, weather, and competitor rates.",
    longDescription: "Never leave money on the table during high-demand events. \n\nPrice Surger monitors local concerts, conferences, and even weather patterns to detect demand spikes instantly. It automatically implements surge pricing strategies to capture maximum value during peak windows.",
    industry: "revenue",
    service: "custom-model",
    url: "#",
    category: "Revenue AI",
    status: "Beta",
    image: "https://images.unsplash.com/photo-1526304640158-296940ad3bd3",
    features: ["Event Tracking", "Competitor Scraping", "Auto-Adjust"],
    technologies: ["Python", "Scrapy"],
    benefits: ["Capture demand spikes", "Maximize yield"],
    useCases: ["Events", "Ride-sharing"],
    stats: ["Capture 100% Spikes", "Instant ROI"],
    integrations: ["Ticketmaster API"],
    testimonials: [{ name: "Lisa T.", role: "Event Mgr", quote: "We sold out at peak price.", avatar: "https://randomuser.me/api/portraits/women/12.jpg" }],
    faqs: [
      { q: "Is the process fully automated?", a: "Yes, once you set the rules, the system automatically adjusts prices based on triggers." },
      { q: "Does it track weather?", a: "Yes, it can adjust pricing for outdoor venues or travel based on weather forecasts." },
      { q: "Can I override the system?", a: "Always. Manual override is available at any time if you need to take control." },
      { q: "Which industries is this for?", a: "Ideal for hotels, ride-sharing fleets, event ticketing, and equipment rentals." }
    ]
  },
  {
    id: "competitor-spy",
    title: "Competitor Spy AI",
    subtitle: "Market Intelligence Bot",
    description: "Real-time monitoring of competitor inventory and pricing strategies.",
    longDescription: "Gain an unfair advantage with Competitor Spy AI. \n\nIt stealthily monitors your competitors' inventory levels, pricing changes, and promotional offers across the web. Get instant alerts when a competitor drops their price or runs out of stock, allowing you to react immediately.",
    industry: "revenue",
    service: "data-pipeline",
    url: "#",
    category: "Revenue AI",
    status: "Live Tool",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    features: ["Rate Parity Check", "Inventory Alerts", "Trend Analysis"],
    technologies: ["Selenium", "Data Viz"],
    benefits: ["Stay ahead of market", "Instant alerts"],
    useCases: ["E-commerce", "Retail"],
    stats: ["Monitor 100+ Competitors", "Real-time Alerts"],
    integrations: ["Slack", "Excel"],
    testimonials: [{ name: "Ken R.", role: "Sales Dir", quote: "I know my competitors' moves before they do.", avatar: "https://randomuser.me/api/portraits/men/55.jpg" }],
    faqs: [
      { q: "Can I export the data?", a: "Yes, you can export reports to CSV, Excel, or directly to your BI dashboard via API." },
      { q: "Is it legal to scrape competitors?", a: "Yes, we only aggregate publicly available data and respect robots.txt protocols." },
      { q: "Does it detect hidden prices?", a: "It can detect prices added at checkout cart steps if configured." },
      { q: "How many competitors can I track?", a: "Our enterprise plan supports tracking up to 500 competitors simultaneously." }
    ]
  },

  // ==========================================
  // 3. FINANCE AI
  // ==========================================
  {
    id: "ferozee-avatar",
    title: "AI Avatar (Ferozee)",
    subtitle: "Personalized AI Avatar",
    description: "An AI-driven multimedia avatar designed for interactive storytelling and brand communication.",
    longDescription: "Ferozee is a hyper-realistic AI avatar that serves as the face of your digital brand. \n\nCapable of real-time interaction, it can explain complex financial products, guide users through onboarding, or serve as a 24/7 virtual financial advisor with human-like empathy and expressions.",
    industry: "fintech",
    service: "ai-solutions",
    url: "https://ai-chieftain.webisdomtech.com",
    category: "Finance AI",
    status: "Live Demo",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
    features: ["Lifelike Avatar", "Voice AI", "Interactive Responses"],
    technologies: ["Deep Learning", "Face AI"],
    benefits: ["Brand growth", "24/7 availability"],
    useCases: ["Virtual Banking", "Customer Service"],
    stats: ["4x Engagement", "Multi-language"],
    integrations: ["Web SDK", "Mobile App"],
    testimonials: [{ name: "Jenny K.", role: "CMO", quote: "Our customers love talking to Ferozee.", avatar: "https://randomuser.me/api/portraits/women/66.jpg" }],
    faqs: [
      { q: "Is the interaction real-time?", a: "Yes, the latency is under 200ms, making the conversation feel natural." },
      { q: "Can I customize the avatar's look?", a: "Yes, we can create a custom avatar based on your brand mascot or a real spokesperson." },
      { q: "Does it work on mobile?", a: "It is fully optimized for web, iOS, and Android applications." },
      { q: "What languages are supported?", a: "Currently supports English, Spanish, Hindi, and 20+ other major languages." }
    ]
  },
  {
    id: "loan-agent",
    title: "Loan Processing AI",
    subtitle: "Automated Loan Evaluation",
    description: "AI that analyzes documents, verifies user data, and evaluates loan eligibility instantly.",
    longDescription: "Slash loan approval times from days to minutes. \n\nThis AI agent ingests loan applications, parses supporting documents (pay stubs, tax returns) using OCR, performs background checks, and runs risk models to output a preliminary decision instantly, drastically reducing manual underwriting effort.",
    industry: "fintech",
    service: "ai-solutions",
    url: "https://ai-chieftain.webisdomtech.com",
    category: "Finance AI",
    status: "Demo",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
    features: ["Document AI", "KYC Automation", "Credit Evaluation"],
    technologies: ["OCR", "AI Risk Scoring"],
    benefits: ["Faster approvals", "Reduced risk"],
    useCases: ["Mortgages", "Personal Loans"],
    stats: ["90% Faster Decisions", "Zero Manual Entry"],
    integrations: ["Experian", "Plaid"],
    testimonials: [{ name: "Elena R.", role: "Risk Analyst", quote: "Unmatched OCR accuracy.", avatar: "https://randomuser.me/api/portraits/women/65.jpg" }],
    faqs: [
      { q: "Is the data secure?", a: "Yes, we use bank-grade AES-256 encryption and are SOC2 compliant." },
      { q: "What documents can it read?", a: "It can parse bank statements, tax returns, pay stubs, and ID cards like passports." },
      { q: "Does it check credit scores?", a: "Yes, it integrates with bureaus like Experian and Equifax for real-time checks." },
      { q: "Can it flag fraud?", a: "Yes, it detects document tampering and inconsistencies using image forensics." }
    ]
  },
  {
    id: "compliance-agent",
    title: "Compliance AI Agent",
    subtitle: "Automated Monitoring",
    description: "AI that tracks compliance tasks, audits, updates, and document workflows.",
    longDescription: "Navigate the complex landscape of financial regulations with ease. \n\nThis agent continuously monitors transactions and internal communications for potential violations of GDPR, AML, and KYC norms. It automatically generates audit trails and flags suspicious activities before they become liabilities.",
    industry: "fintech",
    service: "ai-audit",
    url: "https://ai-chieftain.webisdomtech.com",
    category: "Finance AI",
    status: "Demo",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
    features: ["Policy Tracking", "Audit Automation", "Compliance Alerts"],
    technologies: ["AI Automation"],
    benefits: ["Zero compliance risk", "Real-time monitoring"],
    useCases: ["Audit Prep", "RegTech"],
    stats: ["100% Audit Trail", "Real-time Alerts"],
    integrations: ["Internal DB", "Regulatory Portals"],
    testimonials: [{ name: "James L.", role: "Compliance Officer", quote: "Essential for our audits.", avatar: "https://randomuser.me/api/portraits/men/11.jpg" }],
    faqs: [
      { q: "Does it support GDPR?", a: "Yes, it is fully compliant with GDPR, CCPA, and AML regulations." },
      { q: "Does it generate reports?", a: "Yes, it auto-generates audit-ready PDF reports for regulators." },
      { q: "How fast are the alerts?", a: "Suspicious transactions trigger alerts in near real-time (sub-second latency)." },
      { q: "Can it monitor emails?", a: "Yes, it can scan internal communications for insider trading or compliance breaches." }
    ]
  },

  // ==========================================
  // 4. COWORKING AUTOMATION
  // ==========================================
  {
    id: "coworking-agent",
    title: "Coworking Agent",
    subtitle: "Automation for Coworking",
    description: "AI assistant for operations, member support, tour booking, and billing automation.",
    longDescription: "The ultimate operating system for coworking spaces. \n\nIt handles everything from scheduling tours for prospective members to automating monthly invoicing and Wi-Fi provisioning. It even facilitates member networking by suggesting connections based on professional profiles.",
    industry: "coworking",
    service: "ai-solutions",
    url: "https://ai-chieftain.webisdomtech.com",
    category: "Coworking Automation",
    status: "Demo",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    features: ["Tour Booking Automation", "Billing AI", "Space Utilization"],
    technologies: ["AI Chatbots", "Automation"],
    benefits: ["Better occupancy", "Streamlined ops"],
    useCases: ["Shared Offices", "Meeting Rooms"],
    stats: ["95% Auto-Invoicing", "Higher Retention"],
    integrations: ["HubSpot", "Stripe"],
    testimonials: [{ name: "Mike T.", role: "Community Mgr", quote: "Saves me 20 hours a week.", avatar: "https://randomuser.me/api/portraits/men/20.jpg" }],
    faqs: [
      { q: "Does it sync with Google Calendar?", a: "Yes, meeting room bookings sync 2-way with Google Calendar and Outlook." },
      { q: "Can it handle billing?", a: "It automates invoicing and payment collection via Stripe or GoCardless." },
      { q: "Is there a member app?", a: "Yes, members get a white-labeled mobile app to book desks and report issues." },
      { q: "Does it control door access?", a: "It integrates with systems like Kisi and Salto to grant access automatically upon payment." }
    ]
  },
  {
    id: "smart-desk",
    title: "Smart Desk Booker",
    subtitle: "Inventory Management",
    description: "Optimizes desk usage by auto-assigning spots based on team size and preferences.",
    longDescription: "Maximize your square footage efficiency. \n\nSmart Desk Booker uses usage data to suggest optimal seating arrangements, manage hot-desking inventories dynamically, and ensure that teams sit together while individuals find quiet zones, improving overall member satisfaction.",
    industry: "coworking",
    service: "custom-model",
    url: "#",
    category: "Coworking Automation",
    status: "Live",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174",
    features: ["Hot Desk Algo", "Team Zoning", "Usage Heatmaps"],
    technologies: ["Node.js", "React"],
    benefits: ["Maximize space", "Flexible booking"],
    useCases: ["Hybrid Offices", "Libraries"],
    stats: ["20% More Capacity", "Fair Usage"],
    integrations: ["Office 365"],
    testimonials: [{ name: "Sarah L.", role: "HR", quote: "Great for hybrid work.", avatar: "https://randomuser.me/api/portraits/women/23.jpg" }],
    faqs: [
      { q: "Is there a mobile app?", a: "Yes, available for iOS and Android." },
      { q: "How does it know if a desk is occupied?", a: "It can use occupancy sensors or rely on check-in/check-out via the app." },
      { q: "Can teams sit together?", a: "Yes, the algorithm prioritizes keeping team members in the same zone." },
      { q: "Does it support permanent desks?", a: "Yes, you can designate zones for fixed desks and hot desks." }
    ]
  },
  {
    id: "community-bot",
    title: "Community Connector",
    subtitle: "Member Engagement AI",
    description: "Matches members with similar skills to foster networking.",
    longDescription: "Turn your coworking space into a thriving community. \n\nThis bot analyzes member profiles and skills to suggest meaningful professional introductions ('You should meet X, they are also into React'). It also automates event announcements and gathers feedback to keep the vibe alive.",
    industry: "coworking",
    service: "nlp-chatbot",
    url: "#",
    category: "Coworking Automation",
    status: "Beta",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    features: ["Skill Matching", "Event Auto-Invite", "Chat Integration"],
    technologies: ["Graph DB", "NLP"],
    benefits: ["Stronger community", "Member value"],
    useCases: ["Networking", "Events"],
    stats: ["Higher Attendance", "Member Loyalty"],
    integrations: ["Slack", "Discord"],
    testimonials: [{ name: "John D.", role: "Freelancer", quote: "Met my co-founder through this bot!", avatar: "https://randomuser.me/api/portraits/men/18.jpg" }],
    faqs: [
      { q: "How does it match members?", a: "It uses NLP to analyze member bios, skills, and industry tags to find synergies." },
      { q: "Does it work on Slack?", a: "Yes, it lives as a bot inside your workspace Slack or Discord." },
      { q: "Is it intrusive?", a: "No, members opt-in to introductions and can set their availability." },
      { q: "Can it manage events?", a: "It can send invites, track RSVPs, and collect feedback automatically." }
    ]
  },

  // ==========================================
  // 5. AUTONOMOUS AGENTS
  // ==========================================
  {
    id: "dev-auto-gpt",
    title: "DevAutoGPT",
    subtitle: "Autonomous Coding Agent",
    description: "An AI agent capable of writing, debugging, and deploying its own code recursively.",
    longDescription: "DevAutoGPT acts as a virtual senior developer. \n\nGiven a high-level prompt like 'Create a To-Do app in React', it breaks down the task, writes the code files, runs them, reads error logs, fixes bugs autonomously, and deploys the final application. It handles the entire SDLC loop without human intervention.",
    industry: "tech",
    service: "nlp-chatbot",
    url: "https://github.com/Significant-Gravitas/AutoGPT",
    category: "Autonomous Agents",
    status: "Open Source",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
    features: ["Self-Healing Code", "Recursive Debugging", "Docker Integration"],
    technologies: ["LangChain", "OpenAI API", "Docker"],
    benefits: ["Automate Coding", "Bug Fixing"],
    useCases: ["MVP Generation", "Refactoring"],
    stats: ["10x Faster Coding", "Self-Correcting"],
    integrations: ["GitHub", "VS Code"],
    testimonials: [{ name: "Linus T.", role: "Dev", quote: "Wrote a CRUD app in minutes.", avatar: "https://randomuser.me/api/portraits/men/50.jpg" }],
    faqs: [
      { q: "What languages does it support?", a: "It supports Python, JavaScript/TypeScript, Go, Rust, and Java natively." },
      { q: "Is the code secure?", a: "It runs in a sandboxed Docker container to prevent any system damage." },
      { q: "Can it connect to APIs?", a: "Yes, it can read documentation and integrate with 3rd party APIs automatically." },
      { q: "Do I need an OpenAI key?", a: "Yes, you need to provide your own API key for GPT-4 or Claude." }
    ]
  },
  {
    id: "research-gpt",
    title: "ResearchGPT Auto",
    subtitle: "Web Research Agent",
    description: "Scours the web, reads papers, and generates comprehensive research reports.",
    longDescription: "Your personal research assistant on steroids. \n\nResearchGPT navigates the internet, reads academic papers, news articles, and market reports, and synthesizes the information into a coherent, cited executive summary. It filters out noise and focuses on credible sources to give you the facts you need.",
    industry: "tech",
    service: "nlp-chatbot",
    url: "#",
    category: "Autonomous Agents",
    status: "Beta",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    features: ["Deep Web Search", "Citation Gen", "Summary Logic"],
    technologies: ["Puppeteer", "GPT-4"],
    benefits: ["Save research time", "Deep insights"],
    useCases: ["Market Research", "Academic Review"],
    stats: ["1000+ Pages/Min", "Unbiased"],
    integrations: ["Google Scholar", "Notion"],
    testimonials: [{ name: "Dr. A. Smith", role: "Researcher", quote: "My literature review took days, now hours.", avatar: "https://randomuser.me/api/portraits/women/30.jpg" }],
    faqs: [
      { q: "Does it cite sources?", a: "Yes, every claim is backed by a direct link to the source material." },
      { q: "Can it read PDFs?", a: "Yes, it can parse PDFs, Word docs, and web pages." },
      { q: "How accurate is it?", a: "It uses cross-verification to minimize hallucinations and ensures factual accuracy." },
      { q: "Can it access paywalled sites?", a: "No, it respects paywalls and only accesses publicly available information." }
    ]
  },
  {
    id: "task-master-agi",
    title: "TaskMaster AGI",
    subtitle: "Personal Goal Agent",
    description: "Breaks down complex goals into actionable sub-tasks and executes them.",
    longDescription: "TaskMaster AGI takes a high-level objective (e.g., 'Plan a corporate retreat') and decomposes it into a tree of dependent tasks (Find venue, Book caterer, Send invites). \n\nIt then executes these tasks by interacting with various APIs and websites, managing the project from start to finish.",
    industry: "tech",
    service: "ai-solutions",
    url: "#",
    category: "Autonomous Agents",
    status: "Research",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
    features: ["Goal Decomposition", "Calendar Sync", "Vendor Outreach"],
    technologies: ["BabyAGI", "Python"],
    benefits: ["Achieve goals faster", "Automated planning"],
    useCases: ["Project Mgmt", "Event Planning"],
    stats: ["Complex Workflows", "Auto-Scheduling"],
    integrations: ["Google Workspace", "Trello"],
    testimonials: [{ name: "Tom H.", role: "PM", quote: "Like having a digital PA.", avatar: "https://randomuser.me/api/portraits/men/12.jpg" }],
    faqs: [
      { q: "Can it book flights?", a: "Yes, if granted API access or via browser automation tools." },
      { q: "Does it learn from mistakes?", a: "Yes, it uses a feedback loop to improve its planning strategy over time." },
      { q: "Is my data private?", a: "All data is stored locally on your device or your private cloud instance." },
      { q: "Does it work with Google Calendar?", a: "Yes, it can schedule tasks and reminders directly on your calendar." }
    ]
  },

  // ==========================================
  // 6. DATA ENGINEERING
  // ==========================================
  {
    id: "sql-agent-pro",
    title: "SQL Agent Pro",
    subtitle: "Natural Language to SQL",
    description: "Enterprise agent that connects to any database and answers business questions in plain English.",
    longDescription: "Democratize data access across your organization. \n\nSQL Agent Pro allows non-technical staff (HR, Marketing, Sales) to ask questions like 'What was the churn rate last month?' and instantly translates it into complex SQL queries, executes them safely, and presents the results visually.",
    industry: "tech",
    service: "data-pipeline",
    url: "https://github.com/vanna-ai/vanna",
    category: "Data Engineering",
    status: "Open Source",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    features: ["Text-to-SQL", "Schema Awareness", "Safe Execution"],
    technologies: ["LlamaIndex", "PostgreSQL"],
    benefits: ["Democratize data", "Instant answers"],
    useCases: ["BI Dashboards", "Ad-hoc Reporting"],
    stats: ["99% Accuracy", "Zero Syntax Errors"],
    integrations: ["Snowflake", "BigQuery"],
    testimonials: [{ name: "Emily W.", role: "Analyst", quote: "No more writing SQL manually.", avatar: "https://randomuser.me/api/portraits/women/55.jpg" }],
    faqs: [
      { q: "Is it read-only?", a: "Yes, by default it is configured with read-only access to prevent accidental data modification." },
      { q: "Which databases are supported?", a: "It supports PostgreSQL, MySQL, Snowflake, BigQuery, and SQL Server." },
      { q: "Can it handle complex joins?", a: "Yes, it understands schema relationships and can construct queries with multiple joins." },
      { q: "Is the data sent to the LLM?", a: "Only the schema (metadata) is sent; your actual row data remains private." }
    ]
  },
  {
    id: "etl-pipeline-ai",
    title: "AutoETL Pipeline",
    subtitle: "Data Cleaning Bot",
    description: "Automatically detects messy data, cleans formats, and pipes it to your data warehouse.",
    longDescription: "Stop spending hours fixing CSV formats. \n\nAutoETL uses AI to detect anomalies, standardize date formats, fills missing values, and maps schema changes automatically. It creates robust, self-healing data pipelines that ensure your warehouse is always fed with clean, reliable data.",
    industry: "tech",
    service: "data-pipeline",
    url: "#",
    category: "Data Engineering",
    status: "Live Tool",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    features: ["Anomaly Detection", "Auto-Mapping", "Snowflake Sync"],
    technologies: ["Python", "Airflow"],
    benefits: ["Clean data", "Automated pipelines"],
    useCases: ["Data Migration", "Log Aggregation"],
    stats: ["Reduce ETL Time 80%", "Auto-Schema"],
    integrations: ["Airflow", "Kafka"],
    testimonials: [{ name: "Data Eng Lead", role: "Tech Corp", quote: "Saved weeks of engineering time.", avatar: "https://randomuser.me/api/portraits/men/29.jpg" }],
    faqs: [
      { q: "Can it handle large datasets?", a: "Yes, it is built on Spark and can process Terabytes of data efficiently." },
      { q: "Does it detect schema changes?", a: "Yes, it automatically adapts to upstream schema changes without breaking the pipeline." },
      { q: "Can I schedule jobs?", a: "It integrates with Airflow and Cron for flexible scheduling." },
      { q: "What if a job fails?", a: "It has built-in retry logic and sends instant alerts to Slack/Email." }
    ]
  },
  {
    id: "data-governance-bot",
    title: "Data Governance Bot",
    subtitle: "PII Protection AI",
    description: "Scans databases for sensitive info (PII) and automatically masks it for compliance.",
    longDescription: "Ensure data privacy without slowing down development. \n\nThis bot scans your entire data estate to identify Personally Identifiable Information (PII) like emails, SSNs, and credit cards. It automatically applies masking or encryption policies, ensuring that developers and analysts work with safe, anonymized data.",
    industry: "tech",
    service: "ethical-ai",
    url: "#",
    category: "Data Engineering",
    status: "Enterprise",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    features: ["GDPR Scan", "Auto-Masking", "Access Logs"],
    technologies: ["Regex AI", "SQL"],
    benefits: ["Data compliance", "Risk reduction"],
    useCases: ["GDPR Compliance", "Test Data Mgmt"],
    stats: ["100% PII Detection", "Auto-Redaction"],
    integrations: ["Oracle DB", "MongoDB"],
    testimonials: [{ name: "DPO", role: "Finance Firm", quote: "Peace of mind for data privacy.", avatar: "https://randomuser.me/api/portraits/women/19.jpg" }],
    faqs: [
      { q: "Does it delete data?", a: "No, it masks or encrypts sensitive fields while keeping the record intact." },
      { q: "Does it slow down the database?", a: "It runs on read replicas or during off-peak hours to minimize performance impact." },
      { q: "Can it create synthetic data?", a: "Yes, it can generate realistic synthetic data for testing purposes." },
      { q: "Is it customizable?", a: "You can define custom regex patterns to detect specific business data types." }
    ]
  },

  // ==========================================
  // 7. COMPUTER VISION
  // ==========================================
  {
    id: "vision-guard-edge",
    title: "VisionGuard Edge",
    subtitle: "Real-time Object Detection",
    description: "Ultra-fast YOLOv8 surveillance system optimized for Edge devices.",
    longDescription: "Bring intelligence to your security cameras. \n\nVisionGuard Edge runs locally on edge devices (like Jetson Nano), detecting weapons, intruders, or safety violations in milliseconds without needing internet connectivity. It preserves privacy by processing video locally and sending only text alerts.",
    industry: "manufacturing",
    service: "computer-vision",
    url: "https://github.com/ultralytics/ultralytics",
    category: "Computer Vision",
    status: "v8.0 Release",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    features: ["Weapon Detection", "Face Recognition", "License Plate Reader"],
    technologies: ["YOLOv8", "OpenCV", "Edge Impulse"],
    benefits: ["Enhanced security", "Real-time alerts"],
    useCases: ["Smart Cities", "Factory Safety"],
    stats: ["<10ms Latency", "99.9% Detection"],
    integrations: ["RTSP Streams", "Telegram"],
    testimonials: [{ name: "Security Chief", role: "Mall", quote: "Instant alerts to my phone.", avatar: "https://randomuser.me/api/portraits/men/66.jpg" }],
    faqs: [
      { q: "What hardware is required?", a: "It runs efficiently on NVIDIA Jetson Nano, Raspberry Pi 4, or any standard GPU server." },
      { q: "Does it work at night?", a: "Yes, our models are trained on IR and night-vision footage." },
      { q: "Does it need internet?", a: "No, all processing happens locally on the edge device for maximum security." },
      { q: "Can it detect specific objects?", a: "Yes, we can fine-tune the model to detect custom objects relevant to your business." }
    ]
  },
  {
    id: "retail-heatmap",
    title: "Retail Heatmap AI",
    subtitle: "Store Analytics",
    description: "Tracks customer footfall and dwell time to optimize store layout.",
    longDescription: "Understand your physical store like a website. \n\nRetail Heatmap AI tracks customer movement, generating heatmaps of high-traffic zones and dead spots. It analyzes dwell time to tell you which products are attracting attention and helps optimize store layout for maximum conversion.",
    industry: "retail",
    service: "computer-vision",
    url: "#",
    category: "Computer Vision",
    status: "Live",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    features: ["Heatmap Gen", "Queue Detection", "Demographics"],
    technologies: ["OpenCV", "TensorFlow"],
    benefits: ["Optimize layout", "Improve conversion"],
    useCases: ["Retail Stores", "Malls"],
    stats: ["Optimize Layouts", "Reduce Wait Times"],
    integrations: ["CCTV", "POS"],
    testimonials: [{ name: "Store Mgr", role: "Retail Chain", quote: "Sales doubled after layout change.", avatar: "https://randomuser.me/api/portraits/women/15.jpg" }],
    faqs: [
      { q: "Do I need new cameras?", a: "No, it works with most existing IP camera feeds via RTSP." },
      { q: "Is customer identity protected?", a: "Yes, faces are blurred automatically to ensure privacy compliance." },
      { q: "Can I export data?", a: "Yes, detailed reports and heatmaps can be exported as PDF or CSV." },
      { q: "Does it count staff?", a: "We can exclude staff from the count using uniform detection or RFID tags." }
    ]
  },
  {
    id: "safety-gear-detect",
    title: "Safety Gear AI",
    subtitle: "PPE Detection",
    description: "Monitors construction sites to ensure workers are wearing helmets and vests.",
    longDescription: "Automate workplace safety compliance. \n\nThis AI continuously monitors video feeds from construction sites or factory floors to ensure every worker is wearing the required PPE (Helmets, Vests, Goggles). It instantly triggers alarms or logs violations if safety protocols are breached.",
    industry: "manufacturing",
    service: "computer-vision",
    url: "#",
    category: "Computer Vision",
    status: "Pilot",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1",
    features: ["Helmet Detection", "Vest Check", "Alert System"],
    technologies: ["YOLOv8", "RTSP Stream"],
    benefits: ["Workplace safety", "Compliance"],
    useCases: ["Construction", "Factories"],
    stats: ["Zero Accidents", "Instant Logs"],
    integrations: ["Safety Dashboards", "Alarms"],
    testimonials: [{ name: "Safety Officer", role: "Construction", quote: "Compliance is now 100%.", avatar: "https://randomuser.me/api/portraits/men/70.jpg" }],
    faqs: [
      { q: "Does it work in rain/dust?", a: "Yes, the model is robust against weather conditions and low visibility." },
      { q: "Can it detect missing gloves?", a: "Yes, we can train it to detect specific gear like gloves, goggles, or boots." },
      { q: "How are alerts sent?", a: "Alerts can be sent via SMS, Email, or triggered as an on-site siren." },
      { q: "Does it record video?", a: "It can record snippets of violations for audit purposes." }
    ]
  },

  // ==========================================
  // 8. ROBOTICS
  // ==========================================
  {
    id: "drone-swarm-ai",
    title: "DroneSwarm AI",
    subtitle: "Autonomous Drone Coordination",
    description: "Swarm intelligence algorithms allowing multiple drones to coordinate.",
    longDescription: "Inspired by nature, DroneSwarm AI enables a fleet of drones to communicate and coordinate their actions without a central controller. \n\nThey can collaboratively map large areas, conduct search and rescue missions, or perform synchronized light shows with collision avoidance built-in.",
    industry: "manufacturing",
    service: "custom-model",
    url: "https://github.com/USC-ACTLab/crazyswarm",
    category: "Robotics",
    status: "Research",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f",
    features: ["Collision Avoidance", "Path Planning", "Thermal Sync"],
    technologies: ["ROS2", "Gazebo Sim"],
    benefits: ["Cover large areas", "Disaster response"],
    useCases: ["Search & Rescue", "Agri Mapping"],
    stats: ["100+ Drones", "3D Mapping"],
    integrations: ["ROS2", "PX4"],
    testimonials: [{ name: "Researcher", role: "Uni Lab", quote: "Incredible coordination logic.", avatar: "https://randomuser.me/api/portraits/women/40.jpg" }],
    faqs: [
      { q: "What is the maximum range?", a: "Range depends on the drone hardware, but the swarm logic works as long as drones can communicate." },
      { q: "Can they avoid obstacles?", a: "Yes, real-time collision avoidance and path planning are built-in." },
      { q: "How many drones can fly?", a: "Our algorithm scales to support hundreds of drones simultaneously." },
      { q: "What flight controller is needed?", a: "It is compatible with PX4 and ArduPilot based controllers." }
    ]
  },
  {
    id: "warehouse-bot",
    title: "Warehouse Picker Sim",
    subtitle: "Logistics Robot Brain",
    description: "Simulation environment for training robots to pick and pack items.",
    longDescription: "Train robots before they hit the floor. \n\nThis simulation environment uses Reinforcement Learning to teach robotic arms how to grasp objects of various shapes and textures, optimize picking paths in a warehouse, and pack boxes efficiently to minimize space wastage.",
    industry: "logistics",
    service: "custom-model",
    url: "#",
    category: "Robotics",
    status: "Demo",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    features: ["Path Optimization", "Grip Logic", "Inventory Sync"],
    technologies: ["PyBullet", "RL"],
    benefits: ["Automate packing", "Reduce errors"],
    useCases: ["E-commerce", "Sorting"],
    stats: ["99.9% Accuracy", "24/7 Ops"],
    integrations: ["WMS", "Robot Arms"],
    testimonials: [{ name: "Logistics Mgr", role: "Warehouse", quote: "Efficiency up by 40%.", avatar: "https://randomuser.me/api/portraits/men/33.jpg" }],
    faqs: [
      { q: "Which robot arms are supported?", a: "We support major brands like Universal Robots (UR), Kuka, and Fanuc." },
      { q: "How long does training take?", a: "Simulation training takes a few days, fine-tuning on real robots takes a few hours." },
      { q: "Can it handle fragile items?", a: "Yes, the grip logic includes force feedback to handle delicate items gently." },
      { q: "Does it integrate with WMS?", a: "Yes, it syncs inventory status in real-time with your Warehouse Management System." }
    ]
  },
  {
    id: "agri-bot-arm",
    title: "Harvest Bot Arm",
    subtitle: "Fruit Picking AI",
    description: "Computer vision guided robotic arm for gentle fruit harvesting.",
    longDescription: "Automate harvest without damaging the produce. \n\nUsing 3D depth cameras and soft-grip technology, this robotic arm identifies ripe fruits on the vine and gently picks them. It works day and night during harvest season, solving labor shortage issues in agriculture.",
    industry: "agriculture",
    service: "custom-model",
    url: "#",
    category: "Robotics",
    status: "Prototype",
    image: "https://images.unsplash.com/photo-1625246333195-09d9b63bd71a",
    features: ["Ripeness Detection", "Soft Grip", "3D Depth Cam"],
    technologies: ["ROS", "OpenCV"],
    benefits: ["Automate harvest", "Reduce waste"],
    useCases: ["Orchards", "Greenhouses"],
    stats: ["Damage-Free", "24/7 Harvest"],
    integrations: ["Mobile Platforms"],
    testimonials: [{ name: "Farmer Joe", role: "Orchard Owner", quote: "Solves my labor issue.", avatar: "https://randomuser.me/api/portraits/men/52.jpg" }],
    faqs: [
      { q: "What fruits can it pick?", a: "Currently optimized for apples, tomatoes, and strawberries." },
      { q: "Does it damage the fruit?", a: "No, soft grippers ensure bruise-free harvesting." },
      { q: "How fast is it?", a: "It picks approximately one fruit every 5 seconds, working 24/7." },
      { q: "What is the battery life?", a: "It can run for 8-10 hours on a single charge." }
    ]
  },

  // ==========================================
  // 9. GENERATIVE AI
  // ==========================================
  {
    id: "doc-brain-rag",
    title: "Enterprise DocBrain",
    subtitle: "Private RAG Search",
    description: "Secure RAG system. Chat with millions of private PDFs and docs.",
    longDescription: "Unlocks the knowledge buried in your documents. \n\nDocBrain indexes all your internal PDFs, Word docs, and Wikis into a vector database. Employees can then chat with this data ('What is our travel policy?') and get instant, cited answers without the data ever leaving your secure private cloud.",
    industry: "tech",
    service: "ai-solutions",
    url: "https://github.com/zylon-ai/private-gpt",
    category: "Generative AI",
    status: "Live Platform",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    features: ["Citation Backing", "Vector Search", "Role-Based Access"],
    technologies: ["Pinecone", "LangChain"],
    benefits: ["Knowledge Access", "Data Privacy"],
    useCases: ["Legal Research", "Internal Wiki"],
    stats: ["1M+ Docs", "Instant Answers"],
    integrations: ["SharePoint", "Slack"],
    testimonials: [{ name: "Amanda B.", role: "Legal", quote: "Saves hours of research.", avatar: "https://randomuser.me/api/portraits/women/29.jpg" }],
    faqs: [
      { q: "Is my data private?", a: "Yes, we support local LLM deployment so data never leaves your server." },
      { q: "What file types are supported?", a: "PDF, Docx, TXT, CSV, and Markdown." },
      { q: "Does it hallucinate?", a: "RAG architecture minimizes hallucinations by grounding answers in your data." },
      { q: "Can I limit access?", a: "Yes, role-based access control ensures users only see docs they are permitted to." }
    ]
  },
  {
    id: "code-refactor-ai",
    title: "Legacy Code Refactor",
    subtitle: "COBOL to Python",
    description: "Translates and optimizes legacy codebases into modern languages.",
    longDescription: "Modernize your tech stack without the rewrite nightmare. \n\nThis AI agent understands legacy languages like COBOL or Fortran and translates them into modern, clean Python or Java code. It even generates unit tests and documentation, ensuring the new code is maintainable and bug-free.",
    industry: "tech",
    service: "legacy-upgrade",
    url: "#",
    category: "Generative AI",
    status: "Beta",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd",
    features: ["Syntax Translation", "Unit Test Gen", "Doc Gen"],
    technologies: ["StarCoder", "LLM"],
    benefits: ["Modernize stack", "Remove debt"],
    useCases: ["Banking", "Mainframes"],
    stats: ["80% Faster", "Auto-Tests"],
    integrations: ["GitHub", "Jira"],
    testimonials: [{ name: "CTO", role: "Bank", quote: "Migration accelerated by months.", avatar: "https://randomuser.me/api/portraits/men/44.jpg" }],
    faqs: [
      { q: "Which languages are supported?", a: "COBOL, Fortran, Java 6/7, converting to Python, Go, or Modern Java." },
      { q: "Does it produce working code?", a: "It produces 90% accurate code; human review is recommended for final sign-off." },
      { q: "Does it generate tests?", a: "Yes, it automatically generates unit tests to verify the new code's logic." },
      { q: "Is it secure?", a: "Yes, code processing can happen on-premise." }
    ]
  },
  {
    id: "video-summarizer",
    title: "Video Summarizer",
    subtitle: "Meeting to Notes",
    description: "Converts long videos into text summaries and action items.",
    longDescription: "Stop re-watching hour-long meetings. \n\nVideo Summarizer transcribes the audio, identifies different speakers, and uses LLMs to extract key decisions, action items, and summaries. It turns video content into searchable, actionable text data.",
    industry: "tech",
    service: "nlp-chatbot",
    url: "#",
    category: "Generative AI",
    status: "Live",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
    features: ["Speaker Diarization", "Action Items", "Multi-lang"],
    technologies: ["Whisper", "GPT-4"],
    benefits: ["Save time", "Searchable video"],
    useCases: ["Meetings", "Webinars"],
    stats: ["1hr -> 2min Read", "Searchable"],
    integrations: ["Zoom", "YouTube"],
    testimonials: [{ name: "Manager", role: "Remote Team", quote: "No more taking notes.", avatar: "https://randomuser.me/api/portraits/women/33.jpg" }],
    faqs: [
      { q: "What video formats are supported?", a: "MP4, MOV, AVI, and direct YouTube links." },
      { q: "How long can the video be?", a: "We support videos up to 4 hours in length." },
      { q: "Does it identify speakers?", a: "Yes, speaker diarization labels who said what." },
      { q: "Can I export the summary?", a: "Yes, to Notion, Google Docs, or PDF." }
    ]
  },

  // ==========================================
  // 10. VOICE AI
  // ==========================================
  {
    id: "voice-clone-studio",
    title: "VoiceClone Studio",
    subtitle: "Zero-Shot Voice Cloning",
    description: "Real-time voice cloning from just 3 seconds of audio.",
    longDescription: "Create lifelike digital voices instantly. \n\nVoiceClone Studio allows you to clone any voice with just a few seconds of sample audio. Ideal for creating personalized marketing messages, dubbing content into other languages while keeping the original actor's voice, or creating consistent brand voices.",
    industry: "tech",
    service: "ai-solutions",
    url: "https://github.com/myshell-ai/OpenVoice",
    category: "Voice AI",
    status: "Demo",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008",
    features: ["3s Voice Cloning", "Emotion Control", "Multi-lingual"],
    technologies: ["Coqui TTS", "Wav2Vec"],
    benefits: ["Content creation", "Localization"],
    useCases: ["Audiobooks", "Games"],
    stats: ["Instant Clone", "High Fidelity"],
    integrations: ["Unity", "Unreal"],
    testimonials: [{ name: "Chris P.", role: "Game Dev", quote: "Great for NPCs.", avatar: "https://randomuser.me/api/portraits/men/33.jpg" }],
    faqs: [
      { q: "Is this technology legal?", a: "Yes, but we enforce voice verification to prevent misuse." },
      { q: "How much audio do I need?", a: "As little as 3 seconds, but 1 minute gives better results." },
      { q: "Can I control emotions?", a: "Yes, you can direct the voice to sound happy, sad, angry, etc." },
      { q: "Does it support multiple languages?", a: "Yes, clone a voice in English and make it speak French or Spanish." }
    ]
  },
  {
    id: "podcast-dubber",
    title: "Podcast Auto-Dub",
    subtitle: "Language Translation",
    description: "Translates podcasts into 20+ languages preserving original voice.",
    longDescription: "Go global with your audio content. \n\nPodcast Auto-Dub transcribes your podcast, translates the text, and then re-synthesizes the speech in the target language using the original speaker's voice print. It even syncs lip movements for video podcasts.",
    industry: "tech",
    service: "ai-solutions",
    url: "#",
    category: "Voice AI",
    status: "Service",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc",
    features: ["Voice Preservation", "Lip Sync", "Translation"],
    technologies: ["ElevenLabs", "DeepFake"],
    benefits: ["Global reach", "Native experience"],
    useCases: ["Podcasts", "Education"],
    stats: ["20+ Languages", "Auto-Sync"],
    integrations: ["Spotify", "YouTube"],
    testimonials: [{ name: "Podcaster", role: "Media", quote: "Reached new audiences.", avatar: "https://randomuser.me/api/portraits/women/11.jpg" }],
    faqs: [
      { q: "Does it keep background music?", a: "Yes, voice and music tracks are separated and re-mixed." },
      { q: "How accurate is the translation?", a: "We use top-tier translation models, but manual review is available." },
      { q: "What is the turnaround time?", a: "A 1-hour podcast typically takes about 30 minutes to dub." },
      { q: "Does it support video lip-sync?", a: "Yes, we offer experimental video lip-sync for YouTube." }
    ]
  },
  {
    id: "meeting-minutes",
    title: "Minute Taker AI",
    subtitle: "Corporate Audio Tool",
    description: "Listens to meetings and drafts official minutes.",
    longDescription: "The automated secretary for your boardroom. \n\nIt listens to meetings securely, distinguishes between speakers, and drafts formal minutes in real-time. It highlights motions passed, action items assigned, and deadlines set, ensuring accurate official records.",
    industry: "tech",
    service: "nlp-chatbot",
    url: "#",
    category: "Voice AI",
    status: "Live",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
    features: ["Legal Formatting", "Confidential Mode", "Cloud Sync"],
    technologies: ["Azure Speech", "LLM"],
    benefits: ["Accuracy", "Compliance"],
    useCases: ["Legal", "Board Rooms"],
    stats: ["Legal Grade", "Secure"],
    integrations: ["Teams", "Zoom"],
    testimonials: [{ name: "Secretary", role: "Corp", quote: "Saves me hours.", avatar: "https://randomuser.me/api/portraits/women/88.jpg" }],
    faqs: [
      { q: "Is the audio stored securely?", a: "Yes, enterprise-grade encryption is used for storage and transmission." },
      { q: "Does it integrate with Zoom?", a: "Yes, it can join Zoom, Teams, and Meet calls automatically." },
      { q: "Can it distinguish speakers?", a: "Yes, it identifies who said what in the transcript." },
      { q: "Is it suitable for legal use?", a: "Yes, it produces transcripts suitable for legal review." }
    ]
  },

  // ==========================================
  // 11. FINTECH (Extra)
  // ==========================================
  {
    id: "quant-trader-bot",
    title: "QuantTrader X",
    subtitle: "HFT Crypto Trading Bot",
    description: "High-frequency trading bot using RL for arbitrage.",
    longDescription: "An institutional-grade trading bot accessible to everyone. \n\nIt scans multiple exchanges simultaneously to find price discrepancies (arbitrage opportunities) and executes trades in milliseconds to capture profit before the market corrects, using advanced risk management strategies to protect capital.",
    industry: "fintech",
    service: "custom-model",
    url: "https://github.com/hummingbot/hummingbot",
    category: "FinTech",
    status: "Live Bot",
    image: "https://images.unsplash.com/photo-1611974765270-ca1258634369",
    features: ["Arbitrage", "Flash Loans", "Risk Mgmt"],
    technologies: ["Hummingbot", "Solidity"],
    benefits: ["Automated trading", "ROI"],
    useCases: ["Crypto", "Market Making"],
    stats: ["ms Speed", "24/7"],
    integrations: ["Binance", "DeFi"],
    testimonials: [{ name: "Trader", role: "Crypto", quote: "Consistent profits.", avatar: "https://randomuser.me/api/portraits/men/88.jpg" }],
    faqs: [
      { q: "What is the minimum capital?", a: "We recommend starting with at least $1000 for effective arbitrage." },
      { q: "Is it safe?", a: "It runs locally on your machine; your API keys are never shared." },
      { q: "Which exchanges are supported?", a: "Binance, Coinbase, Kraken, and major DEXs like Uniswap." },
      { q: "Does it work in a bear market?", a: "Yes, arbitrage strategies work on volatility, regardless of market direction." }
    ]
  },
  {
    id: "defi-sniper",
    title: "DeFi Liquidity Sniper",
    subtitle: "Token Launch Bot",
    description: "Monitors mempool for new liquidity pairs and buys instantly.",
    longDescription: "For the advanced DeFi trader. \n\nThis bot watches the blockchain mempool for pending transactions that add liquidity to new token pairs. It constructs a buy transaction in the same block, ensuring you get in at the earliest possible price point.",
    industry: "fintech",
    service: "custom-model",
    url: "#",
    category: "FinTech",
    status: "Tool",
    image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d",
    features: ["Mempool Watch", "Gas Opt", "Rug Check"],
    technologies: ["Web3.js", "Rust"],
    benefits: ["First mover", "Anti-Scam"],
    useCases: ["Launches", "Liquidity"],
    stats: ["Block-0", "Automated"],
    integrations: ["ETH Node", "BSC"],
    testimonials: [{ name: "Degen", role: "Trader", quote: "Got me in early.", avatar: "https://randomuser.me/api/portraits/men/10.jpg" }],
    faqs: [
      { q: "Is this risky?", a: "Yes, sniping high-volatility tokens carries significant financial risk." },
      { q: "Does it detect rug pulls?", a: "It performs basic contract checks, but cannot guarantee 100% safety." },
      { q: "What networks are supported?", a: "Ethereum, BSC, Polygon, and Avalanche." },
      { q: "How fast is it?", a: "It executes in the same block as liquidity addition." }
    ]
  },
  {
    id: "stock-sentiment",
    title: "Market Sentiment AI",
    subtitle: "News Analyzer",
    description: "Aggregates news and Twitter to predict market movements.",
    longDescription: "Trade based on the global mood. \n\nThis AI ingests millions of data points from financial news, Twitter, Reddit, and earnings calls. It analyzes sentiment to predict short-term market movements, alerting you to bullish or bearish trends before they show up on the charts.",
    industry: "fintech",
    service: "ai-solutions",
    url: "#",
    category: "FinTech",
    status: "Dashboard",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f",
    features: ["Twitter Firehose", "News API", "Trend Prediction"],
    technologies: ["NLP", "Python"],
    benefits: ["Insights", "Early signals"],
    useCases: ["Trading", "Brand Monitoring"],
    stats: ["1M+ Tweets", "Real-time"],
    integrations: ["Bloomberg", "Twitter"],
    testimonials: [{ name: "Analyst", role: "Fund", quote: "Good signal.", avatar: "https://randomuser.me/api/portraits/women/50.jpg" }],
    faqs: [
      { q: "What data sources are used?", a: "Twitter, Reddit (WSB), Bloomberg, Reuters, and earnings call transcripts." },
      { q: "How accurate is the sentiment?", a: "Our NLP model achieves 85% accuracy in classifying financial sentiment." },
      { q: "Is there an API?", a: "Yes, we offer a REST API for algorithmic trading integration." },
      { q: "Does it cover crypto?", a: "Yes, it tracks sentiment for major cryptocurrencies as well." }
    ]
  },

  // ==========================================
  // 12. CYBERSECURITY
  // ==========================================
  {
    id: "fraud-sentinel",
    title: "FraudSentinel Graph",
    subtitle: "Graph-Based Fraud Detection",
    description: "Uses Knowledge Graphs to detect fraud rings.",
    longDescription: "Uncover hidden fraud networks. \n\nUnlike traditional rules-based systems, FraudSentinel builds a graph of relationships between users, devices, and transactions. It easily spots complex money laundering rings and synthetic identities by analyzing the connections and patterns within the data.",
    industry: "fintech",
    service: "ai-audit",
    url: "https://github.com/neo4j-examples/fraud-detection-graph-data-science",
    category: "Cybersecurity",
    status: "Enterprise",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f",
    features: ["Graph NN", "Link Analysis", "Scoring"],
    technologies: ["Neo4j", "GraphSAGE"],
    benefits: ["Detect Rings", "Less False Positives"],
    useCases: ["AML", "Card Fraud"],
    stats: ["Instant Detect", "Explainable"],
    integrations: ["Neo4j", "Banking"],
    testimonials: [{ name: "Fraud Mgr", role: "Bank", quote: "Caught a ring instantly.", avatar: "https://randomuser.me/api/portraits/men/70.jpg" }],
    faqs: [
      { q: "How does graph detection differ?", a: "It looks at connections between entities, spotting rings that linear models miss." },
      { q: "Can it handle large volumes?", a: "Yes, built on Neo4j to handle millions of transactions." },
      { q: "Is it real-time?", a: "Scoring happens in milliseconds during the transaction." },
      { q: "Does it require data migration?", a: "No, it can sit on top of your existing data lake." }
    ]
  },
  {
    id: "phish-guard",
    title: "PhishGuard Email",
    subtitle: "Anti-Phishing Bot",
    description: "Scans emails for malicious links and linguistic traps.",
    longDescription: "Your first line of defense against social engineering. \n\nPhishGuard analyzes email content for subtle linguistic cues that indicate urgency or deception (CEO Fraud). It also sandboxes links and attachments to check for malware before they ever reach the user's inbox.",
    industry: "tech",
    service: "ai-audit",
    url: "#",
    category: "Cybersecurity",
    status: "Live",
    image: "https://images.unsplash.com/photo-1563206767-5b1d972d9ce3",
    features: ["Link Sandbox", "NLP", "OCR"],
    technologies: ["Python", "TensorFlow"],
    benefits: ["Security", "Prevention"],
    useCases: ["Corporate Email", "Training"],
    stats: ["99% Block", "Real-time"],
    integrations: ["O365", "Gmail"],
    testimonials: [{ name: "CISO", role: "Corp", quote: "Stopped a CEO fraud attempt.", avatar: "https://randomuser.me/api/portraits/women/60.jpg" }],
    faqs: [
      { q: "Does it block internal emails?", a: "No, it whitelists internal domains automatically." },
      { q: "What is the false positive rate?", a: "Less than 0.1% due to contextual analysis." },
      { q: "Does it scan attachments?", a: "Yes, it sandboxes PDFs and Office docs to check for malware." },
      { q: "How is it deployed?", a: "API integration with Office 365 or Google Workspace." }
    ]
  },
  {
    id: "pentest-bot",
    title: "AutoPenTest",
    subtitle: "Vulnerability Scanner",
    description: "Automated penetration testing for APIs.",
    longDescription: "Continuous security testing for your apps. \n\nAutoPenTest aggressively probes your APIs and web applications for common vulnerabilities like SQL Injection, XSS, and broken authentication. It generates a detailed remediation report for your developers to fix issues before hackers find them.",
    industry: "tech",
    service: "ai-audit",
    url: "#",
    category: "Cybersecurity",
    status: "Tool",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    features: ["SQLi Test", "XSS Scan", "Reports"],
    technologies: ["OWASP ZAP", "Python"],
    benefits: ["Audit", "Vulnerability finding"],
    useCases: ["DevSecOps", "Compliance"],
    stats: ["Auto-Exploit", "Detailed"],
    integrations: ["Jenkins", "GitHub"],
    testimonials: [{ name: "Dev", role: "Startup", quote: "Found bugs before launch.", avatar: "https://randomuser.me/api/portraits/men/20.jpg" }],
    faqs: [
      { q: "Is it safe for production?", a: "It has a 'safe mode' for production, but full scans are recommended for staging." },
      { q: "How often should I scan?", a: "We recommend continuous scanning in your CI/CD pipeline." },
      { q: "Does it generate reports?", a: "Yes, detailed PDF and HTML reports for developers and compliance." },
      { q: "What vulnerabilities does it check?", a: "OWASP Top 10 including Injection, XSS, and Broken Auth." }
    ]
  },

  // ==========================================
  // 13. INDUSTRIAL IOT
  // ==========================================
  {
    id: "factory-iot-twin",
    title: "Factory Digital Twin",
    subtitle: "Predictive Maintenance",
    description: "Real-time 3D replica predicting machine failures.",
    longDescription: "A virtual replica of your physical factory. \n\nIt connects to IoT sensors on your machines to monitor vibration, temperature, and output in real-time. Using predictive models, it alerts maintenance teams about potential failures weeks in advance, preventing costly unplanned downtime.",
    industry: "manufacturing",
    service: "custom-model",
    url: "https://github.com/thingsboard/thingsboard",
    category: "Industrial IoT",
    status: "Pilot",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    features: ["Vibration Analysis", "3D Viz", "MQTT"],
    technologies: ["Digital Twin", "TensorFlow"],
    benefits: ["Zero Downtime", "Remote Ops"],
    useCases: ["Factories", "Refineries"],
    stats: ["20% Energy Save", "Predictive"],
    integrations: ["Siemens", "AWS IoT"],
    testimonials: [{ name: "Plant Mgr", role: "Mfg", quote: "Saved us millions.", avatar: "https://randomuser.me/api/portraits/men/76.jpg" }],
    faqs: [
      { q: "What sensors are supported?", a: "Any sensor supporting MQTT, CoAP, or HTTP protocols." },
      { q: "Do I need a 3D model?", a: "We can build a basic 3D model, or import your CAD files." },
      { q: "Is it cloud or on-prem?", a: "Both deployment options are available." },
      { q: "How accurate is failure prediction?", a: "Typically 85-90% accuracy with 2 weeks lead time." }
    ]
  },
  {
    id: "energy-optimizer",
    title: "Energy Optima",
    subtitle: "HVAC AI Controller",
    description: "Optimizes HVAC based on occupancy and weather.",
    longDescription: "Smart energy management for large buildings. \n\nEnergy Optima learns the thermal patterns of your facility and correlates them with weather forecasts and occupancy schedules. It adjusts HVAC and lighting systems proactively to maintain comfort while minimizing energy waste.",
    industry: "manufacturing",
    service: "custom-model",
    url: "#",
    category: "Industrial IoT",
    status: "Live",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
    features: ["Cost Saving", "Carbon Track", "Smart Thermostat"],
    technologies: ["IoT", "RL"],
    benefits: ["Lower bills", "Sustainability"],
    useCases: ["Warehouses", "Offices"],
    stats: ["25% Reduction", "Auto-Pilot"],
    integrations: ["BMS", "Smart Meters"],
    testimonials: [{ name: "Facility Mgr", role: "Office", quote: "Bills went down significantly.", avatar: "https://randomuser.me/api/portraits/women/44.jpg" }],
    faqs: [
      { q: "What is the ROI?", a: "Most clients see ROI within 6 to 9 months." },
      { q: "Does it integrate with BMS?", a: "Yes, integrates with BacNet and Modbus systems." },
      { q: "Can I override settings?", a: "Yes, manual override is always available." },
      { q: "Does it compromise comfort?", a: "No, it maintains temperature within your defined comfort bands." }
    ]
  },
  {
    id: "supply-chain-track",
    title: "Logistics Live",
    subtitle: "Real-time Tracker",
    description: "End-to-end supply chain visibility.",
    longDescription: "Total visibility for your supply chain. \n\nTrack shipments in real-time across land, sea, and air. The system predicts delays caused by weather or port congestion and suggests alternative routes or inventory adjustments to keep your production line running smoothly.",
    industry: "logistics",
    service: "data-pipeline",
    url: "#",
    category: "Industrial IoT",
    status: "Dashboard",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    features: ["GPS Sync", "Delay Pred", "Alerts"],
    technologies: ["Kafka", "React"],
    benefits: ["Visibility", "Mgmt"],
    useCases: ["Logistics", "Cold Chain"],
    stats: ["Real-time ETA", "Route Opt"],
    integrations: ["SAP", "FedEx"],
    testimonials: [{ name: "Ops Lead", role: "Logistics", quote: "We know where everything is.", avatar: "https://randomuser.me/api/portraits/men/55.jpg" }],
    faqs: [
      { q: "Does it work globally?", a: "Yes, supports global tracking across sea, air, and land." },
      { q: "How accurate are ETAs?", a: "Our AI predicts ETAs with +/- 4 hours accuracy for international shipments." },
      { q: "Does it track temperature?", a: "Yes, for cold chain logistics via IoT loggers." },
      { q: "Can I share with customers?", a: "Yes, generate tracking links for end customers." }
    ]
  },

  // ==========================================
  // 14. HEALTHTECH
  // ==========================================
  {
    id: "medi-scan-ai",
    title: "MediScan AI",
    subtitle: "Radiology Assistant",
    description: "99% accuracy in detecting early-stage tumors in MRI/CT scans.",
    longDescription: "An AI co-pilot for radiologists. \n\nMediScan analyzes medical images (X-rays, MRIs, CTs) to highlight potential anomalies like tumors, fractures, or lesions. It prioritizes urgent cases for doctor review, ensuring that critical patients get treated faster.",
    industry: "healthcare",
    service: "computer-vision",
    url: "https://github.com/Project-MONAI/MONAI",
    category: "HealthTech",
    status: "Research",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    features: ["Segmentation", "3D Recon", "Reporting"],
    technologies: ["U-Net", "Python"],
    benefits: ["Early detection", "Accuracy"],
    useCases: ["Cancer Screen", "ER Triage"],
    stats: ["99% Acc", "FDA Compliant"],
    integrations: ["PACS", "EHR"],
    testimonials: [{ name: "Dr. Gupta", role: "Radiologist", quote: "A second pair of eyes.", avatar: "https://randomuser.me/api/portraits/men/60.jpg" }],
    faqs: [
      { q: "Is it FDA approved?", a: "It is currently pending FDA 510(k) clearance." },
      { q: "Does it replace radiologists?", a: "No, it assists them by prioritizing cases and highlighting regions of interest." },
      { q: "What formats does it support?", a: "Standard DICOM and NIfTI formats." },
      { q: "Is patient data safe?", a: "Yes, data is anonymized and processed on secure, HIPAA-compliant servers." }
    ]
  },
  {
    id: "virtual-nurse",
    title: "Virtual Nurse Bot",
    subtitle: "Patient Triage",
    description: "Chatbot for symptom checking and appointment booking.",
    longDescription: "Ease the burden on healthcare staff. \n\nVirtual Nurse acts as the first point of contact for patients, asking standard triage questions to assess symptom severity. It can book appointments, provide home-care advice for minor issues, or escalate emergencies to human doctors immediately.",
    industry: "healthcare",
    service: "nlp-chatbot",
    url: "#",
    category: "HealthTech",
    status: "Live",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
    features: ["Symptom Check", "Booking", "Reminders"],
    technologies: ["Dialogflow", "FHIR"],
    benefits: ["Reduce waiting", "24/7 care"],
    useCases: ["Hospitals", "Telehealth"],
    stats: ["Reduce ER Load", "Multi-lang"],
    integrations: ["Epic", "Cerner"],
    testimonials: [{ name: "Nurse Betty", role: "Head Nurse", quote: "Patients are better informed.", avatar: "https://randomuser.me/api/portraits/women/90.jpg" }],
    faqs: [
      { q: "Is it a medical device?", a: "It is an information tool, not a diagnostic device." },
      { q: "Does it integrate with EHR?", a: "Yes, it writes notes directly to Epic and Cerner." },
      { q: "What if it's an emergency?", a: "It immediately directs the patient to call emergency services (911)." },
      { q: "Can it book appointments?", a: "Yes, it accesses the hospital's scheduling system in real-time." }
    ]
  },
  {
    id: "drug-discovery",
    title: "Drug Discovery AI",
    subtitle: "Molecule Generator",
    description: "Simulates chemical reactions to find new drugs.",
    longDescription: "Accelerating the path to new cures. \n\nThis AI models protein structures and simulates millions of chemical interactions to identify promising drug candidates. It drastically shortens the initial phase of drug discovery, saving years of lab work and millions in funding.",
    industry: "healthcare",
    service: "custom-model",
    url: "#",
    category: "HealthTech",
    status: "Research",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
    features: ["Protein Folding", "Simulations", "Data Mining"],
    technologies: ["AlphaFold", "Python"],
    benefits: ["Faster discovery", "Lower cost"],
    useCases: ["Pharma", "Biotech"],
    stats: ["1M+ Compounds", "Novel Discovery"],
    integrations: ["Lab Equipment"],
    testimonials: [{ name: "Scientist", role: "Pharma", quote: "Accelerated our pipeline.", avatar: "https://randomuser.me/api/portraits/men/15.jpg" }],
    faqs: [
      { q: "How accurate are predictions?", a: "Highly accurate for protein folding, reducing wet lab failures." },
      { q: "Does it replace lab testing?", a: "No, it filters candidates so you only test the most promising ones." },
      { q: "What is the computation cost?", a: "It requires significant GPU resources, which we provide via cloud." },
      { q: "Can it design novel proteins?", a: "Yes, de novo protein design is a key feature." }
    ]
  },

  // ==========================================
  // 15. LEGALTECH
  // ==========================================
  {
    id: "legal-contract-ai",
    title: "LegalEagle AI",
    subtitle: "Contract Review",
    description: "LLM agent to review NDAs and contracts.",
    longDescription: "Review contracts in minutes, not hours. \n\nLegalEagle scans uploaded contracts to highlight risky clauses, missing terms, or non-standard language. It suggests edits based on your company's playbook and ensures you never sign a bad deal due to fatigue or oversight.",
    industry: "legal",
    service: "nlp-chatbot",
    url: "https://github.com/StanGirard/quivr",
    category: "LegalTech",
    status: "Live Demo",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73",
    features: ["Risk Highlight", "Redlining", "Clause Sug"],
    technologies: ["GPT-4", "OCR"],
    benefits: ["Fast review", "Risk mitigation"],
    useCases: ["NDA", "Vendor Contracts"],
    stats: ["80% Faster", "Playbook Comp"],
    integrations: ["DocuSign", "Clio"],
    testimonials: [{ name: "Lawyer", role: "Firm", quote: "Catching risks I missed.", avatar: "https://randomuser.me/api/portraits/men/33.jpg" }],
    faqs: [
      { q: "Is client data secure?", a: "Yes, we use zero-retention policies for sensitive documents." },
      { q: "Can I customize the playbook?", a: "Yes, upload your standard clauses and it will check against them." },
      { q: "Does it support multiple languages?", a: "Currently supports English, French, and German." },
      { q: "Can it redline documents?", a: "Yes, it provides a Word doc with tracked changes." }
    ]
  },
  {
    id: "patent-search",
    title: "Patent Search Pro",
    subtitle: "IP Protection",
    description: "Finds similar patents instantly.",
    longDescription: "Semantic search for intellectual property. \n\nInstead of keyword matching, this tool understands the concept of your invention and finds existing patents that are conceptually similar. It helps inventors and lawyers assess patentability quickly and avoid infringement.",
    industry: "legal",
    service: "data-pipeline",
    url: "#",
    category: "LegalTech",
    status: "Tool",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744",
    features: ["Similarity Search", "Global DB"],
    technologies: ["Vector DB", "NLP"],
    benefits: ["IP Safety", "Validation"],
    useCases: ["Law Firms", "R&D"],
    stats: ["Global DB", "Concept Search"],
    integrations: ["USPTO", "WIPO"],
    testimonials: [{ name: "Inventor", role: "Indie", quote: "Saved me legal fees.", avatar: "https://randomuser.me/api/portraits/women/22.jpg" }],
    faqs: [
      { q: "Which databases are covered?", a: "USPTO, EPO, WIPO, and major Asian patent offices." },
      { q: "Is it keyword based?", a: "No, it uses semantic search to find conceptual similarities." },
      { q: "Can I export results?", a: "Yes, comprehensive PDF reports with claim analysis." },
      { q: "How fast is the search?", a: "Millions of patents are searched in under 2 seconds." }
    ]
  },
  {
    id: "gdpr-compliance",
    title: "GDPR Shield",
    subtitle: "Compliance Auditor",
    description: "Scans docs for GDPR compliance.",
    longDescription: "Automated privacy governance. \n\nGDPR Shield scans your document repositories and databases to ensure personal data is handled according to GDPR regulations. It flags non-compliant data retention, identifies unsecured PII, and generates reports for data protection officers.",
    industry: "legal",
    service: "ethical-ai",
    url: "#",
    category: "LegalTech",
    status: "Tool",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
    features: ["Auto-Audit", "Risk Report"],
    technologies: ["RegTech", "Python"],
    benefits: ["Compliance", "Protection"],
    useCases: ["Corp Compliance", "Audits"],
    stats: ["Auto-Discovery", "Risk Dash"],
    integrations: ["SharePoint", "G-Drive"],
    testimonials: [{ name: "DPO", role: "Tech", quote: "Automated our compliance.", avatar: "https://randomuser.me/api/portraits/men/40.jpg" }],
    faqs: [
      { q: "What regulations are supported?", a: "GDPR, CCPA, HIPAA, and LGPD." },
      { q: "Does it scan emails?", a: "Yes, it can scan email archives for PII." },
      { q: "Can it delete data?", a: "It can flag data for deletion, but requires admin approval." },
      { q: "Is the report audit-ready?", a: "Yes, generates standard reports for regulatory bodies." }
    ]
  },

  // ==========================================
  // 16. HR TECH
  // ==========================================
  {
    id: "hr-screening-bot",
    title: "TalentFlow Bot",
    subtitle: "Automated Interviewer",
    description: "Voice-enabled AI for candidate screening.",
    longDescription: "Scale your hiring without scaling your recruiting team. \n\nTalentFlow Bot conducts the initial phone screen with candidates. It asks about experience, salary expectations, and technical concepts, then transcribes the call and grades the candidate based on your criteria, presenting you with only the best matches.",
    industry: "tech",
    service: "nlp-chatbot",
    url: "https://github.com/livekit/agents",
    category: "HR Tech",
    status: "v1.0",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    features: ["Voice Screen", "Grading", "Personality"],
    technologies: ["Twilio", "Whisper"],
    benefits: ["Save time", "Remove bias"],
    useCases: ["Hiring", "Screening"],
    stats: ["1000s Candidates", "Consistent"],
    integrations: ["Greenhouse", "Lever"],
    testimonials: [{ name: "Recruiter", role: "Agency", quote: "Filters best candidates.", avatar: "https://randomuser.me/api/portraits/women/55.jpg" }],
    faqs: [
      { q: "Is it legal to use AI interviewers?", a: "Yes, provided candidates are informed they are speaking to an AI." },
      { q: "Can it detect cheating?", a: "It flags suspicious pauses or background typing noises." },
      { q: "Does it work for non-tech roles?", a: "Yes, custom interview scripts can be created for sales, support, etc." },
      { q: "How does it grade?", a: "It compares answers against a rubric provided by your hiring manager." }
    ]
  },
  {
    id: "retention-ai",
    title: "Retention Predictor",
    subtitle: "Employee Churn AI",
    description: "Predicts employee churn risk.",
    longDescription: "Keep your best talent. \n\nRetention Predictor analyzes anonymous data points like engagement surveys, attendance, and work patterns to identify signs of burnout or disengagement. It alerts HR leaders to high-risk teams so they can intervene with support before employees resign.",
    industry: "tech",
    service: "ai-solutions",
    url: "#",
    category: "HR Tech",
    status: "Internal",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    features: ["Burnout Detect", "Engagement"],
    technologies: ["ML", "Python"],
    benefits: ["Retain talent", "Culture"],
    useCases: ["Enterprise", "Remote"],
    stats: ["Predict Churn", "Privacy First"],
    integrations: ["Workday", "Slack"],
    testimonials: [{ name: "HR Dir", role: "Corp", quote: "Saved key talent.", avatar: "https://randomuser.me/api/portraits/men/66.jpg" }],
    faqs: [
      { q: "Is employee data private?", a: "Yes, analysis is done on anonymized/aggregated data." },
      { q: "What signals does it use?", a: "Email sentiment, calendar load, and survey responses." },
      { q: "How accurate is it?", a: "80%+ accuracy in predicting resignation within 3 months." },
      { q: "Does it integrate with HRIS?", a: "Yes, connects with Workday, BambooHR, and others." }
    ]
  },
  {
    id: "culture-fit",
    title: "Culture Fit Analyzer",
    subtitle: "Soft Skill Scan",
    description: "Analyzes interviews for culture fit.",
    longDescription: "Hire for the long term. \n\nThis tool analyzes interview transcripts to assess a candidate's soft skills, communication style, and values alignment with your company culture. It provides objective data to support gut feelings about 'culture fit'.",
    industry: "tech",
    service: "ai-audit",
    url: "#",
    category: "HR Tech",
    status: "Beta",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    features: ["Sentiment", "Tone Check"],
    technologies: ["NLP", "React"],
    benefits: ["Better hiring", "Team fit"],
    useCases: ["Hiring", "Team Building"],
    stats: ["Objective", "Behavioral"],
    integrations: ["Zoom", "Teams"],
    testimonials: [{ name: "Founder", role: "Startup", quote: "Built a cohesive team.", avatar: "https://randomuser.me/api/portraits/women/12.jpg" }],
    faqs: [
      { q: "How do you define culture?", a: "We map candidates against your company's core values framework." },
      { q: "Is this biased?", a: "We audit algorithms to ensure no bias against accents or dialects." },
      { q: "Does it need a video?", a: "It works on audio/text transcripts primarily." },
      { q: "Can it analyze teams?", a: "Yes, it can analyze team communication to improve cohesion." }
    ]
  },

  // ==========================================
  // 17. MARKETING AI
  // ==========================================
  {
    id: "brand-voice-genie",
    title: "Brand Voice Genie",
    subtitle: "Generative Marketing",
    description: "Creates on-brand content tailored to trends.",
    longDescription: "Your brand's AI copywriter. \n\nFeed it your brand guidelines and previous successful posts, and it generates new content that sounds exactly like you. It can repurpose a single blog post into tweets, LinkedIn articles, and Instagram captions instantly.",
    industry: "retail",
    service: "ai-solutions",
    url: "https://github.com/danielmiessler/fabric",
    category: "Marketing AI",
    status: "Live Platform",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48",
    features: ["Trend Analysis", "Content Gen", "SEO"],
    technologies: ["GANs", "SEO AI"],
    benefits: ["Consistent voice", "Scale"],
    useCases: ["Social Media", "Blogs"],
    stats: ["10x Output", "SEO Optimized"],
    integrations: ["HubSpot", "WordPress"],
    testimonials: [{ name: "Marketer", role: "Agency", quote: "My secret weapon.", avatar: "https://randomuser.me/api/portraits/men/30.jpg" }],
    faqs: [
      { q: "Is the content original?", a: "Yes, every piece is generated uniquely and checks for plagiarism." },
      { q: "Can I train it on my blog?", a: "Yes, upload your past content to train the style engine." },
      { q: "Does it do images?", a: "Yes, it can generate matching DALL-E images for posts." },
      { q: "How many languages?", a: "Supports 15+ languages for global marketing." }
    ]
  },
  {
    id: "seo-writer",
    title: "SEO Auto-Writer",
    subtitle: "Blog Generator",
    description: "Generates SEO-optimized blogs.",
    longDescription: "Dominate search rankings. \n\nSEO Auto-Writer researches a topic, analyzes top-ranking competitors, and writes comprehensive, keyword-rich articles. It handles formatting, meta tags, and even suggests internal links, streamlining your content SEO strategy.",
    industry: "retail",
    service: "ai-solutions",
    url: "#",
    category: "Marketing AI",
    status: "Live",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a",
    features: ["Keyword Injection", "HTML"],
    technologies: ["GPT-4", "Unsplash"],
    benefits: ["Rank higher", "Traffic"],
    useCases: ["Affiliate", "Corp Blog"],
    stats: ["Rank #1", "Auto-Publish"],
    integrations: ["WordPress", "Semrush"],
    testimonials: [{ name: "Blogger", role: "Indie", quote: "Traffic exploded.", avatar: "https://randomuser.me/api/portraits/women/40.jpg" }],
    faqs: [
      { q: "Does it pass AI detection?", a: "It aims for human-like flow, but we recommend human editing." },
      { q: "Does it do keyword research?", a: "Yes, it integrates with Semrush data to find low-competition keywords." },
      { q: "Can it post to WordPress?", a: "Yes, it drafts directly into your CMS." },
      { q: "What length are articles?", a: "Adjustable from 500 to 3000+ words." }
    ]
  },
  {
    id: "ad-creative",
    title: "Ad Creative Gen",
    subtitle: "Visual Ads AI",
    description: "Generates high-converting ad images.",
    longDescription: "Stop guessing what works in ads. \n\nThis tool generates hundreds of ad variations—images and copy—optimized for conversion. It uses data from successful campaigns to predict which designs will get the highest Click-Through Rate (CTR).",
    industry: "retail",
    service: "computer-vision",
    url: "#",
    category: "Marketing AI",
    status: "Tool",
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb",
    features: ["A/B Testing", "Image Gen"],
    technologies: ["Stable Diffusion", "Python"],
    benefits: ["High CTR", "Lower CPA"],
    useCases: ["FB Ads", "Google Ads"],
    stats: ["Higher CTR", "Brand Safe"],
    integrations: ["FB Ads", "Google Ads"],
    testimonials: [{ name: "Media Buyer", role: "Agency", quote: "CPA dropped 30%.", avatar: "https://randomuser.me/api/portraits/men/50.jpg" }],
    faqs: [
      { q: "Are the images copyright free?", a: "Yes, you own full commercial rights to generated images." },
      { q: "Does it write headlines?", a: "Yes, it generates matching ad copy and headlines." },
      { q: "Does it know ad specs?", a: "Yes, it exports in all standard social media sizes." },
      { q: "Can I upload my logo?", a: "Yes, it auto-places logos and brand colors." }
    ]
  },

  // ==========================================
  // 18. AGRITECH
  // ==========================================
  {
    id: "agri-vision",
    title: "AgriVision Bot",
    subtitle: "Precision Ag Agent",
    description: "Drone analysis for crop health.",
    longDescription: "Smart farming from the sky. \n\nAgriVision processes multispectral imagery from drones to assess plant health. It identifies specific areas needing water or pesticide, allowing farmers to treat only the affected spots rather than spraying the whole field, saving costs and the environment.",
    industry: "agriculture",
    service: "computer-vision",
    url: "https://github.com/microsoft/farmvibes-ai",
    category: "AgriTech",
    status: "Pilot",
    image: "https://images.unsplash.com/photo-1625246333195-09d9b63bd71a",
    features: ["Soil Health", "Yield Forecast"],
    technologies: ["CV", "Satellite"],
    benefits: ["Higher yield", "Save resources"],
    useCases: ["Farming", "Vineyards"],
    stats: ["Reduce Chems", "Early Warning"],
    integrations: ["DJI", "Farm ERP"],
    testimonials: [{ name: "Farmer", role: "Corn", quote: "Saved my harvest.", avatar: "https://randomuser.me/api/portraits/men/60.jpg" }],
    faqs: [
      { q: "Which drones are supported?", a: "DJI, Parrot, and most multispectral drones." },
      { q: "Does it work without internet?", a: "Yes, data can be processed on a local field laptop." },
      { q: "Can it detect pests?", a: "Yes, it identifies common pest infestations patterns." },
      { q: "How fast is processing?", a: "A 100-acre field map is ready in under 30 minutes." }
    ]
  },
  {
    id: "smart-irrigation",
    title: "AquaSmart",
    subtitle: "Irrigation Controller",
    description: "Optimizes water usage.",
    longDescription: "Water crops with precision. \n\nConnected to soil moisture sensors and local weather forecasts, AquaSmart automates irrigation valves. It ensures crops get exactly the water they need—no more, no less—preventing root rot and conserving precious water resources.",
    industry: "agriculture",
    service: "custom-model",
    url: "#",
    category: "AgriTech",
    status: "Live",
    image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0",
    features: ["Water Save", "Weather Sync"],
    technologies: ["IoT", "LoRaWAN"],
    benefits: ["Save water", "Healthy crops"],
    useCases: ["Greenhouse", "Orchards"],
    stats: ["Save 30%", "Remote"],
    integrations: ["IoT Valves", "Weather"],
    testimonials: [{ name: "Grower", role: "Berries", quote: "Better fruit quality.", avatar: "https://randomuser.me/api/portraits/women/70.jpg" }],
    faqs: [
      { q: "Does it need Wi-Fi?", a: "No, it uses LoRaWAN for long-range, low-power connectivity." },
      { q: "Can I control it from phone?", a: "Yes, via our mobile app." },
      { q: "Does it detect leaks?", a: "Yes, it alerts you if water flow is abnormal." },
      { q: "What power source?", a: "Solar powered with battery backup." }
    ]
  },
  {
    id: "livestock-monitor",
    title: "Cattle Health Monitor",
    subtitle: "Livestock Wearable",
    description: "Tracks livestock health.",
    longDescription: "Fitbit for cows. \n\nThese smart collars track the movement, eating habits, and temperature of livestock. AI algorithms analyze this data to detect signs of illness, calving, or distress early, allowing farmers to provide veterinary care immediately.",
    industry: "agriculture",
    service: "custom-model",
    url: "#",
    category: "AgriTech",
    status: "Pilot",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a",
    features: ["GPS", "Health Track"],
    technologies: ["IoT", "App"],
    benefits: ["Health", "Location"],
    useCases: ["Dairy", "Ranching"],
    stats: ["Reduce Mortality", "Anti-Theft"],
    integrations: ["Farm Apps", "SMS"],
    testimonials: [{ name: "Rancher", role: "Texas", quote: "Found lost cattle.", avatar: "https://randomuser.me/api/portraits/men/80.jpg" }],
    faqs: [
      { q: "What is the battery life?", a: "Up to 3 years on a single battery." },
      { q: "Does it detect calving?", a: "Yes, it alerts when labor signs are detected." },
      { q: "Is it waterproof?", a: "Yes, rugged IP67 rated for harsh conditions." },
      { q: "Range?", a: "Up to 5km with base station." }
    ]
  },

  // ==========================================
  // 19. CUSTOMER SUPPORT
  // ==========================================
  {
    id: "voice-xperience",
    title: "VoiceXperience",
    subtitle: "AI Call Center",
    description: "Replaces IVR with conversational AI.",
    longDescription: "End the frustration of 'Press 1 for Support'. \n\nVoiceXperience talks to your customers like a human. It understands interruptions, multiple intents, and accents. It can resolve complex queries, authenticate users, and update records without ever involving a human agent.",
    industry: "tech",
    service: "nlp-chatbot",
    url: "https://github.com/pipecat-ai/pipecat",
    category: "Customer Support",
    status: "Live Platform",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    features: ["Emotion Detect", "Resolution"],
    technologies: ["Voice AI", "Conv AI"],
    benefits: ["Better CX", "Lower Cost"],
    useCases: ["Banks", "Telco"],
    stats: ["Zero Wait", "High CSAT"],
    integrations: ["Genesys", "Salesforce"],
    testimonials: [{ name: "CX Head", role: "Telco", quote: "Customers prefer it.", avatar: "https://randomuser.me/api/portraits/women/55.jpg" }],
    faqs: [
      { q: "Does it sound robotic?", a: "No, we use ultra-realistic neural voice engines." },
      { q: "Can it transfer to humans?", a: "Yes, with full context handover." },
      { q: "How many concurrent calls?", a: "Unlimited scaling in the cloud." },
      { q: "Does it integrate with CRM?", a: "Yes, Salesforce, Zendesk, and HubSpot." }
    ]
  },
  {
    id: "ticket-resolver",
    title: "Auto-Resolve Bot",
    subtitle: "L1 Support Agent",
    description: "Solves common tickets automatically.",
    longDescription: "Clear your support queue instantly. \n\nThis bot integrates with your ticketing system (like Zendesk) to identify and resolve repetitive tickets automatically. It can reset passwords, process refunds within policy, and answer FAQs, leaving your human agents to handle complex issues.",
    industry: "tech",
    service: "nlp-chatbot",
    url: "#",
    category: "Customer Support",
    status: "Live",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    features: ["KB Search", "API Actions"],
    technologies: ["RAG", "Python"],
    benefits: ["Zero backlog", "Instant"],
    useCases: ["SaaS", "E-com"],
    stats: ["Resolve 40%", "24/7"],
    integrations: ["Zendesk", "Jira"],
    testimonials: [{ name: "Support Lead", role: "SaaS", quote: "Backlog gone.", avatar: "https://randomuser.me/api/portraits/men/44.jpg" }],
    faqs: [
      { q: "What tickets can it solve?", a: "Password resets, refund status, and how-to questions." },
      { q: "How does it learn?", a: "It ingests your knowledge base and past ticket history." },
      { q: "Is setup difficult?", a: "No, one-click integration with Zendesk." },
      { q: "What is the accuracy?", a: "Typically 90%+ for L1 queries." }
    ]
  },
  {
    id: "sentiment-router",
    title: "Sentiment Router",
    subtitle: "Call Routing AI",
    description: "Routes angry customers to senior agents.",
    longDescription: "Don't let angry customers churn. \n\nSentiment Router listens to the tone and words of incoming support calls/chats. If it detects frustration or anger, it bypasses standard queues and routes the customer directly to a senior retention specialist for white-glove service.",
    industry: "tech",
    service: "ai-audit",
    url: "#",
    category: "Customer Support",
    status: "Tool",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
    features: ["Tone Analysis", "Routing"],
    technologies: ["Audio AI", "Twilio"],
    benefits: ["Churn prevention", "Care"],
    useCases: ["Call Centers", "Chat"],
    stats: ["Reduce Churn", "Real-time"],
    integrations: ["Twilio", "Nice"],
    testimonials: [{ name: "Agent", role: "Support", quote: "Helps me prep.", avatar: "https://randomuser.me/api/portraits/women/33.jpg" }],
    faqs: [
      { q: "Does it work on live calls?", a: "Yes, analyzes audio stream in real-time." },
      { q: "What languages?", a: "English, Spanish, French, and German." },
      { q: "Can it alert supervisors?", a: "Yes, sends dashboard alerts for 'Red' calls." },
      { q: "Does it record calls?", a: "It can, or just process the stream without storage." }
    ]
  },
  // ==========================================
  // 20. EDUCATION (Industry: education)
  // ==========================================
  {
    id: "edubot",
    title: "EduBot AI Tutor",
    subtitle: "Personalized Learning",
    description: "24/7 AI tutor helping students.",
    longDescription: "A personal tutor for every student. \n\nEduBot understands the curriculum and answers student questions instantly. It adapts its explanation style based on the student's age and learning pace, ensuring no child is left behind.",
    industry: "education",
    service: "nlp-chatbot",
    url: "#",
    category: "EdTech",
    status: "Live",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    features: ["Instant Q&A", "Quiz Gen"],
    technologies: ["NLP", "LLM"],
    benefits: ["Support", "Grades"],
    useCases: ["Schools", "Online Courses"],
    stats: ["High Engagement", "24/7"],
    integrations: ["Canvas", "Blackboard"],
    testimonials: [{ name: "Teacher", role: "K-12", quote: "Great supplement.", avatar: "https://randomuser.me/api/portraits/men/99.jpg" }],
    faqs: [
      { q: "Does it know the curriculum?", a: "Yes, upload your syllabus and textbooks." },
      { q: "Is it safe for kids?", a: "Yes, strict guardrails prevent inappropriate content." },
      { q: "Can it grade essays?", a: "Yes, it provides feedback on grammar and structure." },
      { q: "Does it solve math?", a: "Yes, with step-by-step explanations." }
    ]
  },
  // ==========================================
  // 21. REAL ESTATE (Industry: real-estate)
  // ==========================================
  {
    id: "prop-valuation",
    title: "Property Valuation Engine",
    subtitle: "Accurate Price Prediction",
    description: "AI model that estimates property value.",
    longDescription: "Data-driven real estate appraisal. \n\nThis AI model estimates property value based on thousands of data points including location, amenities, market trends, and recent sales, providing instant and accurate valuations.",
    industry: "real-estate",
    service: "custom-model",
    url: "#",
    category: "PropTech",
    status: "Live",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    features: ["Price Est", "Trend Analysis"],
    technologies: ["ML", "Big Data"],
    benefits: ["Data-driven", "Faster deals"],
    useCases: ["Agencies", "Investors"],
    stats: ["95% Accuracy", "Instant"],
    integrations: ["Zillow API", "MLS"],
    testimonials: [{ name: "Agent", role: "Realtor", quote: "Clients trust the data.", avatar: "https://randomuser.me/api/portraits/women/22.jpg" }],
    faqs: [
      { q: "What data points are used?", a: "Sq ft, location, recent sales, and local amenities." },
      { q: "How often is it updated?", a: "Daily with new market data." },
      { q: "Can it predict future value?", a: "Yes, based on historical appreciation trends." },
      { q: "Does it cover commercial?", a: "Yes, supports residential and commercial." }
    ]
  },
  // ==========================================
  // 22. LOGISTICS (Industry: logistics)
  // ==========================================
  {
    id: "route-optimizer",
    title: "Smart Route Optimizer",
    subtitle: "Fleet Management",
    description: "Calculates most efficient routes.",
    longDescription: "Optimize your fleet's efficiency. \n\nThis tool calculates the most efficient delivery routes based on real-time traffic, weather conditions, and vehicle load capacity, saving fuel and ensuring on-time deliveries.",
    industry: "logistics",
    service: "data-pipeline",
    url: "#",
    category: "Logistics AI",
    status: "Live",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    features: ["Dynamic Routing", "Fuel Save"],
    technologies: ["Graph Algo", "GPS"],
    benefits: ["Save Fuel", "Fast Delivery"],
    useCases: ["Trucking", "Delivery"],
    stats: ["Save 20% Fuel", "On-time"],
    integrations: ["Telematics", "ERP"],
    testimonials: [{ name: "Fleet Mgr", role: "Logistics", quote: "Huge cost savings.", avatar: "https://randomuser.me/api/portraits/men/55.jpg" }],
    faqs: [
      { q: "Does it handle multi-stop?", a: "Yes, optimizes for 100+ stops per route." },
      { q: "Does it consider vehicle size?", a: "Yes, avoids low bridges for trucks." },
      { q: "Is it real-time?", a: "Yes, reroutes based on traffic jams." },
      { q: "Driver app included?", a: "Yes, drivers get turn-by-turn navigation." }
    ]
  },
  // ==========================================
  // 23. MISC / Ethical AI
  // ==========================================
  {
    id: "ethical-ai-guard",
    title: "Ethical AI Guard",
    subtitle: "Bias Detection",
    description: "Scans AI models for bias.",
    longDescription: "Ensure your AI is fair and compliant. \n\nThis tool scans your AI models and datasets to detect hidden biases related to gender, race, or age before deployment, helping you build trust and avoid regulatory fines.",
    industry: "tech",
    service: "ethical-ai",
    url: "#",
    category: "AI Governance",
    status: "Tool",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
    features: ["Bias Score", "Fairness"],
    technologies: ["XAI", "Python"],
    benefits: ["Fairness", "Trust"],
    useCases: ["Model Audit", "Compliance"],
    stats: ["Bias Report", "Compliance"],
    integrations: ["MLflow", "TensorBoard"],
    testimonials: [{ name: "Ethicist", role: "NGO", quote: "Crucial for fair AI.", avatar: "https://randomuser.me/api/portraits/women/88.jpg" }],
    faqs: [
      { q: "What biases does it check?", a: "Gender, race, age, and socioeconomic bias." },
      { q: "Does it fix the model?", a: "It highlights issues; re-training is up to you." },
      { q: "Is it open source?", a: "We use open methodologies but provide enterprise support." },
      { q: "What format does it accept?", a: "Pickle files, ONNX, and CSV datasets." }
    ]
  }
];