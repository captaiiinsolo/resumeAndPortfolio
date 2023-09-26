import { useEffect, useState } from 'react';
import { Table } from 'rsuite';
import axios from 'axios';

const { Column, HeaderCell, Cell } = Table;

export default function SiteStats() {
    // Define state to store the fetched GitHub data
    const [githubData, setGithubData] = useState([]);

    // Define a function to fetch GitHub data from a given link
    const fetchGithubData = async (link, key) => {
        try {
            const response = await axios.get(link, {
                headers: {
                    Authorization: 'Bearer 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',
                },
            });
            if (response.status === 200) {
                const data = response.data;
                const value = data[key];
                return value;
            } else {
                console.error(`Failed to fetch data from ${link}`);
                return null;
            }
        } catch (error) {
            console.error(`Error fetching data from ${link}: ${error}`);
            return null;
        }
    };

    // Use useEffect to fetch GitHub data when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            const updatedSiteData = [...siteData];
            for (const item of updatedSiteData) {
                if (item.link && item.key) {
                    const value = await fetchGithubData(item.link, item.key);
                    if (value !== null) {
                        item.value = value;
                    }
                }
            }

            // Calculate the total number of open issues
            const openIssuesCount = updatedSiteData.find(item => item.key === 'open_issues_count');
            if (openIssuesCount) {
                openIssuesCount.value = await fetchOpenIssuesCount(openIssuesCount.link);
            }

            const commitsCount = updatedSiteData.find(item => item.key === 'commits_count');
            if (commitsCount) {
                commitsCount.value = await fetchCommitsCount(commitsCount.link);
            }

            setGithubData(updatedSiteData);
        };
        fetchData();
    }, []);

    // Define a function to fetch the number of open issues from a GitHub repository
    const fetchOpenIssuesCount = async (issuesLink) => {
        try {
            const response = await axios.get(issuesLink, {
                headers: {
                    Authorization: 'Bearer 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',
                },
            });
            if (response.status === 200) {
                return response.data.length;
            } else {
                console.error(`Failed to fetch open issues data from ${issuesLink}`);
                return null;
            }
        } catch (error) {
            console.error(`Error fetching open issues data from ${issuesLink}: ${error}`);
            return null;
        }
    };

    const fetchCommitsCount = async (commitsLink) => {
        try {
            const response = await axios.get(commitsLink, {
                headers: {
                    Authorization: 'Bearer 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',
                },
            });
            if (response.status === 200) {
                return response.data.length;
            } else {
                console.error(`Failed to fetch commits data from ${commitsLink}`);
                return null;
            }
        } catch (error) {
            console.error(`Error fetching commits data from ${commitsLink}: ${error}`);
            return null;
        }
    };

    // Data structure with links to GitHub API and placeholders for values
    const siteData = [
        {
            key: 'stargazers_count',
            label: 'Stars on GitHub',
            link: 'https://api.github.com/repos/captaiiinsolo/resumeAndPortfolio',
            value: null, // Placeholder for the value
        },
        {
            key: 'forks_count',
            label: 'Forks',
            link: 'https://api.github.com/repos/captaiiinsolo/resumeAndPortfolio',
            value: null, // Placeholder for the value
        },
        {
            key: 'knives_count',
            label: 'Knives',
            value: '2', // Default value
        },
        {
            key: 'open_issues_count',
            label: 'Open Issues',
            link: 'https://api.github.com/repos/captaiiinsolo/resumeAndPortfolio/issues',
            value: null, // Placeholder for the value
        },
        {
            key: 'commits_count',
            label: 'Commits',
            link: 'https://api.github.com/repos/captaiiinsolo/resumeAndPortfolio/commits',
            value: null, // Placeholder for the value
        }
    ];

    return (
        <Table bordered cellBordered autoHeight data={githubData}>
            <Column flexGrow={1} fullText>
                <HeaderCell>Site Stats</HeaderCell>
                <Cell dataKey='label' />
            </Column>

            <Column flexGrow={1} fullText align='right'>
                <HeaderCell>Value</HeaderCell>
                <Cell dataKey='value' />
            </Column>
        </Table>
    );
}
