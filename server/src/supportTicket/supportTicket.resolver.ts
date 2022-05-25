import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SupportTicketResolverBase } from "./base/supportTicket.resolver.base";
import { SupportTicket } from "./base/SupportTicket";
import { SupportTicketService } from "./supportTicket.service";

@graphql.Resolver(() => SupportTicket)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SupportTicketResolver extends SupportTicketResolverBase {
  constructor(
    protected readonly service: SupportTicketService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
