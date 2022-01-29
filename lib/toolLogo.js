import { SiGatsby, SiReact, SiCraftcms, SiShopify } from "react-icons/si";

function ToolLogoWrapper({ children }) {
    return <span>{children}</span>;
}

function ToolLogoHandler(toolHandle, index) {
    switch (toolHandle) {
        case "js-gatsby":
            return (
                <ToolLogoWrapper key={index}>
                    <SiGatsby color="#7026B9" />
                </ToolLogoWrapper>
            );
        case "js-react":
            return (
                <ToolLogoWrapper key={index}>
                    <SiReact color="#61dbfb" />
                </ToolLogoWrapper>
            );
        case "cms-craft":
            return (
                <ToolLogoWrapper key={index}>
                    <SiCraftcms color="#e4422b" />
                </ToolLogoWrapper>
            );
        case "shopify":
            return (
                <ToolLogoWrapper key={index}>
                    <SiShopify color="#96bf48" />
                </ToolLogoWrapper>
            );
        default:
            return <></>;
    }
}

export default ToolLogoHandler;
