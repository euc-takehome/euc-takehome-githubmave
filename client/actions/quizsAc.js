

export const GET_QUIZS='GET_QUIZS'


export const getQuizItems = (quizs) =>{
       
        return{
           type: GET_QUIZS,
           quizs: quizs

        }
}


