import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const CustomCardRoot = styled(Card)({
  position: 'relative',
  backgroundColor: '#000',
  height: '200px',
  width: '100%',
  borderRadius: '10px',
  overflow: 'hidden',
  opacity: '0.5',
  transition: '.3s',
  margin: '.25rem',
  '&:hover': {
    cursor: 'pointer',
    opacity: '1',
    boxShadow: '1px 2px 3px 1px rgba(30,50,70,.5)',
  },
});

const CustomCardMedia = styled(CardMedia)({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  opacity: 0.5,
});

const CustomCardContent = styled(CardContent)({
  position: 'relative',
  // backgroundColor: '#000',
  backgroundImage: 'linear-gradient(rgba(0,0,0,.8) 40%, rgba(0, 0, 0, 0))',
  padding: '10px',
  color: '#fff',
});

interface CustomCardProps {
  bgImageUrl: string;
  label: string;
  onClick: () => void;
}

const CustomCard: React.FC<CustomCardProps> = ({
  bgImageUrl,
  label,
  onClick,
}) => {
  return (
    <CustomCardRoot onClick={onClick}>
      <CustomCardMedia image={bgImageUrl} />
      <CustomCardContent>
        <Typography variant="h5">{label}</Typography>
      </CustomCardContent>
    </CustomCardRoot>
  );
};

export default CustomCard;