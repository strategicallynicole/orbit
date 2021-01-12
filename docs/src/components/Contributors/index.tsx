import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Contributor from "./Contributor";

const CURRENT_CONTRIBUTORS = [
  "Victor Genaev",
  "Luděk Vepřek",
  "Aaron Collier",
  "Matija Marohnić",
  "William Kolmačka",
  "Milan Seitler",
];

interface Props {
  contributors?: string | string[];
}

export interface IContributor {
  name?: string;
  id?: string;
  avatarUrl?: string;
  bio?: string;
  websiteUrl?: string;
  twitterUsername?: string;
  url?: string;
}

const ContributorsComponent = ({ contributors }: Props) => {
  const { github } = useStaticQuery(
    graphql`
      query CollaboratorsQuery {
        github {
          repository(name: "orbit", owner: "kiwicom") {
            collaborators {
              nodes {
                bio
                avatarUrl
                id
                name
                url
                websiteUrl
                twitterUsername
              }
            }
          }
        }
      }
    `,
  );

  const getContributors: IContributor[] = github.repository.collaborators.nodes.filter(({ name }) =>
    CURRENT_CONTRIBUTORS.concat(contributors || []).includes(name),
  );

  return (
    <>
      {getContributors.map(({ id, ...info }) => (
        <Contributor key={id} id={id} {...info} />
      ))}
    </>
  );
};

export default ContributorsComponent;
