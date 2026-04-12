# Genie Code MMF Skill Demo

An interactive recorded demo of the **Many Model Forecasting (MMF) skill** in Databricks Genie Code, built with [rehearseur](https://github.com/lbruand/rehearseur) for annotated playback.

The recording walks through the full MMF workflow on the M4 weekly competition dataset (359 series, 13-week forecast horizon):

1. **Data Preparation** (`/prep-and-clean-data`) — table discovery, profiling, missing data analysis, anomaly detection & capping
2. **Provisioning** (`/provision-forecasting-resources`) — model selection (4 local + ChronosBoltSmall), CPU/GPU cluster configuration
3. **Forecast Execution** (`/execute-mmf-forecast`) — notebook generation, backtesting setup, parallel job launch

## Quick Start

```bash
npm install
npm run dev
```

Open the local URL and use the table of contents to navigate between annotated bookmarks, or let it play through.

## Repository Structure

```
genie-code-mmf-skill-demo-rehearseur/
├── src/
│   ├── App.jsx                             # RrwebPlayer with recording and annotations
│   ├── main.jsx                            # React entry point
│   └── index.css                           # Full-screen layout styles
│
└── public/
    ├── m4_local_forecasting.json           # rrweb session recording (25 min)
    └── m4_local_forecasting.annotations.md # 10 annotated bookmarks across 3 sections
```

## Learn More

- [rehearseur](https://github.com/lbruand/rehearseur) — The annotated rrweb playback component
- [rrweb](https://github.com/rrweb-io/rrweb) — Web session recording library
