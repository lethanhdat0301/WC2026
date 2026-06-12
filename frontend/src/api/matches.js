import client from "./client.js";

// Lấy danh sách trận đấu, có thể lọc bằng query params
export async function getMatches(params = {}) {
  const response = await client.get("/matches", { params });
  return response.data;
}

// Lấy chi tiết một trận đấu theo id
export async function getMatch(id) {
  const response = await client.get(`/matches/${id}`);
  return response.data;
}

// Lấy đội hình ra sân của hai đội trong một trận đấu
export async function getLineups(id) {
  const response = await client.get(`/matches/${id}/lineups`);
  return response.data;
}

// Lấy sự kiện trận đấu: bàn thắng và thẻ phạt
export async function getEvents(id) {
  const response = await client.get(`/matches/${id}/events`);
  return response.data;
}

// Lấy bảng xếp hạng các bảng
export async function getStandings() {
  const response = await client.get("/standings");
  return response.data;
}

// Lấy danh sách đội tuyển
export async function getTeams() {
  const response = await client.get("/teams");
  return response.data;
}

// Lấy chi tiết đội tuyển và danh sách cầu thủ theo id
export async function getTeam(id) {
  const response = await client.get(`/teams/${id}`);
  return response.data;
}

// Lấy danh sách vua phá lưới
export async function getTopScorers() {
  const response = await client.get("/top-scorers");
  return response.data;
}

// Lấy thống kê trận đấu theo id
export async function getMatchStatistics(id) {
  const response = await client.get(`/matches/${id}/statistics`);
  return response.data;
}
