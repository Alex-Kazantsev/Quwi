import Projects from "~/services/projects";

export default (context) => {
  return {
    projects: new Projects(context),
  }
}
