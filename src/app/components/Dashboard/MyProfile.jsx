import React from "react";
import Box from "./Box";
import PopupMessage from "./PopupMessage";
import Alert from "./Alert";
import StatusTag from "./StatusTag";
import BoxHeader from "./BoxHeader";
import Table from "./Table";
import VendorMsg from "./VendorMsg";

const MyProfile = ({}) => {
  return (
    <div className="is-flex is-justify-content-space-between m-5">
      <div style={{ width: "32%" }}>
        <Box
          height={200}
          headerContent={<BoxHeader title="Job Opportunities" />}
          mainContent={<PopupMessage />}
        />
        <Box
          height={440}
          mainHeight="92%"
          overflow={true}
          headerContent={<BoxHeader title="Alerts" />}
          mainContent={
            <>
              <Alert
                title="Update your profile"
                text="Click to start"
                background="#d9edf7"
                titleColor="#3a87ad"
                textColor="#47a9da"
              />
              <Alert
                title="Contract Expiring"
                text="From XYZ Consultant"
                date="8-01-2020"
                background="#fcf8e3"
                titleColor="#c09853"
                textColor="#c5a164"
                tagBackground="#f89406"
              />
              <Alert
                title="Contract Expiring"
                text="From E.Corporation"
                date="7-02-2020"
                background="#fcf8e3"
                titleColor="#c09853"
                textColor="#c5a164"
                tagBackground="#f89406"
              />
              <Alert
                title="Contract Expiring"
                text="From Microsoft LLC"
                date="11-04-2020"
                background="#fcf8e3"
                titleColor="#c09853"
                textColor="#c5a164"
                tagBackground="#f89406"
              />
            </>
          }
        />
      </div>
      <div style={{ width: "66%" }}>
        <Box
          height={165}
          headerContent={<BoxHeader title="VendorView360’s Training Center" />}
          mainContent={
            <>
              <StatusTag name="Guardian" number="2" />
              <StatusTag name="Job Tips" number="3" />
              <StatusTag name="General Training" number="3" />
            </>
          }
          footer={true}
        />
        <VendorMsg />
        <Box
          height={230}
          spaceBetween={true}
          headerContent={
            <BoxHeader title="Invitations and Client Statuses" view={true} />
          }
          mainContent={<Table />}
        />
        <Box
          height={220}
          spaceBetween={true}
          headerContent={
            <BoxHeader title="Client Communications" view={true} />
          }
          mainContent={
            <>
              <StatusTag name="Overdue" number="2" />
              <StatusTag name="In progress" number="3" />
              <StatusTag name="Upcoming" number="3" />
              <StatusTag name="Archived" number="3" />
            </>
          }
        />
      </div>
    </div>
  );
};
export default MyProfile;
