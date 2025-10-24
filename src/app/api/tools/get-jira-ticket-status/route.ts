import { NextResponse } from "next/server";

// Sample interface for Jira ticket status response
interface JiraTicketStatusResponse {
  key: string;
  status: string;
  summary: string;
  assignee: string;
}

// Replace with your actual Jira API endpoint and authentication
const JIRA_API_URL =
  "https://your-jira-instance.atlassian.net/rest/api/3/issue/{ticketKey}";
const JIRA_AUTH_HEADER = "Basic <your-jira-auth-token>";

export async function GET(request: Request) {
  try {
    // Extract ticket key from query params (placeholder logic)
    // OR user identifier can be used to query tickets active for that user
    const url = new URL(request.url);
    const ticketId = url.searchParams.get("ticketId") || "SAMPLE-123";

    // Placeholder for hitting Jira API
    const response = await fetch(
      JIRA_API_URL.replace("{ticketKey}", ticketId),
      {
        method: "GET",
        headers: {
          Authorization: JIRA_AUTH_HEADER,
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch ticket status from Jira API" },
        { status: response.status }
      );
    }

    // Placeholder: adapt to actual Jira response structure
    const data = await response.json();

    const result: JiraTicketStatusResponse = {
      key: data.key,
      status: data.fields.status.name,
      summary: data.fields.summary,
      assignee: data.fields.assignee?.displayName || "Unassigned",
    };

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get Jira ticket status" },
      { status: 500 }
    );
  }
}
