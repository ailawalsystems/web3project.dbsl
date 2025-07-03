import { PageLayoutWithBreadcrumbs } from "@/components/page-layout-with-breadcrumbs"

export default function AppFeaturesPage() {
  return (
    <PageLayoutWithBreadcrumbs>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold">App-Centric Features</h1>
        <p className="text-gray-400 mt-2">Explore application-specific security features</p>
      </div>
    </PageLayoutWithBreadcrumbs>
  )
}
