import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { motion } from "framer-motion";

export default function UserCard({ user, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      >
      <Card sx={{ width: 345, height: 500, display: 'flex', flexDirection: 'column', borderRadius: 0, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
        <CardMedia
          sx={{ height: 300, width: '100%', objectFit: 'cover' }}
          image={user.avatar}
          title="avatar"
        />
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'space-between', flex: 1, gap: 2, paddingX: 4 }}>
          <Box>
            <Typography gutterBottom variant="h5" component="div" sx={{ height: 30, textOverflow: 'ellipsis', overflow: 'hidden', cursor: 'pointer', color: '#1a1a1c', fontSize: 20, fontFamily: 'Outfit, sans-serif', fontWeight: 600}} onClick={() => onClick(user)}>
              {user.nickname}
            </Typography>
            <Typography variant="body2" sx={{ color: '#56585e', height: 60, textOverflow: 'ellipsis', overflow: 'hidden', fontSize: 16, fontFamily: 'Inter, sans-serif' }}>
              {user.specialty}
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 600, color: '#1a1a1c', fontFamily: 'Outfit, sans-serif', fontSize: 28 }}>
              {user.price}$
            </Typography>
          </Box>
          <Button variant='contained' sx={{ borderRadius: 10, backgroundColor: '#416bd7' }}>Book</Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
