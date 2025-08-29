import { Box } from "@mui/material";
import NavMenu from "../components/dashboard/nav-menu";
import { useEffect, useState } from "react";
import { getEducators, getMetors, getCounselors } from "../utils/data";
import CardGroup from "../components/dashboard/card-group";

export default function Dashboard() {
    const [selectedTab, setSelectedTab] = useState('educators');
    const [data, setData] = useState({});

    async function getData() {
        const educators = await getEducators();
        const mentors = await getMetors();
        const counselors = await getCounselors();
        setData({ educators, mentors, counselors });
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <Box sx={{ display: 'flex', gap: 5, padding: 10, alignItems: 'flex-start', '@media (max-width: 600px)': { flexDirection: 'column', alignItems: 'center' } }}>
            <NavMenu selectedTab={selectedTab} onSelectTab={setSelectedTab} />
            {selectedTab === 'educators' && <CardGroup users={data.educators} />}
            {selectedTab === 'mentors' && <CardGroup users={data.mentors} />}
            {selectedTab === 'counselors' && <CardGroup users={data.counselors} />}
        </Box>
    );
}