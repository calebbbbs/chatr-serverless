import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import DashLayoutComponent from '../components/DashLayoutComponent'
import '../App.css'
import { UserContext } from '../context/UserContext'
import { Friends } from '../worker/FakeData'

const User = styled.h1`
  position: relative;
  font-style: normal;
  font-weight: 600;
  font-size: 200%;
  margin-left: 2.5em;
  display: flex;
  top: 0.2em;
  margin-top: 0;
  padding: 0;
  right: 0;
  color: #ffffff;
  &:hover {
    cursor: context-menu;
  }
`

const Header = styled.h1`
  position: absolute;
  display: flex;
  font-style: normal;
  font-weight: 700;
  font-size: 300%;
  margin-left: 5em;
  margin-top: 1%;
  color: #ff6b00;
  &:hover {
    cursor: context-menu;
  }
`

const Avatar = styled.img`
  display: block;
  border-radius: 50%;
  position: relative;
  left: 2em;
  top: 2.5em;
  width: 2em;
  height: 2em;
  margin-top: 0;
`
const UnreadAvatar = styled.img`
  display: block;
  border-radius: 50%;
  position: relative;
  left: 2em;
  top: 2.5em;
  width: 2em;
  height: 2em;
  margin-top: 0;
  border: 2px solid #1a8cff;
`

const Messages = styled.p`
  display: flex;
  color: #ffffff;
  position: relative;
  margin-top: 0;
  margin-left: 1em;
  text-overflow: ellipsis;
  font-size: x-large;
  &:hover {
    cursor: context-menu;
  }
`
const Timestamp = styled.p`
  display: flex;
  color: #ffffff;
  position: relative;
  left: 1%;
  bottom: 40%;
  margin-left: 1em;
  text-overflow: ellipsis;
  font-size: small;
  &:hover {
    cursor: context-menu;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2em;
  margin-top: 6%;
`

const FriendCell = styled.div`
  border: solid 3px #505050;
  background: darkgray;
  width: 80vw;
  height: 100%;
  margin: auto;
  padding: auto;
  top: 3%;
  border-radius: 8px;
`

const Dashboard = () => {
  const { username } = useContext(UserContext)
  return (
    <DashLayoutComponent>
      <Header>Messages</Header>
      <Wrapper>
        {Friends.map(({ avatar, name, messages, unread }) => (
          <>
            <FriendCell>
              {unread > 0 ? (
                <UnreadAvatar src={avatar} />
              ) : (
                <Avatar src={avatar} />
              )}
              <User>{name}</User>
              <Messages>{messages[0].message}</Messages>
              <Timestamp>Today 5:12pm</Timestamp>
            </FriendCell>
          </>
        ))}
      </Wrapper>
    </DashLayoutComponent>
  )
}

export default Dashboard
