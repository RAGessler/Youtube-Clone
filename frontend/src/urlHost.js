export const URL_HOST = 
process.env.NODE_ENV === "production"
    ?"http://ytcbackend-env.eba-rxeyz2ny.us-east-2.elasticbeanstalk.com/"
    :"http://localhost:8001";


    // import into files that call database