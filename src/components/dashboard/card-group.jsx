import { Box } from "@mui/material";
import UserCard from "./user-card";

export default function CardGroup({users, onUserClick}) {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
            {users && users.map((user) => <UserCard user={user} onClick={onUserClick} />)}
        </Box>
    )
}