-- CreateTable
CREATE TABLE "Survey" (
    "survey_id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "show_to_users" TEXT[],
    "budget" DOUBLE PRECISION NOT NULL,
    "cpr" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Survey_pkey" PRIMARY KEY ("survey_id")
);

-- CreateTable
CREATE TABLE "User" (
    "user_id" TEXT NOT NULL,
    "money" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);
