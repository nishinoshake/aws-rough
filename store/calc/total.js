export const totalTable = table =>
  table.reduce(
    (total, row) => ({
      usd: total.usd + row.total.usd,
      jpy: total.jpy + row.total.jpy
    }),
    { usd: 0, jpy: 0 }
  )

export const totalTables = tables =>
  Object.keys(tables).reduce(
    (total, key) => {
      const { usd, jpy } = totalTable(tables[key])

      return {
        usd: total.usd + usd,
        jpy: total.jpy + jpy
      }
    },
    { usd: 0, jpy: 0 }
  )
