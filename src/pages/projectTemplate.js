import React from "react";
import styled from 'styled-components'
import rehypeReact from "rehype-react"

import PageWrapper from '../components/style/PageWrapper'
import H2 from '../components/style/H2'
import H3 from '../components/style/H3'
import PMedium from '../components/style/PMedium'
import UlMedium from '../components/style/UlMedium'
import Quote from '../components/style/Quote'

const ProjectWrapper = styled(PageWrapper)`
  width: 53rem;
  margin: 0 13.5rem 6rem;
`
const OrgImage = styled.img`
  margin: 2rem 0 0.8rem 0;
  width: 26rem;
  height: 6rem;
  object-fit: contain;
  object-position: left;
`
const LogoLink = styled.a`
  filter: grayscale(1);
  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: grayscale(0);
  }
`
const ProjectVideo = styled.iframe`
  height: 48rem;
  width: 80rem;
  margin: 3rem -13.5rem;
  overflow: hidden;
`

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: { "h2": H2,
                  "h3": H3,
                  "p": PMedium,
                  "ul": UlMedium,
                  "blockquote": Quote,
                },
  }).Compiler

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { htmlAst } = markdownRemark;
  return (
    <ProjectWrapper>
      {renderAst(htmlAst)}
    </ProjectWrapper>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;