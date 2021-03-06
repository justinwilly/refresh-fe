import React, { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
// router
import { Link } from "react-router-dom";
import styled from "styled-components";
// components
import Container from "../../../components/atoms/container/container";
import Icon from "../../../components/atoms/icon/icon";
// images
import notifications from "../../../images/profile/notifications.svg";
import settings_cog from "../../../images/profile/settings_cog.svg";

// const BellVector = styled.img`
//   position: absolute;
//   width: 2rem;
//   height: 2rem;
//   left: 28.8rem;
//   top: 2.1rem;
// `;
// const CogVector = styled.img`
//   position: absolute;
//   width: 2rem;
//   height: 2rem;
//   left: 32rem;
//   top: 2.1rem;
// `;

const User = styled.div`
  position: absolute;
  width: 6.4rem;
  height: 6.4rem;
  left: 16rem;
  top: 5.1rem;
`;

const UserAv = styled.img`
  position: absolute;
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
  background: #c4c4c4;
`;

const NameText = styled.p`
  position: absolute;
  width: 37.5rem;
  height: 0.9rem;
  left: 0;
  right: 0;
  top: 13.1rem;
  text-align: center;

  /* font-family: Catamaran;  already set at global*/
  /* font-style: normal; already set for fallback */
  font-weight: 500;
  font-size: 2rem;
  line-height: 0.9rem;
  /* identical to box height, or 9px */

  /* main / TEXT */

  color: #e6e6e6;
`;

const RoleText = styled.p`
  position: absolute;
  width: 6.4rem;
  height: 1.1rem;
  left: 11.8rem;
  top: 15.5rem;

  font-family: Catamaran;
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;
  text-transform: uppercase;
  line-height: 1.1rem;
  /* or 11px */

  display: flex;
  align-items: flex-end;

  /* button / primary color */

  color: #e05cb3;
`;
const PointsText = styled.div`
  position: absolute;
  width: 5.4rem;
  height: 1rem;
  left: 20.2rem;
  top: 15.5rem;

  font-family: Catamaran;
  font-style: normal;
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1rem;
  /* or 10px */

  display: flex;
  /* align-items: flex-end; */
  letter-spacing: 0.065em;

  /* main / menu text */

  color: #b8b7e1;
`;

const LvOneText = styled.p`
  position: absolute;
  width: 10rem;
  height: 1.2rem;
  left: 6.2rem;
  top: 17.9rem;

  font-family: Catamaran;
  font-style: normal;
  font-weight: normal;
  font-size: 1.3rem;
  line-height: 1.2rem;
  /* or 12px */
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.04em;

  /* main / menu text */

  color: #b8b7e1;
`;
const LvTwoText = styled.div`
  position: absolute;
  width: 10rem;
  height: 1.2rem;
  left: 28.7rem;
  top: 17.9rem;

  font-family: Catamaran;
  font-style: normal;
  font-weight: normal;
  font-size: 1.3rem;
  line-height: 1.2rem;
  /* or 12px */

  display: flex;
  align-items: flex-end;
  letter-spacing: 0.04em;

  /* main / menu text */

  color: #b8b7e1;
`;

const MockSlideOne = styled.img`
  position: absolute;
  width: 16rem;
  height: 0.7rem;
  left: 10.7rem;
  top: 18.3rem;
  background: #e0b8d3;
  opacity: 0.6;
  border-radius: 0.3rem;
`;

const MockSlideTwo = styled.div`
  position: absolute;
  width: 5.2rem;
  height: 0.7rem;
  left: 10.7rem;
  top: 18.3rem;
  background: #e05cb3;
  border-radius: 0.3rem;
`;

const ProfileHeader = props => {
  // user context
  const activeUser = useContext(UserContext);
  const userRole = activeUser.user_roles;
  const roleTitle = userRole ? userRole[userRole.length - 1].role : "";
  // set user role
  if (!activeUser.roleTitle && roleTitle) {
    activeUser.setUser({ ...activeUser, roleTitle });
  }
  // const routeToEdit = evt =>{
  //   evt.preventDefault();
  //   props.history.push('/profile-edit');
  // }

  // const routeToDashboard = evt =>{
  //   evt.preventDefault();
  //   props.history.push('/dashboard');
  // }

  return (
    <>
      <Container>
        <Link to="/coming-soon">
          <Icon
            svg={notifications}
            height={2.5}
            width={2.5}
            position={"absolute"}
            top={2.1}
            left={28.8}
          />
        </Link>
        <Link to="/profile-edit">
          <Icon
            svg={settings_cog}
            height={1.9}
            width={1.9}
            position={"absolute"}
            top={2.2}
            left={33.2}
          />
        </Link>
        <User>
          <UserAv src={activeUser.avatar}></UserAv>
        </User>
        <NameText>{activeUser.display_name}</NameText>
        <RoleText>{activeUser.roleTitle}</RoleText>
        <PointsText>150 points</PointsText>
        <LvOneText>Lvl 1</LvOneText>
        <LvTwoText>Lvl 2</LvTwoText>
        <MockSlideOne />
        <MockSlideTwo />
      </Container>
    </>
  );
};

export default ProfileHeader;
