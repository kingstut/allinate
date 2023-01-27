import { prisma } from '../../../server/db/client'
export default handler;

function handler(req, res) {
    switch (req.method) {
        case 'POST':
            return postSurvey();
        case 'PUT':
            return updateSurvey();
        case 'DELETE':
            return deleteSurvey();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    async function postSurvey() {
        try {
            const { data } = req.body

            const users = await prisma.user.findMany()
            await prisma.survey.create({
                data: {
                    question : data.question,
                    show_to_users : users.map((user) => user.user_id),
                    budget : parseFloat(data.budget),
                    cpr : parseFloat(data.cpr),
                },
              })
            return res.status(200).json({});
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }

    async function updateSurvey() {
        try {
            
            const { email:email, survey_id:survey_id, cpr:cpr } = req.body
            //remove user who has submitted 
            const surv = await prisma.survey.findUnique({
                where: {
                  survey_id: survey_id,
                }
              })

            const index = surv.show_to_users.indexOf(email);
            delete surv.show_to_users[index]
        
            await prisma.survey.update({
                where: {
                  survey_id: survey_id,
                },
                data: {
                    show_to_users: surv.show_to_users,
                },
              })
            
            //reduce budget by cpr 
            await prisma.survey.update({
                where: {
                    survey_id: survey_id,
                },
                data: {
                    budget: {
                        increment: -parseFloat(cpr)
                    }
                }
              })

            // delete survey of no budget is left 
            const this_survey = await prisma.survey.findUnique({
                where: {
                    survey_id: survey_id,
                }
              })
            const budget = this_survey.budget
            if (budget<cpr) {
                await prisma.survey.delete({
                    where: {
                      survey_id: survey_id,
                    }
                  })
            }

            return res.status(200).json({});
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }

    async function deleteSurvey() {
        const { survey_id } = req.body
        await prisma.survey.delete({
            where: {
              survey_id: survey_id,
            }
          })

        return res.status(200).json({});
    }
    
}