import React, { useEffect, useState } from 'react';
import { Table } from 'rsuite';
import axios from 'axios';
import dayjs from 'dayjs';

const { Column, HeaderCell, Cell } = Table;

export default function SiteStats() {
    const [siteStats, setSiteStats] = useState({
        stargazers_count: null,
        forks_count: null,
        open_issues_count: null,
        watchers_count: null,
        pushed_at: null,
    });

    const [siteCommits, setSiteCommits] = useState({
        commits_count: null,
    });

    const client = axios.create({
        baseURL: 'https://api.github.com/repos/captaiiinsolo/resumeAndPortfolio',
    });

    const getSiteStats = async () => {
        try {
            const response = await client.get('');
            const data = response.data;
            setSiteStats({
                stargazers_count: data.stargazers_count,
                forks_count: data.forks_count,
                open_issues_count: data.open_issues_count,
                watchers_count: data.watchers_count,
                pushed_at: data.pushed_at,
            });
        } catch (error) {
            console.error('Error fetching GitHub stats:', error);
        }
        
    };

    const getSiteCommits = async () => {
        try {
            const response = await client.get('/commits?sha=main&per_page=9999');
            const data = response.data;
            setSiteCommits({
                commits_count: data.length,
            });
        } catch (error) {
            console.error('Error fetching GitHub stats:', error);
        }

    }

    useEffect(() => {
        getSiteStats();
        getSiteCommits();
    }, []);

    const siteData = [
        {
            label: 'Stars on GitHub',
            value: siteStats.stargazers_count,
        },
        {
            label: 'Forks',
            value: siteStats.forks_count,
        },
        {
            label: 'Knives',
            value: '2', // Default value
        },
        {
            label: 'Open Issues',
            value: siteStats.open_issues_count,
        },
        {
            label: 'Watchers',
            value: siteStats.watchers_count,
        },
        {
            label: 'Commits',
            value: siteCommits.commits_count,
        },
        {
            label: 'Last Updated',
            value: dayjs(siteStats.pushed_at).format('MMMM DD, YYYY @ hh:mm A'),
        }
    ];

    return (
        <Table bordered cellBordered autoHeight hover={false} data={siteData}>
            <Column flexGrow={1} fullText>
                <HeaderCell>Site Stats</HeaderCell>
                <Cell dataKey='label' />
            </Column>

            <Column flexGrow={1} fullText align='right'>
                <HeaderCell>Value</HeaderCell>
                <Cell dataKey='value'/> 
            </Column>
        </Table>
    );
}
