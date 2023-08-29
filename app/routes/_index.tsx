import type { V2_MetaFunction } from "@remix-run/node";
import { Header } from "~/components/header";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen">
        <h2>
          This is a demo for github{" "}
          <a
            href="https://github.com/shadcn-ui/ui/issues/172"
            className="underline"
          >
            issue #172
          </a>
          <p>
            Please hover your mouse over the navbar and confirm that the
            dropdown does not appear below it's relevant item
          </p>
        </h2>
      </div>
    </>
  );
}
