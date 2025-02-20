import { getVisitor, saveVisitor } from "@/services/visitor";
import { useLayoutEffect, useState, useTransition } from "react";
import { IconEye } from "@tabler/icons-react";
import { Badge } from "../ui/badge";

export default function Visitor() {
    const [visitorCount, setVisitorCount] = useState(0);
    const [isPending, startTransition] = useTransition();

    async function onLoad() {
        try {
            const [, visitors] = await Promise.all([
                saveVisitor(),
                getVisitor(),
            ]);
            setVisitorCount(visitors.data?.length || 0);
        } catch (error: unknown) {
            console.error(error);
        }
    }

    useLayoutEffect(() => {
        startTransition(async () => await onLoad());
    }, []);

    return !isPending ? (
        <Badge variant="default">
            <p className="flex items-center gap-1">
                <IconEye stroke={1} size={16} />
                {visitorCount}
            </p>
        </Badge>
    ) : null;
}
