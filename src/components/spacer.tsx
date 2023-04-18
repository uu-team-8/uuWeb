import styled from "@emotion/styled";

const Spacer = styled("div") < { flex?: string, width?: string, height?: string, minWidth?: string }>`
    flex: ${p => p.flex ?? ((p.height || p.width) ? "unset" : 1)};
    width: ${p => p.width ?? "unset"};
    min-width: ${p => p.minWidth ?? "unset"};
    min-height: ${p => p.height ?? "unset"};
    max-height: ${p => p.height ?? "unset"};
`;

export default Spacer;