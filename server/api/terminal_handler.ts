export default defineEventHandler( async (event) => {
  assertMethod(event, "POST");

  const output = await readBody(event);

  return {
    data: output.input,
  }
})
