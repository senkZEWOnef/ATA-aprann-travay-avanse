const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    console.log('Checking existing courses...');
    
    const courses = await prisma.course.findMany({
      select: {
        id: true,
        slug: true,
        titleHt: true,
        titleFr: true,
        thumbnail: true,
        isPublished: true
      }
    });

    console.log(`Found ${courses.length} course(s):`);
    courses.forEach(course => {
      console.log(`\nCourse: ${course.slug}`);
      console.log(`  Title (HT): ${course.titleHt}`);
      console.log(`  Title (FR): ${course.titleFr}`);
      console.log(`  Thumbnail: ${course.thumbnail || 'NULL'}`);
      console.log(`  Published: ${course.isPublished}`);
    });

  } catch (error) {
    console.error('Error checking courses:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();