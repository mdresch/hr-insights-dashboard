import { Button } from "@/components/ui/button"

export function CallToAction() {
  return (
    <section className="py-16 bg-[#001a40]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your HR Strategy with AI?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Get access to our full suite of AI agents and unlock actionable insights that will help you stay ahead of
          emerging HR trends.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-[#0047CC] hover:bg-[#0035a0] text-white px-8 py-6 text-lg">Schedule a Demo</Button>
          <Button variant="outline" className="border-[#36b6b0] text-[#36b6b0] hover:bg-[#36b6b0]/10 px-8 py-6 text-lg">
            Learn More
          </Button>
        </div>

        <div className="mt-12 p-6 bg-[#002050] rounded-lg border border-[#0a3166] max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-4">Upcoming Webinar: The Future of AI in HR</h3>
          <p className="text-gray-300 mb-6">
            Join our expert panel as they discuss how AI agents are transforming HR operations and strategic
            decision-making.
          </p>
          <div className="flex justify-between items-center">
            <div className="text-[#36b6b0]">April 15, 2025 • 11:00 AM ET</div>
            <Button variant="outline" className="border-[#36b6b0] text-[#36b6b0] hover:bg-[#36b6b0]/10">
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

