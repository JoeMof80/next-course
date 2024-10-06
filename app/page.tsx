"use client";

export default function Home() {
  return (
    <main className="relative h-screen">
      <main>
        <h1 className="font-poppins">Hello World</h1>
        <button
          onClick={async () => {
            import("lodash");
            const _ = (await import("lodash")).default;
            const users = [{ name: "c" }, { name: "b" }, { name: "a" }];

            const sorted = _.orderBy(users, ["name"]);
            console.log(sorted);
          }}
        >
          Show
        </button>
      </main>
    </main>
  );
}
