import { SiGatsby, SiReact, SiCraftcms } from 'react-icons/si'

function ToolLogoWrapper({ children }) {
    return <span className="mr-3 mt-1 text-2xl leading-loose">{children}</span>
}

function ToolLogoHandler(toolHandle) {
    switch (toolHandle) {
        case 'js-gatsby':
            return <ToolLogoWrapper><SiGatsby color="#7026B9" /></ToolLogoWrapper>;
        case 'js-react':
            return <ToolLogoWrapper><SiReact color="#61dbfb" /></ToolLogoWrapper>;
        case 'cms-craft':
            return <ToolLogoWrapper><SiCraftcms color="#e4422b" /></ToolLogoWrapper>;
        default:
            return;
    }

}

export default ToolLogoHandler