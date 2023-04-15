export const getEnvOrThrows = (envName : string) => {
  const value = process.env[envName]
  
  if(!value)
    throw new Error('Env doesnt exist')

  return value
}
