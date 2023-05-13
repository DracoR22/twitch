import Hero from "@/Components/Hero"
import IconBar from "@/Components/IconBar"
import LiveChannels from "@/Components/LiveChannels"
import Navbar from "@/Components/Navbar"
import SideMenu from "@/Components/SideMenu"

export default function Home() {
  return (
    <div>
  <SideMenu/>
    <div className="absolute left-[100px] xl:left-[260px] top-[70px]">
 <Hero/>
 <LiveChannels/>
 <IconBar/>

    </div>

    </div>
  )
}
