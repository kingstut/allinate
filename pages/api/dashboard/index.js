import { prisma } from '../../../server/db/client'
export default handler;

function handler(req, res) {
    switch (req.method) {
        case 'POST':
            return postUser();
        case 'PUT':
            return updateUser();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    async function postUser() {
        try {            
            const { session: session } = req.body
            const email = session.user.email 
            await prisma.user.upsert({
                where: {
                    user_id: email,
                },
                update: {},
                create: {
                    user_id : email
                }
              });
            return res.status(200).json({});
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }

    async function updateUser() {
        const { session: session, cpr:cpr, budget:budget} = req.body
        const email = session.user.email 
        const up_budget = -parseFloat(budget)
        const up_cpr = parseFloat(cpr)

        await prisma.user.update({
            where: {
                user_id: email,
            },
            data: {
                money: {
                    increment: up_budget + up_cpr
                }
            }
          })
        return res.status(200).json({});
    }


}