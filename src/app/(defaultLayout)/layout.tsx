
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insightify",
  description: "Transform Voice, Images, and Videos into Text",
};

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className="max-w-[1372px] mx-auto md:py-5 md:px-0 px-3">{children}</div>
    </main>
  );
};

export default CommonLayout;
