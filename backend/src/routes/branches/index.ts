import { FastifyPluginAsync } from "fastify"
import { IRepoQuerystring } from "../../shared/interfaces";
import { branchesSchema } from "../../schemas/branches";
import HttpService from "../../shared/services/http-service";

const branches: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get<{
    Querystring: IRepoQuerystring
  }>('/', {
    schema: branchesSchema
  }, async function (request, reply) {
    const { owner, repo } = request.query;
    const httpService = new HttpService();
    const res = await httpService.get(`repos/${owner}/${repo}/branches`)
    if(res.response?.status && res.response?.status === 400)
      throw fastify.httpErrors.badRequest()
    if(res.response?.status && res.response?.status === 404)
      throw fastify.httpErrors.notFound()
    if(res.response?.status && res.response?.status === 500)
      throw fastify.httpErrors.internalServerError()
    reply.send(res)
  })
}

export default branches;
