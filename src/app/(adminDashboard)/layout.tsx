import MyContainer from "@/components/common/MyContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insightify",
  description: "Transform Voice, Images, and Videos into Text",
};

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <MyContainer>{children}</MyContainer>
    </main>
  );
};

export default CommonLayout;
