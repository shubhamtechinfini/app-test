import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SupportTicketServiceBase } from "./base/supportTicket.service.base";

@Injectable()
export class SupportTicketService extends SupportTicketServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
