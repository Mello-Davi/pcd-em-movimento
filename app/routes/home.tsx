import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Template" },
    { name: "description", content: "React Router template" },
  ];
}

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-3xl font-bold">Project Template</h1>
    </main>
  );
}
