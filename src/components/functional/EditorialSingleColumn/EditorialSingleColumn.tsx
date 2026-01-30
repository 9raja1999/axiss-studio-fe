interface IEditorialSingleColumnProps {
  title?: string;
  content: string; // HTML string or plain text
}

export default function EditorialSingleColumn({ title, content }: IEditorialSingleColumnProps) {
  return (
    <section className='w-full max-w-4xl mx-auto px-6 md:px-12 py-16'>
      {title && (
        <h2 className='font-sans text-2xl md:text-3xl font-semibold text-primary mb-8 text-center'>
          {title}
        </h2>
      )}
      <div
        className='prose prose-sm md:prose-base text-[rgba(0,0,0,0.8)] mx-auto'
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  );
}
