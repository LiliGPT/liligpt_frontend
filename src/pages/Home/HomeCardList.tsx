import React, { useCallback } from 'react';
import CustomCard from './CustomCard';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { routeMap } from '../../router';

interface CardData {
  bgImageUrl: string;
  label: string;
  redirectTo: string;
}

const cardData: CardData[] = [
  {
    bgImageUrl: 'https://source.unsplash.com/random/300x200?1',
    label: 'Create package.json command',
    redirectTo: routeMap.createPackageJson,
  },
  {
    bgImageUrl: 'https://source.unsplash.com/random/300x200?2',
    label: 'Connect to Database',
    redirectTo: routeMap.createPackageJson,
  },
  {
    bgImageUrl: 'https://source.unsplash.com/random/300x200?3',
    label: 'Create Docker',
    redirectTo: routeMap.createPackageJson,
  },
];

const HomeCardList = () => {

  return (
    <div className="p-4">
      <Grid container spacing={2} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={2}>
            <Link to={card.redirectTo}>
              <CustomCard
                bgImageUrl={card.bgImageUrl}
                label={card.label}
                onClick={() => { }}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomeCardList;
