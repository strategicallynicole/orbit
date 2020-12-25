import React from "react";
import { ThemeProvider } from "@kiwicom/orbit-components";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import styled from "styled-components";
import theme from "../theme";
import Navbar from "./Navbar";

const StyledWrapper = styled.div`
  display: grid;
  position: relative;
  overflow: hidden;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
  .breadcrumb {
    margin-bottom: 0.5em;
    .breadcrumb__list {
      display: flex;
      & > li {
        padding-right: 5px;
        font-size: calc(1em - 2px);
        transition: color ${({ theme }) => theme.orbit.durationFast} ease-in;
        color: ${({ theme }) => theme.orbit.colorTextSecondary};
        &:hover {
          color: ${({ theme }) => theme.orbit.colorTextLinkSecondaryHover};
        }
        a:focus {
          outline: 0;
          color: ${({ theme }) => theme.orbit.colorTextLinkSecondaryHover};
        }
      }
    }
  }
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 2rem;
`;

const StyledFooter = styled.footer`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

interface Props {
  children: React.ReactNode;
  location?: string;
  crumbLabel?: string;
}

export default function Layout({ children, location, crumbLabel }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper>
        <Navbar />
        <StyledMain>
          {location && crumbLabel && <Breadcrumb location={location} crumbLabel={crumbLabel} />}
          {children}
        </StyledMain>
        <StyledFooter />
      </StyledWrapper>
    </ThemeProvider>
  );
}
