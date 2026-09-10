import React, { useState } from 'react';
import { Database, Server, GitBranch, Layers, CheckCircle, ArrowRight, Shield, Activity, BarChart2 } from 'lucide-react';

export default function ArchitectureVisualizer({ project }) {
  const [activeTab, setActiveTab] = useState('diagram');

  // If Netflix Analytics Engineering
  if (project.id === 'enterprise-netflix-dbt') {
    const pipelineSteps = [
      { name: '1. Source Data Lake', tech: 'AWS S3', desc: '6 Raw Tables (MovieLens ratings, tags, movies, users)' },
      { name: '2. Cloud DWH', tech: 'Snowflake', desc: 'Scalable compute & staging databases' },
      { name: '3. dbt Staging', tech: 'dbt Core', desc: '6 Staging models with casting, deduplication & standardization' },
      { name: '4. dbt Intermediate', tech: 'dbt Core', desc: '9 Intermediate models joining entities & metrics' },
      { name: '5. Kimball Core', tech: 'dbt / Star Schema', desc: '4 Dimensions, 3 Facts, 1 Seed, 1 SCD Snapshot' },
      { name: '6. Business Marts', tech: '7 Data Marts', desc: 'Executive, Movie, User, Genre, Recommendation, Content, Releases' },
      { name: '7. BI Semantic Layer', tech: 'Power BI', desc: 'High-performance reporting semantic layer' }
    ];

    const businessMarts = [
      { name: 'Executive Dashboard Mart', desc: 'C-suite performance KPIs, platform gross viewership, and monthly user growth.' },
      { name: 'Movie Analytics Mart', desc: 'Granular title performance, runtime engagement, and release cohort lifetime value.' },
      { name: 'User Analytics Mart', desc: 'Retention curves, active subscriber cohorts, and review sentiment intensity.' },
      { name: 'Genre Analytics Mart', desc: 'Cross-genre audience affinity, saturation metrics, and content gap analysis.' },
      { name: 'Recommendation Analytics', desc: 'Recommendation model hit rates, user discovery velocity, and click-through.' },
      { name: 'Content Performance', desc: 'Watch-time decay curves, binge rates, and catalog churn benchmarks.' },
      { name: 'Movie Releases Optimization', desc: 'Seasonal release timing efficiency and competitive box-office scheduling.' }
    ];

    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-6">
          <div>
            <span className="text-xs font-mono text-blue-600 font-semibold uppercase tracking-wider block">
              Data Pipeline &amp; Lineage Architecture
            </span>
            <h4 className="font-display font-bold text-xl text-slate-900 mt-1">
              AWS S3 &rarr; Snowflake &rarr; dbt Core &rarr; Power BI
            </h4>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('diagram')}
              className={
                'px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ' +
                (activeTab === 'diagram' ? 'bg-blue-600 text-white font-bold shadow-xs' : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200')
              }
            >
              Pipeline Diagram
            </button>
            <button
              onClick={() => setActiveTab('marts')}
              className={
                'px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ' +
                (activeTab === 'marts' ? 'bg-blue-600 text-white font-bold shadow-xs' : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200')
              }
            >
              7 Business Marts
            </button>
          </div>
        </div>

        {activeTab === 'diagram' ? (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {pipelineSteps.slice(0, 4).map((s, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 relative group hover:border-blue-300 transition-all">
                  <div className="text-[10px] font-mono text-blue-600 font-semibold mb-1">{s.tech}</div>
                  <div className="font-display font-bold text-sm text-slate-900 mb-2">{s.name}</div>
                  <div className="text-xs text-slate-600 leading-relaxed">{s.desc}</div>
                </div>
              ))}
            </div>

            <div className="flex justify-center py-1 text-slate-500 font-mono text-xs">
              &rarr; Kimball Modeling &amp; Staged Transformations &rarr;
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {pipelineSteps.slice(4).map((s, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 relative group hover:border-blue-400 transition-all shadow-xs">
                  <div className="text-[10px] font-mono text-blue-700 font-semibold mb-1">{s.tech}</div>
                  <div className="font-display font-bold text-sm text-slate-900 mb-2">{s.name}</div>
                  <div className="text-xs text-slate-600 leading-relaxed">{s.desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-around gap-4 text-center">
              <div>
                <div className="font-mono font-bold text-lg text-blue-600">30</div>
                <div className="text-[10px] font-mono uppercase text-slate-500">dbt Models</div>
              </div>
              <div className="h-8 w-px bg-slate-200 hidden sm:block" />
              <div>
                <div className="font-mono font-bold text-lg text-emerald-600">143</div>
                <div className="text-[10px] font-mono uppercase text-slate-500">Automated Tests</div>
              </div>
              <div className="h-8 w-px bg-slate-200 hidden sm:block" />
              <div>
                <div className="font-mono font-bold text-lg text-violet-600">SCD Type 2</div>
                <div className="text-[10px] font-mono uppercase text-slate-500">Historical Snapshots</div>
              </div>
              <div className="h-8 w-px bg-slate-200 hidden sm:block" />
              <div>
                <div className="font-mono font-bold text-lg text-blue-600">Star Schema</div>
                <div className="text-[10px] font-mono uppercase text-slate-500">Kimball Standards</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {businessMarts.map((mart, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all">
                <div className="flex items-center gap-2 font-display font-bold text-sm text-slate-900 mb-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span>{mart.name}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {mart.desc}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // If dbt + Snowflake Analytics Engineering
  if (project.id === 'dbt-snowflake-analytics') {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <span className="text-xs font-mono text-blue-600 font-semibold uppercase tracking-wider block mb-1">
          Analytics Engineering DAG &amp; Lineage
        </span>
        <h4 className="font-display font-bold text-xl text-slate-900 mb-6">
          Staged Transformations &amp; Dimensional Modeling
        </h4>

        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-xs font-mono text-blue-700 font-semibold mb-2 uppercase">Layer 1: Staging (Raw Standardization)</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-xs text-slate-700">
              <div className="p-2.5 bg-white rounded border border-slate-200">stg_customers.sql</div>
              <div className="p-2.5 bg-white rounded border border-slate-200">stg_orders.sql</div>
              <div className="p-2.5 bg-white rounded border border-slate-200">stg_payment.sql</div>
            </div>
          </div>

          <div className="flex justify-center text-slate-500 font-mono text-xs">&rarr; Staging Joins &amp; Aggregations &rarr;</div>

          <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200">
            <div className="text-xs font-mono text-blue-700 font-semibold mb-2 uppercase">Layer 2: Core Dimension &amp; Fact Tables</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs text-slate-900">
              <div className="p-3 bg-white rounded border border-blue-200 flex flex-col justify-between shadow-xs">
                <span className="font-bold text-blue-700">dim_customers.sql</span>
                <span className="text-[11px] text-slate-600 font-sans mt-1">Customer Lifetime Value (LTV), first order date, latest order date, order count.</span>
              </div>
              <div className="p-3 bg-white rounded border border-blue-200 flex flex-col justify-between shadow-xs">
                <span className="font-bold text-blue-700">fact_orders.sql</span>
                <span className="text-[11px] text-slate-600 font-sans mt-1">Order status, transaction amount, payment method, date dimensions.</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-600">Automated Test Assertions:</span>
            <span className="text-emerald-600 font-semibold">not_null &rarr; unique &rarr; accepted_values &rarr; relationships</span>
          </div>
        </div>
      </div>
    );
  }

  // If InsightViz Python Web Traffic Analysis
  if (project.id === 'insightviz-web-traffic') {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <span className="text-xs font-mono text-blue-600 font-semibold uppercase tracking-wider block mb-1">
          Python Exploratory Data Analysis Architecture
        </span>
        <h4 className="font-display font-bold text-xl text-slate-900 mb-6">
          Web Traffic, Cohorts &amp; Channel Segmentation
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="font-display font-bold text-sm text-slate-900 mb-1">Traffic Ingestion &amp; Cleaning</div>
            <p className="text-xs text-slate-600 leading-relaxed font-mono">
              Pandas vectorization to parse server logs, normalize user agent strings, and filter automated crawler noise.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="font-display font-bold text-sm text-slate-900 mb-1">Engagement Depth Metrics</div>
            <p className="text-xs text-slate-600 leading-relaxed font-mono">
              Session duration distributions, pageviews per visit, bounce probability, and conversion funnels.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="font-display font-bold text-sm text-slate-900 mb-1">Temporal Heatmaps</div>
            <p className="text-xs text-slate-600 leading-relaxed font-mono">
              Seaborn matrix heatmaps correlating Day-of-Week vs Hour-of-Day to optimize campaign release schedules.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="font-display font-bold text-sm text-slate-900 mb-1">Acquisition Channel ROI</div>
            <p className="text-xs text-slate-600 leading-relaxed font-mono">
              Organic search vs referral vs direct engagement curves and active user retention rates.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
