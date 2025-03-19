import MyContainer from "@/components/common/MyContainer";
import { Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Insightify",
  description: "Transform Voice, Images, and Videos into Text",
};

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <MyContainer>{children}</MyContainer>
      <Toaster position="bottom-right" richColors />
    </main>
  );
};

export default CommonLayout;
