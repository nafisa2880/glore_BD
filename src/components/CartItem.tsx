"use client";

interface Product {
  _id: string;
  name: string;
  images: { secure_url: string }[];
  price: string;
}

export default function CartItem({
  product,
  onRemove,
}: {
  product: Product;
  onRemove: (id: string) => void;
}) {
  const imageUrl = product.images[0]?.secure_url || "";

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow">
      <div className="flex items-center gap-4">
        <img src={imageUrl} alt={product.name} className="w-20 h-20 object-cover rounded-lg" />
        <div>
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-primary font-semibold">{product.price} BDT</p>
        </div>
      </div>
      <button
        onClick={() => onRemove(product._id)}
        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Remove
      </button>
    </div>
  );
}
