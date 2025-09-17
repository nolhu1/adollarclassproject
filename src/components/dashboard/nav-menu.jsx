import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { ListItemButton } from '@mui/material';

const style = {
  py: 0,
  width: '100%',
  maxWidth: 200,
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
};

export default function NavMenu({selectedTab, onSelectTab}) {
  return (
    <List sx={style}>
      <ListItemButton selected={selectedTab === 'educators'} onClick={() => onSelectTab('educators')}>
        <ListItemText primary="Educators" />
      </ListItemButton>
      <Divider component="li" />
      <ListItemButton selected={selectedTab === 'mentors'} onClick={() => onSelectTab('mentors')}>
        <ListItemText primary="Mentors" />
      </ListItemButton>
      <Divider component="li" />
      <ListItemButton selected={selectedTab === 'counselors'} onClick={() => onSelectTab('counselors')}>
        <ListItemText primary="Counselors" />
      </ListItemButton>
      <Divider component="li" />
      <ListItemButton selected={selectedTab === 'conversationalists'} onClick={() => onSelectTab('conversationalists')}>
        <ListItemText primary="Conversationalists" />
      </ListItemButton>
      <Divider component="li" />
      <ListItemButton selected={selectedTab === 'trainers/coach'} onClick={() => onSelectTab('trainers/coach')}>
        <ListItemText primary="Trainers/Coach" />
      </ListItemButton>
    </List>
  );
}