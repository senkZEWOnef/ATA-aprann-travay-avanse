const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('🗑️  Removing English course...');

  try {
    // First, let's see what the English course looks like
    const englishCourse = await prisma.course.findUnique({
      where: {
        slug: 'angle-pou-entepretasyon-1'
      },
      select: {
        id: true,
        slug: true,
        titleHt: true,
        titleFr: true,
        isPublished: true,
        _count: {
          select: {
            enrollments: true,
            lessons: true
          }
        }
      }
    });

    if (!englishCourse) {
      console.log('❌ English course not found');
      return;
    }

    console.log('\n📚 Found English course:');
    console.log(`  Title (HT): ${englishCourse.titleHt}`);
    console.log(`  Title (FR): ${englishCourse.titleFr}`);
    console.log(`  Published: ${englishCourse.isPublished}`);
    console.log(`  Enrollments: ${englishCourse._count.enrollments}`);
    console.log(`  Lessons: ${englishCourse._count.lessons}`);

    // Unpublish the course (safer than deleting)
    const updateResult = await prisma.course.update({
      where: {
        slug: 'angle-pou-entepretasyon-1'
      },
      data: {
        isPublished: false
      }
    });

    console.log('\n✅ English course has been unpublished');
    console.log('   - Course is now hidden from public listings');
    console.log('   - Existing enrollments are preserved');
    console.log('   - Course data is preserved for future reactivation');

    // Verify remaining published courses
    console.log('\n📋 Remaining published courses:');
    const remainingCourses = await prisma.course.findMany({
      where: {
        isPublished: true
      },
      select: {
        slug: true,
        titleHt: true,
        titleFr: true,
        price: true,
        currency: true
      }
    });

    remainingCourses.forEach(course => {
      console.log(`\n📚 ${course.slug}:`);
      console.log(`  Title (HT): ${course.titleHt}`);
      console.log(`  Title (FR): ${course.titleFr}`);
      console.log(`  Price: ${course.price} ${course.currency}`);
    });

    console.log(`\n🎉 Course removal complete! ${remainingCourses.length} courses remain published.`);

  } catch (error) {
    console.error('❌ Error removing English course:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();