import { Avatar, Box, Button, Card, Chip, Divider, Modal, Typography } from "@mui/material";
import { Star } from "@mui/icons-material";

export default function UserModal({ user, onClose }) {
    return (
        <Modal
            open={user !== null}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                display: "flex",
                width: "100%",
                padding: 2,
                justifyContent: "center",
                alignItems: "flex-start",
                overflow: "auto",
            }}
        >
            <Card sx={{ display: "flex", flexDirection: "column", gap: 3, width: '100%', maxWidth: 500, padding: 3, borderRadius: 3 }}>
                <Box sx={{ display: "flex", gap: 2 }}>
                    <Avatar src={user.avatar} alt="avatar" sx={{ width: 130, height: 130, objectFit: "contain" }} />
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, justifyContent: 'center' }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{ color: '#1a1a1c', fontSize: 20, fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}>
                            {user.nickname}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#56585e', fontSize: 16, fontFamily: 'Inter, sans-serif' }}>
                            {user.specialty}
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 600, color: '#1a1a1c', fontFamily: 'Outfit, sans-serif', fontSize: 24 }}>
                            {user.price}$
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography gutterBottom component="div" sx={{ color: '#1a1a1c', fontSize: 20, fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}>
                        Experience
                    </Typography>
                    <Divider />
                    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 2 }}>
                        {user.experience.map((ex) => <Chip label={ex} color="primary" variant="outlined" />)}
                    </Box>
                </Box>
                <Box>
                    <Typography gutterBottom component="div" sx={{ color: '#1a1a1c', fontSize: 20, fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}>
                        Qualifications
                    </Typography>
                    <Divider />
                    <Typography variant="body2" sx={{ color: '#56585e', mt: 2, fontSize: 16, fontFamily: 'Inter, sans-serif' }}>
                        {user.qualifications}
                    </Typography>
                </Box>
                <Box>
                    <Typography gutterBottom component="div" sx={{ color: '#1a1a1c', fontSize: 20, fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}>
                        Acheivements
                    </Typography>
                    <Divider />
                    <Box sx={{ gap: 1, paddingX: 2 }}>
                        {user.acheivements.map((acheivement) =>
                            <Typography variant="body2" sx={{ color: '#56585e', mt: 2, fontSize: 16, fontFamily: 'Inter, sans-serif' }} component={'li'}>
                                {acheivement}
                            </Typography>
                        )}
                    </Box>
                </Box>
                <Box>
                    <Typography gutterBottom component="div" sx={{ color: '#1a1a1c', fontSize: 20, fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}>
                        Reviews
                    </Typography>
                    <Divider />
                    <Box sx={{ display: "flex", gap: 2, flexDirection: "column", mt: 2 }}>
                        {user.reviews.map((review) =>
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                <Box sx={{ display: "flex", gap: 1 }}>
                                    <Avatar src={review.avatar} alt="avatar" sx={{ width: 20, height: 20, objectFit: "contain" }} />
                                    <Typography variant="body2" sx={{ color: '#56585e', fontSize: 16, fontFamily: 'Inter, sans-serif' }}>
                                        {review.reviewer}
                                    </Typography>
                                </Box>
                                <Box>
                                    {Array.from({ length: review.rating }).map((_, index) => <Star sx={{ color: "orange" }}/>)}
                                </Box>
                                <Box sx={{paddingX: 2}}>
                                    <Typography variant="body2" sx={{ color: '#56585e', fontSize: 16, fontFamily: 'Inter, sans-serif' }}>
                                        {review.comment}
                                    </Typography>
                                </Box>
                            </Box>
                        )}
                    </Box>
                </Box>
                <Button variant='contained' sx={{ borderRadius: 10, mt: 2 }}>Book</Button>
            </Card>
        </Modal>
    )
}