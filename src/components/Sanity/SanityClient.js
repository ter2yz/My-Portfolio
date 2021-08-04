import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "52b015lm", // find this at manage.sanity.io or in your sanity.json
    dataset: "production",
    useCdn: true,
})
