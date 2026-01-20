// import { motion, AnimatePresence } from "framer-motion";

// export default function MobileFilterDrawer({ open, onClose }) {
//   return (
//     <AnimatePresence>
//       {open && (
//         <>
//           {/* Overlay */}
//           <motion.div
//             onClick={onClose}
//             className="fixed inset-0 bg-black/40 z-40"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           />

//           {/* Drawer */}
//           <motion.aside
//             initial={{ x: "-100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "-100%" }}
//             transition={{ type: "spring", stiffness: 300 }}
//             className="fixed left-0 top-0 w-72 h-full bg-white z-50 p-6 overflow-y-auto"
//           >
//             <h3 className="text-xl font-semibold mb-6">Filters</h3>

//             {["Beginner", "Intermediate", "Advanced"].map(l => (
//               <label key={l} className="flex gap-2 mb-3">
//                 <input type="checkbox" /> {l}
//               </label>
//             ))}

//             <button
//               onClick={onClose}
//               className="mt-6 w-full py-2 rounded bg-black text-white"
//             >
//               Apply Filters
//             </button>
//           </motion.aside>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }

import { categoriesData } from "../api/dummyData";

export default function MobileFilterDrawer({
  open,
  onClose,
  categories,
  setCategories,
  prices,
  setPrices,
}) {
  if (!open) return null;

  const toggle = (value, list, setList) => {
    setList(
      list.includes(value)
        ? list.filter(v => v !== value)
        : [...list, value]
    );
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50">
      <div className="bg-white w-72 h-full p-6">
        <h3 className="text-xl font-semibold mb-4">Filters</h3>

        <h4 className="font-semibold mb-2">Category</h4>
        {categoriesData.map(cat => (
          <label key={cat._id} className="flex gap-2 mb-2">
            <input
              type="checkbox"
              checked={categories.includes(cat.name)}
              onChange={() =>
                toggle(cat.name, categories, setCategories)
              }
            />
            {cat.name}
          </label>
        ))}

        <h4 className="font-semibold mt-4 mb-2">Price</h4>
        {["Free", "Paid"].map(p => (
          <label key={p} className="flex gap-2 mb-2">
            <input
              type="checkbox"
              checked={prices.includes(p)}
              onChange={() => toggle(p, prices, setPrices)}
            />
            {p}
          </label>
        ))}

        <button
          onClick={onClose}
          className="mt-6 w-full bg-black text-white py-2 rounded"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}
