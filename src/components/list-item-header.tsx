import type {FC} from "react";
import styled from "@emotion/styled";
import plus from "../assets/icons/plus.png"
import {useState} from "react";
import {CreateModal} from './create-modal'
import {Link} from "wouter";

interface ListItemHeaderProps {
    title: string
    onClick: () => void
}

const ListItemHeader: FC<ListItemHeaderProps> = ({title, onClick}) => {
    return (
        <Wrapper>
            <div>
                <h3>{title}</h3>
            </div>
            <Link href="/create-gateway">
                <AddButton>
                    <Icon src={plus}/>
                </AddButton>
            </Link>
        </Wrapper>
    )
}
const Icon = styled.img`
`

const Wrapper = styled("div")`
  font-size: 24px;
  padding: 16px;
  border-bottom: 1px solid ${p => p.theme.UI.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`

const AddButton = styled("div")`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-left: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.gray.gray15};
  }

  &:active {
    background-color: ${p => p.theme.gray.gray20};
  }
`

export default ListItemHeader;