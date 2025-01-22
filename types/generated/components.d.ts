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

export interface SharedLongStaysLocationFeature extends Schema.Component {
  collectionName: 'components_shared_long_stays_location_features';
  info: {
    displayName: 'LongStaysLocationFeature';
  };
  attributes: {
    gym: Attribute.Boolean & Attribute.DefaultTo<false>;
    coWorking: Attribute.Boolean & Attribute.DefaultTo<false>;
    communitySaloon: Attribute.Boolean & Attribute.DefaultTo<false>;
    pool: Attribute.Boolean & Attribute.DefaultTo<false>;
    disabilityAdaptation: Attribute.Boolean & Attribute.DefaultTo<false>;
    multipurposeRoom: Attribute.Boolean & Attribute.DefaultTo<false>;
    garden: Attribute.Boolean & Attribute.DefaultTo<false>;
    rooftop: Attribute.Boolean & Attribute.DefaultTo<false>;
    communityTerrace: Attribute.Boolean & Attribute.DefaultTo<false>;
    smartLockers: Attribute.Boolean & Attribute.DefaultTo<false>;
    digitalConcierge: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SharedLongStaysZoneFeatures extends Schema.Component {
  collectionName: 'components_shared_long_stays_zone_features';
  info: {
    displayName: 'LongStaysZoneFeatures';
  };
  attributes: {
    privateBathroom: Attribute.Boolean & Attribute.DefaultTo<true>;
    ovenMicrowave: Attribute.Boolean & Attribute.DefaultTo<true>;
    kitchen: Attribute.Boolean & Attribute.DefaultTo<true>;
    privateGarden: Attribute.Boolean & Attribute.DefaultTo<false>;
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
      'shared.long-stays-location-feature': SharedLongStaysLocationFeature;
      'shared.long-stays-zone-features': SharedLongStaysZoneFeatures;
      'shared.media': SharedMedia;
      'shared.rich-text': SharedRichText;
    }
  }
}
