import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

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
    return `${days}d ${hours}h ${minutes}m ${seconds}s, ${end
      .add(1, "hour")
      .format("HH:mm")}`;
  } else if (hours > 0) {
    return `${hours}h ${minutes}m ${seconds}s, ${end
      .add(1, "hour")
      .format("HH:mm CET")}`;
  } else if (minutes > 0) {
    return `${minutes}m ${seconds}s, ${end.add(1, "hour").format("HH:mm CET")}`;
  } else {
    return `${seconds}s, ${end.add(1, "hour").format("HH:mm CET")}`;
  }
}
