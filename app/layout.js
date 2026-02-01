
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial", padding: "40px" }}>
        {children}
      </body>
    </html>
  );
}
