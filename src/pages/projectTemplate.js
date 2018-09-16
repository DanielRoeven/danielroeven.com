import React from "react";
import styled from 'styled-components'
import rehypeReact from "rehype-react"

import PageWrapper from '../components/style/PageWrapper'
import H2 from '../components/style/H2'
import H3Article from '../components/style/H3Article'
import PMedium from '../components/style/PMedium'
import UlMedium from '../components/style/UlMedium'
import Quote from '../components/style/Quote'
import LogoLink from '../components/logic/LogoLink'

const ProjectWrapper = styled(PageWrapper)`
  width: 53rem;
  margin: 0 13.5rem 6rem;
`
const ColumnWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: flex-start;
  align-items: flex-start;
`
const HalfColumn = styled.div`
  width: 26rem;
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
                  "h3": H3Article,
                  "p": PMedium,
                  "ul": UlMedium,
                  "blockquote": Quote,
                  "iframe": ProjectVideo,
                  "column-wrapper": ColumnWrapper,
                  "half-column": HalfColumn,
                  "rcsw-logo-link": LogoLink,
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