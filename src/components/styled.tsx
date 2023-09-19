import styled from "styled-components";
import { Input, Alert } from "antd";

export const StyledAlert = styled(Alert)`
    height: 50px;
`

export const StyledContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-top: 10vh;
    margin-bottom: 10vh;

    @media only screen and (min-width: 2560px) {
        width: 2000px;
    }

    @media only screen and (min-width: 1920px) and (max-width: 2559px) {
        width: 1500px;
    }

    @media only screen and (min-width: 1280px) and (max-width: 1919px) {
        width: 1000px;
    }

    @media only screen and (min-width: 960px) and (max-width: 1279px) {
        width: 800px;
    }
`

export const StyledBlankContainer = styled.div`
	height: 50px;
`;

export const StyledBlank = styled(Input)`
	width: 50px;
	height: 50px;
	font-size: 25px;
	text-align: center;
	border-radius: 0px;
`;