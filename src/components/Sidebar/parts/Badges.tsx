import { IconMapPin, IconCode } from "@tabler/icons-react";

function Bagdes() {
    return (
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
                <IconMapPin stroke={2} size={16} className="animate-bounce" />
                <p>Madagascar</p>
            </div>
            <div className="flex items-center gap-1">
                <IconCode stroke={2} size={16} className="animate-pulse" />
                <p>Next.js/Nodejs Developer</p>
            </div>
        </div>
    );
}

export default Bagdes;
