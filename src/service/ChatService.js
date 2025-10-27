
export function getMessagesFromRepo(repo) {
  return repo.getMessages().filter(msg => msg.length > 0);
}
