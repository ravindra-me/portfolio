import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container" style={{ padding: "120px 24px" }}>
      <h1 style={{ fontSize: 40 }}>Page not found</h1>
      <p style={{ marginTop: 16 }}>
        This page doesn&apos;t exist. <Link href="/">Go to the homepage</Link>.
      </p>
    </main>
  );
}
