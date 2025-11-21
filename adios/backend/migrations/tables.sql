-- ROLES TABLE
CREATE TYPE user_role AS ENUM ('admin', 'shop_admin');

-- USERS TABLE (Extended profile)
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role user_role NOT NULL DEFAULT 'shop_admin',
  created_at timestamptz DEFAULT now()
);

-- SHOPS
CREATE TABLE shops (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  created_by uuid REFERENCES profiles(id),
  assigned_to uuid REFERENCES profiles(id),
  created_at timestamptz DEFAULT now()
);

-- PRODUCTS
CREATE TABLE products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  shop_id uuid REFERENCES shops(id) ON DELETE CASCADE,
  name text NOT NULL,
  price numeric NOT NULL,
  created_at timestamptz DEFAULT now()
);
