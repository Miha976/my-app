import Brand from "./Brand";
import Links from "./Links";
import LinksWithIcons from "./LinksWithIcons";

export default function Navbar() {
    return(
        <div className="flex justify-between items-center sticky top-0 px-10 py-5 w-full z-20 bg-white">
            <Brand />
            <Links />
            <LinksWithIcons />
        </div>
    )
}