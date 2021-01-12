import React from "react";
import { IContributor } from ".";
import styled, { css } from "styled-components";
import Twitter from "@kiwicom/orbit-components/lib/icons/Twitter";
import Link from "@kiwicom/orbit-components/lib/icons/Link";
import { Stack } from "@kiwicom/orbit-components";
import Dribble from "../../images/dribbble.svg";
import data from "./data.json";

const resolveSize = (size: "small" | "medium" | "large") => {
  if (size === "small") return "60px";
  if (size === "medium") return "100px";

  return "124px";
};

const StyledImageWrapper = styled(({ url, children, ...props }) => {
  const Component = url ? "a" : "div";
  return (
    <Component href={url} {...props}>
      {children}
    </Component>
  );
})`
  width: ${({ size }) => resolveSize(size)};
`;

const StyledHeading = styled.h4`
  color: ${({ theme }) => theme.orbit.colorHeading};
  font-size: calc(1em + 2px);
  font-weight: 800;
  width: 100%;
  line-height: 1.2;
`;

const StyledLink = styled.a.attrs(({ href }) => ({
  href,
  rel: "noopener noreferrer",
  target: "_blank",
}))``;

const StyledInfo = styled.div`
  height: 100%;
  color: ${({ theme }) => theme.orbit.colorTextPrimary};
`;

interface Props extends IContributor {
  avatarSize?: "small" | "medium" | "large";
  dribbleUrl?: string;
  compact?: boolean;
}

const Contributor = ({
  avatarUrl,
  bio,
  name,
  compact,
  dribbleUrl,
  url,
  twitterUsername,
  websiteUrl,
  avatarSize = "large",
}: Props) => {
  const { info, position } = data.find(c => c.name === name);

  return (
    <Stack
      flex
      direction="column"
      largeMobile={{ direction: "row" }}
      spaceAfter="large"
      spacing="large"
      align="stretch"
    >
      <StyledImageWrapper url={url} size={compact ? "small" : avatarSize}>
        <img
          src={avatarUrl}
          alt={name}
          title={name}
          css={css`
            border-radius: 6px;
          `}
        />
      </StyledImageWrapper>
      {!compact && (
        <Stack flex shrink direction="column" spacing="XSmall">
          <StyledHeading>{position ? `${name}, ${position}` : name}</StyledHeading>
          <StyledInfo>{info || bio}</StyledInfo>
          <Stack inline spacing="XSmall">
            {twitterUsername && (
              <StyledLink href={`https://twitter.com/${twitterUsername}`}>
                <Twitter size="small" ariaLabel="twitter" />
              </StyledLink>
            )}
            {dribbleUrl && (
              <StyledLink href={dribbleUrl}>
                <Dribble height={16} width={16} aria-label="dribble" />
              </StyledLink>
            )}
            {websiteUrl && (
              <StyledLink href={websiteUrl}>
                <Link size="small" ariaLabel="website" />
              </StyledLink>
            )}
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default Contributor;
