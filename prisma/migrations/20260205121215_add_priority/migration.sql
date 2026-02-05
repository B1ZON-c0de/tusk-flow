/*
  Warnings:

  - Added the required column `priority` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- AlterTable
ALTER TABLE "tasks" ADD COLUMN     "priority" "Priority" NOT NULL;
