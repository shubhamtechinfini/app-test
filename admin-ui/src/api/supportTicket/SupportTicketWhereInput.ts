import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SupportTicketWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
};
