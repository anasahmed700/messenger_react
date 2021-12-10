import axios from 'axios'

export const apiClient = axios.create({
    baseURL: "https://graph.facebook.com/v12.0/106251218572555/",
    // withCredentials: true,
    // headers: {
    //     'Accept': 'application/json',
    // },
    params : {
      fields : "messages{message,from}"
    }
    
});
apiClient.interceptors.request.use((config) => {
    const token = "EAARLfNIV5TMBADif1LGwQ6VakocYUcgdVW0nEWs8A7DKIBfLw7y3Ye92R4TwKgVmiDUZCgEG0NUM0uZAZCIA1y1ZBiAhwZC4ogZAZAe3NprYHJGIwPfgks4nsf5o6SMMNIqoJu8XquPhLDQNb5IZCMUi12y4YC3ZCfQT8BGHZCokX00XgyZAR0B9lNJ3QmrbL91oNgZD"
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
},(error) => {
    return Promise.reject(error);
});