import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { appTheme } from '../../app/theme';

const theme = appTheme;

const Container = styled(Box)(() => ({
  backgroundColor: 'transparent',

}));

const InnerContainer = styled(Box)(() => ({
  borderRadius: theme.spacing(3),
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[200],
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.primary.main}`,
}));

const MessageInput = styled(TextField)(() => ({
  width: '100%',
  marginBottom: theme.spacing(2),
  '& .MuiInputBase-inputMultiline': {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  '& .MuiInputBase-input': {
    borderBottom: 'none',
    boxShadow: 'none',
    '&::placeholder': {
      opacity: 0.5,
    },
  },
  '& .MuiInputBase-root': {
    backgroundColor: 'transparent',
  },
}));

const SendButton = styled(Button)(() => ({
  borderRadius: theme.spacing(3),
}));

function MessageSender() {
  return (
    <Container>
      <InnerContainer>
        <MessageInput
          placeholder="Type your message"
          multiline
          minRows={1}
          maxRows={8}
          variant="standard"
          InputLabelProps={{
            shrink: false,
          }}
        />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          bgcolor={
            theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.secondary.main
          }
          borderRadius={theme.spacing(2)}
          paddingTop={theme.spacing(1)}
          paddingBottom={theme.spacing(1)}
        >
          <SendButton variant="contained" color="primary">
            <SendIcon />
          </SendButton>
        </Box>
      </InnerContainer>
    </Container>
  );
}

export default MessageSender;