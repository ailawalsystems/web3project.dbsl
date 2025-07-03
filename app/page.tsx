// app/page.tsx
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-950 text-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-4">Web3 Sentinel</h1>
      <p className="mb-8 max-w-xl text-center text-gray-400">
        A multi-agent platform for blockchain &amp; DeFi security analysis. (Placeholder landing page – replace with
        full design later.)
      </p>
      <Button asChild>
        <a href="/dashboard">Enter Dashboard</a>
      </Button>
    </main>
  )
}
