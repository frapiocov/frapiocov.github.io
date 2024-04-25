export const metadata = {
  title: "frapiocov",
  description: "frapiocov's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
