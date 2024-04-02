// import React, { useState } from 'react';
// import { Card, CardContent, Typography, TextField, Button, Grid } from '@mui/material';

// const AddCategoryForm = ({ onCategorySubmit }) => {
//   const [categoryName, setCategoryName] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onCategorySubmit(categoryName);
   
//     setCategoryName('');
//   };

//   return (
//     <Card sx={{ fontSize: '15px', maxWidth: 200, maxHeight: 200 }}>
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '1rem' }}> 
//           Add Category
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             id="categoryName"
//             label="Category Name"
//             variant="outlined"
//             value={categoryName}
//             onChange={(e) => setCategoryName(e.target.value)}
//             required
//             fullWidth
//             margin="dense"
//             sx={{ fontSize: '15px',  }}
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             fullWidth
//             size="large"
//             sx={{ marginTop: '1rem', fontSize: '15px', }} 
//           >
//             Add Category
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   );
// };

// export default AddCategoryForm;


import React, { useState } from 'react';

const AddCategoryForm = ({ onCategorySubmit }) => {
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCategorySubmit(categoryName);
    setCategoryName('');
  };

  return (
    <div style={{ fontSize: '15px', maxWidth: 200, maxHeight: 200 }}>
      <div>
        <h5 style={{ fontSize: '1rem' }}>Add Category</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="categoryName"
            placeholder="Category Name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
            style={{ fontSize: '15px', width: '100%', marginBottom: '8px' }}
          />
          <button
            type="submit"
            style={{ marginTop: '1rem', fontSize: '15px', width: '100%', padding: '8px', backgroundColor: 'blue', color: 'white', border: 'none' }}
          >
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategoryForm;