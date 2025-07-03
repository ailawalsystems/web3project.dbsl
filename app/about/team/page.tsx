import { PageLayoutWithBreadcrumbs } from "@/components/page-layout-with-breadcrumbs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Lead Security Engineer",
      bio: "Former blockchain security researcher with 8+ years in DeFi security",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Sarah Johnson",
      role: "AI/ML Engineer",
      bio: "Specialist in multi-agent systems and machine learning for security applications",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Marcus Rodriguez",
      role: "Blockchain Developer",
      bio: "Full-stack developer with expertise in smart contract security and Web3 protocols",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Dr. Emily Watson",
      role: "Research Director",
      bio: "PhD in Computer Science, published researcher in blockchain security and cryptography",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <PageLayoutWithBreadcrumbs>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Our Team</h1>
        <p className="text-gray-400 mb-8">Meet the experts behind Web3 Sentinel's advanced security systems</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription className="text-emerald-400">{member.role}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageLayoutWithBreadcrumbs>
  )
}
