// const BASE_URL = "http://localhost:4000/api/v1"

export const BASE_URL = process.env.REACT_APP_BASE_URL
export const SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID
export const SERVICE_TEMPLATE = process.env.REACT_APP_EMAIL_TEMPLATE
export const SERVICE_PUBLIC_KEY = process.env.REACT_APP_EMAIL_PUBLIC_KEY

// AUTH ENDPOINTS
export const blogEndpoints = {
  GET_ALL_BLOGS_API: BASE_URL + "/blog.json",
  GET_BLOG_API: BASE_URL + "/blog.json",
  GET_BLOG_TAG_API : BASE_URL + "/blog.json",

};

export const researchEndpoints = {
    GET_ALL_RESEARCH_API:  BASE_URL + "/research.json",
    GET_RESEARCH_API: BASE_URL + "/research.json",
}

export const newsLetterEndPoints = {
    GET_ALL_NEWSLETTER_API : BASE_URL + "/newsLetter.json",
    GET_NEWSLETTER_API : BASE_URL + "/newsLetter.json",

}

export const courseEndPoints = {
    GET_ALL_COURSE_API : BASE_URL + "/course.json",
    GET_COURSE_API : BASE_URL + "/course.json",
}

