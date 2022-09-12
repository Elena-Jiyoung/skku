import React from "react";
import { MdEmail } from "react-icons/md";

import { MemberCard } from "../../components";
import profile from "../../assets/images/profile.jpg";

const KNSSE = () => {
  const members = [
    {
      name: "Gil Dong Hong",
      title: "Post-doc",
      email: "gildonghong@skku.edu",
    },
    {
      name: "Gil Dong Hong",
      title: "Post-doc",
      email: "gildonghong@skku.edu",
    },
    {
      name: "Gil Dong Hong",
      title: "Post-doc",
      email: "gildonghong@skku.edu",
    },
    {
      name: "Gil Dong Hong",
      title: "Post-doc",
      email: "gildonghong@skku.edu",
    },
    {
      name: "Gil Dong Hong",
      title: "Post-doc",
      email: "gildonghong@skku.edu",
    },
    {
      name: "Gil Dong Hong",
      title: "Post-doc",
      email: "gildonghong@skku.edu",
    },
    {
      name: "Gil Dong Hong",
      title: "Post-doc",
      email: "gildonghong@skku.edu",
    },
    {
      name: "Gil Dong Hong",
      title: "Post-doc",
      email: "gildonghong@skku.edu",
    },
  ];
  return (
    <div
      style={{
        width: "100%",
        margin: "10px auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "4px",
        flex: "1 1 auto",
      }}
    >
      {members.map((member) => (
        <MemberCard>
          <MemberCard.ProfilePhoto src={profile} />
          <MemberCard.InfoDiv>
            <div>
              <MemberCard.Name>{member.name}</MemberCard.Name>
              <MemberCard.Title>{member.title}</MemberCard.Title>
            </div>
            <MemberCard.FieldGroup>
              <MemberCard.FieldDiv>
                <MemberCard.FieldKey>Research Field:</MemberCard.FieldKey>
                <MemberCard.FieldValue>Education</MemberCard.FieldValue>
              </MemberCard.FieldDiv>
              <MemberCard.FieldDiv>
                <MemberCard.FieldKey>Advisor:</MemberCard.FieldKey>
                <MemberCard.FieldValue>Gil Dong Hong</MemberCard.FieldValue>
              </MemberCard.FieldDiv>
            </MemberCard.FieldGroup>
            <MemberCard.EmailDiv>
              <MdEmail />
              <MemberCard.Title>{member.email}</MemberCard.Title>
            </MemberCard.EmailDiv>
          </MemberCard.InfoDiv>
        </MemberCard>
      ))}
    </div>
  );
};

export default KNSSE;
