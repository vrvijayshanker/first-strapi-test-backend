import type { Schema, Attribute } from '@strapi/strapi';

export interface PageSectionsAboutSection extends Schema.Component {
  collectionName: 'components_page_sections_about_sections';
  info: {
    displayName: 'AboutSection';
    icon: 'cog';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    SideImage: Attribute.Media<'images'>;
    AboutDescription: Attribute.Text;
    aboutimgurl: Attribute.String;
  };
}

export interface PageSectionsCarouselImages extends Schema.Component {
  collectionName: 'components_page_sections_carousel_images';
  info: {
    displayName: 'CarouselImages';
    icon: 'emotionHappy';
    description: '';
  };
  attributes: {
    ImageTitle: Attribute.String;
    CarouselImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgurl: Attribute.String;
  };
}

export interface PageSectionsHeaderCustom extends Schema.Component {
  collectionName: 'components_page_sections_header_customs';
  info: {
    displayName: 'Header-custom';
    icon: 'filter';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    description: Attribute.String;
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    NavItem: Attribute.Component<'page-sub-sections.nav-menu'>;
    logourl: Attribute.String;
  };
}

export interface PageSubSectionsNavMenu extends Schema.Component {
  collectionName: 'components_page_sub_sections_nav_menus';
  info: {
    displayName: 'NavMenu';
  };
  attributes: {
    NavItem: Attribute.String;
    NavLink: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page-sections.about-section': PageSectionsAboutSection;
      'page-sections.carousel-images': PageSectionsCarouselImages;
      'page-sections.header-custom': PageSectionsHeaderCustom;
      'page-sub-sections.nav-menu': PageSubSectionsNavMenu;
    }
  }
}
