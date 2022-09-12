import React from "react";
import {
  Card,
  EmailDiv,
  FieldDiv,
  FieldGroup,
  FieldKey,
  FieldValue,
  InfoDiv,
  Name,
  Photo,
  Title,
} from "./styles";

const MemberCard = ({ children, ...restProps }) => {
  return <Card {...restProps}>{children}</Card>;
};

MemberCard.ProfilePhoto = ({ src, ...restProps }) => {
  return <Photo src={src} {...restProps} />;
};

MemberCard.InfoDiv = ({ children, ...restProps }) => {
  return <InfoDiv {...restProps}>{children}</InfoDiv>;
};

MemberCard.FieldDiv = ({ children, ...restProps }) => {
  return <FieldDiv {...restProps}>{children}</FieldDiv>;
};

MemberCard.FieldGroup = ({ children, ...restProps }) => {
  return <FieldGroup {...restProps}>{children}</FieldGroup>;
};

MemberCard.FieldKey = ({ children, ...restProps }) => {
  return <FieldKey {...restProps}>{children}</FieldKey>;
};

MemberCard.FieldValue = ({ children, ...restProps }) => {
  return <FieldValue {...restProps}>{children}</FieldValue>;
};

MemberCard.EmailDiv = ({ children, ...restProps }) => {
  return <EmailDiv {...restProps}>{children}</EmailDiv>;
};

MemberCard.Name = ({ children, ...restProps }) => {
  return <Name {...restProps}>{children}</Name>;
};

MemberCard.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

export default MemberCard;
