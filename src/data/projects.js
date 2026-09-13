export const projects = [
  {
    id: "databuzz-global-competition",
    number: "01",
    title: "DataBuzz — UK Real Estate Analytics",
    subtitle: "Global Top 5 Worldwide | UK Real Estate Decision Intelligence Platform",
    category: "Analytics Competition / Real Estate Intelligence",
    domain: "Competition & Analytics",
    type: "Analytics Competition / Real Estate Decision Intelligence",
    highlight: "Global Top 5",
    shortDescription: "Secured Global Top 5 in DataBuzz, an international analytics competition. Engineered an end-to-end UK real estate BI platform across 15 interactive dashboards analyzing £970M transaction revenue, dual-calendar lag logic, buy-to-let yield economics, and what-if mortgage stress testing.",
    description: "Secured a Global Top 5 finish worldwide in DataBuzz, a premier global analytics competition. Architected a 15-page enterprise UK Real Estate Decision Intelligence Platform in Power BI. Modeled £970M in transaction revenue and £18.36M in rental income across 10 UK regions using a star-schema architecture, dual calendar relationships with DAX USERELATIONSHIP, disconnected What-If parameter tables for mortgage stress testing, and an algorithmic Investment Opportunity Scanner balancing risk, cap rates, and liquidity.",
    featured: true,
    year: "May 2026",
    technologies: ["Power BI", "Advanced DAX", "Power Query", "Star Schema Modeling", "Financial Modeling", "Scenario Intelligence", "Predictive Scoring", "What-If Parameters", "Risk Analysis", "Data Storytelling"],
    github: null,
    live: null,
    private: false,
    presentationType: "dashboard",
    datasetNote: "Built on simulated training data for educational purposes; values do not represent real organisational data.",
    metrics: [
      { label: "Global Standing", value: "Global Top 5" },
      { label: "Total Revenue Analyzed", value: "£970M (3.5K Deals)" },
      { label: "Lead Conversion Rate", value: "10.45% (£18.36M Rent)" },
      { label: "Advanced DAX Logic", value: "USERELATIONSHIP & Disconnected What-If" }
    ],
    pages: [
      "Home Portal & Executive Platform",
      "AI Executive Assistant & Intelligence Scope",
      "Executive Market Overview",
      "Executive Market Overview — AI Strategic Recommendations",
      "Revenue Timing & Market Trends",
      "Regional Revenue & Property Demand Analysis",
      "Agent & Agency Performance Intelligence",
      "Lead Funnel & Conversion Analytics",
      "Monthly Revenue Ribbon & Market Mix",
      "Investment Opportunity Scanner",
      "Buy-to-Let Intelligence & Rental Economics",
      "Mortgage & Affordability Scenario Intelligence",
      "Investment Risk & Scenario Forecasting",
      "Advanced Analytics — AI Decision Intelligence",
      "Market Simulation & Scenario Intelligence"
    ],
    assets: [
      { url: "/assets/projects/data-buzz/S1.png", title: "Home Portal & Executive Platform", caption: "Executive landing portal: DataBuzz Global Analytics Competition — UK Real Estate Analytics & Decision Intelligence Platform. Features simulated training data disclaimer." },
      { url: "/assets/projects/data-buzz/S2.png", title: "AI Executive Assistant & Intelligence Scope", caption: "Natural language query interface, quick KPI prompts, dynamic scenario toggles, and analytical scope across 10 UK regions." },
      { url: "/assets/projects/data-buzz/S3.png", title: "Executive Market Overview", caption: "Macro intelligence dashboard: £970M total sales revenue, 3.5K transactions, £277K average sale price, 10.45% lead conversion rate, and regional transaction distributions." },
      { url: "/assets/projects/data-buzz/S4.png", title: "Executive Market Overview — AI Strategic Recommendations", caption: "Regional performance ranking (London £206M leading, South East £181M), property type mix (Terraced 30.6%, Detached 27.5%), and AI executive summary recommendations." },
      { url: "/assets/projects/data-buzz/S5.png", title: "Revenue Timing & Market Trends", caption: "Time-intelligence using USERELATIONSHIP to track Listing vs Completion lag, monthly transaction velocity, Rolling 12M Sales vs Target, and QoQ/YoY seasonality." },
      { url: "/assets/projects/data-buzz/S6.png", title: "Regional Revenue & Property Demand Analysis", caption: "10 UK regions cross-filtered by property types, pricing heatmaps, volume vs value comparisons, and 9.40% New Build market share analysis." },
      { url: "/assets/projects/data-buzz/S7.png", title: "Agent & Agency Performance Intelligence", caption: "Agency benchmarking (Connells leading at £397M), agent productivity quartiles, conversion rate distribution, and RANKX leaderboard with ALLSELECTED." },
      { url: "/assets/projects/data-buzz/S8.png", title: "Lead Funnel & Conversion Analytics", caption: "End-to-end 5-stage conversion funnel (Enquiry → Viewing → Offer → Negotiation → Completed Sale), drop-off diagnostics, and channel efficiency metrics." },
      { url: "/assets/projects/data-buzz/S9.png", title: "Monthly Revenue Ribbon & Market Mix", caption: "Interactive Ribbon chart tracking monthly regional revenue rank shifts and hierarchical treemap breakdown of property category market share." },
      { url: "/assets/projects/data-buzz/S10.png", title: "Investment Opportunity Scanner", caption: "Multi-factor scoring algorithm (Investment Score 54.2, Cap Rate 4.8%), Risk vs Return bubble matrix, and geospatial high-yield opportunity identification." },
      { url: "/assets/projects/data-buzz/S11.png", title: "Buy-to-Let Intelligence & Rental Economics", caption: "Buy-to-let portfolio evaluation (£18.36M rental income, 4.84% avg rental yield), yield distribution box plot, and DSCR (Debt Service Coverage Ratio 0.50) analysis." },
      { url: "/assets/projects/data-buzz/S12.png", title: "Mortgage & Affordability Scenario Intelligence", caption: "What-If parameter simulation: dynamic LTV (66.5%) and mortgage rate (4.47%) sliders evaluating buyer borrowing capacity, monthly debt service, and IQR outliers." },
      { url: "/assets/projects/data-buzz/S13.png", title: "Investment Risk & Scenario Forecasting", caption: "Probabilistic downside risk modeling: 19.3% loss probability, downside variance decomposition treemap, stress-tested cash flow forecasts, and regional box plots." },
      { url: "/assets/projects/data-buzz/S14.png", title: "Advanced Analytics — AI Decision Intelligence", caption: "Machine learning feature importance ranking, Power BI Decomposition Tree for price driver root-cause analysis, and key factor waterfall breakdown." },
      { url: "/assets/projects/data-buzz/S15.png", title: "Market Simulation & Scenario Intelligence", caption: "Multivariate macroeconomic stress testing: interest rate shock scenarios, inflation pressure modeling, and regional risk-adjusted ROI projections." }
    ],
    highlights: [
      "Secured a Global Top 5 position worldwide in DataBuzz, a premier international analytics competition evaluating real-world business acumen.",
      "Architected a star-schema analytical model with 2 transactional fact tables (Sales Transactions, Leads) and 6 normalized dimension tables (Property, Agent, Agency, Region, Client, Calendar).",
      "Engineered dual calendar relationships with DAX USERELATIONSHIP to accurately resolve multi-month time lags between initial Listing Date and Transaction Completion Date.",
      "Constructed disconnected what-if parameter tables allowing dynamic interest rate (3.5%–7.5%) and LTV (50%–90%) mortgage affordability and stress-test simulations.",
      "Authored advanced DAX measures utilizing RANKX with ALLSELECTED, STDEVX.P anomaly detection, dynamic basket analysis, and rolling 12-month revenue tracking.",
      "Built comprehensive Buy-to-Let economics modeling gross/net rental yields, Debt Service Coverage Ratios (DSCR), and capitalization rates across UK property sectors.",
      "Engineered a multi-factor Investment Opportunity Scanner with risk-return scoring matrices, downside variance decomposition, and AI-assisted decision intelligence."
    ],
    problem: "The UK residential and buy-to-let property market presented fragmented transaction data, multi-month conversion lags between listing and completion, and high macroeconomic volatility across interest rates and affordability. Investors and estate agencies lacked an integrated decision-support system to evaluate market velocity, agent conversion efficiency, buy-to-let yields, and macro stress scenarios under fluctuating lending conditions.",
    approach: "Engineered an end-to-end UK Real Estate Decision Intelligence Platform in Power BI across 15 interactive analytical pages. Built a robust star-schema data model with dual calendar relationships (USERELATIONSHIP), disconnected what-if simulation tables for mortgage stress testing, an AI decision tree for price driver decomposition, and an algorithmic Investment Opportunity Scanner balancing risk, yield, and liquidity."
  },

  {
    id: "enterprise-netflix-dbt",
    number: "02",
    title: "Enterprise Netflix Analytics Engineering Pipeline",
    category: "Analytics Engineering / Data Engineering / BI",
    domain: "Analytics Engineering",
    shortDescription: "Production-style analytics engineering pipeline transforming MovieLens data into modular business marts using AWS S3, Snowflake, dbt Core, and Kimball star schema.",
    description: "An enterprise analytics engineering framework built on Snowflake and dbt Core utilizing MovieLens data. Implements staged ELT architecture, Type 2 Slowly Changing Dimensions (SCD), automated data quality tests, modular Jinja macros, and Power BI-ready semantic data marts.",
    featured: true,
    year: "2024",
    technologies: ["dbt Core", "Snowflake", "AWS S3", "SQL", "Jinja", "Kimball Schema", "Data Lineage"],
    github: "https://github.com/data-analyst-harsh-soni/enterprise-netflix-dbt-analytics",
    live: null,
    private: false,
    presentationType: "architecture",
    metrics: [
      { label: "dbt Models", value: "30 Models" },
      { label: "Automated Tests", value: "143 Tests" },
      { label: "Business Marts", value: "7 Marts" },
      { label: "Core Architecture", value: "AWS S3 -> Snowflake" }
    ],
    highlights: [
      "Constructed 30 dbt models spanning 6 sources, 6 staging, 9 intermediate, 4 dimensions, 3 facts, 7 marts, 1 seed, and 1 snapshot.",
      "Implemented 143 automated schema, unique, not-null, relationship, and custom Jinja tests.",
      "Structured 7 business marts: Executive Dashboard, Movie Analytics, User Analytics, Genre Analytics, Recommendation Analytics, Content Performance, and Movie Releases."
    ],
    problem: "Raw multi-table media and rating datasets require rigorous staging, dimensional modeling, and automated testing to serve reliable downstream BI reporting.",
    approach: "Architected a modular Kimball star-schema ELT pipeline using Snowflake compute, dbt transformations, and automated testing suites."
  },

  {
    id: "riskpulse-insurance",
    number: "03",
    title: "RiskPulse — Insurance Intelligence Platform",
    category: "Risk Intelligence / Decision Intelligence",
    domain: "Finance & Insurance",
    shortDescription: "Insurance risk intelligence platform evaluating 50,000 policyholders across $3,673M in total premiums to analyze loss ratio (1.75), risk categories, and behavioral risk drivers.",
    description: "An insurance risk intelligence and decision platform analyzing 50,000 policies. Synthesizes policyholder financials, loss ratios, health factors (BMI, smoking, chronic conditions), and driving violations to identify high-risk policy drivers.",
    featured: true,
    year: "2024",
    technologies: ["Power BI", "DAX", "Risk Modeling", "Python", "Actuarial Analytics"],
    github: "https://github.com/data-analyst-harsh-soni/RiskPulse-Insurance-Intelligence-Platform",
    live: "https://app.powerbi.com/view?r=eyJrIjoiMjYxNTYzMWYtNTZmZi00MmQxLTk5MDUtNDBmNzZhNGI3NTg0IiwidCI6IjRhNzhmOWQwLWFiZGUtNDBjNC1hMDg4LTBiOTg5NTk5M2M0YSJ9",
    private: false,
    presentationType: "dashboard",
    metrics: [
      { label: "Portfolio Size", value: "50,000 Policies" },
      { label: "Total Premium", value: "$3,673M" },
      { label: "Average Risk Score", value: "40.96" },
      { label: "Portfolio Loss Ratio", value: "1.75 (52.08% High Risk)" }
    ],
    pages: [
      "RiskPulse Home Portal",
      "Executive Risk Overview",
      "High-Risk Policy Deep Dive",
      "Behavioral Risk Drivers"
    ],
    assets: [
      { url: "/assets/projects/risk-pulse/risk-0.png", title: "RiskPulse Home Portal", caption: "Command hub connecting executive summary, deep-dive views, and risk driver modules." },
      { url: "/assets/projects/risk-pulse/risk-1.png", title: "Executive Risk Overview", caption: "Loss ratio distribution (1.75), total premiums ($3,673M), and high-risk policy proportion (52.08%)." },
      { url: "/assets/projects/risk-pulse/risk-2.png", title: "High-Risk Policy Deep Dive", caption: "Segmentation across geography, income brackets, age distribution, and policy tiers." },
      { url: "/assets/projects/risk-pulse/risk-3.png", title: "Behavioral Risk Drivers", caption: "Impact of smoking status, BMI brackets, chronic conditions, and traffic violations on risk scores." }
    ],
    highlights: [
      "Analyzed 50,000 insurance policies spanning $3,673M in total premium volume.",
      "Tracked average risk score (40.96) and loss ratio (1.75) across high-risk cohorts.",
      "Mapped behavioral risk drivers including BMI, smoking, chronic conditions, and traffic violations."
    ],
    problem: "Insurance underwriters require granular visibility into compounding behavioral, demographic, and health risks affecting policy loss ratios.",
    approach: "Built a multi-page Power BI decision platform synthesizing policyholder risk factors, claim frequencies, and premium allocations."
  },

  {
    id: "stock-market-prediction",
    number: "04",
    title: "Stock Market Intelligence & Prediction System",
    category: "Financial Analytics / Predictive Intelligence",
    domain: "Machine Learning & Finance",
    shortDescription: "Quantitative financial analytics and machine learning prediction system featuring 20+ analytical SQL queries, FastAPI backend, live web app, and Power BI dashboards over a synthetic stock dataset.",
    description: "An end-to-end financial analytics and machine learning prediction platform based on a synthetic stock dataset. Combines technical indicators (moving averages, daily returns, volatility, RSI, MACD), sentiment rolling averages, and global index correlations across a structured SQL data mart to model next-day close/direction predictions.",
    featured: true,
    year: "2024",
    technologies: ["Python", "Machine Learning", "FastAPI", "SQL", "Power BI", "Financial Analytics"],
    github: "https://github.com/data-analyst-harsh-soni/Stock-Market-Prediction",
    live: "https://stock-market-prediction-app-orcin.vercel.app/",
    private: false,
    presentationType: "dashboard",
    datasetNote: "Uses a synthetic stock dataset for feature engineering benchmarks and directional ML modeling.",
    metrics: [
      { label: "SQL Queries", value: "20+ Analytical" },
      { label: "Technical Signals", value: "RSI, MACD, Moving Averages" },
      { label: "Data Mart Schema", value: "6 Core Fact/Dim Tables" },
      { label: "ML Objective", value: "Next-Day Direction Model" }
    ],
    pages: [
      "Market Overview",
      "Company Fundamentals",
      "Stock Price Trend",
      "Volume Analysis",
      "Market Sentiment Intelligence",
      "Global Market Intelligence",
      "Indian Stock Market Intelligence"
    ],
    assets: [
      { url: "/assets/projects/stock-market/Home.png", title: "Home" },
      { url: "/assets/projects/stock-market/stock-1-overview.png", title: "Market Overview", caption: "Index movements, market breadth, and sector performance overview." },
      { url: "/assets/projects/stock-market/stock-2-fundamentals.png", title: "Company Fundamentals", caption: "PE ratios, market cap distributions, and fundamental indicators." },
      { url: "/assets/projects/stock-market/stock-3-trend.png", title: "Stock Price Trend", caption: "Moving average trends, price volatility bands, and momentum signals." },
      { url: "/assets/projects/stock-market/stock-4-volume.png", title: "Volume Analysis", caption: "Trading volume distribution and liquidity pattern analysis." },
      { url: "/assets/projects/stock-market/stock-5-sentiment.png", title: "Market Sentiment Intelligence", caption: "Sentiment rolling averages correlated with stock price movements." },
      { url: "/assets/projects/stock-market/stock-6-global.png", title: "Global Market Intelligence", caption: "Global index correlations and macroeconomic indicators." },
      { url: "/assets/projects/stock-market/stock-7-indian.png", title: "Indian Stock Market Intelligence", caption: "Sectoral performance breakdown across Indian market indices." }
    ],
    highlights: [
      "Engineered 20+ analytical SQL queries across fact_stock_prices, dim_company, dim_date, dim_sentiment, dim_macro, and dim_global.",
      "Extracted technical features including moving averages, daily returns, volatility, RSI, and MACD.",
      "Built FastAPI backend serving serialized ML models connected to a live web application."
    ],
    problem: "Analyzing quantitative market indicators requires reconciling price technicals, liquidity volume, sentiment rolling averages, and global index correlations into unified schemas.",
    approach: "Constructed an integrated pipeline: Python dataset generation -> Cleaning -> Feature Engineering -> SQL Data Mart -> ML Model -> FastAPI -> Frontend -> Power BI."
  },

  {
    id: "national-enrollment-intelligence-neis",
    number: "05",
    title: "National Enrollment Intelligence System — NEIS",
    category: "Public Data Intelligence / Policy Analytics",
    domain: "Public Data",
    shortDescription: "National public data intelligence system tracking 35M+ citizen enrollments across 28 states and 796 districts using Python, MySQL, and Power BI.",
    description: "A national-scale public data intelligence platform ingesting data.gov.in enrollment datasets. Tracks operational throughput across 28 states and 796 districts (32M adult / 3M youth enrollments), peak single-day surge (29-Dec-2025: 8M), efficiency index (44.21K), and 19K low-coverage pincodes.",
    featured: true,
    year: "2025",
    technologies: ["Power BI", "Python", "MySQL", "DAX", "Public Data / GIS"],
    github: "https://github.com/data-analyst-harsh-soni/National-Enrollment-Intelligence-System-NEIS",
    live: "https://app.powerbi.com/view?r=eyJrIjoiZDVjNzc5YTAtMGE0Yi00MTIwLWI0ZTQtYjcxZmJlNGViZTA3IiwidCI6IjRhNzhmOWQwLWFiZGUtNDBjNC1hMDg4LTBiOTg5NTk5M2M0YSJ9",
    private: false,
    presentationType: "dashboard",
    metrics: [
      { label: "Total Enrollments", value: "35M+ (32M Adult / 3M Youth)" },
      { label: "National Coverage", value: "28 States / 796 Districts" },
      { label: "Peak Day Surge", value: "8M (29-Dec-2025)" },
      { label: "Efficiency Index", value: "44.21K (19K Low Pincodes)" }
    ],
    pages: [
      "1. Executive Overview",
      "2. Operational Intelligence",
      "3. Youth Participation Analytics",
      "4. Youth Enrollment Geographic Insights",
      "5. Insights Dashboard",
      "6. Performance & Efficiency",
      "7. Detailed State Table"
    ],
    assets: [
      { url: "/assets/projects/neis/neis-1.png", title: "1. Executive Overview", caption: "National enrollment KPIs, 35M total enrollments, state volume rankings, and timeline trends." },
      { url: "/assets/projects/neis/neis-2.png", title: "2. Operational Intelligence", caption: "Peak enrollment day tracking (29-Dec-2025: 8M) and operational throughput patterns." },
      { url: "/assets/projects/neis/neis-3.png", title: "3. Youth Participation Analytics", caption: "Demographic breakdown of 3M youth enrollments across educational and regional corridors." },
      { url: "/assets/projects/neis/neis-4.png", title: "4. Youth Enrollment Geographic Insights", caption: "District-level spatial density maps highlighting underserved administrative zones." },
      { url: "/assets/projects/neis/neis-5.png", title: "5. Insights Dashboard", caption: "Operational center productivity patterns and regional registration metrics." },
      { url: "/assets/projects/neis/neis-6.png", title: "6. Performance & Efficiency", caption: "Efficiency Index benchmark (44.21K) and center turnaround monitoring." },
      { url: "/assets/projects/neis/neis-7.png", title: "7. Detailed State Table", caption: "Granular multi-level tabular drilldown covering 28 states, 796 districts, and 19K low-coverage pincodes." }
    ],
    highlights: [
      "Processed national enrollment feeds from data.gov.in into MySQL relational tables using Python.",
      "Identified 19,000 low-coverage pincodes and tracked peak surge day of 8M enrollments on 29-Dec-2025.",
      "Developed 7 distinct dashboard modules covering operations, youth demographics, and state-level tables."
    ],
    problem: "Public policy administrators need cohesive visibility across national citizen enrollment operations spanning 796 districts to address coverage gaps.",
    approach: "Built an end-to-end pipeline (data.gov.in -> Python -> MySQL -> Power BI) with geographic slicing and efficiency indexing."
  },

  {
    id: "enterprise-sales-intelligence",
    number: "06",
    title: "Enterprise Sales Intelligence System",
    category: "Enterprise BI / Sales Intelligence",
    domain: "Enterprise BI",
    shortDescription: "Enterprise commercial analytics platform with dynamic Dark and Light mode executive UI, revenue pacing, product performance, location operations, and review analysis.",
    description: "An enterprise commercial intelligence platform built in Power BI with a custom Figma-designed UX featuring dynamic Dark and Light modes. Integrates Python-generated datasets, star schema modeling, Power Query transformations, SQL, and DAX time-intelligence.",
    featured: true,
    year: "2024",
    technologies: ["Power BI", "DAX", "Figma UX", "Python", "SQL", "Star Schema", "Commercial Analytics"],
    github: "https://github.com/data-analyst-harsh-soni/Enterprise-Sales-Intelligence",
    live: "https://app.powerbi.com/view?r=eyJrIjoiMDM0NTljYzgtMmQ4YS00MDhkLWE0MWYtNWRiMDUzNDZjYzZlIiwidCI6IjRhNzhmOWQwLWFiZGUtNDBjNC1hMDg4LTBiOTg5NTk5M2M0YSJ9",
    private: false,
    presentationType: "dashboard",
    hasThemeToggle: true,
    metrics: [
      { label: "Dashboard Pages", value: "6 Executive Views" },
      { label: "Interface Design", value: "Dark & Light UI Theme" },
      { label: "Modeling", value: "Python + Star Schema" },
      { label: "UX System", value: "Figma + Power BI" }
    ],
    pages: [
      "Executive Summary",
      "Revenue Overview",
      "Customer Intelligence",
      "Product Performance",
      "Location & Operations",
      "Returns & Review Analysis"
    ],
    assets: [
      { url: "/assets/projects/enterprise-sales/summary-dark.png", lightUrl: "/assets/projects/enterprise-sales/summary-light.png", title: "Executive Summary", caption: "High-level enterprise revenue, gross margin, unit sales, and YoY commercial trajectory." },
      { url: "/assets/projects/enterprise-sales/revenue-dark.png", lightUrl: "/assets/projects/enterprise-sales/revenue-light.png", title: "Revenue Overview", caption: "Monthly revenue pacing, channel breakdown, and budget-vs-actual performance." },
      { url: "/assets/projects/enterprise-sales/customer-dark.png", lightUrl: "/assets/projects/enterprise-sales/customer-light.png", title: "Customer Intelligence", caption: "Customer acquisition cost, lifetime value tiers, repeat purchase rates, and churn risk." },
      { url: "/assets/projects/enterprise-sales/product-dark.png", lightUrl: "/assets/projects/enterprise-sales/product-light.png", title: "Product Performance", caption: "SKU profitability matrix, category margin analysis, and inventory turnover velocity." },
      { url: "/assets/projects/enterprise-sales/location-dark.png", lightUrl: "/assets/projects/enterprise-sales/location-light.png", title: "Location & Operations", caption: "Geographic sales heatmaps, fulfillment center shipping turnaround, and delivery SLAs." },
      { url: "/assets/projects/enterprise-sales/review-dark.png", lightUrl: "/assets/projects/enterprise-sales/review-light.png", title: "Returns & Review Analysis", caption: "Product return rates, customer satisfaction sentiment, and return reason attribution." }
    ],
    highlights: [
      "Created dual executive theme palettes (Dark & Light mode) designed in Figma and implemented in Power BI.",
      "Modeled commercial operations across revenue, product performance, location logistics, and review feedback.",
      "Engineered DAX measures for dynamic time-intelligence and target variance tracking."
    ],
    problem: "Commercial leadership required an executive-ready sales dashboard combining revenue pacing, logistics operations, SKU margins, and review analytics.",
    approach: "Constructed a relational star schema surfaced through an executive Power BI experience with dynamic dark/light interface options."
  },

  {
    id: "real-estate-intelligence",
    number: "07",
    title: "Real Estate Intelligence",
    category: "Real Estate Intelligence / Business Intelligence",
    domain: "Real Estate",
    shortDescription: "Real estate business intelligence platform analyzing properties, transactions, days on market (DOM), listing channels, agent conversion, and buyer affordability.",
    description: "A broad real-estate business intelligence platform covering properties, transactions, buyers, affordability, and agents. Synthesizes listing channels, days on market, price per square foot, and rental yields into executive scorecards.",
    featured: true,
    year: "2024",
    technologies: ["Power BI", "DAX", "Power Query", "Excel", "Data Modeling"],
    github: null,
    live: "https://app.powerbi.com/view?r=eyJrIjoiMjRjZWRiYmItNGNlMC00MDA1LTkxY2YtNmMwMmY5MmUyMjhmIiwidCI6IjRhNzhmOWQwLWFiZGUtNDBjNC1hMDg4LTBiOTg5NTk5M2M0YSJ9",
    private: false,
    presentationType: "dashboard",
    metrics: [
      { label: "Focus Areas", value: "Properties & DOM" },
      { label: "Modeling Engine", value: "Power BI & DAX" },
      { label: "Analytics Scope", value: "Yield & Affordability" },
      { label: "Performance", value: "Agent Conversion" }
    ],
    pages: [
      "Main Overview",
      "Property Types & Affordability",
      "Days on Market & Listing Heatmap",
      "Agent Seniority & Conversion",
      "Market Temperature & Yield"
    ],
    assets: [
      { url: "/assets/projects/real-estate/Home.png", title: "Home" },
      { url: "/assets/projects/real-estate/real-estate-1.png", title: "Main Overview", caption: "Overview dashboard of property transactions, average days on market, and sales revenue." },
      { url: "/assets/projects/real-estate/real-estate-2.png", title: "Property Types & Affordability", caption: "Analysis of property types, price per square foot, rental yield, and mortgage affordability." },
      { url: "/assets/projects/real-estate/real-estate-3.png", title: "Days on Market & Heatmap", caption: "Listing heatmap, average DOM, and listing channel distribution." },
      { url: "/assets/projects/real-estate/real-estate-4.png", title: "Agent Performance & Conversion", caption: "Agent seniority analysis, conversion rates, and transaction volume." },
      { url: "/assets/projects/real-estate/real-estate-5.png", title: "Market Temperature & Timing", caption: "Market temperature indicators, buyer analysis, and revenue timing." }
    ],
    highlights: [
      "Engineered DAX measures for dynamic Days on Market (DOM) tracking and property segmentation.",
      "Visualized listing channel performance and price per square foot across regional categories.",
      "Structured buyer affordability and rental yield metrics into interactive Power BI dashboards."
    ],
    problem: "Real estate brokerages require clear visibility across disparate listings, transaction channels, and agent conversion dynamics to evaluate market health.",
    approach: "Constructed a normalized data model and interactive Power BI dashboard tracking property inventory, pricing tiers, and agent performance."
  },

  {
    id: "propera-real-estate",
    number: "08",
    title: "PROPERA — Real Estate Analytics",
    category: "Real Estate Market Intelligence",
    domain: "Real Estate",
    shortDescription: "Real estate market intelligence dashboard analyzing 5,000 listings (2,955 for sale, 2,045 on rent), €3.1bn sales revenue, €89.8M rental revenue, and 6.76% rental yield.",
    description: "A property intelligence system tracking listing dynamics across sales and rental markets. Features analysis across 5,000 total listings (€3.1bn sales revenue, €89.8M rental revenue, avg price/SQM €3.15K, price growth 11.15%, avg sale price €1.05M, and rental yield 6.76%) filterable by property type, furnishing, energy ratings, and geography.",
    featured: true,
    year: "2024",
    technologies: ["Power BI", "DAX", "Market Analytics", "Real Estate Economics"],
    github: null,
    live: "https://app.powerbi.com/view?r=eyJrIjoiM2Q3OTZiMzAtMTgxNi00Y2IyLTkwYmEtNzUxNmZhZjhiMTkzIiwidCI6IjRhNzhmOWQwLWFiZGUtNDBjNC1hMDg4LTBiOTg5NTk5M2M0YSJ9",
    private: false,
    presentationType: "dashboard",
    metrics: [
      { label: "Total Listings", value: "5,000 (2,955 Sale / 2,045 Rent)" },
      { label: "Sales Revenue", value: "€3.1bn (Rent: €89.8M)" },
      { label: "Avg Price / SQM", value: "€3.15K (Growth: 11.15%)" },
      { label: "Avg Sale / Yield", value: "€1.05M / 6.76% Yield" }
    ],
    pages: [
      "Market Summary",
      "Property View"
    ],
    assets: [{ url: "/assets/projects/propera/Home.png", title: "Home" },
      { url: "/assets/projects/propera/propera-1.png", title: "Market Summary", caption: "Total listings (5,000), sales revenue (€3.1bn), rental revenue (€89.8M), average price/SQM (€3.15K), and growth rates." },
      { url: "/assets/projects/propera/propera-2.png", title: "Property View", caption: "Listing explorer filterable by property type, furnishing, energy ratings, bedrooms, and price/SQM." }
    ],
    highlights: [
      "Analyzed 5,000 listings (€3.1bn sales revenue, €89.8M rental revenue, and 6.76% rental yield).",
      "Tracked price growth (11.15%), average sale price (€1.05M), and price per square meter (€3.15K).",
      "Engineered multi-attribute slicing across property type, furnishing, energy certification, and geography."
    ],
    problem: "Real estate analysts require cohesive pricing benchmarks, rental yields, and property attribute slicing across mixed sales and rental portfolios.",
    approach: "Designed a 2-stage Power BI intelligence dashboard visualizing market summary metrics and property-level views."
  },

  {
    id: "hr-workforce-attrition",
    number: "09",
    title: "HR Workforce & Attrition Intelligence",
    category: "HR Analytics / Workforce Intelligence",
    domain: "HR",
    shortDescription: "Workforce analytics platform evaluating employee headcount, department attrition risk, salary impact, training efficiency, satisfaction, and retention strategies.",
    description: "An HR workforce intelligence and retention strategy platform. Analyzes training and performance relationships, departmental attrition risk, compensation dynamics, employee satisfaction, overtime, travel, and tenure patterns.",
    featured: true,
    year: "2024",
    technologies: ["Power BI", "DAX", "Power Query", "HR Analytics"],
    github: null,
    live: "https://app.powerbi.com/view?r=eyJrIjoiNDgzZDk3Y2YtYmYxNC00ZjBiLWJlN2ItZWZhNDYzMjk1YmViIiwidCI6IjRhNzhmOWQwLWFiZGUtNDBjNC1hMDg4LTBiOTg5NTk5M2M0YSJ9",
    private: false,
    presentationType: "dashboard",
    metrics: [
      { label: "Analysis Areas", value: "Workforce & Attrition" },
      { label: "Risk Evaluation", value: "Department Level" },
      { label: "Key Dimensions", value: "Salary, Tenure & L&D" },
      { label: "Strategy Focus", value: "Retention Planning" }
    ],
    pages: [
      "Overview",
      "Performance",
      "Salary & Compensation",
      "Attrition & Retention",
      "Headcount & Tenure",
      "Training Efficiency",
      "Department Risk",
      "Conclusion & Strategy"
    ],
    assets: [
      { url: "/assets/projects/hr-analytics/Home.png", title: "Home"},
      { url: "/assets/projects/hr-analytics/hr-1.png", title: "Workforce Overview", caption: "Headcount distribution, department breakdown, and tenure profiles." },
      { url: "/assets/projects/hr-analytics/hr-2.png", title: "Attrition Analysis", caption: "Turnover trends evaluated across departments, job roles, and experience tiers." },
      { url: "/assets/projects/hr-analytics/hr-3.png", title: "Salary & Pay Equity", caption: "Compensation distribution and salary relationships with employee turnover." },
      { url: "/assets/projects/hr-analytics/hr-4.png", title: "Training Efficiency", caption: "Training investments mapped against employee performance ratings." },
      { url: "/assets/projects/hr-analytics/hr-5.png", title: "Departmental Risk Profiling", caption: "Department-level turnover risk, overtime demands, and work travel impact." },
      { url: "/assets/projects/hr-analytics/hr-6.png", title: "Employee Satisfaction", caption: "Work environment satisfaction, job involvement, and work-life balance feedback." },
      { url: "/assets/projects/hr-analytics/hr-7.png", title: "Manager Influence & Tenure", caption: "Attrition patterns evaluated against manager tenure and promotion intervals." },
      { url: "/assets/projects/hr-analytics/hr-8.png", title: "Retention Strategy", caption: "Summary findings and data-driven workforce retention recommendations." }
    ],
    highlights: [
      "Evaluated department-level attrition risks alongside compensation and overtime factors.",
      "Analyzed training efficiency and employee performance across diverse workforce cohorts.",
      "Formulated visual executive summaries connecting manager influence with employee retention."
    ],
    problem: "Organizations require comprehensive visibility into workforce flight risks, compensation equity, and employee satisfaction to build effective retention strategies.",
    approach: "Synthesized workforce records, payroll benchmarks, and satisfaction survey data into an 8-page Power BI analytical suite."
  },

  {
    id: "aiml-academic-performance",
    number: "10",
    title: "AIML Academic Performance Analytics Dashboard",
    subtitle: "Real-World AIML + CS-DS Academic Analytics",
    category: "Academic & Institutional Intelligence",
    domain: "Academic & Institutional",
    shortDescription: "Real-world academic intelligence system joining AIML & CS-DS departmental records across 157 students and 1,042 records. Engineered an ETL pipeline from raw unstructured CSV exports to structured Excel, staged in PostgreSQL via PgAdmin4, and surfaced through a 5-page Power BI executive suite.",
    description: "A real-world academic intelligence system built from unstructured institutional records. Academic CSV data was transformed into structured Excel datasets, cleaned and validated, stored in PostgreSQL through PgAdmin4, and modeled into an interactive Power BI reporting system. The dashboard analyzes 157 students, 1,042 academic records, 51 teachers and 68 subjects across Sem I–VII, with detailed CGPA, SGPA, pass-rate, backlog, subject, teacher and section-level analysis.",
    featured: true,
    year: "2024",
    technologies: ["Power BI", "DAX", "Power Query", "Excel", "PostgreSQL", "PgAdmin4", "SQL", "ETL", "Data Cleaning", "Data Modeling", "Academic Analytics", "Data Visualization"],
    github: "https://github.com/data-analyst-harsh-soni/student-analytics",
    live: "https://app.powerbi.com/view?r=eyJrIjoiMjRjZWRiYmItNGNlMC00MDA1LTkxY2YtNmMwMmY5MmUyMjhmIiwidCI6IjRhNzhmOWQwLWFiZGUtNDBjNC1hMDg4LTBiOTg5NTk5M2M0YSJ9",
    alternateLive: "https://app.powerbi.com/view?r=eyJrIjoiMGY5NzM0YWItMDFkZi00MWZjLWFkNjQtOTZlMjkxN2JmMGY4IiwidCI6IjRhNzhmOWQwLWFiZGUtNDBjNC1hMDg4LTBiOTg5NTk5M2M0YSJ9",
    private: true,
    isConfidentialDataset: true,
    confidentialityNotice: "Private / Confidential Dataset — underlying institutional data not publicly distributed.",
    presentationType: "dashboard",
    metrics: [
      { label: "Cohort Scale", value: "157 Students" },
      { label: "Academic Records", value: "1,042 Records" },
      { label: "Subject Pass Rate", value: "96.5%" },
      { label: "Average CGPA", value: "6.87 (Max 8.89)" }
    ],
    pages: [
      "Academic Performance Overview",
      "Semester-wise Deep Dive",
      "Student Performance Tracker",
      "Subject & Teacher Analysis",
      "Insights & Key Findings"
    ],
    assets: [{ url: "/assets/projects/aiml/Home.png", title: "Home"},
      { url: "/assets/projects/aiml/S1.png", title: "Academic Performance Overview", caption: "Batch 2022–26 overview: 157 students, 1,042 records, 96.5% pass rate, CGPA progression across Sem I–VII, and grade distributions (PII masked)." },
      { url: "/assets/projects/aiml/S2.png", title: "Semester-wise Deep Dive", caption: "Semester difficulty breakdown, pass vs fail analysis, backlog identification (BT202-T Maths II 69.3% fail rate), and section comparisons (PII masked)." },
      { url: "/assets/projects/aiml/S3.png", title: "Student Performance Tracker", caption: "Individual student telemetry, CGPA vs SGPA trends, section leaderboards (AIML-1 vs AIML-2), and performance tracking (PII masked)." },
      { url: "/assets/projects/aiml/S4.png", title: "Subject & Teacher Analysis", caption: "Faculty evaluation matrix across 51 teachers and 68 subjects, theory vs practical distributions, and departmental performance." },
      { url: "/assets/projects/aiml/S5.png", title: "Insights & Key Findings", caption: "High-level strategic insights: semester turnaround trends, critical curriculum bottlenecks, and retention analytics." }
    ],
    highlights: [
      "CSV → Excel structuring: Converted unstructured academic CSV files into structured Excel datasets.",
      "Excel data cleaning and validation: Sanitized nulls, normalized grading scales, and validated records.",
      "PostgreSQL data storage: Stored structured academic data in PostgreSQL schemas managed via PgAdmin4.",
      "PgAdmin4 / SQL querying: Joined relevant AIML and CS-DS academic records for unified departmental analysis.",
      "Power BI data modeling: Built an interactive 5-page executive reporting system with star schema modeling.",
      "DAX calculations: Developed custom measures for CGPA progression, SGPA, pass rates, backlogs, and section KPIs.",
      "Semester-wise performance analysis across Sem I–VII and student-level tracking.",
      "Subject & teacher analysis across 51 teachers and 68 subjects.",
      "AIML-1 vs AIML-2 comparison and academic bottleneck identification.",
      "Preserved confidentiality with institutional PII masking across portfolio screens."
    ],
    problem: "Raw academic evaluation records were distributed across unstructured, disjointed CSV files with inconsistent formatting, missing semester values, and departmental silos between AIML and CS-DS cohorts. Faculty leadership needed a clean, unified data warehouse and BI interface to analyze academic bottlenecks, backlog trends, and teacher grading distributions without compromising student privacy.",
    approach: "Engineered a robust real-world data pipeline: Unstructured CSV Ingestion → Structured Excel Transformation & Cleaning → PostgreSQL Storage via PgAdmin4 (relational joins across AIML & CS-DS datasets) → Power BI Semantic Layer with custom DAX calculations → Interactive 5-page dashboard."
  },

  {
    id: "cs-ds-academic-performance",
    number: "11",
    title: "CS-DS Academic Performance Analytics Dashboard",
    category: "Academic Intelligence / Institutional Analytics",
    domain: "Academic & Institutional",
    shortDescription: "Institutional performance analytics dashboard analyzing 83 engineering students, faculty grading distribution, subject pass rates (97.3%), and semester-by-semester CGPA trends with privacy-safe data handling.",
    description: "A real-world institutional intelligence dashboard engineered for academic leadership using PostgreSQL, PgAdmin4, and Power BI. Evaluates course pass rates, faculty performance indicators, and individual semester progress across 83 students and 452 records while strictly safeguarding student privacy.",
    featured: false,
    year: "2024",
    technologies: ["PostgreSQL", "PgAdmin4", "Power BI", "DAX", "Excel", "Institutional Analytics"],
    github: null,
    live: "https://app.powerbi.com/view?r=eyJrIjoiMGY5NzM0YWItMDFkZi00MWZjLWFkNjQtOTZlMjkxN2JmMGY4IiwidCI6IjRhNzhmOWQwLWFiZGUtNDBjNC1hMDg4LTBiOTg5NTk5M2M0YSJ9",
    alternateLive: "https://app.powerbi.com/view?r=eyJrIjoiNWRhNzhiNjYtM2YxMy00NDkwLWFlN2QtODExZGE3MmY5NjM2IiwidCI6IjRhNzhmOWQwLWFiZGUtNDBjNC1hMDg4LTBiOTg5NTk5M2M0YSJ9",
    private: true,
    isConfidentialDataset: true,
    confidentialityNotice: "Private / Confidential Dataset — underlying institutional data not publicly distributed.",
    presentationType: "dashboard",
    metrics: [
      { label: "Cohort Size", value: "83 Students" },
      { label: "Academic Records", value: "452 Records" },
      { label: "Subject Pass Rate", value: "97.3%" },
      { label: "Average CGPA", value: "6.98 (Max 8.52)" }
    ],
    pages: [
      "Academic Performance Overview",
      "Institutional Insights & Findings",
      "Subject & Faculty Analysis",
      "Student Performance Tracker",
      "Semester-wise Deep Dive"
    ],
    assets: [
      { url: "/assets/projects/academic-performance/Home.png", title: "Home" },
      { url: "/assets/projects/academic-performance/academic-1.png", title: "Academic Performance Overview", caption: "Cohort CGPA distribution, total records (452), pass rate (97.3%), and grade bands." },
      { url: "/assets/projects/academic-performance/academic-2.png", title: "Institutional Insights & Findings", caption: "Correlation between internal assessment scores and end-semester university exam performance." },
      { url: "/assets/projects/academic-performance/academic-3.png", title: "Subject & Faculty Analysis", caption: "Departmental subject pass rates, average marks scored, and teacher grading variance." },
      { url: "/assets/projects/academic-performance/academic-4.png", title: "Student Performance Tracker", caption: "Individual performance trajectory across semesters (presented with privacy-safe masking)." },
      { url: "/assets/projects/academic-performance/academic-5.png", title: "Semester-wise Deep Dive", caption: "Semester difficulty indexing and student progression across 8 academic terms." }
    ],
    highlights: [
      "Structured relational institutional database in PostgreSQL queried via PgAdmin4 and connected to Power BI.",
      "Identified critical subjects with high grade deviation to inform targeted tutorial interventions.",
      "Strictly applied PII masking and privacy preservation across public presentation screens."
    ],
    problem: "Academic departments needed a unified reporting system to track multi-semester performance trends, course difficulty, and faculty score variance.",
    approach: "Created a normalized PostgreSQL schema and Power BI analytical dashboard with privacy-compliant visualization layers."
  },

  {
    id: "dbt-snowflake-analytics",
    number: "12",
    title: "dbt + Snowflake Analytics Engineering Project",
    category: "Analytics Engineering",
    domain: "Analytics Engineering",
    shortDescription: "Analytics engineering foundation establishing staging transformations, fact/dimension modeling, and automated data testing using dbt, Snowflake, and SQL.",
    description: "An analytics engineering repository establishing raw staging, fact and dimension models, and automated tests using dbt and Snowflake. Implements stg_customers, stg_orders, stg_payment, fact_orders, dim_customers, and calculates lifetime value, order counts, and daily revenue metrics.",
    featured: false,
    year: "2024",
    technologies: ["dbt", "Snowflake", "SQL", "Jinja", "Data Quality", "Dimensional Modeling"],
    github: "https://github.com/data-analyst-harsh-soni/dbt-snowflake-analytics-project",
    live: null,
    private: false,
    presentationType: "architecture",
    metrics: [
      { label: "Data Warehouse", value: "Snowflake" },
      { label: "Transformation Engine", value: "dbt Core" },
      { label: "Data Models", value: "Staging, Fact & Dimension" },
      { label: "Testing Suite", value: "Schema & Custom Tests" }
    ],
    highlights: [
      "Built structured models: stg_customers, stg_orders, stg_payment, fact_orders, and dim_customers.",
      "Configured automated data tests including not_null, unique, accepted_values, and custom positive-total tests.",
      "Calculated customer lifetime value, first/latest order dates, and daily revenue in SQL."
    ],
    problem: "Raw transactional tables need standardization, dimensional modeling, and automated tests to ensure reliable analytical reporting.",
    approach: "Constructed a layered dbt project on Snowflake executing staging transformations, dimensional star-schema modeling, and quality assertions."
  },

  {
    id: "zomato-sql-analytics",
    number: "13",
    title: "Zomato SQL Analytics Project",
    category: "SQL Business Intelligence",
    domain: "SQL",
    shortDescription: "SQL business intelligence case-study and presentation covering 26 keynote slides, advanced SQL window functions (RANK, DENSE_RANK, LAG), CTEs, customer segmentation, and restaurant metrics.",
    description: "A comprehensive SQL analytics project presented through an executive slide deck. Examines customer transaction lifecycles, order frequencies, dish preferences, customer AOV, peak time slots, cancellations, rider delivery times, and customer segmentation using advanced SQL techniques.",
    featured: false,
    year: "2024",
    technologies: ["Advanced SQL", "PostgreSQL", "Window Functions", "CTEs", "Cohort Analysis", "Business Intelligence"],
    github: "https://github.com/data-analyst-harsh-soni/zomato-sql-analytics-project",
    live: null,
    private: false,
    presentationType: "ppt",
    slideCount: 26,
    metrics: [
      { label: "Presentation Deck", value: "26 Keynote Slides" },
      { label: "SQL Methods", value: "CTEs, Window, Subqueries" },
      { label: "Key Functions", value: "RANK, DENSE_RANK, LAG" },
      { label: "Analysis Domains", value: "AOV, Churn, Peak Hours" }
    ],
    assets: [
      { url: "/assets/projects/zomato-sql/slides/Home.png", title: "Home" },
      { url: "/assets/projects/zomato-sql/slides/Slide_01.png", title: "Slide 01: Project Title & Executive Brief", caption: "Zomato SQL Analytics Project overview and analytical scope." },
      { url: "/assets/projects/zomato-sql/slides/Slide_02.png", title: "Slide 02: Business Context & Objective", caption: "Core business questions and metrics definition." },
      { url: "/assets/projects/zomato-sql/slides/Slide_03.png", title: "Slide 03: Relational Schema Design", caption: "Database entity relationship diagram (Users, Orders, Restaurants, Delivery, Menu)." },
      { url: "/assets/projects/zomato-sql/slides/Slide_04.png", title: "Slide 04: Query 1 — Customer Total Spend", caption: "SQL aggregation measuring lifetime customer spend across restaurants." },
      { url: "/assets/projects/zomato-sql/slides/Slide_05.png", title: "Slide 05: Query 2 — Visit Frequency & Recency", caption: "Window functions tracking user order frequency and days between orders." },
      { url: "/assets/projects/zomato-sql/slides/Slide_06.png", title: "Slide 06: Query 3 — First Purchased Menu Item", caption: "DENSE_RANK() partition by customer to determine initial conversion product." },
      { url: "/assets/projects/zomato-sql/slides/Slide_07.png", title: "Slide 07: Query 4 — Most Purchased Dish Overall", caption: "Aggregated order item counts and restaurant revenue contribution." },
      { url: "/assets/projects/zomato-sql/slides/Slide_08.png", title: "Slide 08: Query 5 — Customer Favorite Dish", caption: "RANK() over order counts per customer to personalize recommendations." },
      { url: "/assets/projects/zomato-sql/slides/Slide_09.png", title: "Slide 09: Query 6 — Membership Impact Analysis", caption: "Analyzing order volume before vs after Zomato Gold membership enrollment." },
      { url: "/assets/projects/zomato-sql/slides/Slide_10.png", title: "Slide 10: Query 7 — Post-Membership First Order", caption: "Conditional window filtering tracking immediate member conversion item." },
      { url: "/assets/projects/zomato-sql/slides/Slide_11.png", title: "Slide 11: Query 8 — Pre-Membership Lifetime Value", caption: "Historical spend aggregation prior to loyalty program signup." },
      { url: "/assets/projects/zomato-sql/slides/Slide_12.png", title: "Slide 12: Query 9 — Reward Points Calculation", caption: "CASE statement calculating cashback and reward points by food category." },
      { url: "/assets/projects/zomato-sql/slides/Slide_13.png", title: "Slide 13: Query 10 — Points Earned in First Year", caption: "Time-windowed reward points allocation logic using INTERVAL arithmetic." },
      { url: "/assets/projects/zomato-sql/slides/Slide_14.png", title: "Slide 14: Query 11 — Transaction Ranking", caption: "Global transaction rank per user across non-member and member states." },
      { url: "/assets/projects/zomato-sql/slides/Slide_15.png", title: "Slide 15: Customer Segmentation Matrix", caption: "RFM (Recency, Frequency, Monetary) SQL segmentation model." },
      { url: "/assets/projects/zomato-sql/slides/Slide_16.png", title: "Slide 16: Churn Risk Identification", caption: "LAG() function identifying customers with declining monthly order counts." },
      { url: "/assets/projects/zomato-sql/slides/Slide_17.png", title: "Slide 17: Restaurant Revenue Pareto Analysis", caption: "Revenue concentration across partner restaurant network." },
      { url: "/assets/projects/zomato-sql/slides/Slide_18.png", title: "Slide 18: Delivery Efficiency & Delay Patterns", caption: "Average delivery time analysis by distance, rider, and peak order hours." },
      { url: "/assets/projects/zomato-sql/slides/Slide_19.png", title: "Slide 19: Month-over-Month Revenue Growth", caption: "MoM and YoY growth percentage calculation using LAG() window functions." },
      { url: "/assets/projects/zomato-sql/slides/Slide_20.png", title: "Slide 20: Cuisine Popularity & Margin Analysis", caption: "High-volume vs high-margin dish distribution." },
      { url: "/assets/projects/zomato-sql/slides/Slide_21.png", title: "Slide 21: Rider Performance Scorecard", caption: "Rider rating, delivery speed, and on-time completion metrics." },
      { url: "/assets/projects/zomato-sql/slides/Slide_22.png", title: "Slide 22: Basket Size & Cross-Selling Insights", caption: "Frequent co-ordered item pairs identified through self-joins." },
      { url: "/assets/projects/zomato-sql/slides/Slide_23.png", title: "Slide 23: Cancellation & Refund Attribution", caption: "Breakdown of order cancellations across preparation and transit stages." },
      { url: "/assets/projects/zomato-sql/slides/Slide_24.png", title: "Slide 24: Executive SQL Summary & Takeaways", caption: "Consolidated business insights for leadership decision-making." },
      { url: "/assets/projects/zomato-sql/slides/Slide_25.png", title: "Slide 25: Optimization & Indexing Strategies", caption: "Query execution plan tuning, composite indexing, and partition pruning." },
      { url: "/assets/projects/zomato-sql/slides/Slide_26.png", title: "Slide 26: Conclusion & Strategic Roadmap", caption: "Summary takeaways for monetization, operations, and retention." }
    ],
    highlights: [
      "Formulated advanced SQL queries utilizing Common Table Expressions (CTEs), DENSE_RANK(), and LAG() windowing.",
      "Analyzed customer loyalty transition dynamics, customer AOV, peak ordering slots, and churn risk.",
      "Extracted and digitized all 26 keynote presentation slides into an interactive browser slideshow."
    ],
    problem: "Understanding customer ordering lifecycles, restaurant performance, and delivery bottlenecks requires structured relational queries and window functions.",
    approach: "Designed complex SQL queries and an executive 26-slide presentation deconstructing commercial, operational, and customer metrics."
  },

  {
    id: "aadhaar-enrollment-analysis",
    number: "14",
    title: "National Aadhaar Enrollment Analysis Dashboard",
    category: "Government / Public Data Analytics / Operational Intelligence",
    domain: "Public Data",
    shortDescription: "Operational analytics dashboard evaluating national Aadhaar enrollment pressure, center productivity, processing times, error rejections, and population age brackets.",
    description: "A public data analytics dashboard examining national identity enrollment operations across Indian states. Focuses on center processing throughput, demographic coverage, rejection rates, peak hours, and operational bottleneck detection.",
    featured: false,
    year: "2024",
    technologies: ["Power BI", "DAX", "Power Query", "Public Analytics", "Operational BI"],
    github: "https://github.com/data-analyst-harsh-soni/UIDAI-Aadhaar-Enrollment-Analysis-Dashboard",
    live: "https://app.powerbi.com/view?r=eyJrIjoiYmIwZWU3Y2ItNDc5OC00Y2U2LTg3MjMtZmU1Yjc4NGI0ZjU0IiwidCI6IjRhNzhmOWQwLWFiZGUtNDBjNC1hMDg4LTBiOTg5NTk5M2M0YSJ9",
    private: false,
    presentationType: "dashboard",
    metrics: [
      { label: "Dashboard Pages", value: "5 Distinct Views" },
      { label: "Slicing Options", value: "State, District, Age & Gender" },
      { label: "Trend Analytics", value: "YoY & PoP Growth" },
      { label: "Operations Focus", value: "Productivity & Peak Hours" }
    ],
    pages: [
      "Executive Summary",
      "National Enrollment Analysis",
      "State-wise Enrollment Pressure",
      "Population & Age-wise Enrollment",
      "Aadhaar Enrollment Activity Snapshot"
    ],
    assets: [
      { url: "/assets/projects/aadhaar-enrollment/Home.png", title: "Home"},
      { url: "/assets/projects/aadhaar-enrollment/aadhaar-1-executive.png", title: "Executive Summary", caption: "National enrollment volume, monthly growth cadence, and overall processing metrics." },
      { url: "/assets/projects/aadhaar-enrollment/aadhaar-2-national.png", title: "National Enrollment Analysis", caption: "State-by-state enrollment comparisons and demographic cohort distribution." },
      { url: "/assets/projects/aadhaar-enrollment/aadhaar-3-pressure.png", title: "State-wise Enrollment Pressure", caption: "Regional demand heatmaps highlighting centers experiencing high enrollment volume." },
      { url: "/assets/projects/aadhaar-enrollment/aadhaar-4-population.png", title: "Population & Age-wise Analysis", caption: "Enrollment coverage across age brackets and gender distribution." },
      { url: "/assets/projects/aadhaar-enrollment/aadhaar-5-activity.png", title: "Enrollment Activity Snapshot", caption: "Operational activity snapshot, peak hours, center productivity, and error/rejection tracking." }
    ],
    highlights: [
      "Visualized state-level operational pressure and center productivity across regions.",
      "Engineered time-series DAX calculations to track Year-over-Year and Period-over-Period trends.",
      "Analyzed demographic adoption trends across age groups, gender slicing, and processing times."
    ],
    problem: "National identity programs require continuous monitoring of center productivity, error rejections, and demographic coverage across states and districts.",
    approach: "Constructed a 5-page Power BI dashboard providing executive summaries, operational drill-throughs, and anomaly tracking."
  },

  {
    id: "motomarket-intelligence",
    number: "15",
    title: "MotoMarket Intelligence — Used Bikes Price Analytics",
    category: "Automotive Market Intelligence",
    domain: "Automotive",
    shortDescription: "Automotive market intelligence dashboard analyzing pre-owned motorcycle prices, model comparisons, mileage depreciation, value scores, and brand performance across major manufacturers.",
    description: "An automotive market intelligence dashboard evaluating price distributions and valuation metrics in the pre-owned motorcycle market. Includes brand selection, model selection, age distribution, price distribution, KM driven distribution, geographic availability, value scores, performance scores, details, compare, and history across brands including Bajaj, Benelli, Ducati, Harley-Davidson, Hero, Honda, Hyosung, Jawa, Kawasaki, KTM, and others.",
    featured: true,
    year: "2024",
    technologies: ["Power BI", "DAX", "Automotive Analytics", "Price Modeling"],
    github: null,
    live: "https://app.powerbi.com/view?r=eyJrIjoiYzg5YzI1YmQtOWNkZC00NGVlLThhZjAtMGMxZjhjNTUyMDI5IiwidCI6IjRhNzhmOWQwLWFiZGUtNDBjNC1hMDg4LTBiOTg5NTk5M2M0YSJ9",
    private: false,
    presentationType: "dashboard",
    metrics: [
      { label: "Dashboard Focus", value: "Used Bikes Price" },
      { label: "Key Dimensions", value: "Age, Price & KM Driven" },
      { label: "Evaluation", value: "Value & Performance Scores" },
      { label: "Brand Coverage", value: "Global & Domestic Brands" }
    ],
    pages: [
      "Used Bikes Price",
      "Model Comparison & Details"
    ],
    assets: [{ url: "/assets/projects/motomarket/Home.png", title: "Home"},
      { url: "/assets/projects/motomarket/1.png"},
      { url: "/assets/projects/motomarket/2.png"},
      { url: "/assets/projects/motomarket/3.png"},
    { url: "/assets/projects/motomarket/4.png"} ],
    highlights: [
      "Analyzed price distribution, age distribution, and KM driven curves across motorcycle brands.",
      "Engineered Value Score and Performance Score metrics for transparent model comparison.",
      "Structured detailed drill-through views covering engine power, mileage, market range, and history."
    ],
    problem: "Secondary motorcycle buyers and dealerships face pricing opacity across varied brands, models, mileage, and vehicle ages.",
    approach: "Constructed an interactive Power BI intelligence platform delivering model comparison, depreciation insights, and value score benchmarks."
  },

  {
    id: "insightviz-web-traffic",
    number: "16",
    title: "InsightViz — Python Web Traffic Analysis",
    category: "Python Analytics / Exploratory Visualization",
    domain: "Python & EDA",
    shortDescription: "Exploratory data analysis framework evaluating web traffic, active users, sessions, event counts, engagement rates, and temporal heatmaps using Python, Pandas, Matplotlib, and Seaborn.",
    description: "An exploratory web analytics pipeline written in Python. Evaluates web traffic, active users, sessions, event counts, engagement rates, engagement times, acquisition channels, traffic heatmaps, user growth, and conversion-related patterns using Pandas and Seaborn.",
    featured: false,
    year: "2024",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter", "EDA", "Web Analytics"],
    github: "https://github.com/data-analyst-harsh-soni/Python-Web-Traffic-Analysis",
    live: null,
    private: false,
    presentationType: "architecture",
    metrics: [
      { label: "Core Stack", value: "Python, Pandas & Seaborn" },
      { label: "Key Dimensions", value: "Traffic, Users & Sessions" },
      { label: "Visualizations", value: "Heatmaps & Growth Curves" },
      { label: "Environment", value: "Jupyter Notebook" }
    ],
    highlights: [
      "Processed web traffic records with Pandas to compute active users, sessions, and engagement rates.",
      "Generated temporal heatmaps in Seaborn identifying peak activity windows across hours and days.",
      "Structured reusable exploratory data analysis workflows in Jupyter notebooks."
    ],
    problem: "Analyzing raw web traffic datasets requires systematic exploratory data analysis to isolate user growth patterns, session engagement, and channel metrics.",
    approach: "Built modular Python analysis scripts leveraging Pandas dataframes and Matplotlib/Seaborn statistical visualizations."
  }
];
