'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import BeforeAfterSlider from './BeforeAfterSlider';

interface BeforeAfterProject {
  id: number;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

interface BeforeAfterSectionProps {
  projects: BeforeAfterProject[];
}

export default function BeforeAfterSection({ projects }: BeforeAfterSectionProps) {
  const t = useTranslations('BeforeAfter');
  const [selectedCategory, setSelectedCategory] = useState<string>(t('all'));

  // Extraire toutes les catégories uniques
  const categories = [t('all'), ...Array.from(new Set(projects.map(p => p.category)))];

  // Filtrer les projets par catégorie
  const filteredProjects = selectedCategory === t('all')
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              {/* Before/After Slider */}
              <BeforeAfterSlider
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
                beforeLabel={t('before')}
                afterLabel={t('after')}
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}