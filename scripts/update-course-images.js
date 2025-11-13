const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('🖼️  Updating course images...');

  try {
    // Update HTML/CSS course
    console.log('Updating HTML/CSS course...');
    const htmlCssUpdate = await prisma.course.updateMany({
      where: {
        slug: 'html-css-pou-komanse-yo'
      },
      data: {
        thumbnail: '/tag.jpg',    // For course listing page (/courses)
        coverImage: '/css.jpg',   // For course detail page (/courses/[slug])
      }
    });
    console.log(`✅ Updated HTML/CSS course: ${htmlCssUpdate.count} record(s)`);

    // Update Python course  
    console.log('Updating Python course...');
    const pythonUpdate = await prisma.course.updateMany({
      where: {
        slug: 'python-pou-komanse-yo'
      },
      data: {
        thumbnail: '/py.jpg',       // For course listing page (/courses)
        coverImage: '/python.jpg',  // For course detail page (/courses/[slug])
      }
    });
    console.log(`✅ Updated Python course: ${pythonUpdate.count} record(s)`);

    // Verify the updates
    console.log('\n📋 Verifying updates...');
    const updatedCourses = await prisma.course.findMany({
      where: {
        slug: {
          in: ['html-css-pou-komanse-yo', 'python-pou-komanse-yo']
        }
      },
      select: {
        id: true,
        slug: true,
        titleHt: true,
        titleFr: true,
        thumbnail: true,
        coverImage: true
      }
    });

    console.log('Updated courses:');
    updatedCourses.forEach(course => {
      console.log(`\n📚 ${course.slug}:`);
      console.log(`  Title (HT): ${course.titleHt}`);
      console.log(`  Title (FR): ${course.titleFr}`);
      console.log(`  📋 Listing image (thumbnail): ${course.thumbnail || 'NULL'}`);
      console.log(`  🖼️  Detail image (coverImage): ${course.coverImage || 'NULL'}`);
    });

    console.log('\n🎉 All course images updated successfully!');
    console.log('\nImage mapping:');
    console.log('  HTML/CSS Course:');
    console.log('    - Listing page (/courses): /tag.jpg'); 
    console.log('    - Detail page (/courses/html-css-pou-komanse-yo): /css.jpg');
    console.log('  Python Course:');
    console.log('    - Listing page (/courses): /py.jpg');
    console.log('    - Detail page (/courses/python-pou-komanse-yo): /python.jpg');

  } catch (error) {
    console.error('❌ Error updating course images:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();