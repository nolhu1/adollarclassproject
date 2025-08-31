import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function UserCard({ user, onClick }) {
  return (
    <Card sx={{ width: 345, height: 500, display: 'flex', flexDirection: 'column', boxShadow: 3, borderRadius: 3 }}>
      <CardMedia
        sx={{ height: 300, width: '100%', objectFit: 'cover' }}
        image={user.avatar}
        title="avatar"
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'space-between', flex: 1, gap: 2, paddingX: 4 }}>
        <Box>
          <Typography gutterBottom variant="h5" component="div" sx={{ height: 30, textOverflow: 'ellipsis', overflow: 'hidden', cursor: 'pointer' }} onClick={() => onClick(user)}>
            {user.nickname}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', height: 60, textOverflow: 'ellipsis', overflow: 'hidden' }}>
            {user.specialty}
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 'bold', fontFamily: 'sans-serif, outfit' }}>
            {user.price}$
          </Typography>
        </Box>
        <Button variant='contained' sx={{borderRadius: 10}}>Book</Button>
      </CardContent>
    </Card>
  );
}
