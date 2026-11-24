
"use client";

import { useEffect, useState } from "react";

const links = [
    { label: "HOME", href: "#home" },
  
    { label: "ALL SEASONS", href: "#seasons" },
];

export default function MobileNav() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        function handleEscape(event: KeyboardEvent) {
            if (event.key === "Escape") setOpen(false);
        }

        window.addEventListener("keydown", handleEscape);
        return () =>
            window.removeEventListener("keydown", handleEscape);
    }, []);

    return (
        <div className="hvl-mobile-menu">
            <button
                type="button"
                className={`hvl-menu-toggle ${open ? "is-open" : ""}`}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="hvl-mobile-links"
                onClick={() => setOpen(!open)}
            >
                <span className="hvl-menu-icon">
                    <span />
                    <span />
                    <span />
                </span>
                <span>{open ? "CLOSE" : "MENU"}</span>
            </button>

            {open && (
                <nav
                    id="hvl-mobile-links"
                    className="hvl-mobile-panel"
                    aria-label="Mobile navigation"
                >
                    {links.map((link, index) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                        >
                            <span className="hvl-mobile-link-number">
                                0{index + 1}
                            </span>
                            {link.label}
                            <span className="hvl-mobile-arrow">↗</span>
                        </a>
                    ))}
                    <div className="hvl-mobile-panel-footer">
                        SIX SEASONS COMPLETED • SEASON 7 AWAITS
                    </div>
                </nav>
            )}
        </div>
    );
}
