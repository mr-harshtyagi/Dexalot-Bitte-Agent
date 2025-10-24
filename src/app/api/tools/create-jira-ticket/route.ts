import { NextResponse } from "next/server";

// Placeholder interface for Jira ticket creation response
interface CreateJiraTicketResponse {
  id: string;
  key: string;
  self: string;
}

export async function GET(request: Request) {
  try {
    // Change parameters as needed
    const { searchParams } = new URL(request.url);
    const summary = searchParams.get("summary") || "";
    const description = searchParams.get("description") || "";
    const issueType = searchParams.get("issueType") || "Task";
    const projectKey = searchParams.get("projectKey") || "TEST";

    // Replace this URL with your actual Jira API endpoint
    const JIRA_API_URL = "https://your-domain.atlassian.net/rest/api/3/issue";

    // Replace with your actual Jira API token and email
    const JIRA_AUTH = Buffer.from(
      "your-email@example.com:your-api-token"
    ).toString("base64");

    // Sample payload for Jira API
    const payload = {
      fields: {
        project: { key: projectKey },
        summary: summary,
        description: description,
        issuetype: { name: issueType },
      },
    };

    // Placeholder for hitting Jira API
    const response = await fetch(JIRA_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${JIRA_AUTH}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to create Jira ticket" },
        { status: response.status }
      );
    }

    const data: CreateJiraTicketResponse = await response.json();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create Jira ticket" },
      { status: 500 }
    );
  }
}
