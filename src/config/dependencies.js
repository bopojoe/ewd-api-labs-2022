import AccountsRepositoryInMemory from "../accounts/repositories/in-memory/AccountsRepository";
import AccountsRepositoryMongo from "../accounts/repositories/mongo/AccountsRepository";
import GenresRepositoryMongo from "../genres/repositories/mongo/GenresRepository";
import AccountValidators from "../accounts/validators";
import Authenticator from "../accounts/security/simple";

const buildDependencies = () => {
  const dependencies = {
    validators: AccountValidators,
    authenticator: new Authenticator(),
  };

  if (process.env.DATABASE_DIALECT === "in-memory") {
    dependencies.accountsRepository = new AccountsRepositoryInMemory();
  } else if (process.env.DATABASE_DIALECT === "mongo") {
    dependencies.accountsRepository = new AccountsRepositoryMongo();
    dependencies.genresRepository = new GenresRepositoryMongo();
  } else if (process.env.DATABASE_DIALECT === "mysql") {
    throw new Error("Add MySQL support");
  } else {
    throw new Error("Add DB Support to project");
  }
  return dependencies;
};

export default buildDependencies;
