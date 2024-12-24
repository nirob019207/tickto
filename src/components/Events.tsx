'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Heart, Share2, MapPin, Clock } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import image1 from '@/assets/light-2515416_1280.jpg';
import image2 from '@/assets/musician-1658887_1280.jpg';
import image3 from '@/assets/concert/Hero1img 1.png'

interface Event {
  id: number
  date: string
  title: string
  titleCn?: string
  venue: string
  time: string
  image: StaticImageData
}

const events: Event[] = [
  {
    id: 1,
    date: '10 May 2025',
    title: 'TRASH «Holy Trip! 精神時光屋»',
    titleCn: '亚洲巡回·马来西亚站',
    venue: 'JioSpace, PJ',
    time: '8:00 PM',
    image: image1
  },
  {
    id: 2,
    date: '12 - 13 Apr 2025',
    title: 'THE SKIN CULTURAL FESTIVAL 2025',
    venue: 'The Landing @ KL Base',
    time: '7:30 AM',
    image: image2
  }
]

export default function Events() {
  const [searchQuery, setSearchQuery] = useState('')
  
  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (event.titleCn && event.titleCn.includes(searchQuery))
  )

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold">Upcoming Shows</h1>
        <div className="flex w-full md:w-auto gap-2">
          <Input
            type="text"
            placeholder="Find your desired artist...."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-[300px]"
          />
          <Button>Search</Button>
        </div>
      </div>

      <div className="space-y-6">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="flex flex-col sm:flex-row gap-4 bg-white rounded-lg overflow-hidden shadow-sm border"
          >
            <div className="sm:w-48 h-48 relative">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 p-4">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="space-y-2">
                  <p className="text-primary font-medium">{event.date}</p>
                  <h2 className="text-xl font-semibold">{event.title}</h2>
                  {event.titleCn && (
                    <p className="text-muted-foreground">{event.titleCn}</p>
                  )}
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground mt-2">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {event.venue}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-col gap-2">
                  <Button variant="ghost" size="icon">
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

