const cartItems = [
  {
    name: "LinaFlex Seamless Set",
    size: "M",
    type: "Women",
    price: 18500,
    qty: 1,
  },
  {
    name: "CoreLift Training Tee",
    size: "L",
    type: "Men",
    price: 10500,
    qty: 2,
  },
];

const formatNaira = (n: number) => `₦${n.toLocaleString("en-NG")}`;

export default function CartPage() {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          Your cart
        </h1>
        <p className="mt-2 max-w-md text-sm text-foreground/80">
          Review your picks from Lina&apos;s Hub. When you&apos;re ready, you can
          plug in a real checkout flow later.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
        {/* Items */}
        <div className="space-y-3 rounded-2xl border border-border bg-surface p-4 shadow-sm">
          {cartItems.map((item) => (
            <div
              key={item.name + item.size}
              className="flex items-start justify-between gap-3 rounded-2xl bg-background/70 p-3"
            >
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {item.name}
                </p>
                <p className="mt-1 text-[11px] text-foreground/70">
                  {item.type} • Size {item.size}
                </p>
                <p className="mt-1 text-[11px] text-foreground/60">
                  Qty: {item.qty}
                </p>
              </div>
              <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-300">
                {formatNaira(item.price * item.qty)}
              </p>
            </div>
          ))}

          {cartItems.length === 0 && (
            <p className="text-sm text-foreground/70">
              Your cart is empty. Start by adding pieces from the{" "}
              <a
                href="/shop"
                className="text-emerald-600 dark:text-emerald-300"
              >
                shop
              </a>
              .
            </p>
          )}
        </div>

        {/* Summary */}
        <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-foreground">
            Order summary
          </h2>

          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center justify-between text-foreground/80">
              <span>Subtotal</span>
              <span>{formatNaira(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between text-[13px] text-foreground/60">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-sm">
            <span className="font-semibold text-foreground">
              Total (est.)
            </span>
            <span className="text-base font-semibold text-emerald-600 dark:text-emerald-300">
              {formatNaira(subtotal)}
            </span>
          </div>

          <button className="mt-4 w-full rounded-full bg-foreground px-4 py-2.5 text-sm font-semibold text-background shadow-md shadow-foreground/25 transition hover:opacity-90">
            Proceed to checkout
          </button>

          <p className="mt-2 text-[11px] text-foreground/60">
            This is just UI for now — when you&apos;re ready, we can wire this to
            a real payment flow.
          </p>
        </div>
      </section>
    </div>
  );
}
