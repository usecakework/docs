/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */


const sidebars = {
  sidebar: [
    {
      type: 'doc',
      label: 'Intro',
      id: 'intro'
    },
    {
      type: 'doc',
      label: 'Getting Started',
      id: 'gettingstarted'
    },
    {
      type: 'doc',
      label: 'Examples',
      id: 'examples'
    },
    {
      type: 'doc',
      label: 'Upgrade',
      id: 'upgrade'
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        {
          type: 'category',
          label: 'CLI',
          items: [
            {
              type: 'doc',
              id: 'reference/cli/installation',
              label: 'Installation'
            },
            {
              type: 'doc',
              id: 'reference/cli/usage',
              label: 'Usage'
            }
          ],
        },
        {
          type: 'category',
          label: 'Task SDK',
          items: [
            {
              type: 'category',
              label: 'Python',
              items: [
                {
                  type: 'doc',
                  id: 'reference/cakeworksdk/task/python/installation',
                  label: 'Installation'
                },
                {
                  type: 'doc',
                  id: 'reference/cakeworksdk/task/python/usage',
                  label: 'Usage'
                },                  
              ],
            }                  
          ],
        },
        {
          type: 'category',
          label: 'Client SDK',
          items: [
            {
              type: 'category',
              label: 'Python',
              items: [
                {
                  type: 'doc',
                  id: 'reference/cakeworksdk/client/python/installation',
                  label: 'Installation'
                },
                {
                  type: 'doc',
                  id: 'reference/cakeworksdk/client/python/usage',
                  label: 'Usage'
                },                  
              ],
            },
            {
              type: 'category',
              label: 'Javascript',
              items: [
                {
                  type: 'doc',
                  id: 'reference/cakeworksdk/client/javascript/installation',
                  label: 'Installation'
                },
                {
                  type: 'doc',
                  id: 'reference/cakeworksdk/client/javascript/usage',
                  label: 'Usage'
                },                  
              ],
            }              
          ],
        }
      ],
      collapsed: false
    }    
  ],
};

module.exports = sidebars;
