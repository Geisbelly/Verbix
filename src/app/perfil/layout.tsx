export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return(
    <html lang="pt-br">
      <head>
        <meta 
        name="theme-color"
        content="#2596be"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}