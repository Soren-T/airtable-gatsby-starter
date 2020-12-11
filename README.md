# Airtable CMS Gatsby BLlog

## About

A simple gatsby starter designed to use AirTable as a CMS.

## Getting Started

To use this starter you need an Airtable base with two table configured like so:

### CMS Table

| title (primary field) | summary | slug                                | author | image                    | PostMarkdown               | Tags | tag (from Tags) | date | status |
|-----------------------|---------|-------------------------------------|--------|--------------------------|----------------------------|------|-----------------|------|--------|
| blog title            | summary | a unique slug used for blog page url| author | feature image for article | blog content written in md | auto field created by airtable to conect this table to the Tags table | tags for this article | date published | status of article. only "Published" articles will be pulled into the site |



### Tags Table

| tag        | ID | description       | CMS                                   |
|------------|----|-------------------|-------|
| A tag name | 1  | a tag description | column generated by airtable to connect this table with the CMS table |

### Setup Continued

After these tables are setup you need to add Airtable API keys to the project in the .env file. You can find these values in your Airtable settings/API documentation.

`# Airtable API Key`\
`AIRTABLE_API_KEY="###"`\
`AIRTABLE_BASE_ID="###"`\

### Running Locally

To run locally you need Gatsby and Gatsby CLI installed locally. You can get started on that here: https://www.gatsbyjs.com/docs/quick-start/

Once you have to repo cloned and Gatsby installed run the below commands to get started

Note: you will not be able to fetch data with the .env file containing the Airtable API keys.

#### `gatsby develop`

Run in the project locally.

#### `gatsby build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.
