/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IntegrationPackagesConfigureRequestBuilder } from './IntegrationPackagesConfigureRequestBuilder';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "IntegrationPackagesConfigure" of service "SAPB1".
 */
export class IntegrationPackagesConfigure extends EntityV4 implements IntegrationPackagesConfigureType {
  /**
   * Technical entity name for IntegrationPackagesConfigure.
   */
  static _entityName = 'IntegrationPackagesConfigure';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Is Enable.
   * @nullable
   */
  isEnable?: BoYesNoEnum;

  /**
   * Returns an entity builder to construct instances of `IntegrationPackagesConfigure`.
   * @returns A builder that constructs instances of entity type `IntegrationPackagesConfigure`.
   */
  static builder(): EntityBuilderType<IntegrationPackagesConfigure, IntegrationPackagesConfigureType> {
    return EntityV4.entityBuilder(IntegrationPackagesConfigure);
  }

  /**
   * Returns a request builder to construct requests for operations on the `IntegrationPackagesConfigure` entity type.
   * @returns A `IntegrationPackagesConfigure` request builder.
   */
  static requestBuilder(): IntegrationPackagesConfigureRequestBuilder {
    return new IntegrationPackagesConfigureRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `IntegrationPackagesConfigure`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `IntegrationPackagesConfigure`.
   */
  static customField(fieldName: string): CustomFieldV4<IntegrationPackagesConfigure> {
    return EntityV4.customFieldSelector(fieldName, IntegrationPackagesConfigure);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface IntegrationPackagesConfigureType {
  absEntry?: number | null;
  code?: string | null;
  name?: string | null;
  isEnable?: BoYesNoEnum | null;
}

export namespace IntegrationPackagesConfigure {
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<IntegrationPackagesConfigure> = new NumberField('AbsEntry', IntegrationPackagesConfigure, 'Edm.Int32');
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<IntegrationPackagesConfigure> = new StringField('Code', IntegrationPackagesConfigure, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<IntegrationPackagesConfigure> = new StringField('Name', IntegrationPackagesConfigure, 'Edm.String');
  /**
   * Static representation of the [[isEnable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ENABLE: EnumField<IntegrationPackagesConfigure> = new EnumField('IsEnable', IntegrationPackagesConfigure);
  /**
   * All fields of the IntegrationPackagesConfigure entity.
   */
  export const _allFields: Array<NumberField<IntegrationPackagesConfigure> | StringField<IntegrationPackagesConfigure> | EnumField<IntegrationPackagesConfigure>> = [
    IntegrationPackagesConfigure.ABS_ENTRY,
    IntegrationPackagesConfigure.CODE,
    IntegrationPackagesConfigure.NAME,
    IntegrationPackagesConfigure.IS_ENABLE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<IntegrationPackagesConfigure> = new AllFields('*', IntegrationPackagesConfigure);
  /**
   * All key fields of the IntegrationPackagesConfigure entity.
   */
  export const _keyFields: Array<Field<IntegrationPackagesConfigure>> = [IntegrationPackagesConfigure.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property IntegrationPackagesConfigure.
   */
  export const _keys: { [keys: string]: Field<IntegrationPackagesConfigure> } = IntegrationPackagesConfigure._keyFields.reduce((acc: { [keys: string]: Field<IntegrationPackagesConfigure> }, field: Field<IntegrationPackagesConfigure>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
