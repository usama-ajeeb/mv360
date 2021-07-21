import React from "react";
import TableContent from "./TableContent";
const InvCliStat = () => {
  return (
    <table className="dashboard-table m-4">
      <thead>
        <tr>
          <th>Status</th>
          <th>Client</th>
          <th>Contact</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <TableContent
          tagName="New Invite"
          tagDate="20/08/2024"
          clientName="Five Brothers"
          contactName="Will Johnson"
          contactNumber="444-222-4242"
          actionText="Accept Invite"
          background="#3fa5c3"
        />
        <TableContent
          tagName="Vetting"
          tagDate="19/12/2024"
          clientName="Guardian"
          contactName="Will Smith"
          contactNumber="444-222-4242"
          actionText="Click Here"
          background="#f9a226"
        />
      </tbody>
    </table>
  );
};
export default InvCliStat;
