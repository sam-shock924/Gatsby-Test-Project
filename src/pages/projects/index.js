import React from 'react';
import Layout from '../../components/Layout';
import * as styles from '../../styles/projects.module.css';
import { Link, graphql } from 'gatsby';

export default function Projects({ data }) {
	console.log(data);
	const projects = data.projects.nodes;
	// const contact = data.contact.siteMetadata.contact;
	return (
		<Layout>
			<div className={styles.portfolio}>
				<h2>Portfolio</h2>
				<h3>Projects & Websites I've created</h3>
				<div className={styles.projects}>
					{projects.map((project) => (
						<Link to={'/projects' + project.frontmatter.slug} key={project.id}>
							<div>
								<h3>{project.frontmatter.title}</h3>
								<p>{project.frontmatter.stack}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
			{/* <p>Get in contact! Email me at {contact}</p> */}
		</Layout>
	);
}

// export page query

export const query = graphql`
	query ProjectsPage {
		projects: allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
			nodes {
				frontmatter {
					slug
					stack
					title
				}
				id
			}
		}
		contact: site {
			siteMetadata {
				contact
			}
		}
	}
`;
