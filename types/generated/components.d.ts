import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedLocationFeature extends Schema.Component {
  collectionName: 'components_shared_location_features';
  info: {
    displayName: 'LocationFeature';
  };
  attributes: {
    parking: Attribute.Boolean & Attribute.DefaultTo<false>;
    breakfast: Attribute.Boolean & Attribute.DefaultTo<false>;
    wifi: Attribute.Boolean & Attribute.DefaultTo<true>;
    petfriendly: Attribute.Boolean & Attribute.DefaultTo<false>;
    quite: Attribute.Boolean & Attribute.DefaultTo<false>;
    center: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.location-feature': SharedLocationFeature;
      'shared.media': SharedMedia;
      'shared.rich-text': SharedRichText;
    }
  }
}
