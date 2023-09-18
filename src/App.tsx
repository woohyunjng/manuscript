import { useState } from "react";

import { FloatButton, Drawer } from "antd";
import { UpOutlined } from "@ant-design/icons";

const App = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	return (
		<>
			<FloatButton onClick={() => setDrawerOpen(!drawerOpen)} icon={<UpOutlined />} type="primary" style={{ right: 30 }} />
			<Drawer placement="bottom" closable={false} open={drawerOpen} onClose={() => setDrawerOpen(false)}>
				Hi
			</Drawer>
		</>
	);
};

export default App;