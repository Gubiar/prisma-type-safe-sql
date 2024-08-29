# Next.js Prisma TypedSQL Demo

This project demonstrates an issue with Prisma's TypedSQL feature in a Next.js application.

## Prerequisites

- Node.js v20.15.1 (i use this version)
- npm (10.8.3)
- PostgreSQL database ([neon.tech](neon.tech) Postgre 16)

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/Gubiar/prisma-type-safe-sql.git
   cd prisma-type-safe-sql
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your environment variables:
   Create a `.env` file in the root directory and add your database URL:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/your_database"
   ```

4. Push the Prisma schema to your database:
   ```
   npx prisma db push
   ```

## Running the Application

1. Start the development server:
   ```
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Reproducing the Error

To reproduce the error with Prisma's TypedSQL feature:

1. Ensure you have a SQL file named `getPosts.sql` in the `prisma/sql/` directory with the following content:

   ```sql
    SELECT 
        p.id,
        p.title,
        p.author,
        p.content,
        p."createDate",
        s.name AS "statusName"
    FROM 
        "Post" p
    JOIN 
        "Status" s ON p."statusId" = s.id
   ```

2. Run the following command:
   ```
   npx prisma generate --sql
   ```

3. You should see the following error:
   ```
   Error: Errors while reading sql files:
   In prisma\sql\getPosts.sql:
   Error: ERROR: prepared statement "s2" does not exist
   ```

## Additional Information

- The SQL query works fine when executed directly in the database.
- The query also works when used with `prisma.$queryRaw`.
- This issue specifically occurs when trying to use Prisma's TypedSQL feature.

If you encounter this issue or have any insights, please open an issue in this repository or contribute to the discussion on the Prisma GitHub repository.