export function host(url) {
  if (!url) return "";
  const host = url.replace(/^https?:\/\//, "").replace(/\/.*$/, "");
  const parts = host.split(".").slice(-3);
  if (parts[0] === "www")  parts.shift();
  return parts.join(".");
}

export function timeAgo(time) {
  const between = Date.now() / 1000 - Number(time);
  const oneMinute = 60;
  const oneHour =  oneMinute * 60
  const oneDay = oneHour * 24
  if (between < oneHour)
    return pluralize(between / 60, "minute");
  else if (between < oneDay) 
    return pluralize(between / 3600, "hour");
  else 
    return pluralize(between / 86400, "day");
}

function pluralize(time, label) {
  const roundedTime = Math.round(time);
  if (roundedTime === 1)  return `${roundedTime} ${label}`;
  return `${roundedTime} ${label}s`;
}
