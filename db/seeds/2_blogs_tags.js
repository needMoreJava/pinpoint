
exports.seed = function(knex, Promise) {
  return knex('blogs_tags').del()
    .then(function () {
      return knex('blogs_tags').insert([
        {
          id: 1,
          blog_id: 1,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          blog_id: 1,
          tag_id: 11,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          blog_id: 1,
          tag_id: 12,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 4,
          blog_id: 2,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 5,
          blog_id: 3,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 6,
          blog_id: 3,
          tag_id: 12,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 7,
          blog_id: 4,
          tag_id: 10,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 8,
          blog_id: 5,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 9,
          blog_id: 5,
          tag_id: 10,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 10,
          blog_id: 6,
          tag_id: 11,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 11,
          blog_id: 6,
          tag_id: 13,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 12,
          blog_id: 7,
          tag_id: 11,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 13,
          blog_id: 7,
          tag_id: 13,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 14,
          blog_id: 7,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 15,
          blog_id: 8,
          tag_id: 12,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 16,
          blog_id: 9,
          tag_id: 8,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 17,
          blog_id: 9,
          tag_id: 12,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 18,
          blog_id: 9,
          tag_id: 5,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 19,
          blog_id: 10,
          tag_id: 8,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 20,
          blog_id: 10,
          tag_id: 12,
          created_at: new Date(),
          updated_at: new Date()
        },
      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('blogs_tags_id_seq', (SELECT MAX(id) FROM blogs_tags));"
      )
    })
}
