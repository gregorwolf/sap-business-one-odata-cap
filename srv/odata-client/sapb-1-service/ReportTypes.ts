/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReportTypesRequestBuilder } from './ReportTypesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "ReportTypes" of service "SAPB1".
 */
export class ReportTypes extends Entity implements ReportTypesType {
  /**
   * Technical entity name for ReportTypes.
   */
  static _entityName = 'ReportTypes';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ReportTypes.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Type Code.
   * @nullable
   */
  typeCode?: string;
  /**
   * Type Name.
   * @nullable
   */
  typeName?: string;
  /**
   * Default Report Layout.
   * @nullable
   */
  defaultReportLayout?: string;
  /**
   * Addon Name.
   * @nullable
   */
  addonName?: string;
  /**
   * Addon Form Type.
   * @nullable
   */
  addonFormType?: string;
  /**
   * Menu Id.
   * @nullable
   */
  menuId?: string;

  /**
   * Returns an entity builder to construct instances `ReportTypes`.
   * @returns A builder that constructs instances of entity type `ReportTypes`.
   */
  static builder(): EntityBuilderType<ReportTypes, ReportTypesTypeForceMandatory> {
    return Entity.entityBuilder(ReportTypes);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ReportTypes` entity type.
   * @returns A `ReportTypes` request builder.
   */
  static requestBuilder(): ReportTypesRequestBuilder {
    return new ReportTypesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ReportTypes`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ReportTypes`.
   */
  static customField(fieldName: string): CustomField<ReportTypes> {
    return Entity.customFieldSelector(fieldName, ReportTypes);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface ReportTypesType {
  typeCode?: string;
  typeName?: string;
  defaultReportLayout?: string;
  addonName?: string;
  addonFormType?: string;
  menuId?: string;
}

export interface ReportTypesTypeForceMandatory {
  typeCode: string;
  typeName: string;
  defaultReportLayout: string;
  addonName: string;
  addonFormType: string;
  menuId: string;
}

export namespace ReportTypes {
  /**
   * Static representation of the [[typeCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE_CODE: StringField<ReportTypes> = new StringField('TypeCode', ReportTypes, 'Edm.String');
  /**
   * Static representation of the [[typeName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE_NAME: StringField<ReportTypes> = new StringField('TypeName', ReportTypes, 'Edm.String');
  /**
   * Static representation of the [[defaultReportLayout]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_REPORT_LAYOUT: StringField<ReportTypes> = new StringField('DefaultReportLayout', ReportTypes, 'Edm.String');
  /**
   * Static representation of the [[addonName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDON_NAME: StringField<ReportTypes> = new StringField('AddonName', ReportTypes, 'Edm.String');
  /**
   * Static representation of the [[addonFormType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDON_FORM_TYPE: StringField<ReportTypes> = new StringField('AddonFormType', ReportTypes, 'Edm.String');
  /**
   * Static representation of the [[menuId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MENU_ID: StringField<ReportTypes> = new StringField('MenuID', ReportTypes, 'Edm.String');
  /**
   * All fields of the ReportTypes entity.
   */
  export const _allFields: Array<StringField<ReportTypes>> = [
    ReportTypes.TYPE_CODE,
    ReportTypes.TYPE_NAME,
    ReportTypes.DEFAULT_REPORT_LAYOUT,
    ReportTypes.ADDON_NAME,
    ReportTypes.ADDON_FORM_TYPE,
    ReportTypes.MENU_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ReportTypes> = new AllFields('*', ReportTypes);
  /**
   * All key fields of the ReportTypes entity.
   */
  export const _keyFields: Array<Field<ReportTypes>> = [ReportTypes.TYPE_CODE];
  /**
   * Mapping of all key field names to the respective static field property ReportTypes.
   */
  export const _keys: { [keys: string]: Field<ReportTypes> } = ReportTypes._keyFields.reduce((acc: { [keys: string]: Field<ReportTypes> }, field: Field<ReportTypes>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
