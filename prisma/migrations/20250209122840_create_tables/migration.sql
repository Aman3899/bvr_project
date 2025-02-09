-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "isSeller" BOOLEAN NOT NULL DEFAULT false,
    "forgetPasswordToken" TEXT,
    "forgetPasswordTokenExpiry" TIMESTAMP(3),
    "verifyToken" TEXT,
    "verifyTokenExpiry" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "markets" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "area_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "market_type" TEXT,
    "mode_of_transaction" TEXT,
    "language" TEXT,
    "accessibility" TEXT,
    "special_day_name" TEXT,
    "operating_hours_start" TIMESTAMP(3),
    "operating_hours_end" TIMESTAMP(3),
    "is_open" BOOLEAN,
    "video_link" TEXT,
    "is_approved" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "markets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "districts" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "districts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "district_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "areas" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "city_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "areas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "category_id" INTEGER NOT NULL,
    "market_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "unit" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_media" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "media_type" TEXT NOT NULL,
    "file_path" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "product_media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "market_features" (
    "id" SERIAL NOT NULL,
    "market_id" INTEGER NOT NULL,
    "electricity" BOOLEAN NOT NULL DEFAULT false,
    "water_supply" BOOLEAN NOT NULL DEFAULT false,
    "access_roads" BOOLEAN NOT NULL DEFAULT false,
    "sewage_systems" BOOLEAN NOT NULL DEFAULT false,
    "waste_management_services" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "market_features_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "amenities" (
    "id" SERIAL NOT NULL,
    "market_id" INTEGER NOT NULL,
    "seating_areas" BOOLEAN NOT NULL DEFAULT false,
    "atms" BOOLEAN NOT NULL DEFAULT false,
    "mobile_money_services" BOOLEAN NOT NULL DEFAULT false,
    "internet_connectivity" BOOLEAN NOT NULL DEFAULT false,
    "information_desk" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "amenities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "regulatory_compliance" (
    "id" SERIAL NOT NULL,
    "market_id" INTEGER NOT NULL,
    "business_licensing" BOOLEAN NOT NULL DEFAULT false,
    "environmental_regulation" BOOLEAN NOT NULL DEFAULT false,
    "tax_compliance" BOOLEAN NOT NULL DEFAULT false,
    "delivery_services" BOOLEAN NOT NULL DEFAULT false,
    "security_arrangements" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "regulatory_compliance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sanitation_hygiene" (
    "id" SERIAL NOT NULL,
    "market_id" INTEGER NOT NULL,
    "pt_flush" BOOLEAN NOT NULL DEFAULT false,
    "pt_pit_latrines" BOOLEAN NOT NULL DEFAULT false,
    "showers" BOOLEAN NOT NULL DEFAULT false,
    "waste_disposal_bins" BOOLEAN NOT NULL DEFAULT false,
    "pest_control_services" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sanitation_hygiene_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "market_media" (
    "id" SERIAL NOT NULL,
    "market_id" INTEGER NOT NULL,
    "media_type" TEXT NOT NULL,
    "file_path" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "market_media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "market_atms" (
    "id" SERIAL NOT NULL,
    "market_id" INTEGER NOT NULL,
    "bank_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "market_atms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "market_airports" (
    "id" SERIAL NOT NULL,
    "market_id" INTEGER NOT NULL,
    "airport_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "market_airports_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE INDEX "users_email_username_idx" ON "users"("email", "username");

-- CreateIndex
CREATE UNIQUE INDEX "market_features_market_id_key" ON "market_features"("market_id");

-- CreateIndex
CREATE UNIQUE INDEX "amenities_market_id_key" ON "amenities"("market_id");

-- CreateIndex
CREATE UNIQUE INDEX "regulatory_compliance_market_id_key" ON "regulatory_compliance"("market_id");

-- CreateIndex
CREATE UNIQUE INDEX "sanitation_hygiene_market_id_key" ON "sanitation_hygiene"("market_id");

-- AddForeignKey
ALTER TABLE "markets" ADD CONSTRAINT "markets_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "markets" ADD CONSTRAINT "markets_area_id_fkey" FOREIGN KEY ("area_id") REFERENCES "areas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cities" ADD CONSTRAINT "cities_district_id_fkey" FOREIGN KEY ("district_id") REFERENCES "districts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "areas" ADD CONSTRAINT "areas_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_market_id_fkey" FOREIGN KEY ("market_id") REFERENCES "markets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_media" ADD CONSTRAINT "product_media_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "market_features" ADD CONSTRAINT "market_features_market_id_fkey" FOREIGN KEY ("market_id") REFERENCES "markets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "amenities" ADD CONSTRAINT "amenities_market_id_fkey" FOREIGN KEY ("market_id") REFERENCES "markets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "regulatory_compliance" ADD CONSTRAINT "regulatory_compliance_market_id_fkey" FOREIGN KEY ("market_id") REFERENCES "markets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sanitation_hygiene" ADD CONSTRAINT "sanitation_hygiene_market_id_fkey" FOREIGN KEY ("market_id") REFERENCES "markets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "market_media" ADD CONSTRAINT "market_media_market_id_fkey" FOREIGN KEY ("market_id") REFERENCES "markets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "market_atms" ADD CONSTRAINT "market_atms_market_id_fkey" FOREIGN KEY ("market_id") REFERENCES "markets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "market_airports" ADD CONSTRAINT "market_airports_market_id_fkey" FOREIGN KEY ("market_id") REFERENCES "markets"("id") ON DELETE CASCADE ON UPDATE CASCADE;
