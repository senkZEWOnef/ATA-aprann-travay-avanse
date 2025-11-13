const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('💰 Making Python course free...');

  try {
    // Update Python course to be free
    const pythonUpdate = await prisma.course.updateMany({
      where: {
        slug: 'python-pou-komanse-yo'
      },
      data: {
        price: 0, // Set price to 0 (free)
      }
    });

    console.log(`✅ Updated Python course: ${pythonUpdate.count} record(s)`);

    // Verify the update
    console.log('\n📋 Verifying update...');
    const updatedCourse = await prisma.course.findUnique({
      where: {
        slug: 'python-pou-komanse-yo'
      },
      select: {
        slug: true,
        titleHt: true,
        titleFr: true,
        price: true,
        currency: true
      }
    });

    if (updatedCourse) {
      console.log(`\n📚 ${updatedCourse.slug}:`);
      console.log(`  Title (HT): ${updatedCourse.titleHt}`);
      console.log(`  Title (FR): ${updatedCourse.titleFr}`);
      console.log(`  💰 Price: ${updatedCourse.price} ${updatedCourse.currency}`);
      console.log(`  🎉 Status: ${updatedCourse.price == 0 ? 'FREE' : 'PAID'}`);
    }

    console.log('\n🎉 Python course is now FREE!');

  } catch (error) {
    console.error('❌ Error updating Python course price:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();