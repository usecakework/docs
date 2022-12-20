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
    'intro',
    {
      type: 'category',
      label: 'Reference',
      items: [
        {
          type: 'category',
          label: 'Cakework CLI',
          items: [
            {
              type: 'doc',
              id: 'reference/cakeworkctl/installation',
              label: 'Installation'
            },
            {
              type: 'doc',
              id: 'reference/cakeworkctl/commands',
              label: 'Commands'
            }
          ],
          collapsed: false,
        },
        {
          type: 'category',
          label: 'Cakework SDK',
          items: [
            {
              type: 'doc',
              id: 'reference/cakeworksdk/installation',
              label: 'Installation'
            },
            {
              type: 'doc',
              id: 'reference/cakeworksdk/service',
              label: 'Service'
            },
            {
              type: 'doc',
              id: 'reference/cakeworksdk/client',
              label: 'Client'
            }
          ],
          collapsed: false,
        }
      ],
      collapsed: false
    }    
  ],
};

module.exports = sidebars;
