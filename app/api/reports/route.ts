import type { NextRequest } from "next/server"

interface SecurityReport {
  id: string
  title: string
  description: string
  date: string
  type: string
  url: string
  status: "draft" | "published" | "archived"
}

const mockReports: SecurityReport[] = [
  {
    id: "1",
    title: "Weekly Security Summary - Week 3",
    description: "Comprehensive overview of security incidents and vulnerabilities discovered this week",
    date: "2024-01-15",
    type: "weekly",
    url: "/reports/weekly-3-2024",
    status: "published",
  },
  {
    id: "2",
    title: "Flash Loan Attack Analysis",
    description: "Detailed analysis of recent flash loan exploits and mitigation strategies",
    date: "2024-01-12",
    type: "incident",
    url: "/reports/flash-loan-analysis",
    status: "published",
  },
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get("type")
    const status = searchParams.get("status")

    let filteredReports = mockReports

    if (type) {
      filteredReports = filteredReports.filter((report) => report.type === type)
    }

    if (status) {
      filteredReports = filteredReports.filter((report) => report.status === status)
    }

    return Response.json({
      success: true,
      data: filteredReports,
      total: filteredReports.length,
    })
  } catch (error) {
    return Response.json({ success: false, error: "Failed to fetch reports" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, description, type } = body

    const newReport: SecurityReport = {
      id: `report-${Date.now()}`,
      title,
      description,
      date: new Date().toISOString().split("T")[0],
      type,
      url: `/reports/${title.toLowerCase().replace(/\s+/g, "-")}`,
      status: "draft",
    }

    return Response.json({
      success: true,
      data: newReport,
      message: "Report created successfully",
    })
  } catch (error) {
    return Response.json({ success: false, error: "Failed to create report" }, { status: 500 })
  }
}
