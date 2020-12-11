/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CampaignResponseTypeRequestBuilder } from './CampaignResponseTypeRequestBuilder';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "CampaignResponseType" of service "SAPB1".
 */
export class CampaignResponseType extends EntityV4 implements CampaignResponseTypeType {
  /**
   * Technical entity name for CampaignResponseType.
   */
  static _entityName = 'CampaignResponseType';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Response Type Description.
   * @nullable
   */
  responseTypeDescription?: string;
  /**
   * Response Type.
   * @nullable
   */
  responseType?: string;
  /**
   * Is Active.
   * @nullable
   */
  isActive?: BoYesNoEnum;

  /**
   * Returns an entity builder to construct instances of `CampaignResponseType`.
   * @returns A builder that constructs instances of entity type `CampaignResponseType`.
   */
  static builder(): EntityBuilderType<CampaignResponseType, CampaignResponseTypeType> {
    return EntityV4.entityBuilder(CampaignResponseType);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CampaignResponseType` entity type.
   * @returns A `CampaignResponseType` request builder.
   */
  static requestBuilder(): CampaignResponseTypeRequestBuilder {
    return new CampaignResponseTypeRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CampaignResponseType`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CampaignResponseType`.
   */
  static customField(fieldName: string): CustomFieldV4<CampaignResponseType> {
    return EntityV4.customFieldSelector(fieldName, CampaignResponseType);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface CampaignResponseTypeType {
  responseTypeDescription?: string | null;
  responseType?: string | null;
  isActive?: BoYesNoEnum | null;
}

export namespace CampaignResponseType {
  /**
   * Static representation of the [[responseTypeDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESPONSE_TYPE_DESCRIPTION: StringField<CampaignResponseType> = new StringField('ResponseTypeDescription', CampaignResponseType, 'Edm.String');
  /**
   * Static representation of the [[responseType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESPONSE_TYPE: StringField<CampaignResponseType> = new StringField('ResponseType', CampaignResponseType, 'Edm.String');
  /**
   * Static representation of the [[isActive]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ACTIVE: EnumField<CampaignResponseType> = new EnumField('IsActive', CampaignResponseType);
  /**
   * All fields of the CampaignResponseType entity.
   */
  export const _allFields: Array<StringField<CampaignResponseType> | EnumField<CampaignResponseType>> = [
    CampaignResponseType.RESPONSE_TYPE_DESCRIPTION,
    CampaignResponseType.RESPONSE_TYPE,
    CampaignResponseType.IS_ACTIVE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CampaignResponseType> = new AllFields('*', CampaignResponseType);
  /**
   * All key fields of the CampaignResponseType entity.
   */
  export const _keyFields: Array<Field<CampaignResponseType>> = [CampaignResponseType.RESPONSE_TYPE];
  /**
   * Mapping of all key field names to the respective static field property CampaignResponseType.
   */
  export const _keys: { [keys: string]: Field<CampaignResponseType> } = CampaignResponseType._keyFields.reduce((acc: { [keys: string]: Field<CampaignResponseType> }, field: Field<CampaignResponseType>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
