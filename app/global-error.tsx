"use client";

export default function GlobalError({

}: {
    error: Error & { digest?: string };
}) {
    return (
        <html>
            <body>
                <h2>Global error</h2>
            </body>
        </html>
    )
};