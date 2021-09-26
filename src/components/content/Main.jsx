import React, { useEffect, useState } from 'react';
import {
  CircularProgress,
  Container,
  CssBaseline,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import axios from '../../lib/axios';
import Footer from '../common/Footer';

const Main = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const readDynamoDB = async () => {
      setLoading(true);
      const response = await axios.get('/dynamodb/read');
      setUserList(response.data);
      setLoading(false);
    };
    readDynamoDB();
  }, []);

  if (loading) {
    <CircularProgress />;
  }

  return (
    <Container component='main' maxWidth='md'>
      <CssBaseline />
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Footer />
    </Container>
  );
};

export default Main;
