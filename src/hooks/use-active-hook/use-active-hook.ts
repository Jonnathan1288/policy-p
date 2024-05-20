import { useState } from "react"

export const useActiveHook = (status: boolean = false) => {
    const [active, setActive] = useState<boolean>(status);

    const handleToggle = () => setActive(!active);

    return { active, handleToggle };
}