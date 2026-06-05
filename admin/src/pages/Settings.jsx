import { useState } from "react";
import AdminLayout from "../layouts/AdminLayout";

function Settings() {
  const [settings, setSettings] = useState({
    businessName: "IronMaster",
    supportEmail: "support@ironmaster.com",
    supportPhone: "+91 9876543210",
    address: "Gurgaon, Haryana",
    pickupCharges: "50",
    deliveryCharges: "30",
  });

  const handleSave = () => {
    alert("Settings Saved Successfully ✅");

    console.log(settings);
  };

  return (
    <AdminLayout>
      <div className="text-white p-6">

        <h1 className="text-3xl font-bold mb-8">
          Settings
        </h1>

        <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8">

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 text-gray-400">
                Business Name
              </label>

              <input
                type="text"
                value={settings.businessName}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    businessName: e.target.value,
                  })
                }
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-400">
                Support Email
              </label>

              <input
                type="email"
                value={settings.supportEmail}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    supportEmail: e.target.value,
                  })
                }
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-400">
                Support Phone
              </label>

              <input
                type="text"
                value={settings.supportPhone}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    supportPhone: e.target.value,
                  })
                }
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-400">
                Address
              </label>

              <input
                type="text"
                value={settings.address}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    address: e.target.value,
                  })
                }
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-400">
                Pickup Charges (₹)
              </label>

              <input
                type="number"
                value={settings.pickupCharges}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    pickupCharges: e.target.value,
                  })
                }
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-400">
                Delivery Charges (₹)
              </label>

              <input
                type="number"
                value={settings.deliveryCharges}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    deliveryCharges: e.target.value,
                  })
                }
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3"
              />
            </div>

          </div>

          <button
            onClick={handleSave}
            className="mt-8 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-3 rounded-xl font-bold"
          >
            Save Settings
          </button>

        </div>

      </div>
    </AdminLayout>
  );
}

export default Settings;