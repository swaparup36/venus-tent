-- CreateTable
CREATE TABLE "Appointments" (
    "id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "event_type" TEXT NOT NULL,
    "event_date" TIMESTAMP(3) NOT NULL,
    "event_time" TIMESTAMP(3) NOT NULL,
    "services" TEXT[],

    CONSTRAINT "Appointments_pkey" PRIMARY KEY ("id")
);
