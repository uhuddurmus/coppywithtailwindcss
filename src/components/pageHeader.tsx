import React from 'react';

const PageHeader = () => {
  const headerStyle = {
    border: '1px solid #ddd',
    color:"blue"
  };

  return (
    <div className="page-header" style={headerStyle}>
      <div className="profile-header">
        <h5 className=" text-blue-600 text-lg font-medium uppercase">Başvurular / Mutfak Elemanı</h5>
      </div>
    </div>
  );
};

export default PageHeader;
