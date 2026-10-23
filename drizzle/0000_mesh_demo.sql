CREATE TABLE companies (id TEXT PRIMARY KEY NOT NULL, payload TEXT NOT NULL);
--> statement-breakpoint
CREATE TABLE offers (id TEXT PRIMARY KEY NOT NULL, company_id TEXT NOT NULL REFERENCES companies(id), payload TEXT NOT NULL);
--> statement-breakpoint
CREATE INDEX offers_company_idx ON offers(company_id);
--> statement-breakpoint
CREATE TABLE candidates (id TEXT PRIMARY KEY NOT NULL, payload TEXT NOT NULL);
--> statement-breakpoint
CREATE TABLE salary_benchmarks (offer_id TEXT PRIMARY KEY NOT NULL REFERENCES offers(id), payload TEXT NOT NULL);
--> statement-breakpoint
CREATE TABLE demo_workspaces (id TEXT PRIMARY KEY NOT NULL, payload TEXT NOT NULL, revision INTEGER NOT NULL DEFAULT 0, updated_at TEXT NOT NULL);
--> statement-breakpoint
CREATE TABLE ai_usage (workspace_id TEXT NOT NULL REFERENCES demo_workspaces(id) ON DELETE CASCADE, hour TEXT NOT NULL, requests INTEGER NOT NULL DEFAULT 0, PRIMARY KEY (workspace_id, hour));
