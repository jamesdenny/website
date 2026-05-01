import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { ImageWash } from '@/components/ui/ImageWash';
import { Blockquote } from '@/components/ui/Blockquote';

export default function Home() {
  return (<>
      <section className="col-content md:to-2of3  prose md:prose-lg dark:prose-invert">
          <h2>Senior front-end developer</h2>
          <h3>18 Years Commercial Experience</h3>
          <p>Working in global or small teams on multi-module web-apps, custom CMS development, bespoke database/API driven global portal systems, community engagement websites, service aggregating comparison sites and CMS driven online presence &amp; promotional websites.</p>
          <Blockquote className="p-12 sm:max-w-[80%] md:max-w-none mx-auto"
            theme="primary"
            imageFade
            colorWash
            image={
              <Image
                src="/JamesDenny.jpg"
                alt="Portrait picture of James"
                width={546}
                height={747}
                className="h-full w-full aspect-square object-[50%_0%] md:object-[50%_15%]"
              />
            }
          >
            <p >I'm a Web Developer with a passion for creating inclusive solutions that improve efficiency and enhance user experiences.</p>
          </Blockquote>
          <p>Creating reusable components and collaborating on complex apps and smaller modules whilst pushing for higher coding standards and best-practices through work done and guiding colleagues.</p>
      </section>
      <section className="col-content md:col-3of3  md:to-content lg:to-content  prose md:prose-lg dark:prose-invert">
       
            <div className=" span-content
            prose md:prose-lg dark:prose-invert">
              <h2>Key Skills</h2>
              <div className="span-content md:span-1of4 gap-4 flex-basis-full flex flex-wrap justify-between mt-4 md:mt-0 not-prose 
              *:text-xs *:uppercase">
                {[
                  'ES6', 'CSS3', 'HTML5', 'JavaScript', 
                  'Node.js', 'MongoDB',
                  'SASS', 'Handlebars', 
                  'React', 'Redux', 'Next.js', 'Tailwind', 'Bootstrap', 'jQuery',
                  'TypeScript', 'Jasmin', 'Cypress',
                  'Entity Framework', 'SQL', 
                  'PHP', 'Wordpress',
                  'BitBucket', 'SourceTree', 'SmartGit', 
                  'AJAX', 'JSON', 
                  'NPM', 'ESLint', 'JSHint', 'JSDoc', 'WebPack', 
                  '.NET', 'LINQ', 'AppsScript', 'Looker Studio', 'Technical SEO', 'WCAG'
                ].map((skill, i) => (
                  <Badge key={i} variant="outline-primary">{skill}</Badge>
                ))}
              </div>
            </div>
           
      </section>

      <section className="col-content md:to-2of3  prose md:prose-lg dark:prose-invert">
          <h2>Senior front-end developer</h2>
          <h3>18 Years Commercial Experience</h3>
          <p>Working in global or small teams on multi-module web-apps, custom CMS development, bespoke database/API driven global portal systems, community engagement websites, service aggregating comparison sites and CMS driven online presence &amp; promotional websites.</p>
          <Blockquote className="p-12 sm:max-w-[80%] md:max-w-none mx-auto"
            theme="primary"
            imageFade
            colorWash
            image={
              <Image
                src="/JamesDenny.jpg"
                alt="Portrait picture of James"
                width={546}
                height={747}
                className="h-full w-full aspect-square object-[50%_0%] md:object-[50%_15%]"
              />
            }
          >
            <p >I'm a Web Developer with a passion for creating inclusive solutions that improve efficiency and enhance user experiences.</p>
          </Blockquote>
          <p>Creating reusable components and collaborating on complex apps and smaller modules whilst pushing for higher coding standards and best-practices through work done and guiding colleagues.</p>
      </section>
      <section className="col-content md:col-3of3  md:to-content lg:to-content  prose md:prose-lg dark:prose-invert">
       
            <div className=" span-content
            prose md:prose-lg dark:prose-invert">
              <h2>Key Skills</h2>
              <div className="span-content md:span-1of4 gap-4 flex-basis-full flex flex-wrap justify-between mt-4 md:mt-0 not-prose 
              *:text-xs *:uppercase">
                {[
                  'ES6', 'CSS3', 'HTML5', 'JavaScript', 
                  'Node.js', 'MongoDB',
                  'SASS', 'Handlebars', 
                  'React', 'Redux', 'Next.js', 'Tailwind', 'Bootstrap', 'jQuery',
                  'TypeScript', 'Jasmin', 'Cypress',
                  'Entity Framework', 'SQL', 
                  'PHP', 'Wordpress',
                  'BitBucket', 'SourceTree', 'SmartGit', 
                  'AJAX', 'JSON', 
                  'NPM', 'ESLint', 'JSHint', 'JSDoc', 'WebPack', 
                  '.NET', 'LINQ', 'AppsScript', 'Looker Studio', 'Technical SEO', 'WCAG'
                ].map((skill, i) => (
                  <Badge key={i} variant="outline-primary">{skill}</Badge>
                ))}
              </div>
            </div>
           
      </section>


      <section className="col-content subgrid my-8">
        <Card className="col-span-6 md:col-span-12 bg-gray-100 px-6">
          <div className="prose md:prose-lg dark:prose-invert">
              <h2 className="mb-1!">Senior front-end developer</h2>
              <h3>18 Years Commercial Experience</h3>
              <blockquote>I'm a Web Developer with a passion for creating inclusive solutions that enhance efficiency and improve user experiences.</blockquote>
              <p>Working in global or small teams on multi-module web-apps, custom CMS development, bespoke database/API driven global portal systems, community engagement websites, service aggregating comparison sites and CMS driven online presence &amp; promotional websites.</p>

          </div>
        </Card>
      </section>
      <section className="col-content subgrid my-8 bg-gray-100">
        <div className="col-content subgrid grid span-full" data-rvl-target data-rvl-reset="true">
          <div className="col-three-quarters p-8 md:py-8 md:px-0 prose md:prose-lg dark:prose-invert">
            <h2 className="mb-1!">Senior front-end developer</h2>
            <h3>18 Years Commercial Experience</h3>
            <blockquote>I'm a Web Developer with a passion for creating inclusive solutions that enhance efficiency and improve user experiences.</blockquote>
            <p>Working in global or small teams on multi-module web-apps, custom CMS development, bespoke database/API driven global portal systems, community engagement websites, service aggregating comparison sites and CMS driven online presence &amp; promotional websites.</p>
          </div>
          <Image className="col-quarter-start col-full-end object-cover w-full h-full md:rounded-l-none!" src="/JamesDenny.jpg" alt="Photo of James" width={546} height={747} />
        </div>
      </section>
      <section className="col-content subgrid my-8">
        <Card className="md:grid md:grid-cols-subgrid grid span-full gap-[inherit] py-0 bg-gray-100">
          <div className="md:grid md:grid-cols-subgrid grid span-full" data-rvl-target data-rvl-reset="true">
            <div className="col-quarter-start col-three-quarters p-8 md:py-8 md:px-0 prose md:prose-lg dark:prose-invert">
              <h2 className="mb-1!" >Senior front-end developer</h2>
              <h3>18 Years Commercial Experience</h3>
              <blockquote>I'm a Web Developer with a passion for creating inclusive solutions that enhance efficiency and improve user experiences.</blockquote>
              <p>Working in global or small teams on multi-module web-apps, custom CMS development, bespoke database/API driven global portal systems, community engagement websites, service aggregating comparison sites and CMS driven online presence &amp; promotional websites.</p>
            </div>
            <Image className="col-quarter-start col-full-end object-cover w-full h-full md:rounded-l-none!" src="/JamesDenny.jpg" alt="Photo of James" width={546} height={747} />
          </div>
        </Card>
      </section>
      <section className="col-content subgrid my-8 bg-gray-100">
        <div className="col-content subgrid grid span-full">
          <div className="col-three-quarters p-8 md:py-8 md:px-0 prose md:prose-lg dark:prose-invert">
            <h2 className="mb-1!">Senior front-end developer</h2>
            <h3>18 Years Commercial Experience</h3>
            <blockquote>I'm a Web Developer with a passion for creating inclusive solutions that enhance efficiency and improve user experiences.</blockquote>
            <p>Working in global or small teams on multi-module web-apps, custom CMS development, bespoke database/API driven global portal systems, community engagement websites, service aggregating comparison sites and CMS driven online presence &amp; promotional websites.</p>
          </div>
          <Image className="col-quarter-start col-full-end object-cover w-full h-full md:rounded-l-none!" src="/JamesDenny.jpg" alt="Photo of James" width={546} height={747} />
        </div>
      </section>
      <section className="col-content subgrid my-8">
        <Card className="md:grid md:grid-cols-subgrid grid span-full gap-[inherit] py-0 bg-gray-100">
          <div className="md:grid md:grid-cols-subgrid grid span-full" data-rvl-target data-rvl-reset="true">
            <div className="col-quarter-start col-three-quarters p-8 md:py-8 md:px-0 prose md:prose-lg dark:prose-invert">
              <h2 className="mb-1!" >Senior front-end developer</h2>
              <h3>18 Years Commercial Experience</h3>
              <blockquote>I'm a Web Developer with a passion for creating inclusive solutions that enhance efficiency and improve user experiences.</blockquote>
              <p>Working in global or small teams on multi-module web-apps, custom CMS development, bespoke database/API driven global portal systems, community engagement websites, service aggregating comparison sites and CMS driven online presence &amp; promotional websites.</p>
            </div>
            <Image className="col-quarter-start col-full-end object-cover w-full h-full md:rounded-l-none!" src="/JamesDenny.jpg" alt="Photo of James" width={546} height={747} />
          </div>
        </Card>
      </section>
  </>);
}
