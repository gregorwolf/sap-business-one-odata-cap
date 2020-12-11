/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MobileAddOnSettingRequestBuilder } from './MobileAddOnSettingRequestBuilder';
import { MobileAddonSettingTypeEnum } from './MobileAddonSettingTypeEnum';
import { ViewStyleTypeEnum } from './ViewStyleTypeEnum';
import { LogonMethodEnum } from './LogonMethodEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "MobileAddOnSetting" of service "SAPB1".
 */
export class MobileAddOnSetting extends EntityV4 implements MobileAddOnSettingType {
  /**
   * Technical entity name for MobileAddOnSetting.
   */
  static _entityName = 'MobileAddOnSetting';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
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
   * Type.
   * @nullable
   */
  type?: MobileAddonSettingTypeEnum;
  /**
   * Provider.
   * @nullable
   */
  provider?: string;
  /**
   * View Style.
   * @nullable
   */
  viewStyle?: ViewStyleTypeEnum;
  /**
   * Logon Method.
   * @nullable
   */
  logonMethod?: LogonMethodEnum;
  /**
   * Enable.
   * @nullable
   */
  enable?: BoYesNoEnum;
  /**
   * B 1 Mobile App.
   * @nullable
   */
  b1MobileApp?: BoYesNoEnum;
  /**
   * B 1 Sales App.
   * @nullable
   */
  b1SalesApp?: BoYesNoEnum;

  /**
   * Returns an entity builder to construct instances of `MobileAddOnSetting`.
   * @returns A builder that constructs instances of entity type `MobileAddOnSetting`.
   */
  static builder(): EntityBuilderType<MobileAddOnSetting, MobileAddOnSettingType> {
    return EntityV4.entityBuilder(MobileAddOnSetting);
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
  static customField(fieldName: string): CustomFieldV4<MobileAddOnSetting> {
    return EntityV4.customFieldSelector(fieldName, MobileAddOnSetting);
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
  code?: string | null;
  description?: string | null;
  url?: string | null;
  type?: MobileAddonSettingTypeEnum | null;
  provider?: string | null;
  viewStyle?: ViewStyleTypeEnum | null;
  logonMethod?: LogonMethodEnum | null;
  enable?: BoYesNoEnum | null;
  b1MobileApp?: BoYesNoEnum | null;
  b1SalesApp?: BoYesNoEnum | null;
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
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: EnumField<MobileAddOnSetting> = new EnumField('Type', MobileAddOnSetting);
  /**
   * Static representation of the [[provider]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROVIDER: StringField<MobileAddOnSetting> = new StringField('Provider', MobileAddOnSetting, 'Edm.String');
  /**
   * Static representation of the [[viewStyle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VIEW_STYLE: EnumField<MobileAddOnSetting> = new EnumField('ViewStyle', MobileAddOnSetting);
  /**
   * Static representation of the [[logonMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOGON_METHOD: EnumField<MobileAddOnSetting> = new EnumField('LogonMethod', MobileAddOnSetting);
  /**
   * Static representation of the [[enable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENABLE: EnumField<MobileAddOnSetting> = new EnumField('Enable', MobileAddOnSetting);
  /**
   * Static representation of the [[b1MobileApp]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const B_1_MOBILE_APP: EnumField<MobileAddOnSetting> = new EnumField('B1MobileApp', MobileAddOnSetting);
  /**
   * Static representation of the [[b1SalesApp]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const B_1_SALES_APP: EnumField<MobileAddOnSetting> = new EnumField('B1SalesApp', MobileAddOnSetting);
  /**
   * All fields of the MobileAddOnSetting entity.
   */
  export const _allFields: Array<StringField<MobileAddOnSetting> | EnumField<MobileAddOnSetting>> = [
    MobileAddOnSetting.CODE,
    MobileAddOnSetting.DESCRIPTION,
    MobileAddOnSetting.URL,
    MobileAddOnSetting.TYPE,
    MobileAddOnSetting.PROVIDER,
    MobileAddOnSetting.VIEW_STYLE,
    MobileAddOnSetting.LOGON_METHOD,
    MobileAddOnSetting.ENABLE,
    MobileAddOnSetting.B_1_MOBILE_APP,
    MobileAddOnSetting.B_1_SALES_APP
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
