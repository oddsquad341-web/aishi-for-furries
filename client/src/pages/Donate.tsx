import axios from "axios";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

declare global {
  interface Window {
    Razorpay?: any;
  }
}

const loadRazorpayScript = (src: string) =>
  new Promise<boolean>((resolve) => {
    if (window.Razorpay) {
      return resolve(true);
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("one-time");
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState<string | null>(null);

  const predefinedAmounts = [
    { amount: 500, description: "Vaccination & check-up" },
    { amount: 1000, description: "Feed 10 dogs for a week" },
    { amount: 5000, description: "Emergency medical care" },
    { amount: 10000, description: "Monthly shelter care" },
  ];

  const donationCategories = [
    {
      title: "Rescue & Medical Care",
      percentage: 60,
      description: "Emergency response, veterinary treatment, and rehabilitation.",
    },
    {
      title: "Food & Shelter",
      percentage: 30,
      description: "Daily nutrition and safe shelter facilities.",
    },
    {
      title: "Awareness & Community",
      percentage: 10,
      description: "Education and community engagement programs.",
    },
  ];

  const createOrder = async (amount: number) => {
    const response = await axios.post("/api/create-order", { amount });
    return response.data.order;
  };

  const verifyPayment = async (payload: {
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
  }) => {
    const response = await axios.post("/api/verify-payment", payload);
    return response.data.valid as boolean;
  };

  const handleDonate = async () => {
    const amount = selectedAmount ? Number(selectedAmount) : Number(customAmount);
    if (!amount || amount <= 0) {
      toast.error("Please select or enter a valid donation amount");
      return;
    }

    if (!import.meta.env.VITE_RAZORPAY_KEY_ID) {
      toast.error("Payment gateway not configured. Please try again later.");
      return;
    }

    setPaymentLoading(true);
    setPaymentSuccess(null);

    try {
      const order = await createOrder(amount);
      const scriptLoaded = await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");

      if (!scriptLoaded || !window.Razorpay) {
        throw new Error("Unable to load Razorpay checkout");
      }

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Aishi For Furries",
        description: "Donation to support rescued animals",
        order_id: order.id,
        handler: async (response: any) => {
          try {
            const valid = await verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            if (!valid) {
              throw new Error("Payment verification failed");
            }

            setPaymentSuccess(
              `Thank you! Your donation of ₹${amount} has been processed successfully.`
            );
            toast.success("Donation successful. Thank you for your support!");
          } catch (error) {
            console.error(error);
            toast.error(
              "Payment succeeded but verification failed. Please contact support."
            );
          }
        },
        modal: {
          ondismiss: () => setPaymentLoading(false),
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error(error);
      toast.error("Could not initiate payment. Please try again.");
      setPaymentLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Our Mission</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Every rupee goes directly to rescuing, healing, and caring for Gurgaon's stray animals.
          </p>
        </div>
      </section>

      {/* Donation Impact */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Your Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {predefinedAmounts.map((item, idx) => (
              <Card
                key={idx}
                className={`p-6 text-center cursor-pointer transition-all border-2 ${
                  selectedAmount === item.amount.toString()
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary"
                }`}
                onClick={() => {
                  setSelectedAmount(item.amount.toString());
                  setCustomAmount("");
                }}
              >
                <div className="text-3xl font-bold text-primary mb-2">₹{item.amount}</div>
                <p className="text-sm text-foreground/70">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container max-w-2xl">
          <Card className="p-8 border-border">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Make Your Donation</h2>

            {/* Donation Type */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-3">
                Donation Type
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="one-time"
                    checked={donationType === "one-time"}
                    onChange={(e) => setDonationType(e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-foreground">One-Time</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="monthly"
                    checked={donationType === "monthly"}
                    onChange={(e) => setDonationType(e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-foreground">Monthly Support</span>
                </label>
              </div>
            </div>

            {/* Custom Amount */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">
                Custom Amount (₹)
              </label>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
                placeholder="Enter amount"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Donation Category */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-3">
                Allocate to (Optional)
              </label>
              <div className="space-y-2">
                {donationCategories.map((cat, idx) => (
                  <label key={idx} className="flex items-center gap-2">
                    <input type="radio" name="category" className="w-4 h-4" />
                    <span className="text-foreground">{cat.title} ({cat.percentage}%)</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Donor Info */}
            <div className="mb-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Donate Button */}
            <Button
              onClick={handleDonate}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg"
              disabled={paymentLoading}
            >
              {paymentLoading ? "Processing payment..." : "Proceed to Payment"}
            </Button>

            {paymentSuccess ? (
              <p className="text-sm text-green-600 text-center mt-4">{paymentSuccess}</p>
            ) : null}

            <p className="text-xs text-foreground/60 text-center mt-4">
              Your donation is secure and will be processed through our trusted payment gateway.
            </p>
          </Card>
        </div>
      </section>

      {/* Fund Allocation */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">How We Use Your Donations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donationCategories.map((cat, idx) => (
              <Card key={idx} className="p-6 border-border">
                <div className="mb-4">
                  <div className="flex items-end justify-between mb-2">
                    <h3 className="font-bold text-foreground">{cat.title}</h3>
                    <span className="text-2xl font-bold text-primary">{cat.percentage}%</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${cat.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <p className="text-foreground/70 text-sm">{cat.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Other Ways to Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 border-border text-center">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="font-bold text-foreground mb-2">Sponsor a Dog</h3>
              <p className="text-foreground/70 mb-4">
                Provide ongoing support for a specific dog's care and medical needs.
              </p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </Card>
            <Card className="p-6 border-border text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="font-bold text-foreground mb-2">Emergency Medical Fund</h3>
              <p className="text-foreground/70 mb-4">
                Support urgent medical cases and emergency rescues.
              </p>
              <Button variant="outline" className="w-full">
                Contribute
              </Button>
            </Card>
            <Card className="p-6 border-border text-center">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="font-bold text-foreground mb-2">In-Kind Donations</h3>
              <p className="text-foreground/70 mb-4">
                Donate food, supplies, or medical equipment directly.
              </p>
              <Button variant="outline" className="w-full">
                Contact Us
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Large Donations */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container max-w-2xl text-center">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Large Donations or Corporate Partnerships?</h2>
          <p className="text-foreground/80 mb-6">
            We welcome corporate sponsors and large donors. Please contact us to discuss customized giving options.
          </p>
          <a href="mailto:aishiforfurries@gmail.com">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6">
              Contact Us
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
