import type { Schema, Attribute } from '@strapi/strapi';

export interface AcademicsAcademics extends Schema.Component {
  collectionName: 'components_academics_academics';
  info: {
    displayName: 'Academics';
    icon: 'stack';
  };
  attributes: {
    description: Attribute.Text;
  };
}

export interface PublicationPublicationItem extends Schema.Component {
  collectionName: 'components_publication_publication_items';
  info: {
    displayName: 'PublicationItem';
    icon: 'book';
  };
  attributes: {
    title: Attribute.String;
    reference: Attribute.RichText;
    link: Attribute.String;
  };
}

export interface WelcomeSectionWelcomeSectionItem extends Schema.Component {
  collectionName: 'components_welcome_section_welcome_section_items';
  info: {
    displayName: 'WelcomeSectionItem';
    icon: 'cube';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    icon: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'academics.academics': AcademicsAcademics;
      'publication.publication-item': PublicationPublicationItem;
      'welcome-section.welcome-section-item': WelcomeSectionWelcomeSectionItem;
    }
  }
}
