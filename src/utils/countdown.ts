import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export function getTimeLeft(auctionEnd: number) {
  const now = dayjs().utc();
  const end = dayjs.unix(auctionEnd).utc();

  const duration = dayjs.duration(end.diff(now));

  if (duration.asMilliseconds() <= 0) {
    return "Auction Ended";
  }

  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();

  if (days > 0) {
    return `in ${days}d ${hours}h ${minutes}m ${seconds}s, ${end
      .add(1, "hour")
      .format("HH:mm")}`;
  } else if (hours > 0) {
    return `in ${hours}h ${minutes}m ${seconds}s, ${end
      .add(1, "hour")
      .format("HH:mm CET")}`;
  } else if (minutes > 0) {
    return `in ${minutes}m ${seconds}s, ${end
      .add(1, "hour")
      .format("HH:mm CET")}`;
  } else {
    return `in ${seconds}s, ${end.add(1, "hour").format("HH:mm CET")}`;
  }
}
