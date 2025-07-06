// import '../globals.css';
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>

                <title>My Next.js App</title>
            </head>
            <body>
                <header>
                    <h1>Welcome to My Next.js App</h1>
                </header>
                <main>{children}</main>
                <footer>
                    <p>&copy; 2023 My Next.js App</p>
                </footer>
            </body>
        </html>
    )
}