export function getPaginatedData(
  data: any[],
  page: number,
  pageSize: number
): any[] {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return data.slice(startIndex, endIndex);
}

export function getPaginatedCount(
  data: any[],
  page: number,
  pageSize: number
): any {
  const totalTodosCount = data.length || 0;
  const totalPages = Math.ceil(totalTodosCount / pageSize);

  return {
    totalPages,
    page,
    pageSize,
  };
}
