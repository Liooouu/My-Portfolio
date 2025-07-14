import {Mail} from 'lucide-react';



export const ContactsSection = () => {
    return(
        <section className="py-24 px-4 relative bg-secondary/30">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary"> Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                feel free to contact me

            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                    <div className="space-y- justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-all bg-primary/10">
                            <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className='font-medium'>Email</h4>
                                  <a href="mailto:johnlioapiado28@gmail.com" className='text-muted-foreground hover:text-primary transition-colors'>
                                      johnlioapiado28@gmail.com
                                 </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}