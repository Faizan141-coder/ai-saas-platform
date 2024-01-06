import { UserButton } from "@clerk/nextjs"

import MobileSidebar from "@/components/mobile-sidebar"
import { ModeToggle } from "@/components/mode-toggle"

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
        <MobileSidebar />
        <div className="flex w-full justify-end space-x-4 items-center">
          <ModeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>
    </div>
  )
}

export default Navbar