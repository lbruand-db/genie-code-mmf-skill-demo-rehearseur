---
version: 1
title: MMF Skill Demo — M4 Weekly Forecasting
---

## Section: Data Preparation {#data-prep}

### Annotation: Launch prep-and-clean-data {#launch-prep}
---
timestamp: 1333
color: #4CAF50
autopause: true
---

User types `/prep-and-clean-data` in Genie Code to begin the MMF data preparation workflow.

### Annotation: Interactive Configuration {#interactive-config}
---
timestamp: 33174
color: #2196F3
autopause: true
---

Genie Code asks for use case name, catalog, schema, and forecast brief. User provides: m4, `lucasbruand_catalog.mmfskill_demo`, M4 weekly benchmark — 13-week horizon, univariate.

### Annotation: Table Discovery & Profiling {#table-profiling}
---
timestamp: 80452
color: #FF9800
---

Finds `m4_weekly_train`, profiles it (unique_id, ds, y), and presents column mapping for user confirmation.

### Annotation: Training Table Created {#training-table}
---
timestamp: 140921
color: #FF9800
---

`m4_train_data` created with weekly alignment. Code review flags `CREATE OR REPLACE TABLE` as potentially unsafe; user approves.

### Annotation: Missing Data & Anomaly Analysis {#anomaly-analysis}
---
timestamp: 167964
color: #9C27B0
---

Date spine detects 0 interior gaps across 359 series. IQR anomaly detection finds outliers; 12,836 values capped at 1.5x IQR.

### Annotation: Reproducibility Notebook Generated {#repro-notebook}
---
timestamp: 346286
color: #4CAF50
autopause: true
---

"MMF M4 Data Preparation" reproducibility notebook created from template with all parameters filled in. Data preparation phase complete.

## Section: Provisioning {#provisioning}

### Annotation: Model & Cluster Provisioning {#model-cluster}
---
timestamp: 521476
color: #2196F3
autopause: true
---

User selects 4 local models (AutoArima, AutoETS, AutoTheta, SKTimeProphet) + ChronosBoltSmall. Configures `i3.4xlarge` single-node CPU and `g5.xlarge` GPU clusters.

## Section: Forecast Execution {#execution}

### Annotation: Execution Notebooks Generated {#exec-notebooks}
---
timestamp: 647403
color: #FF9800
---

Three notebooks created: run_local, run_gpu, orchestrator_foundation. Backtesting configured with 3 non-overlapping windows, stride 13.

### Annotation: Jobs Triggered {#jobs-triggered}
---
timestamp: 803252
color: #4CAF50
autopause: true
---

`m4_local_forecasting` and `m4_foundation_forecasting` Databricks Workflow jobs created and launched in parallel.

### Annotation: Recording Ends {#end}
---
timestamp: 819948
color: #E91E63
autopause: true
---

Both jobs RUNNING with tasks PENDING (clusters starting up). Results will write to `m4_scoring` tables upon completion.
