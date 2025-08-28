import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

const posts = [
  {
    title: "The Future of UI/UX: Trends to Watch in 2024",
    date: "May 20, 2024",
    author: "Jane Doe",
    avatar: "https://picsum.photos/40/40?v=jane",
    image: "https://picsum.photos/400/250?v=post1",
    dataAiHint: "design trends",
  },
  {
    title: "Mastering Headless CMS for Modern Web Development",
    date: "May 15, 2024",
    author: "John Smith",
    avatar: "https://picsum.photos/40/40?v=john",
    image: "https://picsum.photos/400/250?v=post2",
    dataAiHint: "web development"
  },
  {
    title: "How to Build a Brand That Resonates With Your Audience",
    date: "May 10, 2024",
    author: "Emily White",
    avatar: "https://picsum.photos/40/40?v=emily",
    image: "https://picsum.photos/400/250?v=post3",
    dataAiHint: "brand building"
  },
];

export default function RecentPosts() {
  return (
    <section id="blog" className="py-12 md:py-24 bg-card">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">From the Blog</h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            Insights, ideas, and inspiration from our team of experts.
          </p>
        </div>
        <div className="mt-16 grid auto-rows-fr grid-cols-1 gap-8 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.title} href="#" className="group">
              <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader className="p-0">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                      data-ai-hint={post.dataAiHint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-muted-foreground">
                      {post.date}
                    </time>
                  </div>
                  <div className="relative mt-3 flex-1">
                    <h3 className="text-lg font-semibold leading-6 group-hover:text-primary">
                      {post.title}
                    </h3>
                  </div>
                  <div className="mt-6 flex items-center gap-x-4">
                    <Avatar>
                      <AvatarImage src={post.avatar} alt={post.author} />
                      <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="text-sm leading-6">
                      <p className="font-semibold">{post.author}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
