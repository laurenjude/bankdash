import React from 'react'
import { Box, CssBaseline } from '@mui/material'
import CardOne from '../transaction/CardOne'
import CardTwo from '../transaction/CardTwo'
import RecentTransaction from '../transaction/RecentTransaction'

export default function DashBoardCards() {
  return (
    <div>
      <CssBaseline />
      {/* Container for Cards */}
      <Box
        sx={{
          display: 'flex',
          justifyContent:'space-between',
          flexDirection: { xs: 'column', lg: 'row' }, // Column for mobile, row for larger screens
          alignItems: 'flex-start',
          gap: 2, // Add spacing between elements
        }}
      >
        {/* Horizontal Scrollable Cards */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'row', md: 'row' }, // Row for all screens
            overflowX: {xs:'auto', md:'hidden'}, // Enable horizontal scrolling
            gap:2,// Add spacing between cards
           width:'100%',
           padding: 2, // Add padding around the cards
          }}>
        
          <CardOne />
          <CardTwo />
        </Box>
         {/* RecentTransaction Component */}
         <Box
          sx={{
            width: { xs: '100%', md:'70%' }, // Adjust width for larger screens
            marginTop: { xs: 2, md: 0 }, // Reduce margin on mobile screens
            marginBottom: { xs: 2, md: 0 }, // Reduce margin on mobile screens
          }}
        >
          <RecentTransaction />
        </Box>
      </Box>
    </div>
  )
}
