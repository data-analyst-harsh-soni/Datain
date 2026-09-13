export const skills = [
  // CORE ANALYTICS
  {
    id: "sql",
    name: "SQL",
    category: "Core Analytics",
    level: 96,
    description: "Advanced SQL queries, Common Table Expressions (CTEs), window functions (RANK, DENSE_RANK, LAG, LEAD), multi-table JOINs, aggregations, subqueries, and database performance optimization.",
    projectIds: ["zomato-sql-analytics", "enterprise-netflix-dbt", "dbt-snowflake-analytics", "stock-market-prediction", "aiml-academic-performance", "cs-ds-academic-performance", "national-enrollment-intelligence-neis"]
  },
  {
    id: "powerbi",
    name: "Power BI",
    category: "Core Analytics",
    level: 98,
    description: "Enterprise multi-page dashboards, custom DAX measures, star schema modeling, Power Query transformations, dynamic dark/light UI themes, drill-through exploration, and executive scorecards.",
    projectIds: ["real-estate-intelligence", "hr-workforce-attrition", "riskpulse-insurance", "national-enrollment-intelligence-neis", "enterprise-sales-intelligence", "aadhaar-enrollment-analysis", "aiml-academic-performance", "cs-ds-academic-performance", "propera-real-estate", "motomarket-intelligence", "stock-market-prediction", "databuzz-global-competition"]
  },
  {
    id: "dax",
    name: "DAX",
    category: "Core Analytics",
    level: 95,
    description: "Calculated measures, time-intelligence calculations (YTD, MTD, YoY), filter context manipulation (CALCULATE, ALL, FILTER), ranking algorithms, and dynamic KPI variance metrics.",
    projectIds: ["real-estate-intelligence", "hr-workforce-attrition", "riskpulse-insurance", "national-enrollment-intelligence-neis", "enterprise-sales-intelligence", "aadhaar-enrollment-analysis", "aiml-academic-performance", "cs-ds-academic-performance", "propera-real-estate", "motomarket-intelligence", "databuzz-global-competition"]
  },
  {
    id: "powerquery",
    name: "Power Query",
    category: "Core Analytics",
    level: 94,
    description: "M-code transformations, automated ingestion pipelines, data type enforcement, column normalization, pivot/unpivot, and cross-source merging.",
    projectIds: ["real-estate-intelligence", "hr-workforce-attrition", "enterprise-sales-intelligence", "aadhaar-enrollment-analysis", "aiml-academic-performance", "cs-ds-academic-performance", "databuzz-global-competition"]
  },
  {
    id: "excel",
    name: "Microsoft Excel",
    category: "Core Analytics",
    level: 96,
    description: "Advanced spreadsheet modeling, XLOOKUP, Index/Match, Pivot Tables, conditional formatting, schema structuring, and preliminary data hygiene.",
    projectIds: ["aiml-academic-performance", "cs-ds-academic-performance", "real-estate-intelligence"]
  },
  {
    id: "python",
    name: "Python",
    category: "Core Analytics",
    level: 92,
    description: "Analytical programming, exploratory data analysis, pipeline automation, data manipulation with Pandas & NumPy, and data science integration.",
    projectIds: ["stock-market-prediction", "insightviz-web-traffic", "national-enrollment-intelligence-neis", "enterprise-sales-intelligence"]
  },
  {
    id: "pandas",
    name: "Pandas",
    category: "Core Analytics",
    level: 93,
    description: "DataFrames, aggregation pipelines, multi-indexing, handling missing values, time-series frequency conversion, and large-scale dataset manipulation.",
    projectIds: ["stock-market-prediction", "insightviz-web-traffic", "national-enrollment-intelligence-neis"]
  },
  {
    id: "numpy",
    name: "NumPy",
    category: "Core Analytics",
    level: 90,
    description: "N-dimensional array operations, vectorized linear algebra, mathematical modeling, log returns, and high-performance numerical computing.",
    projectIds: ["stock-market-prediction", "insightviz-web-traffic"]
  },

  // DATA ENGINEERING
  {
    id: "etl-pipelines",
    name: "ETL Pipelines",
    category: "Data Engineering",
    level: 94,
    description: "End-to-end Extract, Transform, Load workflows converting raw unstructured CSV/logs into staging tables, clean fact/dimension schemas, and reporting layers.",
    projectIds: ["aiml-academic-performance", "enterprise-netflix-dbt", "dbt-snowflake-analytics", "national-enrollment-intelligence-neis"]
  },
  {
    id: "data-warehousing",
    name: "Data Warehousing",
    category: "Data Engineering",
    level: 92,
    description: "Cloud and relational data warehouse architecture, Kimball dimensional modeling, staging zones, business data marts, and historical snapshotting.",
    projectIds: ["enterprise-netflix-dbt", "dbt-snowflake-analytics", "aiml-academic-performance"]
  },
  {
    id: "star-schema",
    name: "Star Schema Modeling",
    category: "Data Engineering",
    level: 95,
    description: "Designing fact and dimension tables, surrogate keys, snowflake extensions, grain specification, and query performance optimization.",
    projectIds: ["enterprise-netflix-dbt", "enterprise-sales-intelligence", "hr-workforce-attrition", "riskpulse-insurance", "databuzz-global-competition"]
  },
  {
    id: "postgresql",
    name: "PostgreSQL & PgAdmin4",
    category: "Data Engineering",
    level: 93,
    description: "Relational database staging, complex DDL/DML, index optimization, query execution plans, and multi-department dataset relational joins.",
    projectIds: ["aiml-academic-performance", "cs-ds-academic-performance"]
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "Data Engineering",
    level: 91,
    description: "Relational transactional database analysis, window functions, conditional aggregations, and business metrics extraction.",
    projectIds: ["zomato-sql-analytics"]
  },
  {
    id: "data-quality",
    name: "Data Quality & Assertions",
    category: "Data Engineering",
    level: 92,
    description: "Automated schema tests, null checks, unique constraints, referential integrity tests, and continuous data quality validation.",
    projectIds: ["enterprise-netflix-dbt", "dbt-snowflake-analytics", "aiml-academic-performance"]
  },
  {
    id: "data-cleaning",
    name: "Data Cleaning & Prep",
    category: "Data Engineering",
    level: 95,
    description: "Handling missing/inconsistent values, string normalization, deduplication, outlier treatment, and standardized schema mapping.",
    projectIds: ["aiml-academic-performance", "cs-ds-academic-performance", "national-enrollment-intelligence-neis", "insightviz-web-traffic"]
  },

  // DATA SCIENCE & ML
  {
    id: "scikit-learn",
    name: "Scikit-learn",
    category: "Data Science & ML",
    level: 88,
    description: "Machine learning workflows, feature scaling, train/test splitting, cross-validation, regression, classification, and metric evaluation.",
    projectIds: ["stock-market-prediction"]
  },
  {
    id: "statistical-modeling",
    name: "Statistical Modeling",
    category: "Data Science & ML",
    level: 90,
    description: "Hypothesis testing, descriptive statistics, variance analysis, probability distributions, correlation matrices, and trend inference.",
    projectIds: ["stock-market-prediction", "riskpulse-insurance", "insightviz-web-traffic"]
  },
  {
    id: "eda",
    name: "Exploratory Data Analysis (EDA)",
    category: "Data Science & ML",
    level: 95,
    description: "Uncovering underlying data patterns, anomaly detection, distribution profiling, feature correlations, and visual data synthesis.",
    projectIds: ["stock-market-prediction", "insightviz-web-traffic", "hr-workforce-attrition", "aadhaar-enrollment-analysis"]
  },
  {
    id: "ab-testing",
    name: "A/B Testing",
    category: "Data Science & ML",
    level: 87,
    description: "Experimental design, sample size determination, control vs. treatment variant analysis, confidence intervals, and p-value evaluation.",
    projectIds: ["enterprise-sales-intelligence", "insightviz-web-traffic"]
  },
  {
    id: "matplotlib-seaborn",
    name: "Matplotlib & Seaborn",
    category: "Data Science & ML",
    level: 91,
    description: "Custom statistical charts, heatmaps, box plots, violin plots, regression overlays, and publication-grade analytical graphics.",
    projectIds: ["stock-market-prediction", "insightviz-web-traffic"]
  },
  {
    id: "jupyter",
    name: "Jupyter Notebook",
    category: "Data Science & ML",
    level: 94,
    description: "Reproducible analytical experimentation, narrative data storytelling, data transformation scripting, and model prototyping.",
    projectIds: ["stock-market-prediction", "insightviz-web-traffic"]
  },

  // CLOUD & APPLICATION
  {
    id: "aws",
    name: "AWS & Cloud Storage",
    category: "Cloud & Application",
    level: 89,
    description: "AWS S3 object storage for analytical data lakes, bucket policies, Cloud integration with data warehouses, and cloud infrastructure foundations.",
    projectIds: ["enterprise-netflix-dbt"]
  },
  {
    id: "ml-foundations",
    name: "Machine Learning Foundations",
    category: "Cloud & Application",
    level: 89,
    description: "AWS Academy Graduate credentialed in ML foundations, supervised learning algorithms, unsupervised clustering, and evaluation strategies.",
    projectIds: ["stock-market-prediction"]
  },
  {
    id: "big-data",
    name: "Big Data Fundamentals",
    category: "Cloud & Application",
    level: 88,
    description: "Handling high-volume datasets (35M+ records), partitioned queries, distributed analytical storage concepts, and scalable aggregation patterns.",
    projectIds: ["national-enrollment-intelligence-neis", "aadhaar-enrollment-analysis"]
  },
  {
    id: "tableau",
    name: "Tableau",
    category: "Cloud & Application",
    level: 88,
    description: "Interactive visual dashboards, calculated fields, parameter controls, dual-axis charts, and cross-functional business reporting.",
    projectIds: ["enterprise-sales-intelligence"]
  },
  {
    id: "streamlit",
    name: "Streamlit",
    category: "Cloud & Application",
    level: 90,
    description: "Rapid interactive web application development for data products, real-time metric sliders, and model inference frontends.",
    projectIds: ["stock-market-prediction"]
  },
  {
    id: "api-integration",
    name: "API Integration",
    category: "Cloud & Application",
    level: 89,
    description: "RESTful API consumption, data ingestion endpoints, automated JSON parsing, rate-limiting handlers, and data feed pipeline connectivity.",
    projectIds: ["stock-market-prediction", "insightviz-web-traffic"]
  },

  // WORKFLOW
  {
    id: "git-github",
    name: "Git & GitHub",
    category: "Workflow",
    level: 94,
    description: "Version control governance, branching strategies (GitFlow), code reviews, pull requests, semantic versioning, and project tracking.",
    projectIds: ["enterprise-netflix-dbt", "dbt-snowflake-analytics", "stock-market-prediction", "zomato-sql-analytics", "national-enrollment-intelligence-neis", "riskpulse-insurance", "aiml-academic-performance", "cs-ds-academic-performance"]
  },
  {
    id: "stakeholder-communication",
    name: "Stakeholder Communication",
    category: "Workflow",
    level: 95,
    description: "Translating ambiguous commercial and institutional requirements into quantified technical roadmaps, telemetry KPIs, and C-suite reporting.",
    projectIds: ["hr-workforce-attrition", "enterprise-sales-intelligence", "aiml-academic-performance", "riskpulse-insurance"]
  },
  {
    id: "project-management",
    name: "Project Management",
    category: "Workflow",
    level: 92,
    description: "Coordinating multi-person technical teams, milestone tracking, risk mitigation, resource allocation, and ensuring 100% on-time delivery.",
    projectIds: ["aiml-academic-performance", "enterprise-netflix-dbt"]
  }
];
