import React from "react";
import Sidenav from "../Sidenav";
import StarEmpty from "@kiwicom/orbit-components/lib/icons/StarEmpty";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Switch from "../Switch";
import { save, load } from "../../utils/storage";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledLink = styled(Link)`
  cursor: pointer;
  color: ${({ theme }) => theme.orbit.colorTextSecondary};
  &:hover {
    color: ${({ theme }) => theme.orbit.colorTextLinkPrimary};
  }
`;

const Bookmarks = () => {
  const [checked, setChecked] = React.useState(false);
  const [bookmarks, setBookmarks] = React.useState<string | null>("");

  React.useEffect(() => {
    if (load("bookmarks")) setBookmarks(load("bookmarks"));

    if (load("devMode") === "enabled") setChecked(true);
    else setChecked(false);
  }, []);

  const handleChange = () => {
    if (load("devMode") === "enabled") {
      setChecked(false);
      save("devMode", "disabled");
    } else {
      setChecked(true);
      save("devMode", "enabled");
    }
  };

  return (
    <Sidenav
      actions={
        <Switch onChange={handleChange} checked={checked}>
          Developer Mode
        </Switch>
      }
      toggleIcon={<StarEmpty ariaHidden />}
    >
      {bookmarks && (
        <Stack direction="column">
          <h3>Your bookmarks</h3>
          {Object.entries(JSON.parse(bookmarks)).map(([key, slug]) => (
            // @ts-expect-error entries
            <StyledLink key={key} to={slug}>
              {String(slug)
                .split("/")
                .filter(Boolean)
                .map(s => s[0].toUpperCase().concat(s.slice(1)))
                .join(" / ")}
            </StyledLink>
          ))}
        </Stack>
      )}
    </Sidenav>
  );
};

export default Bookmarks;
