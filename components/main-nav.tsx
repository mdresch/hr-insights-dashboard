"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MainNav() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className="flex items-center gap-6">
      <nav className="hidden md:flex">
        <ul className="flex space-x-8">
          <li>
            <a href="/" className="hover:text-[#36b6b0] transition-colors">
              Agent Hub
            </a>
          </li>
          <li>
            <a href="/trends" className="hover:text-[#36b6b0] transition-colors">
              HR Trends
            </a>
          </li>
          <li>
            <a href="/evp" className="hover:text-[#36b6b0] transition-colors">
              EVP Analysis
            </a>
          </li>
          <li>
            <a href="/succession" className="hover:text-[#36b6b0] transition-colors">
              Succession Planning
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#36b6b0] transition-colors">
              Insights
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#36b6b0] transition-colors">
              Connect
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-2">
        {searchOpen ? (
          <div className="relative">
            <input
              type="text"
              placeholder="Search insights..."
              className="bg-[#001a40] border border-[#0a3166] rounded-md py-1 px-3 w-[200px] focus:outline-none focus:ring-1 focus:ring-[#36b6b0]"
              autoFocus
              onBlur={() => setSearchOpen(false)}
            />
            <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        ) : (
          <button onClick={() => setSearchOpen(true)}>
            <Search className="h-5 w-5" />
          </button>
        )}

        <Button className="bg-[#0047CC] hover:bg-[#0035a0] text-white ml-4">Become a Client</Button>
      </div>
    </div>
  )
}

