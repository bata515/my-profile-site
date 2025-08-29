import { SITE_METADATA, PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/config'

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": PERSONAL_INFO.name,
    "jobTitle": PERSONAL_INFO.title,
    "description": PERSONAL_INFO.description,
    "url": SITE_METADATA.siteUrl,
    "image": SITE_METADATA.ogImage,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": PERSONAL_INFO.location,
      "addressCountry": "JP"
    },
    "sameAs": [
      SOCIAL_LINKS.github,
      SOCIAL_LINKS.twitter,
      SOCIAL_LINKS.zenn,
      SOCIAL_LINKS.qiita
    ],
    "knowsAbout": [
      "Java",
      "Spring Boot",
      "MySQL",
      "AWS",
      "Git",
      "Docker",
      "バックエンド開発",
      "システム設計"
    ],
    "alumniOf": [
      {
        "@type": "Organization",
        "name": "出版社",
        "description": "編集者として書籍の企画・編集・校正業務を担当"
      },
      {
        "@type": "Organization", 
        "name": "カフェチェーン",
        "description": "店舗マネージャーとして運営管理を担当"
      }
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "SaaS開発企業",
      "description": "バックエンドエンジニアとして自社SaaSプロダクトの開発を担当"
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": PERSONAL_INFO.title,
      "occupationLocation": {
        "@type": "City",
        "name": PERSONAL_INFO.location
      },
      "skills": [
        "Java",
        "Spring Boot", 
        "MySQL",
        "AWS (EC2, S3, RDS)",
        "Git",
        "Docker",
        "IntelliJ IDEA",
        "システム設計",
        "API開発"
      ]
    }
  }

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SITE_METADATA.title,
    "description": SITE_METADATA.description,
    "url": SITE_METADATA.siteUrl,
    "author": {
      "@type": "Person",
      "name": PERSONAL_INFO.name
    },
    "inLanguage": "ja-JP",
    "copyrightHolder": {
      "@type": "Person", 
      "name": PERSONAL_INFO.name
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SITE_METADATA.siteUrl}#{search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }

  const portfolioJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": `${PERSONAL_INFO.name}のポートフォリオ`,
    "description": "バックエンドエンジニアとしてのスキルとプロジェクトを紹介するポートフォリオサイト",
    "author": {
      "@type": "Person",
      "name": PERSONAL_INFO.name,
      "jobTitle": PERSONAL_INFO.title
    },
    "dateCreated": "2025",
    "keywords": SITE_METADATA.keywords.join(", "),
    "url": SITE_METADATA.siteUrl,
    "image": SITE_METADATA.ogImage,
    "inLanguage": "ja-JP"
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioJsonLd)
        }}
      />
    </>
  )
}