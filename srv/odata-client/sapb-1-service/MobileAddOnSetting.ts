/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MobileAddOnSettingRequestBuilder } from './MobileAddOnSettingRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "MobileAddOnSetting" of service "SAPB1".
 */
export class MobileAddOnSetting extends Entity implements MobileAddOnSettingType {
  /**
   * Technical entity name for MobileAddOnSetting.
   */
  static _entityName = 'MobileAddOnSetting';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for MobileAddOnSetting.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * Url.
   * @nullable
   */
  url?: string;
  /**
   * Provider.
   * @nullable
   */
  provider?: string;

  /**
   * Returns an entity builder to construct instances `MobileAddOnSetting`.
   * @returns A builder that constructs instances of entity type `MobileAddOnSetting`.
   */
  static builder(): EntityBuilderType<MobileAddOnSetting, MobileAddOnSettingTypeForceMandatory> {
    return Entity.entityBuilder(MobileAddOnSetting);
  }

  /**
   * Returns a request builder to construct requests for operations on the `MobileAddOnSetting` entity type.
   * @returns A `MobileAddOnSetting` request builder.
   */
  static requestBuilder(): MobileAddOnSettingRequestBuilder {
    return new MobileAddOnSettingRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `MobileAddOnSetting`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `MobileAddOnSetting`.
   */
  static customField(fieldName: string): CustomField<MobileAddOnSetting> {
    return Entity.customFieldSelector(fieldName, MobileAddOnSetting);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface MobileAddOnSettingType {
  code?: string;
  description?: string;
  url?: string;
  provider?: string;
}

export interface MobileAddOnSettingTypeForceMandatory {
  code: string;
  description: string;
  url: string;
  provider: string;
}

export namespace MobileAddOnSetting {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<MobileAddOnSetting> = new StringField('Code', MobileAddOnSetting, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<MobileAddOnSetting> = new StringField('Description', MobileAddOnSetting, 'Edm.String');
  /**
   * Static representation of the [[url]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const URL: StringField<MobileAddOnSetting> = new StringField('Url', MobileAddOnSetting, 'Edm.String');
  /**
   * Static representation of the [[provider]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROVIDER: StringField<MobileAddOnSetting> = new StringField('Provider', MobileAddOnSetting, 'Edm.String');
  /**
   * All fields of the MobileAddOnSetting entity.
   */
  export const _allFields: Array<StringField<MobileAddOnSetting>> = [
    MobileAddOnSetting.CODE,
    MobileAddOnSetting.DESCRIPTION,
    MobileAddOnSetting.URL,
    MobileAddOnSetting.PROVIDER
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<MobileAddOnSetting> = new AllFields('*', MobileAddOnSetting);
  /**
   * All key fields of the MobileAddOnSetting entity.
   */
  export const _keyFields: Array<Field<MobileAddOnSetting>> = [MobileAddOnSetting.CODE];
  /**
   * Mapping of all key field names to the respective static field property MobileAddOnSetting.
   */
  export const _keys: { [keys: string]: Field<MobileAddOnSetting> } = MobileAddOnSetting._keyFields.reduce((acc: { [keys: string]: Field<MobileAddOnSetting> }, field: Field<MobileAddOnSetting>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
