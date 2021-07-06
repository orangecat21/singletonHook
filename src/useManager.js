import { useEffect, useMemo } from "react";

export function useManager(Class) {
    const instance = useMemo(() => new Class(), [Class]);

    useEffect(() => instance.unsubscribe, [instance.unsubscribe]);

    return instance;
}