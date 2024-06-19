import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from './firebaseConfig';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  Button, 
  Typography,
  Box
} from '@mui/material';
import { styled } from '@mui/system';

const StyledTable = styled(Table)({
  minWidth: 650,
});

const StyledTableHead = styled(TableHead)({
  backgroundColor: '#f5f5f5',
});

const StyledTableRow = styled(TableRow)({
  '&:hover': {
    backgroundColor: '#f1f1f1',
  },
});

const ProfilePic = styled('img')({
  borderRadius: '50%',
});

const VehiclePic = styled('img')({
  borderRadius: '10%',
});

const ApproveButton = styled(Button)({
  marginTop: '10px',
});

const Page1: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "rider"));
        const dataList: any[] = [];
        querySnapshot.forEach((doc) => {
          dataList.push({ id: doc.id, ...doc.data() });
        });
        setData(dataList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleApprove = async (id: string) => {
    try {
      const riderRef = doc(db, "rider", id);
      await updateDoc(riderRef, { status: 'approved' });
      setData((prevData) =>
        prevData.map((item) => (item.id === id ? { ...item, status: 'approved' } : item))
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  if (!data.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>Rider Management</Typography>
      <Box mb={2}>
        <Typography variant="body1">This is the content for Page 1.</Typography>
      </Box>
      <TableContainer component={Paper}>
        <StyledTable>
          <StyledTableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Bank Account Number</TableCell>
              <TableCell>Bank Name</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>DOB</TableCell>
              <TableCell>NIN</TableCell>
              <TableCell>Profile Picture</TableCell>
              <TableCell>Vehicle</TableCell>
              <TableCell>Vehicle Photo</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Where and How Would You Deliver</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {data.map((item) => (
              <StyledTableRow key={item.id} onClick={() => navigate(`/rider/${item.id}`)} style={{ cursor: 'pointer' }}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.address}</TableCell>
                <TableCell>{item.bankAccountNumber || 'N/A'}</TableCell>
                <TableCell>{item.bankName || 'N/A'}</TableCell>
                <TableCell>{item.createdAt?.seconds ? new Date(item.createdAt.seconds * 1000).toLocaleDateString() : 'N/A'}</TableCell>
                <TableCell>{item.dob || 'N/A'}</TableCell>
                <TableCell>{item.nin || 'N/A'}</TableCell>
                <TableCell><ProfilePic src={item.profilePicture || 'default_profile.png'} alt="Profile" width="50" /></TableCell>
                <TableCell>{item.vehicle || 'N/A'}</TableCell>
                <TableCell><VehiclePic src={item.vehiclePhoto || 'default_vehicle.png'} alt="Vehicle" width="50" /></TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.whereAndHowWouldYouDeliver || 'N/A'}</TableCell>
                <TableCell>
                  {item.status === 'pending' && (
                    <ApproveButton variant="contained" color="primary" onClick={(e) => { e.stopPropagation(); handleApprove(item.id); }}>
                      Approve
                    </ApproveButton>
                  )}
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </StyledTable>
      </TableContainer>
    </div>
  );
};

export default Page1;
