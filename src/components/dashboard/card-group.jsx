import { Box } from "@mui/material";
import UserCard from "./user-card";

export default function CardGroup({users, onUserClick}) {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4, animation: 'fade-in 0.5s ease-in-out', '@keyframes fade-in': { from: { transform: 'translateY(20px)', opacity: 0 }, to: { transform: 'translateY(0)', opacity: 1 } }}}>
            {users && users.map((user) => <UserCard user={user} onClick={onUserClick} />)}
        </Box>
    )
}