import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const clubs = [
  "Driver",
  "3-Wood",
  "5-Wood",
  "4-Iron",
  "5-Iron",
  "6-Iron",
  "7-Iron",
  "8-Iron",
  "9-Iron",
  "Pitching Wedge",
  "Sand Wedge",
  "Lob Wedge",
  "Putter"
]

export default function Component() {
  const [activeClubs, setActiveClubs] = useState<Set<string>>(new Set())

  const toggleClub = (club: string) => {
    setActiveClubs(prev => {
      const newSet = new Set(prev)
      if (newSet.has(club)) {
        newSet.delete(club)
      } else {
        newSet.add(club)
      }
      return newSet
    })
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Golf Club Selector</CardTitle>
        <CardDescription>Select the clubs available for practice</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {clubs.map((club) => (
            <Button
              key={club}
              variant={activeClubs.has(club) ? "default" : "outline"}
              className={`w-full ${activeClubs.has(club) ? "bg-primary text-primary-foreground" : ""}`}
              onClick={() => toggleClub(club)}
            >
              {club}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}