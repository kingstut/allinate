/*
  Warnings:

  - You are about to drop the column `show_to_users` on the `Survey` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Survey" DROP COLUMN "show_to_users",
ADD COLUMN     "hide_to_users" TEXT[];
