import { useState, useEffect } from "react";

import { FloatButton, Drawer, Alert } from "antd";
import { UpOutlined } from "@ant-design/icons";

import Blank from "./components/Blank";
import { StyledAlert, StyledContainer, StyledBlankContainer } from "./components/styled";

const App = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [width, setWidth] = useState(20);
	const [line, setLine] = useState(100);
	const [cursor, setCursor] = useState(0);

	const [alertVisible, setAlertVisible] = useState(false);

	const [text, setText] = useState(Array.from({ length: 15000 }, () => ""));

	useEffect(() => {
		const resizeListener = () => {
			if (window.innerWidth < 960) {
				setAlertVisible(true);
			} else {
				setAlertVisible(false);
			}
		};
		window.addEventListener("resize", resizeListener);
	});

	return (
		<>
			{
				alertVisible && <StyledAlert banner message="이 사이트는 모바일에서는 잘 작동하지 않으니 컴퓨터를 이용해주시길 바랍니다." type="error" />
			}

			<StyledContainer>
				{[...Array(line).keys()].map(i => (
					<StyledBlankContainer>
						{[...Array(width).keys()].map(j => (
							<Blank focus={false} key={i * 10000 + j} value={text[line * i + j]} set={val => {
								text[line * i + j] = val;
								setCursor(cursor + 1);
							}} />
						))}
					</StyledBlankContainer>
				))}
			</StyledContainer>

			<FloatButton onClick={() => setDrawerOpen(!drawerOpen)} icon={<UpOutlined />} type="primary" style={{ right: 30 }} />
			<Drawer placement="bottom" closable={false} open={drawerOpen} onClose={() => setDrawerOpen(false)}>
				Hi
			</Drawer>
		</>
	);
};

export default App;