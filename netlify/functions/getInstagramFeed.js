
const axios = require('axios');

exports.handler = async function(event, context) {
    const myToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    const API_URL = `https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${myToken}`;

    try {
        const response = await axios.get(API_URL);
        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error fetching data from Instagram' })
        };
    }
};