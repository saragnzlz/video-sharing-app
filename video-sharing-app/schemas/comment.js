/* File for managing the user base */

export default{
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        {
            name: 'postedBy',
            title: 'Posted by:',
            type: 'postedBy',
        },
        {
            name: 'comment',
            title: 'Comment',
            type: 'String',
        }
    ]
}