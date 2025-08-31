import { Box } from "@mui/material";
import NavMenu from "../Components/dashboard/nav-menu";
import { useEffect, useState } from "react";
import { getEducators, getMetors, getCounselors } from "../utils/data";
import CardGroup from "../Components/dashboard/card-group";
import UserModal from "../Components/dashboard/modal";

export default function Dashboard() {
    const [selectedTab, setSelectedTab] = useState('educators');
    const [data, setData] = useState({});
    const [selectedUser, setSelectedUser] = useState(null);

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
            {selectedUser && <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />}
            <NavMenu selectedTab={selectedTab} onSelectTab={setSelectedTab} />
            {selectedTab === 'educators' && <CardGroup users={data.educators} onUserClick={(user) => setSelectedUser(user)} />}
            {selectedTab === 'mentors' && <CardGroup users={data.mentors} onUserClick={(user) => setSelectedUser(user)} />}
            {selectedTab === 'counselors' && <CardGroup users={data.counselors} onUserClick={(user) => setSelectedUser(user)} />}
        </Box>
    );
}