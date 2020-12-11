/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ValueMappingRequestBuilder } from './ValueMappingRequestBuilder';
import { VmThirdPartyValuesData } from './VmThirdPartyValuesData';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ValueMapping" of service "SAPB1".
 */
export class ValueMapping extends EntityV4 implements ValueMappingType {
  /**
   * Technical entity name for ValueMapping.
   */
  static _entityName = 'ValueMapping';
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
   * Object Id.
   * @nullable
   */
  objectId?: number;
  /**
   * Object Abs Entry.
   * @nullable
   */
  objectAbsEntry?: string;
  /**
   * Vm Third Party Values Collection.
   * @nullable
   */
  vmThirdPartyValuesCollection?: VmThirdPartyValuesData[];

  /**
   * Returns an entity builder to construct instances of `ValueMapping`.
   * @returns A builder that constructs instances of entity type `ValueMapping`.
   */
  static builder(): EntityBuilderType<ValueMapping, ValueMappingType> {
    return EntityV4.entityBuilder(ValueMapping);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ValueMapping` entity type.
   * @returns A `ValueMapping` request builder.
   */
  static requestBuilder(): ValueMappingRequestBuilder {
    return new ValueMappingRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ValueMapping`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ValueMapping`.
   */
  static customField(fieldName: string): CustomFieldV4<ValueMapping> {
    return EntityV4.customFieldSelector(fieldName, ValueMapping);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface ValueMappingType {
  absEntry?: number | null;
  objectId?: number | null;
  objectAbsEntry?: string | null;
  vmThirdPartyValuesCollection?: VmThirdPartyValuesData[] | null;
}

export namespace ValueMapping {
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<ValueMapping> = new NumberField('AbsEntry', ValueMapping, 'Edm.Int32');
  /**
   * Static representation of the [[objectId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OBJECT_ID: NumberField<ValueMapping> = new NumberField('ObjectId', ValueMapping, 'Edm.Int32');
  /**
   * Static representation of the [[objectAbsEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OBJECT_ABS_ENTRY: StringField<ValueMapping> = new StringField('ObjectAbsEntry', ValueMapping, 'Edm.String');
  /**
   * Static representation of the [[vmThirdPartyValuesCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VM_THIRD_PARTY_VALUES_COLLECTION: CollectionField<ValueMapping, VmThirdPartyValuesData> = new CollectionField('VM_ThirdPartyValuesCollection', ValueMapping, VmThirdPartyValuesData);
  /**
   * All fields of the ValueMapping entity.
   */
  export const _allFields: Array<NumberField<ValueMapping> | StringField<ValueMapping> | CollectionField<ValueMapping, VmThirdPartyValuesData>> = [
    ValueMapping.ABS_ENTRY,
    ValueMapping.OBJECT_ID,
    ValueMapping.OBJECT_ABS_ENTRY,
    ValueMapping.VM_THIRD_PARTY_VALUES_COLLECTION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ValueMapping> = new AllFields('*', ValueMapping);
  /**
   * All key fields of the ValueMapping entity.
   */
  export const _keyFields: Array<Field<ValueMapping>> = [ValueMapping.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property ValueMapping.
   */
  export const _keys: { [keys: string]: Field<ValueMapping> } = ValueMapping._keyFields.reduce((acc: { [keys: string]: Field<ValueMapping> }, field: Field<ValueMapping>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
