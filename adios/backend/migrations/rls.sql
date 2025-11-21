---- user only access themselves
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "read_own_profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);


--- shop access
ALTER TABLE shops ENABLE ROW LEVEL SECURITY;

-- Admin can see all shops
CREATE POLICY "admin_read"
  ON shops FOR SELECT
  USING (
    (SELECT role FROM profiles WHERE id = auth.uid()) = 'admin'
  );

-- Shop admin sees only their shop
CREATE POLICY "shop_admin_read"
  ON shops FOR SELECT
  USING (assigned_to = auth.uid());


--- product crud
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Shop admins CRUD their own products
CREATE POLICY "shop_admin_crud"
  ON products
  FOR ALL
  USING (
    shop_id IN (
      SELECT id FROM shops WHERE assigned_to = auth.uid()
    )
  )
  WITH CHECK (
    shop_id IN (
      SELECT id FROM shops WHERE assigned_to = auth.uid()
    )
  );
