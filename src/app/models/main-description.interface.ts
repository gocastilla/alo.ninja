import { Link } from "./link.interface";
import { Project } from "./project.interface";
import { MetaDefinition } from "../../../node_modules/@angular/platform-browser";

export interface MainDescription {
  name: string;
  description: string;
  position: string;
  socialLinks: Link[];
  projects: Project[];
  title: string;
  metas: MetaDefinition[];
}