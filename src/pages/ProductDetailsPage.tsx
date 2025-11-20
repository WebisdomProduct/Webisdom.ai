import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLocation, useNavigate } from "react-router-dom";
import { ExternalLink, Play } from "lucide-react";
import { useState } from "react";

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};
  const [playVideo, setPlayVideo] = useState(false);

  console.log(product)
  console.log(product.url);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Product not found!</h2>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="mt-10 min-h-screen px-4 py-12 lg:py-16 lg:px-20 bg-gray-50">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Image / Video */}
          <div className="lg:w-1/2 lg:h-1/2  w-full relative my-28">
            <div className="rounded-xl overflow-hidden shadow-lg bg-white relative">
              {!playVideo ? (
                <div
                  className="aspect-video bg-gray-200 flex items-center justify-center cursor-pointer relative group"
                  onClick={() => setPlayVideo(true)}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                    <Play className="w-16 h-16 text-white/90 p-3 rounded-full shadow-lg" />
                  </div>
                </div>
              ) : (
                <video
                  src={product.video}
                  autoPlay
                  controls
                  controlsList="nodownload"
                  onContextMenu={(e)=>e.preventDefault()}
                  className="w-full aspect-video object-cover rounded-xl"
                />
              )}
              {product.status && (
                <Badge className="absolute top-4 right-4 shadow">{product.status}</Badge>
              )}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="lg:w-1/2 w-full flex flex-col gap-6">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
              {product.title}
            </h1>
            <h2 className="text-xl lg:text-2xl text-primary font-medium">{product.subtitle}</h2>
            <Badge variant="outline" className="mb-2">{product.category}</Badge>

            <p className="text-gray-700 text-base lg:text-lg leading-relaxed">{product.description}</p>

            {/* Features */}
            {product.features?.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg mb-2">Key Features:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {product.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Benefits */}
            {product.benefits?.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg mb-2">Benefits:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {product.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            {product.technologies?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {product.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="py-1 px-3 rounded-md">
                    {tech}
                  </Badge>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              {product.url && (
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded-lg shadow"
                >
                  Visit Platform <ExternalLink className="w-5 h-5" />
                </a>
              )}
              <Button
                onClick={() => navigate(-1)}
                className="bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors px-6 py-3 rounded-lg shadow"
              >
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
