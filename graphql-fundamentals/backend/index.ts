import 'reflect-metadata'
import path from 'path'
import { ApolloServer } from 'apollo-server'
import { buildSchema, BuildSchemaOptions} from 'type-graphql'

async function main() {
  const buildSchemaOptions: BuildSchemaOptions = {
    resolvers: [path.join(__dirname, 'src', 'resolvers', '*.ts')],
    emitSchemaFile: path.resolve(__dirname, './schema.gql'),
  }

  const schema = await buildSchema(buildSchemaOptions)

  const server = new ApolloServer({ schema })

  const { url } = await server.listen()

  console.log(`Server running on ${url}`)
}

main();