import type { Schema, Struct } from '@strapi/strapi';

export interface SharedLocationFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_location_features';
  info: {
    displayName: 'LocationFeature';
  };
  attributes: {
    breakfast: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    center: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    parking: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    petfriendly: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    quite: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    wifi: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.location-feature': SharedLocationFeature;
      'shared.media': SharedMedia;
      'shared.rich-text': SharedRichText;
    }
  }
}
